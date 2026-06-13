/**
 * vertical.config.ts — THE ONLY FILE THAT CHANGES PER DEPLOYMENT
 *
 * Copy this file, fill in your vertical, deploy to Vercel.
 * All other code reads from this config at runtime.
 */

export type PricingModel = 'hourly' | 'fixed' | 'session' | 'quote'
export type BookingFlow  = 'instant' | 'quote_first' | 'consult_first'

export interface VerticalConfig {
  // ── Identity ────────────────────────────────────────────
  id:          string   // slug used in URLs, DB tables, etc.
  name:        string   // "CleanFast" / "ElderCare+" / "TuneUp"
  tagline:     string
  domain:      string   // final domain, used in metadata
  themeColor:  string   // tailwind color name: "blue" | "emerald" | "violet" etc.

  // ── Provider terminology ─────────────────────────────────
  providerLabel:  string  // "Cleaner" | "Carer" | "Mechanic" | "Tutor"
  providerPlural: string  // "Cleaners" | "Carers" | "Mechanics" | "Tutors"
  consumerLabel:  string  // "Client" | "Family" | "Driver" | "Student"

  // ── Service categories ───────────────────────────────────
  categories: Category[]

  // ── Booking ──────────────────────────────────────────────
  pricingModel:   PricingModel
  bookingFlow:    BookingFlow
  minPrice:       number   // £ — floor for AI price suggestion
  maxPrice:       number   // £ — ceiling
  sessionMinutes: number   // default session length
  platformFeePercent: number

  // ── AI context ───────────────────────────────────────────
  aiSystemPrompt: string   // injected into every AI call
  aiMatchHints:   string[] // extra signals for provider matching

  // ── Features (toggle) ───────────────────────────────────
  features: {
    backgroundCheck:  boolean
    portfolioPhotos:  boolean
    videoIntro:       boolean
    instantBook:      boolean
    recurringBook:    boolean
    homeVisit:        boolean
    remoteSession:    boolean
    groupSession:     boolean
    insuranceBadge:   boolean
    aiDiagnosis:      boolean   // e.g. car fault codes before mechanic
    careJournal:      boolean   // e.g. daily notes for elder care
  }

  // ── SEO / meta ───────────────────────────────────────────
  metaTitle:       string
  metaDescription: string
  keywords:        string[]
}

export interface Category {
  id:    string
  label: string
  icon:  string  // emoji or lucide icon name
  desc:  string
}

// ════════════════════════════════════════════════════════════
// ACTIVE VERTICAL — swap this to change the entire app
// ════════════════════════════════════════════════════════════

const config: VerticalConfig = {
  // ── CampaignForge — AI Multi-Channel Campaign Builder ────
  id:         'campaignforge',
  name:       'CampaignForge',
  tagline:    'Build campaigns that run on AI — email, social, ads in one flow',
  domain:     'campaignforge.app',
  themeColor: 'fuchsia',

  providerLabel:  'Campaign',
  providerPlural: 'Campaigns',
  consumerLabel:  'Marketer',

  categories: [
    { id: 'email',    label: 'Email Sequence',   icon: '📧', desc: '5-email nurture sequence with subject lines' },
    { id: 'social',   label: 'Social Ads',       icon: '📱', desc: 'Meta/Instagram ad copy and headlines' },
    { id: 'google',   label: 'Google Ads',       icon: '🔍', desc: 'Search ad copy with extensions' },
    { id: 'landing',  label: 'Landing Page',     icon: '📄', desc: 'Full landing page copy and CTA hierarchy' },
    { id: 'sms',      label: 'SMS Campaign',     icon: '💬', desc: 'Short-form SMS sequences under 160 chars' },
    { id: 'linkedin', label: 'LinkedIn Posts',   icon: '💼', desc: 'Thought-leadership posts for B2B reach' },
    { id: 'podcast',  label: 'Podcast Script',   icon: '🎙️', desc: 'Hook + outline + full episode script' },
    { id: 'retarget', label: 'Retargeting Ads',  icon: '🎯', desc: 'Re-engagement copy for warm audiences' },
  ],

  pricingModel:        'fixed',
  bookingFlow:         'instant',
  minPrice:            0,
  maxPrice:            49,
  sessionMinutes:      1,
  platformFeePercent:  0,

  aiSystemPrompt: `You are CampaignForge AI — a marketing campaign specialist.
Help marketers build multi-channel campaigns. You can help with:
- Choosing the right channels for their audience and goal
- Writing email subject lines, ad copy, landing page headlines
- Suggesting campaign structure and timing
- Reviewing copy for clarity and conversion potential
Never make up statistics. Never claim guaranteed results.
Be specific, direct, and marketing-focused.`,

  aiMatchHints: [
    'email marketing', 'Facebook ads', 'Google Ads', 'landing page CRO',
    'B2B LinkedIn', 'retargeting', 'SMS marketing', 'campaign strategy',
  ],

  features: {
    backgroundCheck:  false,
    portfolioPhotos:  false,
    videoIntro:       false,
    instantBook:      true,
    recurringBook:    true,
    homeVisit:        false,
    remoteSession:    true,
    groupSession:     false,
    insuranceBadge:   false,
    aiDiagnosis:      false,
    careJournal:      false,
  },

  metaTitle:       'CampaignForge — AI Multi-Channel Campaign Builder',
  metaDescription: 'Build full marketing campaigns in minutes. AI writes email sequences, social ads, and landing page copy across every channel. Free to start.',
  keywords:        ['AI campaign builder', 'multi-channel marketing', 'email marketing AI', 'social ads generator', 'marketing automation'],
}

export default config

// ════════════════════════════════════════════════════════════
// CAMPAIGN CHANNEL PRESETS (used by campaign builder UI)
// ════════════════════════════════════════════════════════════

export const CAMPAIGN_CHANNELS = [
  { id: 'email',    label: 'Email',        icon: '📧', desc: '5-email nurture sequence' },
  { id: 'social',   label: 'Social Ads',   icon: '📱', desc: 'Meta / Instagram copy' },
  { id: 'google',   label: 'Google Ads',   icon: '🔍', desc: 'Search ad copy' },
  { id: 'landing',  label: 'Landing Page', icon: '📄', desc: 'Full page copy' },
  { id: 'sms',      label: 'SMS',          icon: '💬', desc: 'Short-form sequences' },
  { id: 'linkedin', label: 'LinkedIn',     icon: '💼', desc: 'B2B thought-leadership' },
]

export const CAMPAIGN_TONES = [
  { id: 'professional',  label: 'Professional' },
  { id: 'friendly',      label: 'Friendly' },
  { id: 'bold',          label: 'Bold' },
  { id: 'inspirational', label: 'Inspirational' },
]
