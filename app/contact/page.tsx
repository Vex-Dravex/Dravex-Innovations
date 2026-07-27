import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Dravex Innovations',
  description:
    'Tell us about your project. We reply to serious inquiries within two business days.',
}

const CREAM = '#ece6d8'
const INK = '#161514'
const PURPLE = '#7c3aed'
const PURPLE_LIGHT = '#a78bfa'

export default function ContactPage() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'vex@dravexinnovations.com',
      link: 'mailto:vex@dravexinnovations.com',
      code: '[01]',
    },
    {
      label: 'Location',
      value: 'Remote · on-site on request',
      link: null,
      code: '[02]',
    },
    {
      label: 'Response time',
      value: 'Within 48 hours',
      link: null,
      code: '[03]',
    },
  ]

  const faqs = [
    {
      q: 'What does a typical project timeline look like?',
      a: 'It varies with scope. A focused web build might take 2–4 weeks; a mobile app with custom hardware can take 3–6 months. We give you a real timeline during discovery, not a best-case one.',
    },
    {
      q: 'Do you offer ongoing support and maintenance?',
      a: 'Yes. After launch, we offer retainer packages covering bug fixes, security updates, and incremental feature work — so the thing we built keeps running without decaying.',
    },
    {
      q: 'What&apos;s your pricing structure?',
      a: 'Fixed-price for well-scoped briefs, hourly for exploratory work. After discovery, we send a proposal with a clear price, clear scope, and clear exit conditions.',
    },
    {
      q: 'Can you work alongside our existing team?',
      a: 'Often, yes. We embed into your workflow — your repo, your standups, your PR review process — and hand off cleanly when we&apos;re done.',
    },
  ]

  return (
    <div className="font-editorial -mt-20" style={{ background: CREAM, color: INK }}>
      {/* Top spec strip */}
      <div
        className="w-full font-mono text-[10px] uppercase tracking-[0.22em] px-6 lg:px-10 py-3 flex justify-between"
        style={{ borderBottom: `1px solid ${INK}`, color: INK, paddingTop: 80 }}
      >
        <span>DVX—STUDIO · EST. 2024</span>
        <span className="hidden md:block">FILE · CONTACT · REV 01</span>
        <span>MADE ON EARTH</span>
      </div>

      {/* ============ HERO ============ */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div
            className="font-mono text-xs uppercase tracking-[0.22em] mb-6 inline-flex items-center gap-2"
            style={{ color: '#6a645c' }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: PURPLE }}
            />
            — Open channel
          </div>
          <h1
            className="text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.035em] font-medium leading-[0.98] max-w-5xl"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Tell us what you&apos;re
            <br />
            <span style={{ color: PURPLE }}>trying to build.</span>
          </h1>
          <p
            className="mt-10 max-w-2xl text-lg leading-relaxed"
            style={{ color: '#4a4642' }}
          >
            Send us the brief. If it&apos;s a fit, we&apos;ll get back within two business
            days to set up a call. If it&apos;s not, we&apos;ll say so — and usually point
            you at someone who is.
          </p>
        </div>
      </section>

      {/* ============ FORM + INFO ============ */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24 grid lg:grid-cols-12 gap-10">
          {/* Left: contact info */}
          <div className="lg:col-span-4">
            <div
              className="font-mono text-xs uppercase tracking-[0.22em] mb-5"
              style={{ color: '#6a645c' }}
            >
              — [A] Direct channels
            </div>
            <h2
              className="text-3xl md:text-4xl tracking-[-0.03em] font-medium leading-[1.02] mb-10"
              style={{ fontFamily: 'var(--font-geist-sans)' }}
            >
              Reach us
              <br />
              <span style={{ color: '#4a4642' }}>directly.</span>
            </h2>

            <div style={{ borderTop: `1px solid ${INK}` }}>
              {contactInfo.map((info) => (
                <div
                  key={info.code}
                  className="py-5 grid grid-cols-12 gap-3 items-start"
                  style={{ borderBottom: `1px solid ${INK}` }}
                >
                  <div
                    className="col-span-2 font-mono text-[10px] uppercase tracking-[0.2em] pt-1"
                    style={{ color: '#6a645c' }}
                  >
                    {info.code}
                  </div>
                  <div className="col-span-10">
                    <div
                      className="font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5"
                      style={{ color: '#6a645c' }}
                    >
                      {info.label}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[15px] hover:underline"
                        style={{
                          color: INK,
                          fontFamily: 'var(--font-geist-sans)',
                          fontWeight: 500,
                        }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span
                        className="text-[15px]"
                        style={{
                          color: INK,
                          fontFamily: 'var(--font-geist-sans)',
                          fontWeight: 500,
                        }}
                      >
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10">
              <div
                className="font-mono text-[10px] uppercase tracking-[0.22em] mb-4"
                style={{ color: '#6a645c' }}
              >
                — Elsewhere
              </div>
              <div className="flex gap-3">
                {[
                  { label: 'X', href: 'https://twitter.com' },
                  { label: 'GH', href: 'https://github.com' },
                  { label: 'IN', href: 'https://linkedin.com' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center transition-colors hover:bg-black/5"
                    style={{
                      border: `1px solid ${INK}`,
                      fontFamily: 'var(--font-geist-mono)',
                      fontSize: 11,
                      letterSpacing: '0.15em',
                      color: INK,
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8">
            <div
              className="font-mono text-xs uppercase tracking-[0.22em] mb-5"
              style={{ color: '#6a645c' }}
            >
              — [B] Send the brief
            </div>
            <h2
              className="text-3xl md:text-4xl tracking-[-0.03em] font-medium leading-[1.02] mb-10"
              style={{ fontFamily: 'var(--font-geist-sans)' }}
            >
              The more specific,
              <br />
              <span style={{ color: '#4a4642' }}>the faster we can reply.</span>
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section
        style={{ background: INK, color: CREAM, borderBottom: `1px solid ${INK}` }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <div
                className="font-mono text-xs uppercase tracking-[0.22em] mb-5"
                style={{ color: '#8a857b' }}
              >
                — [C] Common questions
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] font-medium leading-[1]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Before
                <br />
                <span style={{ color: PURPLE_LIGHT }}>you ask.</span>
              </h2>
            </div>
          </div>

          <div
            className="max-w-4xl"
            style={{ borderTop: `1px solid rgba(236,230,216,0.18)` }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="py-8 grid grid-cols-12 gap-6"
                style={{ borderBottom: `1px solid rgba(236,230,216,0.18)` }}
              >
                <div
                  className="col-span-12 md:col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] pt-1"
                  style={{ color: '#8a857b' }}
                >
                  Q.0{i + 1}
                </div>
                <div className="col-span-12 md:col-span-10">
                  <h3
                    className="text-lg md:text-xl font-medium tracking-[-0.02em] mb-3"
                    style={{ fontFamily: 'var(--font-geist-sans)', color: CREAM }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{ color: '#bcb9b1' }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
