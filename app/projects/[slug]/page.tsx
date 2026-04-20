import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const CREAM = '#ece6d8'
const INK = '#161514'
const PURPLE = '#7c3aed'
const PURPLE_LIGHT = '#a78bfa'

type Project = {
  pn: string
  title: string
  slug: string
  kind: string
  year: string
  index: string
  status: string
  blurb: string
  longForm: string
  tech: string[]
  tint: string
  expected: string
  frameLabel: string
}

const PROJECTS: Record<string, Project> = {
  masterset: {
    pn: 'DVX-MS-01',
    title: 'MasterSet',
    slug: 'masterset',
    kind: 'Mobile application',
    year: '2025',
    index: '01 / 04',
    status: 'Shipped',
    blurb:
      'A comprehensive app for TCG collectors and vendors — track collections, card values, and completion progress with real-time market data.',
    longForm:
      'Built for collectors who take it seriously. Offline-first local database, real-time market sync, vendor tooling, and a collection-completion engine that models sets across multiple languages and print runs.',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Stripe'],
    tint: '#ffb400',
    expected: 'Q3 · 2026',
    frameLabel: 'FRAME · MOBILE—01',
  },
  'creative-finance': {
    pn: 'DVX-CF-02',
    title: 'Creative Finance Platform',
    slug: 'creative-finance',
    kind: 'Web platform',
    year: '2025',
    index: '02 / 04',
    status: 'Shipped',
    blurb:
      'A full-featured platform for real-estate investors — marketplace, verified contractor profiles, community forum, education center, and a custom CRM.',
    longForm:
      'Five product surfaces behind one login: a contractor marketplace with verification workflow, an investor community, an education library with paid cohorts, a deal-pipeline CRM, and Stripe-backed subscription billing.',
    tech: ['Next.js', 'Supabase', 'Postgres', 'Stripe', 'TypeScript', 'Tailwind'],
    tint: PURPLE,
    expected: 'Q3 · 2026',
    frameLabel: 'FRAME · WEB—02',
  },
  'real-estate-extension': {
    pn: 'DVX-RE-03',
    title: 'Real Estate Extension',
    slug: 'real-estate-extension',
    kind: 'Browser extension',
    year: '2025',
    index: '03 / 04',
    status: 'Shipped',
    blurb:
      'An intelligent extension that scrapes addresses from any webpage, pulls MLS and public data, and recommends creative finance strategies on the spot.',
    longForm:
      'Runs in the background on any real-estate listing site. Detects addresses, cross-references MLS and public property data, surfaces contact info, and suggests deal structures — all without leaving the page you&rsquo;re already on.',
    tech: ['TypeScript', 'Chrome API', 'React', 'MLS Integration', 'Scraping'],
    tint: '#4aa3ff',
    expected: 'Q3 · 2026',
    frameLabel: 'FRAME · EXT—03',
  },
  'framework-dock': {
    pn: 'DVX-FD-04',
    title: 'FRAMEWORK Dock',
    slug: 'framework-dock',
    kind: 'Hardware',
    year: '2026',
    index: '04 / 04',
    status: 'In production',
    blurb:
      'A modular, repairable docking station designed around the Framework laptop philosophy — sustainability, user repairability, and lifetime upgradability.',
    longForm:
      'Every port is a replaceable module. Every board can be pulled, serviced, and reseated without a soldering iron. Firmware is open, documentation ships in the box, and the chassis outlives the electronics inside it.',
    tech: ['PCB Design', 'USB-C', 'Thunderbolt 4', 'Modular', 'KiCad'],
    tint: '#41c38a',
    expected: 'Q4 · 2026',
    frameLabel: 'FRAME · HW—04',
  },
}

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS[slug]
  if (!project) return { title: 'Not Found · Dravex Innovations' }
  return {
    title: `${project.title} · Case study pending | Dravex Innovations`,
    description: project.blurb,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = PROJECTS[slug]
  if (!project) notFound()

  const others = Object.values(PROJECTS).filter((p) => p.slug !== project.slug)

  return (
    <div className="font-editorial -mt-20" style={{ background: CREAM, color: INK }}>
      {/* Top spec strip */}
      <div
        className="w-full font-mono text-[10px] uppercase tracking-[0.22em] px-6 lg:px-10 py-3 flex justify-between items-center"
        style={{ borderBottom: `1px solid ${INK}`, color: INK, paddingTop: 80 }}
      >
        <span>DVX—CATALOG · ENTRY {project.index}</span>
        <span className="hidden md:block">
          P/N {project.pn} · {project.year}
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: PURPLE }}
          />
          STATUS · {project.status.toUpperCase()}
        </span>
      </div>

      {/* ============ HERO ============ */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] mb-10 hover:underline"
            style={{ color: '#6a645c' }}
          >
            ← Full catalog
          </Link>

          <div
            className="font-mono text-xs uppercase tracking-[0.22em] mb-6 inline-flex items-center gap-2"
            style={{ color: '#6a645c' }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: PURPLE }}
            />
            — Case study in documentation
          </div>

          <h1
            className="text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.035em] font-medium leading-[0.98] max-w-5xl"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            {project.title}
          </h1>

          <div
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.22em]"
            style={{ color: '#6a645c' }}
          >
            <span>{project.kind}</span>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span>P/N {project.pn}</span>
          </div>

          <p
            className="mt-10 max-w-2xl text-lg leading-relaxed"
            style={{ color: '#4a4642' }}
          >
            {project.blurb}
          </p>
        </div>
      </section>

      {/* ============ PLACEHOLDER FRAME — photography pending ============ */}
      <section style={{ background: INK, color: CREAM, borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div
              className="font-mono text-xs uppercase tracking-[0.22em]"
              style={{ color: '#8a857b' }}
            >
              — [A] Photography pending
            </div>
            <div
              className="font-mono text-[10px] uppercase tracking-[0.22em]"
              style={{ color: '#8a857b' }}
            >
              {project.frameLabel}
            </div>
          </div>

          <PlaceholderFrame
            tint={project.tint}
            expected={project.expected}
            title={project.title}
          />

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <p
              className="font-mono text-[11px] uppercase tracking-[0.22em]"
              style={{ color: '#bcb9b1' }}
            >
              Photography and case study expected {project.expected}
            </p>
            <a
              href={`mailto:vex@dravexinnovations.com?subject=Notify me when ${project.title} case study ships`}
              className="font-mono text-[11px] uppercase tracking-[0.22em] hover:underline inline-flex items-center gap-2"
              style={{ color: PURPLE_LIGHT }}
            >
              Notify me when it&apos;s ready
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ SPECS ============ */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-5">
              <div
                className="font-mono text-xs uppercase tracking-[0.22em] mb-5"
                style={{ color: '#6a645c' }}
              >
                — [B] What&apos;s known so far
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em] font-medium leading-[1.02]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Specs, brief,
                <br />
                <span style={{ color: '#4a4642' }}>stack.</span>
              </h2>
            </div>
          </div>

          {/* Spec grid */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 mb-12"
            style={{ borderTop: `1px solid ${INK}`, borderLeft: `1px solid ${INK}` }}
          >
            {[
              { label: 'Discipline', value: project.kind, code: '01' },
              { label: 'Year', value: project.year, code: '02' },
              { label: 'Status', value: project.status, code: '03' },
              { label: 'Part No.', value: project.pn, code: '04' },
            ].map((spec) => (
              <div
                key={spec.code}
                className="p-6"
                style={{
                  borderRight: `1px solid ${INK}`,
                  borderBottom: `1px solid ${INK}`,
                }}
              >
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: '#6a645c' }}
                >
                  [{spec.code}] {spec.label}
                </div>
                <div
                  className="mt-3 text-xl font-medium tracking-[-0.02em] leading-tight"
                  style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                  {spec.value}
                </div>
              </div>
            ))}
          </div>

          {/* Long-form brief + tech */}
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div
                className="font-mono text-[10px] uppercase tracking-[0.22em] mb-4"
                style={{ color: '#6a645c' }}
              >
                — Brief
              </div>
              <p
                className="text-[15px] leading-relaxed"
                style={{ color: '#4a4642' }}
                dangerouslySetInnerHTML={{ __html: project.longForm }}
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div
                className="font-mono text-[10px] uppercase tracking-[0.22em] mb-4"
                style={{ color: '#6a645c' }}
              >
                — Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-1 rounded-sm"
                    style={{ border: `1px solid ${INK}`, color: INK }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OTHER IN CATALOG ============ */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div
            className="font-mono text-xs uppercase tracking-[0.22em] mb-8"
            style={{ color: '#6a645c' }}
          >
            — [C] Also in the catalog
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {others.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block p-6 relative transition-transform hover:-translate-y-0.5"
                style={{ border: `1px solid ${INK}`, background: CREAM }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: p.tint }}
                />
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4 pt-2"
                  style={{ color: '#6a645c' }}
                >
                  P/N {p.pn}
                </div>
                <div
                  className="text-lg font-medium tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                  {p.title}
                </div>
                <div
                  className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: '#6a645c' }}
                >
                  {p.kind}
                </div>
                <div
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: INK }}
                >
                  View entry
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
                — Have something similar
              </div>
              <h2
                className="text-5xl md:text-6xl lg:text-7xl tracking-[-0.035em] font-medium leading-[1]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Want one of
                <br />
                <span style={{ color: PURPLE }}>your own?</span>
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
                href="/projects"
                className="group inline-flex items-center justify-between gap-2 px-6 py-4 rounded-full text-sm font-medium border-2"
                style={{ borderColor: INK, color: INK }}
              >
                Back to catalog
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

/* ============================================================
   PLACEHOLDER FRAME
   A blueprint-style "image pending" panel. Grid background,
   crosshair corners, dimension labels, color chip at top.
   ============================================================ */

function PlaceholderFrame({
  tint,
  expected,
  title,
}: {
  tint: string
  expected: string
  title: string
}) {
  return (
    <div
      className="relative w-full"
      style={{
        aspectRatio: '16 / 9',
        background:
          'linear-gradient(135deg, #1e1c1a 0%, #141311 60%, #0f0e0d 100%)',
        border: `1px solid rgba(236,230,216,0.18)`,
        overflow: 'hidden',
      }}
    >
      {/* Tint chip at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: tint }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(236,230,216,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(236,230,216,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Crosshairs at corners */}
      {[
        { l: 20, t: 20 },
        { r: 20, t: 20 },
        { l: 20, b: 20 },
        { r: 20, b: 20 },
      ].map((pos, i) => (
        <svg
          key={i}
          className="absolute"
          width="18"
          height="18"
          style={{
            left: pos.l !== undefined ? pos.l : undefined,
            right: pos.r !== undefined ? pos.r : undefined,
            top: pos.t !== undefined ? pos.t : undefined,
            bottom: pos.b !== undefined ? pos.b : undefined,
          }}
        >
          <line x1="0" y1="9" x2="18" y2="9" stroke={CREAM} strokeWidth="1" opacity="0.5" />
          <line x1="9" y1="0" x2="9" y2="18" stroke={CREAM} strokeWidth="1" opacity="0.5" />
        </svg>
      ))}

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <div
            className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4 inline-flex items-center gap-2"
            style={{ color: '#8a857b' }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: tint }}
            />
            Image pending
          </div>
          <div
            className="text-3xl md:text-5xl tracking-[-0.03em] font-medium leading-[1]"
            style={{ fontFamily: 'var(--font-geist-sans)', color: CREAM }}
          >
            {title}
          </div>
          <div
            className="mt-3 font-mono text-[11px] uppercase tracking-[0.3em]"
            style={{ color: '#8a857b' }}
          >
            In documentation · {expected}
          </div>

          {/* Small schematic dimension lines */}
          <div className="mt-8 flex items-center justify-center gap-2 opacity-60">
            <div
              style={{
                width: 60,
                height: 1,
                background: CREAM,
              }}
            />
            <div
              className="w-1 h-1"
              style={{ background: CREAM, borderRadius: '50%' }}
            />
            <div
              style={{
                width: 120,
                height: 1,
                background: CREAM,
              }}
            />
            <div
              className="w-1 h-1"
              style={{ background: CREAM, borderRadius: '50%' }}
            />
            <div
              style={{
                width: 60,
                height: 1,
                background: CREAM,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom-left corner label */}
      <div
        className="absolute bottom-3 left-3 font-mono text-[8px] uppercase tracking-[0.25em]"
        style={{ color: '#6a645c' }}
      >
        DVX—CATALOG · REV 01
      </div>
      {/* Bottom-right corner label */}
      <div
        className="absolute bottom-3 right-3 font-mono text-[8px] uppercase tracking-[0.25em]"
        style={{ color: '#6a645c' }}
      >
        ◆ ARCHIVE · PENDING
      </div>
      {/* Top-right capture label */}
      <div
        className="absolute top-4 right-4 font-mono text-[8px] uppercase tracking-[0.25em]"
        style={{ color: '#6a645c' }}
      >
        NO SIGNAL
      </div>
      {/* Top-left frame index */}
      <div
        className="absolute top-4 left-4 font-mono text-[8px] uppercase tracking-[0.25em]"
        style={{ color: '#6a645c' }}
      >
        F.001
      </div>
    </div>
  )
}
