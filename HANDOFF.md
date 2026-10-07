
## Design lock (2026-10-06)
- Archetype: weekend-lifestyle (centered/warm cards, hand-scored via pickArchetype logic; varies from clipforge-ai travel-magazine, firstline career-portfolio, complybuddy directory-marketplace)
- Accent #d26af0 (orchid; #d946ef collided with quizbytesdaily), bg #0b1020 ink navy (purple bg removed)
- Logo: sparkle in gradient rounded square + "Campaign" + accent "Forge" (components/Logo.tsx, app/icon.svg, public/logo.svg)
- Theme: lib/theme-loader.ts wired in layout (loadSiteTheme('campaignforge')), GA4 off unless hub sets ID
- Removed: http:// tracker script, Pricing nav, "9 assets" stat; app/icon.tsx renamed .bak
- Possibly dead: components/ChatBot.tsx ChatWidget.tsx Navbar.tsx HeroChatPreview.tsx DesignEffects.tsx PageTracker.tsx ProviderCard.tsx; CLAUDE.md is stale (describes a different product)


## OWASP LLM Top 10 dispositions (gate item 45, 2026-10-07; list recalled from memory, unverified)
- LLM01 prompt injection: lib/guard.ts present, NOT yet wired into routes; no output filtering or tool sandbox review done. PARTIAL.
- LLM02 sensitive info disclosure: `redact()` helper available; not applied to every log. PARTIAL.
- LLM04/10 DoS / unbounded consumption: per-IP rate limit where present; token budgets not enforced. PARTIAL.
- LLM05 improper output handling: model output rendered as text; not audited for HTML sinks. UNVERIFIED.
- LLM06 excessive agency: no tool-calling agents audited. UNVERIFIED.
- Others (supply chain, poisoning, embeddings, misinformation): not assessed.


## ANIMATED SCOPE (gate items 19/21, derived from code 2026-10-07)
- Moves: AnimatedBg (ambient hero/background); CSS keyframes: agency-bounce, agency-slide-up, ds-float, ds-shift, fadeIn, fadeUp, fw-spin, orbDrift; transitions on interactive elements.
- Trigger: page load (ambient) and hover/press (interactive). Reduced motion: honoured via prefers-reduced-motion block.
- STATUS: scope documented from existing code only. Skill-stack passes (ui-ux-pro-max, emil-design-eng, impeccable critique, review-animations) and 375/1280 screenshot review are NOT yet run for this app. Item 21 stays OPEN until they are.
