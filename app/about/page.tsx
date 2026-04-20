import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Dravex Innovations',
  description:
    'An independent studio building software and hardware for teams that care about craft.',
}

const CREAM = '#ece6d8'
const INK = '#161514'
const PURPLE = '#7c3aed'
const PURPLE_LIGHT = '#a78bfa'

export default function AboutPage() {
  const values = [
    {
      num: '01',
      code: 'VAL—INV',
      title: 'Innovation first',
      blurb:
        'We push boundaries and pick the tools that actually solve the problem — not the ones that look good on a slide.',
    },
    {
      num: '02',
      code: 'VAL—CRA',
      title: 'Quality craftsmanship',
      blurb:
        'Every line of code and every mechanical tolerance is crafted with precision and attention to detail.',
    },
    {
      num: '03',
      code: 'VAL—CLI',
      title: 'Client-focused',
      blurb:
        'Your success is our success. We work closely with you to understand the brief and exceed it.',
    },
    {
      num: '04',
      code: 'VAL—SUS',
      title: 'Sustainability',
      blurb:
        'We design with the future in mind — modular, repairable, upgradable, and built to outlive the project.',
    },
  ]

  const expertise = [
    'Full-stack web development',
    'Mobile app development (iOS & Android)',
    'Browser extension development',
    'Hardware design & prototyping',
    'Cloud architecture & DevOps',
    'UI/UX design',
    'Database design & optimization',
    'API development & integration',
  ]

  return (
    <div
      className="font-editorial -mt-20"
      style={{ background: CREAM, color: INK }}
    >
      {/* Top spec strip */}
      <div
        className="w-full font-mono text-[10px] uppercase tracking-[0.22em] px-6 lg:px-10 py-3 flex justify-between"
        style={{ borderBottom: `1px solid ${INK}`, color: INK, paddingTop: 80 }}
      >
        <span>DVX—STUDIO · EST. 2024</span>
        <span className="hidden md:block">FILE · ABOUT · REV 01</span>
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
            — The studio
          </div>
          <h1
            className="text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.035em] font-medium leading-[0.98] max-w-5xl"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            A small studio with a
            <br />
            <span style={{ color: PURPLE }}>long attention span.</span>
          </h1>
          <p
            className="mt-10 max-w-2xl text-lg leading-relaxed"
            style={{ color: '#4a4642' }}
          >
            Dravex Innovations is a small, independent studio — the kind of place where the
            same person draws the schematic and writes the deployment script. We take on a
            handful of engagements at a time and stay with them until they ship.
          </p>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div
              className="font-mono text-xs uppercase tracking-[0.22em]"
              style={{ color: '#6a645c' }}
            >
              — [A] The mission
            </div>
            <h2
              className="mt-5 text-4xl md:text-5xl tracking-[-0.03em] font-medium leading-[1.02]"
              style={{ fontFamily: 'var(--font-geist-sans)' }}
            >
              Tools that
              <br />
              <span style={{ color: '#4a4642' }}>outlive the</span>
              <br />
              <span style={{ color: '#4a4642' }}>release cycle.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center gap-6">
            <p className="text-lg leading-relaxed" style={{ color: '#4a4642' }}>
              We believe technology should solve real problems and improve real lives.
              Whether it&apos;s a mobile app that helps collectors manage their archive, a
              platform that changes how investors move through their deals, or a piece of
              hardware that champions repair over replacement — we bring the same standard
              to each of them.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#4a4642' }}>
              The work should still be running, and still worth running, five years from
              now.
            </p>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <div
                className="font-mono text-xs uppercase tracking-[0.22em] mb-5"
                style={{ color: '#6a645c' }}
              >
                — [B] The principles
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.035em] font-medium leading-[1]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                What we
                <br />
                <span style={{ color: PURPLE }}>don&apos;t negotiate.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-lg leading-relaxed" style={{ color: '#4a4642' }}>
                The four rules we apply to every engagement. They determine what we take on,
                and more importantly, what we don&apos;t.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ borderTop: `1px solid ${INK}`, borderLeft: `1px solid ${INK}` }}
          >
            {values.map((v) => (
              <div
                key={v.num}
                className="group relative p-8 md:p-10"
                style={{
                  borderRight: `1px solid ${INK}`,
                  borderBottom: `1px solid ${INK}`,
                  background: CREAM,
                }}
              >
                <div
                  className="absolute top-0 left-0 h-1.5"
                  style={{ background: PURPLE, width: '100%' }}
                />
                <div className="flex items-start justify-between mb-10 pt-2">
                  <div>
                    <div
                      className="font-mono text-[11px] uppercase tracking-[0.2em]"
                      style={{ color: '#6a645c' }}
                    >
                      {v.code}
                    </div>
                    <div
                      className="font-mono text-5xl font-medium leading-none mt-2"
                      style={{ color: INK }}
                    >
                      {v.num}
                    </div>
                  </div>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-medium tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                  {v.title}
                </h3>
                <p
                  className="mt-3 max-w-md text-[15px] leading-relaxed"
                  style={{ color: '#4a4642' }}
                >
                  {v.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPERTISE ============ */}
      <section
        style={{ background: INK, color: CREAM, borderBottom: `1px solid ${INK}` }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-6">
              <div
                className="font-mono text-xs uppercase tracking-[0.22em] mb-5"
                style={{ color: '#8a857b' }}
              >
                — [C] Expertise
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] font-medium leading-[1.02]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Disciplines
                <br />
                <span style={{ color: PURPLE_LIGHT }}>on the bench.</span>
              </h2>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{
              borderTop: `1px solid rgba(236,230,216,0.12)`,
              borderLeft: `1px solid rgba(236,230,216,0.12)`,
            }}
          >
            {expertise.map((skill, i) => (
              <div
                key={skill}
                className="p-6 flex items-start gap-4"
                style={{
                  borderRight: `1px solid rgba(236,230,216,0.12)`,
                  borderBottom: `1px solid rgba(236,230,216,0.12)`,
                }}
              >
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.2em] pt-1"
                  style={{ color: '#8a857b' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="text-[15px] leading-snug"
                  style={{ color: CREAM, fontFamily: 'var(--font-geist-sans)' }}
                >
                  {skill}
                </span>
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
                — Let&apos;s build
              </div>
              <h2
                className="text-5xl md:text-6xl lg:text-7xl tracking-[-0.035em] font-medium leading-[1]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Think we&apos;re
                <br />
                <span style={{ color: PURPLE }}>a fit?</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-2 px-6 py-4 rounded-full text-sm font-medium"
                style={{ background: INK, color: CREAM }}
              >
                Start a project
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-between gap-2 px-6 py-4 rounded-full text-sm font-medium border-2"
                style={{ borderColor: INK, color: INK }}
              >
                See the catalog
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
