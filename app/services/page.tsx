import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Dravex Innovations',
  description:
    'Web platforms, mobile apps, browser extensions, desktop applications, hardware systems, and full-stack integration.',
}

const CREAM = '#ece6d8'
const INK = '#161514'
const PURPLE = '#7c3aed'
const PURPLE_LIGHT = '#a78bfa'

export default function ServicesPage() {
  const services = [
    {
      num: '01',
      code: 'DVX—WEB',
      title: 'Custom web development',
      blurb:
        'Powerful, scalable web applications — the kind that hold up when traffic is real and the data matters.',
      features: [
        'Full-stack web applications',
        'E-commerce platforms',
        'SaaS products',
        'Progressive Web Apps (PWAs)',
        'API development & integration',
        'Database design & optimization',
      ],
      tech: ['Next.js', 'React', 'Node.js', 'Postgres', 'MongoDB', 'Supabase'],
      tint: PURPLE,
    },
    {
      num: '02',
      code: 'DVX—MOB',
      title: 'Mobile app development',
      blurb:
        'iOS and Android apps engineered for reliability — offline-first when it needs to be, synced when it doesn\'t.',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development',
        'App Store optimization',
        'Push notifications',
        'Offline functionality',
        'Real-time data sync',
      ],
      tech: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
      tint: '#ffb400',
    },
    {
      num: '03',
      code: 'DVX—DSK',
      title: 'Desktop applications',
      blurb:
        'Robust desktop software for Windows, macOS, and Linux. Native-feeling, system-integrated, built to ship.',
      features: [
        'Cross-platform desktop apps',
        'Native performance',
        'System integration',
        'Auto-updates',
        'Offline-first design',
        'Custom UI/UX',
      ],
      tech: ['Electron', 'Tauri', 'Qt', 'C++', '.NET'],
      tint: '#4aa3ff',
    },
    {
      num: '04',
      code: 'DVX—EXT',
      title: 'Browser extensions',
      blurb:
        'Workflow tools that live inside the browser — scraping, augmentation, and integrations with upstream APIs.',
      features: [
        'Chrome, Firefox, Edge support',
        'Content script injection',
        'Background workers',
        'Data scraping & analysis',
        'Third-party API integration',
        'User data privacy',
      ],
      tech: ['TypeScript', 'Chrome API', 'WebExtensions', 'React'],
      tint: '#41c38a',
    },
    {
      num: '05',
      code: 'DVX—HW',
      title: 'Hardware solutions',
      blurb:
        'Small-batch electronics and accessories designed around modularity, repairability, and long product lifetimes.',
      features: [
        'PCB design & prototyping',
        'Modular architecture',
        'Repairability focus',
        '3D modeling & printing',
        'Firmware development',
        'Manufacturing coordination',
      ],
      tech: ['KiCad', 'Fusion 360', 'Arduino', 'Raspberry Pi', 'C/C++'],
      tint: '#e08585',
    },
    {
      num: '06',
      code: 'DVX—INT',
      title: 'Full-stack integration',
      blurb:
        'Wiring systems together — APIs, services, infrastructure, pipelines — so the whole thing runs as one.',
      features: [
        'Third-party API integration',
        'Microservices architecture',
        'Cloud infrastructure setup',
        'CI/CD pipeline implementation',
        'Database migration',
        'Performance optimization',
      ],
      tech: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Vercel', 'GitHub Actions'],
      tint: '#c97fff',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'Understand the brief, the users, the constraints, the non-negotiables.',
    },
    {
      step: '02',
      title: 'Design',
      desc: 'Detailed plans, schematics, prototypes. Decide what to build before building it.',
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Build with best practices, test relentlessly, keep the loop tight.',
    },
    {
      step: '04',
      title: 'Delivery',
      desc: 'Ship it, support it, and keep it running after the invoice is paid.',
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
        <span className="hidden md:block">FILE · SERVICES · REV 01</span>
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
            — What we build
          </div>
          <h1
            className="text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.035em] font-medium leading-[0.98] max-w-5xl"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Six disciplines.
            <br />
            <span style={{ color: PURPLE }}>One bench.</span>
          </h1>
          <p
            className="mt-10 max-w-2xl text-lg leading-relaxed"
            style={{ color: '#4a4642' }}
          >
            We take on engagements across software and hardware. Most combine two or three
            of the disciplines below — that&apos;s usually the point.
          </p>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ borderTop: `1px solid ${INK}`, borderLeft: `1px solid ${INK}` }}
          >
            {services.map((s) => (
              <div
                key={s.num}
                className="group relative p-8 md:p-10"
                style={{
                  borderRight: `1px solid ${INK}`,
                  borderBottom: `1px solid ${INK}`,
                  background: CREAM,
                }}
              >
                <div
                  className="absolute top-0 left-0 h-1.5 transition-all group-hover:h-2.5"
                  style={{ background: s.tint, width: '100%' }}
                />
                <div className="flex items-start justify-between mb-10 pt-2">
                  <div>
                    <div
                      className="font-mono text-[11px] uppercase tracking-[0.2em]"
                      style={{ color: '#6a645c' }}
                    >
                      {s.code}
                    </div>
                    <div
                      className="font-mono text-5xl font-medium leading-none mt-2"
                      style={{ color: INK }}
                    >
                      {s.num}
                    </div>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-transform group-hover:rotate-45"
                    style={{ borderColor: INK, color: INK }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M4 12L12 4M12 4H6M12 4v6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <h3
                  className="text-2xl md:text-3xl font-medium tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 max-w-md text-[15px] leading-relaxed"
                  style={{ color: '#4a4642' }}
                >
                  {s.blurb}
                </p>

                {/* Features list */}
                <div className="mt-8">
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.22em] mb-3"
                    style={{ color: '#6a645c' }}
                  >
                    — Scope
                  </div>
                  <ul className="space-y-1.5">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm flex items-start gap-2"
                        style={{ color: '#4a4642' }}
                      >
                        <span
                          className="mt-2 flex-shrink-0"
                          style={{
                            width: 4,
                            height: 4,
                            background: INK,
                            borderRadius: '50%',
                          }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {s.tech.map((t) => (
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

      {/* ============ PROCESS ============ */}
      <section
        style={{ background: INK, color: CREAM, borderBottom: `1px solid ${INK}` }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <div
                className="font-mono text-xs uppercase tracking-[0.22em] mb-5"
                style={{ color: '#8a857b' }}
              >
                — [B] The process
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] font-medium leading-[1]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                From brief
                <br />
                <span style={{ color: PURPLE_LIGHT }}>to shipped.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#bcb9b1' }}
              >
                Four phases. Each one has a clear exit condition — we don&apos;t start the
                next before the previous is actually done.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-4"
            style={{
              borderTop: `1px solid rgba(236,230,216,0.12)`,
              borderLeft: `1px solid rgba(236,230,216,0.12)`,
            }}
          >
            {process.map((p) => (
              <div
                key={p.step}
                className="p-8"
                style={{
                  borderRight: `1px solid rgba(236,230,216,0.12)`,
                  borderBottom: `1px solid rgba(236,230,216,0.12)`,
                }}
              >
                <div
                  className="font-mono text-5xl font-medium leading-none mb-6"
                  style={{ color: PURPLE_LIGHT }}
                >
                  {p.step}
                </div>
                <h3
                  className="text-xl md:text-2xl font-medium tracking-[-0.02em] mb-3"
                  style={{ fontFamily: 'var(--font-geist-sans)', color: CREAM }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#bcb9b1' }}
                >
                  {p.desc}
                </p>
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
                — Ready to get started
              </div>
              <h2
                className="text-5xl md:text-6xl lg:text-7xl tracking-[-0.035em] font-medium leading-[1]"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Bring us
                <br />
                <span style={{ color: PURPLE }}>the hard problem.</span>
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
