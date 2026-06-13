export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px', fontFamily: 'system-ui', lineHeight: 1.7, color: '#e2d9f3' }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, color: '#f5f0ff' }}>Privacy Policy</h1>
      <p style={{ color: '#a78bca', marginBottom: 40 }}>Last updated: June 2026</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#f5f0ff' }}>What we collect</h2>
      <p>CampaignForge collects only information you provide directly — such as your email address when you sign up, and anonymous usage data to improve the service. We do not sell your data.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#f5f0ff' }}>Cookies</h2>
      <p>We use essential cookies for authentication and anonymous analytics cookies. You can disable non-essential cookies in your browser settings.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#f5f0ff' }}>Third-party services</h2>
      <p>We use Vercel for hosting and Supabase for data storage. These services have their own privacy policies.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#f5f0ff' }}>Your rights</h2>
      <p>You can request deletion of your account and data at any time by emailing <a href="mailto:hello@campaignforge.app" style={{ color: '#d946ef' }}>hello@campaignforge.app</a>.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#f5f0ff' }}>Contact</h2>
      <p>Questions? Email <a href="mailto:hello@campaignforge.app" style={{ color: '#d946ef' }}>hello@campaignforge.app</a></p>
    </main>
  )
}
