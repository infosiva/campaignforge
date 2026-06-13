import { CampaignResult } from './types'

const _store = new Map<string, CampaignResult>()

export function saveResult(result: CampaignResult) {
  _store.set(result.id, result)
}

export function getResult(id: string): CampaignResult | null {
  return _store.get(id) ?? null
}
