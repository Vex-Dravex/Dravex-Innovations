'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Wordmark, INK, CREAM } from './brand/Wordmark'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className="font-editorial fixed top-0 inset-x-0 z-50 transition-all duration-200"
      style={{
        background: isScrolled ? 'rgba(236, 230, 216, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(14px)' : 'none',
        borderBottom: isScrolled ? `1px solid rgba(22,21,20,0.08)` : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex-shrink-0"
            style={{ color: INK }}
            aria-label="Dravex Innovations home"
          >
            <Wordmark color={INK} scale={0.85} />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-opacity hover:opacity-60"
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: INK,
                  fontWeight: 500,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors hover:opacity-90"
            style={{ background: INK, color: CREAM }}
          >
            Start a project
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2"
            style={{ color: INK }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div
            className="md:hidden py-6 space-y-4"
            style={{ borderTop: '1px solid rgba(22,21,20,0.08)' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block py-1"
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: 12,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: INK,
                  fontWeight: 500,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mt-3"
              style={{ background: INK, color: CREAM }}
            >
              Start a project
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
