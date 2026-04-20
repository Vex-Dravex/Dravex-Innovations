import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects | Dravex Innovations',
  description:
    'A catalog of recent work — MasterSet, Creative Finance, Real Estate Extension, FRAMEWORK Dock, and more.',
}

const CREAM = '#ece6d8'
const INK = '#161514'
const PURPLE = '#7c3aed'
const PURPLE_LIGHT = '#a78bfa'

export default function ProjectsPage() {
  const projects = [
    {
      pn: 'DVX-MS-01',
      title: 'MasterSet',
      slug: 'masterset',
      kind: 'Mobile application',
      year: '2025',
      blurb:
        'A comprehensive app for TCG collectors and vendors — track collections, card values, and completion progress with real-time market data.',
      tech: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Stripe'],
      tint: '#ffb400',
    },
    {
      pn: 'DVX-CF-02',
      title: 'Creative Finance Platform',
      slug: 'creative-finance',
      kind: 'Web platform',
      year: '2025',
      blurb:
        'A full-featured platform for real-estate investors — marketplace, verified contractor profiles, community forum, education center, and a custom CRM.',
      tech: ['Next.js', 'Supabase', 'Postgres', 'Stripe', 'TypeScript', 'Tailwind'],
      tint: PURPLE,
    },
    {
      pn: 'DVX-RE-03',
      title: 'Real Estate Extension',
      slug: 'real-estate-extension',
      kind: 'Browser extension',
      year: '2025',
      blurb:
        'An intelligent extension that scrapes addresses from any webpage, pulls MLS and public data, and recommends creative finance strategies on the spot.',
      tech: ['TypeScript', 'Chrome API', 'React', 'MLS Integration', 'Scraping'],
      tint: '#4aa3ff',
    },
    {
      pn: 'DVX-FD-04',
      title: 'FRAMEWORK Dock',
      slug: 'framework-dock',
      kind: 'Hardware',
      year: '2026',
      blurb:
        'A modular, repairable docking station designed around the Framework laptop philosophy — sustainability, user repairability, and lifetime upgradability.',
      tech: ['PCB Design', 'USB-C', 'Thunderbolt 4', 'Modular', 'KiCad'],
      tint: '#41c38a',
    },
  ]

  const categories = [
    { name: 'Web applications', count: '15+', code: 'WEB' },
    { name: 'Mobile apps', count: '10+', code: 'MOB' },
    { name: 'Browser extensions', count: '05+', code: 'EXT' },
    { name: 'Hardware', count: '03+', code: 'HW' },
  ]

  return (
    <div className="font-editorial -mt-20" style={{ background: CREAM, color: INK }}>
      {/* Top spec strip */}
      <div
        className="w-full font-mono text-[10px] uppercase tracking-[0.22em] px-6 lg:px-10 py-3 flex justify-between"
        style={{ borderBottom: `1px solid ${INK}`, color: INK, paddingTop: 80 }}
      >
        <span>DVX—STUDIO · EST. 2024</span>
        <span className="hidden md:block">FILE · CATALOG · REV 01</span>
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
            — The catalog
          </div>
          <h1
            className="text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.035em] font-medium leading-[0.98] max-w-5xl"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Work that
            <br />
            <span style={{ color: PURPLE }}>left the bench.</span>
          </h1>
          <p
            className="mt-10 max-w-2xl text-lg leading-relaxed"
            style={{ color: '#4a4642' }}
          >
            A selection of projects we&apos;ve shipped — each with its own part number, its
            own brief, and its own way of being used in the field.
          </p>
        </div>
      </section>

      {/* ============ PROJECTS GRID ============ */}
      <section style={{ background: INK, color: CREAM, borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block relative p-8 transition-transform hover:-translate-y-0.5"
                style={{ background: CREAM, color: INK, borderRadius: 4 }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-2"
                  style={{
                    background: p.tint,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                />

                <div className="flex items-start justify-between mb-10 pt-2">
                  <div>
                    <div
                      className="font-mono text-[11px] uppercase tracking-[0.2em]"
                      style={{ color: '#6a645c' }}
                    >
                      P/N
                    </div>
                    <div className="font-mono text-sm mt-1">{p.pn}</div>
                  </div>
                  <div
                    className="font-mono text-[11px] uppercase tracking-[0.2em] text-right"
                    style={{ color: '#6a645c' }}
                  >
                    {p.year}
                  </div>
                </div>

                <h3
                  className="text-2xl md:text-3xl font-medium tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                  {p.title}
                </h3>
                <div
                  className="mt-2 font-mono text-xs uppercase tracking-[0.18em]"
                  style={{ color: '#6a645c' }}
                >
                  {p.kind}
                </div>

                <p
                  className="mt-6 text-[15px] leading-relaxed"
                  style={{ color: '#4a4642' }}
                >
                  {p.blurb}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-1 rounded-sm"
                      style={{ border: `1px solid ${INK}`, color: INK }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: INK }}
                >
                  View build
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <div
                className="font-mono text-xs uppercase tracking-[0.22em] mb-5"
                style={{ color: '#6a645c' }}
              >
                — [B] Inventory
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.035em] font-medium leading-[1]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                What we&apos;ve
                <br />
                <span style={{ color: PURPLE }}>shipped.</span>
              </h2>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{ borderTop: `1px solid ${INK}`, borderLeft: `1px solid ${INK}` }}
          >
            {categories.map((c) => (
              <div
                key={c.code}
                className="p-8"
                style={{
                  borderRight: `1px solid ${INK}`,
                  borderBottom: `1px solid ${INK}`,
                  background: CREAM,
                }}
              >
                <div
                  className="font-mono text-[11px] uppercase tracking-[0.2em]"
                  style={{ color: '#6a645c' }}
                >
                  DVX—{c.code}
                </div>
                <div
                  className="font-mono text-6xl font-medium leading-none mt-3"
                  style={{ color: INK }}
                >
                  {c.count}
                </div>
                <h3
                  className="mt-6 text-xl font-medium tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                  {c.name}
                </h3>
                <div
                  className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: '#6a645c' }}
                >
                  Delivered
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section style={{ background: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div
                className="font-mono text-xs uppercase tracking-[0.22em] mb-6 inline-flex items-center gap-2"
                style={{ color: '#6a645c' }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: PURPLE }}
                />
                — Your turn
              </div>
              <h2
                className="text-5xl md:text-6xl lg:text-7xl tracking-[-0.035em] font-medium leading-[1]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Got one that
                <br />
                <span style={{ color: PURPLE }}>belongs here?</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-2 px-6 py-4 rounded-full text-sm font-medium"
                style={{ background: INK, color: CREAM }}
              >
                Commission a build
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-between gap-2 px-6 py-4 rounded-full text-sm font-medium border-2"
                style={{ borderColor: INK, color: INK }}
              >
                See services
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
