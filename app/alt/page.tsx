import Link from 'next/link'

const CREAM = '#ece6d8'
const INK = '#161514'
const ORANGE = '#ff5b1e'

export default function HomeAlt() {
  const capabilities = [
    {
      num: '01',
      code: 'DVX—WEB',
      title: 'Web platforms',
      blurb: 'Applications, dashboards, and storefronts built on modern React with typed end-to-end data flow.',
      tags: ['Next.js', 'TypeScript', 'Postgres'],
      tint: '#ff5b1e',
    },
    {
      num: '02',
      code: 'DVX—MOB',
      title: 'Mobile apps',
      blurb: 'iOS and Android apps engineered for reliability, offline-first behavior, and real-time sync.',
      tags: ['React Native', 'Swift', 'Kotlin'],
      tint: '#ffb400',
    },
    {
      num: '03',
      code: 'DVX—EXT',
      title: 'Browser extensions',
      blurb: 'Workflow tools that live inside the browser — scraping, augmentation, and upstream integrations.',
      tags: ['Manifest v3', 'Chrome APIs', 'TS'],
      tint: '#4aa3ff',
    },
    {
      num: '04',
      code: 'DVX—HW',
      title: 'Hardware',
      blurb: 'Small-batch electronics and accessories designed around modularity, repairability, and lifetime.',
      tags: ['PCB', 'Firmware', 'CAD'],
      tint: '#41c38a',
    },
  ]

  const projects = [
    {
      pn: 'DVX-MS-01',
      title: 'MasterSet',
      slug: 'masterset',
      kind: 'Mobile application',
      year: '2025',
      tint: '#ffb400',
    },
    {
      pn: 'DVX-CF-02',
      title: 'Creative Finance',
      slug: 'creative-finance',
      kind: 'Web platform',
      year: '2025',
      tint: '#ff5b1e',
    },
    {
      pn: 'DVX-RE-03',
      title: 'Real Estate Ext.',
      slug: 'real-estate-extension',
      kind: 'Browser extension',
      year: '2025',
      tint: '#4aa3ff',
    },
    {
      pn: 'DVX-FD-04',
      title: 'FRAMEWORK Dock',
      slug: 'framework-dock',
      kind: 'Hardware',
      year: '2026',
      tint: '#41c38a',
    },
  ]

  return (
    <div
      className="font-editorial -mt-20"
      style={{ background: CREAM, color: INK }}
    >
      {/* ============ HERO ============ */}
      <section
        className="relative overflow-hidden"
        style={{ borderBottom: `1px solid ${INK}` }}
      >
        {/* Top spec strip */}
        <div
          className="w-full font-mono text-[10px] uppercase tracking-[0.22em] px-6 lg:px-10 py-3 flex justify-between"
          style={{ borderBottom: `1px solid ${INK}`, color: INK }}
        >
          <span>DVX—STUDIO · EST. 2024</span>
          <span className="hidden md:block">CAT. NO. 001 · REV 04 · 2026</span>
          <span>MADE ON EARTH</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-10 items-end">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] px-3 py-1.5 mb-10"
              style={{ background: INK, color: CREAM }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: ORANGE }}
              />
              NEW · ACCEPTING Q2 / 2026
            </div>

            <h1
              className="text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.04em] font-medium"
              style={{ fontFamily: 'var(--font-geist-sans)' }}
            >
              A small studio,
              <br />
              making{' '}
              <span
                className="italic"
                style={{ color: ORANGE, fontWeight: 500 }}
              >
                carefully-built
              </span>
              <br />
              software &amp; hardware.
            </h1>

            <p
              className="mt-10 max-w-lg text-lg leading-relaxed"
              style={{ color: '#4a4642' }}
            >
              Dravex Innovations designs and ships tools, platforms, and physical products — one thoughtful release at a time.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-colors"
                style={{ background: INK, color: CREAM }}
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
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border-2 transition-colors hover:opacity-80"
                style={{ borderColor: INK, color: INK }}
              >
                Commission a build
              </Link>
            </div>
          </div>

          {/* Right: schematic illustration */}
          <div className="lg:col-span-5 relative">
            <Schematic ink={INK} accent={ORANGE} cream={CREAM} />
          </div>
        </div>
      </section>

      {/* ============ MARQUEE STRIP ============ */}
      <section
        className="py-4 overflow-hidden"
        style={{
          background: INK,
          color: CREAM,
          borderBottom: `1px solid ${INK}`,
        }}
      >
        <div className="flex gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-[0.22em]">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex gap-12 animate-[marquee_40s_linear_infinite] shrink-0">
              {[
                '◆ Web Platforms',
                '◇ Mobile Apps',
                '◆ Browser Ext.',
                '◇ Hardware',
                '◆ Firmware',
                '◇ PCB Design',
                '◆ Developer Tools',
                '◇ Integrations',
              ].map((w) => (
                <span key={`${dup}-${w}`} className="shrink-0">
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <div
                className="font-mono text-xs uppercase tracking-[0.22em] mb-5"
                style={{ color: '#6a645c' }}
              >
                — [A] Capabilities
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.035em] font-medium leading-[1]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Four modules.
                <br />
                <span style={{ color: ORANGE }}>One workbench.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-lg leading-relaxed" style={{ color: '#4a4642' }}>
                Each discipline is its own module — but they&apos;re designed to snap together. Most engagements combine at least two.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ borderTop: `1px solid ${INK}`, borderLeft: `1px solid ${INK}` }}
          >
            {capabilities.map((c) => (
              <div
                key={c.num}
                className="group relative p-8 md:p-10 transition-colors"
                style={{
                  borderRight: `1px solid ${INK}`,
                  borderBottom: `1px solid ${INK}`,
                  background: CREAM,
                }}
              >
                {/* Color chip */}
                <div
                  className="absolute top-0 left-0 h-1.5 transition-all group-hover:h-2.5"
                  style={{ background: c.tint, width: '100%' }}
                />

                <div className="flex items-start justify-between mb-10 pt-2">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: '#6a645c' }}>
                      {c.code}
                    </div>
                    <div
                      className="font-mono text-5xl font-medium leading-none mt-2"
                      style={{ color: INK }}
                    >
                      {c.num}
                    </div>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-transform group-hover:rotate-45"
                    style={{ borderColor: INK, color: INK }}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 12L12 4M12 4H6M12 4v6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <h3
                  className="text-2xl md:text-3xl font-medium tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                  {c.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed" style={{ color: '#4a4642' }}>
                  {c.blurb}
                </p>

                <div className="mt-8 flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section style={{ background: INK, color: CREAM, borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.22em] mb-5" style={{ color: '#8a857b' }}>
                — [B] The Catalog
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] font-medium leading-[1.02]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Recently shipped
                <br />
                <span style={{ color: ORANGE }}>from the bench.</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]"
              style={{ color: CREAM }}
            >
              Full catalog
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block relative p-8 transition-transform hover:-translate-y-0.5"
                style={{
                  background: CREAM,
                  color: INK,
                  borderRadius: '4px',
                }}
              >
                {/* Color tab */}
                <div
                  className="absolute top-0 left-0 right-0 h-2"
                  style={{ background: p.tint, borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}
                />

                <div className="flex items-start justify-between mb-16 pt-2">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: '#6a645c' }}>
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
                <div className="mt-2 font-mono text-xs uppercase tracking-[0.18em]" style={{ color: '#6a645c' }}>
                  {p.kind}
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
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section style={{ background: ORANGE, color: INK }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="font-mono text-xs uppercase tracking-[0.22em] mb-6">
                — [C] Drop us a line
              </div>
              <h2
                className="text-5xl md:text-6xl lg:text-7xl tracking-[-0.035em] font-medium leading-[1]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Got something
                <br />
                tricky to build?
              </h2>
              <p className="mt-8 text-lg max-w-xl leading-relaxed">
                We pick up a few new engagements each quarter. If the fit is right, we&apos;ll reply within two business days.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-2 px-6 py-4 rounded-full text-sm font-medium transition-colors"
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
              <a
                href="mailto:vex@dravexinnovations.com"
                className="font-mono text-xs uppercase tracking-[0.18em] hover:underline"
              >
                vex@dravexinnovations.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Schematic({ ink, accent, cream }: { ink: string; accent: string; cream: string }) {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 420 420"
        className="w-full h-auto"
        fill="none"
        stroke={ink}
        strokeWidth="1.25"
      >
        {/* Outer device body */}
        <rect x="60" y="90" width="300" height="240" rx="12" fill={cream} />
        <rect x="60" y="90" width="300" height="240" rx="12" />

        {/* Inner chassis */}
        <rect x="78" y="108" width="264" height="204" rx="6" />

        {/* Screen / module area */}
        <rect x="92" y="122" width="170" height="110" rx="3" fill={ink} opacity="0.06" />

        {/* Grid of holes */}
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 9 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={100 + c * 18} cy={132 + r * 16} r="1.5" fill={ink} />
          ))
        )}

        {/* Knob */}
        <circle cx="300" cy="175" r="28" fill={cream} />
        <circle cx="300" cy="175" r="28" />
        <circle cx="300" cy="175" r="18" />
        <line x1="300" y1="157" x2="300" y2="169" stroke={accent} strokeWidth="3" />

        {/* Button row */}
        <rect x="92" y="250" width="30" height="30" rx="2" />
        <rect x="128" y="250" width="30" height="30" rx="2" fill={accent} />
        <rect x="164" y="250" width="30" height="30" rx="2" />
        <rect x="200" y="250" width="30" height="30" rx="2" />
        <rect x="236" y="250" width="30" height="30" rx="2" />

        {/* Ports on bottom */}
        <rect x="92" y="295" width="22" height="10" rx="2" />
        <rect x="120" y="295" width="22" height="10" rx="2" />
        <rect x="148" y="295" width="22" height="10" rx="2" />

        {/* Callout leaders */}
        {/* Leader 1 - to knob */}
        <line x1="328" y1="175" x2="395" y2="175" stroke={ink} />
        <line x1="395" y1="175" x2="395" y2="140" stroke={ink} />
        <circle cx="300" cy="175" r="2" fill={ink} />

        {/* Leader 2 - to screen */}
        <line x1="92" y1="122" x2="25" y2="122" stroke={ink} />
        <line x1="25" y1="122" x2="25" y2="80" stroke={ink} />

        {/* Leader 3 - to accent button */}
        <line x1="143" y1="280" x2="143" y2="380" stroke={ink} />

        {/* Crosshairs at corners */}
        {[
          [60, 90],
          [360, 90],
          [60, 330],
          [360, 330],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1={x - 6} y1={y} x2={x + 6} y2={y} />
            <line x1={x} y1={y - 6} x2={x} y2={y + 6} />
          </g>
        ))}

        {/* Callout labels */}
        <text x="395" y="132" fontSize="9" fill={ink} fontFamily="var(--font-geist-mono), monospace" textAnchor="end" letterSpacing="1.5">
          [01] CTRL
        </text>
        <text x="25" y="72" fontSize="9" fill={ink} fontFamily="var(--font-geist-mono), monospace" letterSpacing="1.5">
          [02] DISPLAY
        </text>
        <text x="143" y="395" fontSize="9" fill={ink} fontFamily="var(--font-geist-mono), monospace" textAnchor="middle" letterSpacing="1.5">
          [03] SOFTKEY
        </text>

        {/* Top-right part number */}
        <text x="355" y="78" fontSize="8" fill={ink} fontFamily="var(--font-geist-mono), monospace" textAnchor="end" letterSpacing="1.5">
          DVX—01 · REV 04
        </text>

        {/* Dimension lines */}
        <line x1="60" y1="350" x2="360" y2="350" stroke={ink} strokeDasharray="2 3" />
        <line x1="60" y1="346" x2="60" y2="354" stroke={ink} />
        <line x1="360" y1="346" x2="360" y2="354" stroke={ink} />
        <text x="210" y="365" fontSize="8" fill={ink} fontFamily="var(--font-geist-mono), monospace" textAnchor="middle" letterSpacing="1.5">
          300.0 MM
        </text>
      </svg>

      {/* Corner sticker */}
      <div
        className="absolute -top-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center font-mono text-[9px] uppercase tracking-[0.15em] rotate-12 shadow-sm"
        style={{ background: accent, color: ink, textAlign: 'center', lineHeight: 1.2 }}
      >
        MADE
        <br />
        BY HAND
      </div>
    </div>
  )
}
