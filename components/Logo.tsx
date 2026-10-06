export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" width={size} height={size} alt="" aria-hidden />
      <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 800, fontSize: 17, letterSpacing: '-0.03em', color: 'var(--ink-1)' }}>
        Campaign<span style={{ color: 'var(--forge)' }}>Forge</span>
      </span>
    </span>
  )
}
