'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Wordmark, INK, CREAM, PURPLE } from './brand/Wordmark'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage({ text: 'Thanks for subscribing.', ok: true })
        setEmail('')
      } else {
        setMessage({ text: 'Something went wrong. Try again.', ok: false })
      }
    } catch {
      setMessage({ text: 'Something went wrong. Try again.', ok: false })
    } finally {
      setIsSubmitting(false)
    }
  }

  const sections = [
    {
      label: 'Studio',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      label: 'The Catalog',
      links: [
        { label: 'MasterSet', href: '/projects/masterset' },
        { label: 'Creative Finance', href: '/projects/creative-finance' },
        { label: 'Real Estate Ext.', href: '/projects/real-estate-extension' },
        { label: 'FRAMEWORK Dock', href: '/projects/framework-dock' },
      ],
    },
    {
      label: 'Elsewhere',
      links: [
        { label: 'Twitter / X', href: 'https://twitter.com' },
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
      ],
    },
  ]

  const META = '#8a857b'

  return (
    <footer
      className="font-editorial"
      style={{ background: INK, color: CREAM }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Brand + newsletter */}
          <div className="md:col-span-5">
            <Wordmark color={CREAM} accent={PURPLE} scale={1} />
            <p
              className="mt-6 max-w-sm text-[15px] leading-relaxed"
              style={{ color: META }}
            >
              An independent studio building software and hardware — one thoughtful release
              at a time.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="mt-8 max-w-sm">
              <div
                className="font-mono text-[10px] uppercase tracking-[0.22em] mb-3"
                style={{ color: META }}
              >
                — Field reports
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@somewhere.com"
                  required
                  className="flex-1 px-4 py-2.5 text-sm transition-colors focus:outline-none"
                  style={{
                    background: 'transparent',
                    border: `1px solid rgba(236, 230, 216, 0.2)`,
                    color: CREAM,
                    borderRadius: 999,
                    fontFamily: 'var(--font-geist-sans)',
                  }}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{
                    background: PURPLE,
                    color: 'white',
                    borderRadius: 999,
                    fontFamily: 'var(--font-geist-sans)',
                  }}
                >
                  {isSubmitting ? '…' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <p
                  className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: message.ok ? '#7ad79b' : '#e08585' }}
                >
                  {message.text}
                </p>
              )}
            </form>
          </div>

          {/* Link columns */}
          {sections.map((section) => (
            <div key={section.label} className="md:col-span-2 md:col-start-auto">
              <div
                className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5"
                style={{ color: META }}
              >
                — {section.label}
              </div>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-60"
                      style={{ color: CREAM, fontFamily: 'var(--font-geist-sans)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact direct */}
          <div className="md:col-span-1">
            <div
              className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5"
              style={{ color: META }}
            >
              — Direct
            </div>
            <a
              href="mailto:vex@dravexinnovations.com"
              className="font-mono text-[11px] uppercase tracking-[0.15em] break-all hover:underline"
              style={{ color: CREAM }}
            >
              vex@dravexinnovations.com
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{ borderTop: `1px solid rgba(236, 230, 216, 0.12)` }}
        >
          <div
            className="font-mono text-[10px] uppercase tracking-[0.22em]"
            style={{ color: META }}
          >
            © {new Date().getFullYear()} Dravex Innovations · Nº 001 · Est. MMXXIV
          </div>
          <div
            className="font-mono text-[10px] uppercase tracking-[0.22em]"
            style={{ color: META }}
          >
            MADE ON EARTH
          </div>
        </div>
      </div>
    </footer>
  )
}
