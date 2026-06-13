import { NextRequest } from 'next/server'
import { generateCampaign } from '@/lib/generate'
import { saveResult } from '@/lib/store'
import { ContentBrief } from '@/lib/types'
import { AI_LIMITER } from '@/lib/rateLimit'

export const runtime = 'nodejs'
export const maxDuration = 120

function sse(event: string, data: unknown) {
  return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`
}

export async function POST(req: NextRequest) {
  const limited = AI_LIMITER.check(req)
  if (limited) return limited

  const body = await req.json()
  const { name, category, audience, goal, tone, channels } = body

  if (!name || !category || !audience || !goal) {
    return new Response(sse('error', { message: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'text/event-stream' },
    })
  }

  const brief: ContentBrief = {
    brand: name,
    topic: `${category} campaign — goal: ${goal}. Tone: ${tone || 'friendly'}.`,
    audience,
    channels,
  }

  const stream = new ReadableStream({
    async start(controller) {
      const enc = new TextEncoder()
      try {
        controller.enqueue(enc.encode(sse('step', { step: 1 })))
        const result = await generateCampaign(brief)
        controller.enqueue(enc.encode(sse('step', { step: 2 })))
        saveResult(result)
        controller.enqueue(enc.encode(sse('step', { step: 3 })))
        controller.enqueue(enc.encode(sse('done', { id: result.id })))
      } catch (err) {
        console.error('generate error:', err)
        controller.enqueue(enc.encode(sse('error', { message: 'Generation failed' })))
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}
