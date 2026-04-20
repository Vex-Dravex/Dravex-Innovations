import Link from 'next/link'

const INK = '#161514'
const CREAM = '#ece6d8'
const PURPLE = '#7c3aed'
const PURPLE_LIGHT = '#a78bfa'
const DARK = '#050505'
const PAPER = '#f7f4ee'

/* ============================================================
   THREE CANDIDATE MARKS
   Each is a bold silhouette that reads at embroidery scale,
   avoids media-control language, and carries an idea.
   ============================================================ */

type MarkProps = {
  size?: number
  color?: string
  accent?: string
  variant?: 'solid' | 'mono' | 'stitch'
  style?: React.CSSProperties
}

function resolveVariant(v: MarkProps['variant'], color: string) {
  return {
    fill: v === 'stitch' ? 'none' : color,
    stroke: v === 'stitch' ? color : 'none',
    strokeW: v === 'stitch' ? 2 : 0,
    dash: v === 'stitch' ? '3 3' : undefined,
  }
}

/* --- A · THE STRUCK D -------------------------------------
   A faceted D (5 edges on the right curve, not 2) with a
   purple crossbar stamped through the upper stem — reads
   as a struck Icelandic eth (Ð) or a hallmarked letter.
   ---------------------------------------------------------- */

function MarkStruck({
  size = 48,
  color = INK,
  accent = PURPLE,
  variant = 'solid',
  style,
}: MarkProps) {
  const v = resolveVariant(variant, color)
  const accentFill =
    variant === 'solid' ? accent : variant === 'stitch' ? 'none' : color
  const accentStroke = variant === 'stitch' ? color : 'none'

  return (
    <svg viewBox="0 0 60 60" width={size} height={size} style={style} aria-hidden>
      {/* Faceted D — 5 facets on the right instead of pentagon's 2 */}
      <path
        d="M 8 4 H 28 L 40 10 L 50 20 L 54 30 L 50 40 L 40 50 L 28 56 H 8 Z"
        fill={v.fill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      {/* Purple crossbar through upper stem, extending left (Ð) */}
      <rect
        x="0"
        y="18"
        width="34"
        height="5"
        fill={accentFill}
        stroke={accentStroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
    </svg>
  )
}

/* --- B · THE TERMINAL D -----------------------------------
   Struck D evolved — crossbar becomes a connector strip with
   small pin-holes punched through it. Circuit-block energy.
   ---------------------------------------------------------- */

function MarkTerminal({
  size = 48,
  color = INK,
  accent = PURPLE,
  variant = 'solid',
  style,
}: MarkProps) {
  const v = resolveVariant(variant, color)
  const accentFill =
    variant === 'solid' ? accent : variant === 'stitch' ? 'none' : color
  const bgPunch = variant === 'solid' ? PAPER : 'white'

  return (
    <svg viewBox="0 0 60 60" width={size} height={size} style={style} aria-hidden>
      {/* Faceted D */}
      <path
        d="M 8 4 H 28 L 40 10 L 50 20 L 54 30 L 50 40 L 40 50 L 28 56 H 8 Z"
        fill={v.fill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      {/* Purple connector strip */}
      <rect
        x="0"
        y="18"
        width="34"
        height="6"
        fill={accentFill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      {/* Pin holes punched through the strip */}
      {[5, 12, 19, 26].map((x) => (
        <circle key={x} cx={x} cy="21" r="1.3" fill={bgPunch} />
      ))}
    </svg>
  )
}

/* --- C · THE ASSEMBLED D ----------------------------------
   Modular + Struck, welded together. Three stacked blocks
   with a purple handle-bar running through the middle.
   ---------------------------------------------------------- */

function MarkAssembled({
  size = 48,
  color = INK,
  accent = PURPLE,
  variant = 'solid',
  style,
}: MarkProps) {
  const v = resolveVariant(variant, color)
  const accentFill =
    variant === 'solid' ? accent : variant === 'stitch' ? 'none' : color

  return (
    <svg viewBox="0 0 60 60" width={size} height={size} style={style} aria-hidden>
      {/* Top block */}
      <path
        d="M 4 4 H 26 L 38 14 L 38 18 H 4 Z"
        fill={v.fill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      {/* Middle block — widest */}
      <path
        d="M 4 24 H 40 L 54 30 L 40 36 H 4 Z"
        fill={v.fill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      {/* Bottom block */}
      <path
        d="M 4 42 H 38 L 38 46 L 26 56 H 4 Z"
        fill={v.fill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      {/* Purple handle-bar through middle block */}
      <rect
        x="0"
        y="28"
        width="24"
        height="4"
        fill={accentFill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
    </svg>
  )
}

/* --- D · THE KEYED D --------------------------------------
   A faceted D with a mechanical keyway cut out of its stem
   and a purple bar seated inside — like the bitting on a
   physical key.
   ---------------------------------------------------------- */

function MarkKeyed({
  size = 48,
  color = INK,
  accent = PURPLE,
  variant = 'solid',
  style,
}: MarkProps) {
  const v = resolveVariant(variant, color)
  const accentFill =
    variant === 'solid' ? accent : variant === 'stitch' ? 'none' : color

  return (
    <svg viewBox="0 0 60 60" width={size} height={size} style={style} aria-hidden>
      {/* Faceted D with rectangular keyway cutout */}
      <path
        d="M 8 4 H 28 L 40 10 L 50 20 L 54 30 L 50 40 L 40 50 L 28 56 H 8 Z
           M 14 20 H 26 V 40 H 14 Z"
        fill={v.fill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
        fillRule="evenodd"
      />
      {/* Purple bar inside the keyway */}
      <rect
        x="16"
        y="24"
        width="8"
        height="12"
        fill={accentFill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
    </svg>
  )
}

/* --- E · THE RIVETED D ------------------------------------
   Modular D evolved — three blocks with visible rivets at
   the seams. Plated, structural, engineered.
   ---------------------------------------------------------- */

function MarkRiveted({
  size = 48,
  color = INK,
  accent = PURPLE,
  variant = 'solid',
  style,
}: MarkProps) {
  const v = resolveVariant(variant, color)
  const accentFill =
    variant === 'solid' ? accent : variant === 'stitch' ? 'none' : color

  return (
    <svg viewBox="0 0 60 60" width={size} height={size} style={style} aria-hidden>
      <path
        d="M 4 4 H 26 L 38 14 L 38 18 H 4 Z"
        fill={v.fill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      <path
        d="M 4 24 H 40 L 54 30 L 40 36 H 4 Z"
        fill={v.fill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      <path
        d="M 4 42 H 38 L 38 46 L 26 56 H 4 Z"
        fill={v.fill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      {/* Rivets at seam points — purple dots */}
      {[
        [10, 21],
        [28, 21],
        [10, 39],
        [28, 39],
        [44, 30],
      ].map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={2}
          fill={accentFill}
          stroke={v.stroke}
          strokeWidth={v.strokeW}
          strokeDasharray={v.dash}
        />
      ))}
    </svg>
  )
}

/* --- C · THE MODULAR D ------------------------------------
   A D built from three stacked horizontal blocks with
   visible seams — reads as a letter D assembled from
   discrete parts. One purple seam in the middle.
   ---------------------------------------------------------- */

function MarkModular({
  size = 48,
  color = INK,
  accent = PURPLE,
  variant = 'solid',
  style,
}: MarkProps) {
  const v = resolveVariant(variant, color)
  const accentFill =
    variant === 'solid' ? accent : variant === 'stitch' ? 'none' : color
  const accentStroke = variant === 'stitch' ? color : 'none'

  return (
    <svg viewBox="0 0 60 60" width={size} height={size} style={style} aria-hidden>
      {/* Top block — narrower */}
      <path
        d="M 4 4 H 26 L 38 14 L 38 18 H 4 Z"
        fill={v.fill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      {/* Middle block — widest, the D's "belly" */}
      <path
        d="M 4 24 H 40 L 54 30 L 40 36 H 4 Z"
        fill={v.fill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      {/* Bottom block — narrower */}
      <path
        d="M 4 42 H 38 L 38 46 L 26 56 H 4 Z"
        fill={v.fill}
        stroke={v.stroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      {/* Purple seam accents — the joins */}
      <rect
        x="4"
        y="20"
        width="40"
        height="2"
        fill={accentFill}
        stroke={accentStroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
      <rect
        x="4"
        y="38"
        width="40"
        height="2"
        fill={accentFill}
        stroke={accentStroke}
        strokeWidth={v.strokeW}
        strokeDasharray={v.dash}
      />
    </svg>
  )
}

/* ============================================================
   PRIMARY — set to whichever candidate is currently "active"
   Change this one line to swap what the crest/wordmark/merch
   mockups use.
   ============================================================ */

const DravexMark = MarkStruck

/* ============================================================
   WORDMARK
   ============================================================ */

function Wordmark({
  color = 'currentColor',
  accent = PURPLE,
  scale = 1,
}: {
  color?: string
  accent?: string
  scale?: number
}) {
  return (
    <div className="inline-flex items-center" style={{ gap: 14 * scale }}>
      <DravexMark size={42 * scale} color={color} accent={accent} />
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: 'var(--font-geist-sans)',
            fontWeight: 500,
            fontSize: 26 * scale,
            letterSpacing: '-0.035em',
            color,
          }}
        >
          Dravex
        </span>
        <span
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontWeight: 500,
            fontSize: 9 * scale,
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color,
            opacity: 0.6,
            marginTop: 6 * scale,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6 * scale,
          }}
        >
          Innovations
          <span
            style={{
              display: 'inline-block',
              width: 5 * scale,
              height: 5 * scale,
              background: accent,
              borderRadius: '50%',
            }}
          />
          <span>Nº 001</span>
        </span>
      </div>
    </div>
  )
}

/* ============================================================
   CREST — atelier circular stamp
   ============================================================ */

function Crest({
  size = 220,
  variant = 'solid',
  color = INK,
  accent = PURPLE,
}: {
  size?: number
  variant?: 'solid' | 'mono' | 'stitch'
  color?: string
  accent?: string
}) {
  const cx = 110
  const cy = 110
  const rOuter = 105
  const rInner = 90
  const strokeDash = variant === 'stitch' ? '3 3' : undefined

  const ticks = Array.from({ length: 12 }).map((_, i) => {
    const deg = i * 30 - 90
    const rad = (deg * Math.PI) / 180
    const isCardinal = i % 3 === 0
    const tickInner = rInner + 1
    const tickOuter = rOuter - 1
    const x1 = cx + Math.cos(rad) * tickInner
    const y1 = cy + Math.sin(rad) * tickInner
    const x2 = cx + Math.cos(rad) * tickOuter
    const y2 = cy + Math.sin(rad) * tickOuter
    return { x1, y1, x2, y2, isCardinal, isTop: i === 0 }
  })

  const markScale = 1.15
  const markTx = cx - 30 * markScale
  const markTy = cy - 30 * markScale - 4
  const markAccent = variant === 'solid' ? accent : color

  return (
    <svg viewBox="0 0 220 220" width={size} height={size} aria-label="Dravex Innovations crest">
      <defs>
        <path
          id="crest-top-arc"
          d={`M ${cx - rInner + 3},${cy - 2} A ${rInner + 7.5},${rInner + 7.5} 0 0,1 ${cx + rInner - 3},${cy - 2}`}
          fill="none"
        />
        <path
          id="crest-bot-arc"
          d={`M ${cx + rInner - 3},${cy + 2} A ${rInner + 7.5},${rInner + 7.5} 0 0,1 ${cx - rInner + 3},${cy + 2}`}
          fill="none"
        />
      </defs>

      <circle
        cx={cx}
        cy={cy}
        r={rOuter}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeDasharray={strokeDash}
      />
      <circle
        cx={cx}
        cy={cy}
        r={rInner}
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeDasharray={strokeDash}
      />

      {ticks.map((t, i) =>
        t.isTop && variant === 'solid' ? null : (
          <line
            key={i}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke={color}
            strokeWidth={t.isCardinal ? 2 : 1}
            strokeDasharray={strokeDash}
          />
        )
      )}

      {variant === 'solid' && (
        <>
          <circle cx={cx} cy={cy - (rOuter + rInner) / 2} r={4.5} fill={accent} />
          <circle cx={cx} cy={cy - (rOuter + rInner) / 2} r={1.5} fill={color} />
        </>
      )}

      <text
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="9.5"
        fontWeight="500"
        fill={color}
        letterSpacing="3.8"
      >
        <textPath href="#crest-top-arc" startOffset="50%" textAnchor="middle">
          DRAVEX · INNOVATIONS
        </textPath>
      </text>

      <text
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="8"
        fontWeight="500"
        fill={color}
        letterSpacing="3"
        opacity={0.85}
      >
        <textPath href="#crest-bot-arc" startOffset="50%" textAnchor="middle" side="right">
          ATELIER · EST · MMXXIV
        </textPath>
      </text>

      {/* Centered mark */}
      <g transform={`translate(${markTx}, ${markTy}) scale(${markScale})`}>
        <DravexMark size={60} color={color} accent={markAccent} variant={variant} />
      </g>

      <g transform={`translate(${cx}, ${cy + 44})`}>
        <line x1="-18" y1="0" x2="-6" y2="0" stroke={color} strokeWidth="1" />
        <line x1="6" y1="0" x2="18" y2="0" stroke={color} strokeWidth="1" />
        <rect x="-2" y="-2" width="4" height="4" transform="rotate(45)" fill={color} />
      </g>

      <text
        x={cx}
        y={cy + 60}
        textAnchor="middle"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="9"
        fontWeight="600"
        fill={color}
        letterSpacing="2.5"
      >
        Nº 001
      </text>
    </svg>
  )
}

/* ============================================================
   MOCKUPS
   ============================================================ */

function HatMockup({
  capColor = INK,
  threadColor = CREAM,
  accent = PURPLE,
  label,
}: {
  capColor?: string
  threadColor?: string
  accent?: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <svg viewBox="0 0 260 180" width="100%" style={{ maxWidth: 320 }} aria-label="Cap mockup">
        <path
          d="M 30 140 Q 130 185 230 140 L 230 152 Q 130 195 30 152 Z"
          fill={capColor}
          stroke={INK}
          strokeWidth="1"
          opacity="0.95"
        />
        <path
          d="M 40 140 Q 40 60 130 40 Q 220 60 220 140 Z"
          fill={capColor}
          stroke={INK}
          strokeWidth="1"
        />
        <path d="M 130 40 L 130 140" fill="none" stroke={INK} strokeWidth="0.5" opacity="0.4" />
        <circle cx="130" cy="40" r="3" fill={INK} opacity="0.8" />

        <g transform="translate(95, 65)">
          <foreignObject x="0" y="0" width="70" height="70">
            <Crest size={70} variant="solid" color={threadColor} accent={accent} />
          </foreignObject>
        </g>
      </svg>
      <div
        className="font-mono text-[10px] uppercase tracking-[0.22em]"
        style={{ color: INK, opacity: 0.55 }}
      >
        {label}
      </div>
    </div>
  )
}

function TeeMockup({
  teeColor = CREAM,
  threadColor = INK,
  accent = PURPLE,
  label,
}: {
  teeColor?: string
  threadColor?: string
  accent?: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <svg viewBox="0 0 260 280" width="100%" style={{ maxWidth: 320 }} aria-label="Tee mockup">
        <path
          d="M 50 40 L 100 25 Q 130 45 160 25 L 210 40 L 230 90 L 190 100 L 190 260 L 70 260 L 70 100 L 30 90 Z"
          fill={teeColor}
          stroke={INK}
          strokeWidth="1"
        />
        <path d="M 100 25 Q 130 55 160 25" fill="none" stroke={INK} strokeWidth="1" />
        <g transform="translate(95, 80)">
          <foreignObject x="0" y="0" width="70" height="70">
            <Crest size={70} variant="solid" color={threadColor} accent={accent} />
          </foreignObject>
        </g>
        <text
          x="130"
          y="248"
          textAnchor="middle"
          fontFamily="var(--font-geist-mono), monospace"
          fontSize="6"
          letterSpacing="2"
          fill={INK}
          opacity="0.4"
        >
          DRAVEX · ATELIER
        </text>
      </svg>
      <div
        className="font-mono text-[10px] uppercase tracking-[0.22em]"
        style={{ color: INK, opacity: 0.55 }}
      >
        {label}
      </div>
    </div>
  )
}

function CardMockup() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative"
        style={{
          width: 360,
          maxWidth: '100%',
          aspectRatio: '1.75 / 1',
          background: PAPER,
          border: `1px solid ${INK}`,
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0 20px 60px -20px rgba(0,0,0,0.25)',
        }}
      >
        {[
          [12, 12],
          [348, 12],
          [12, 194],
          [348, 194],
        ].map(([x, y], i) => (
          <svg
            key={i}
            width="12"
            height="12"
            style={{ position: 'absolute', left: x - 6, top: y - 6, opacity: 0.5 }}
          >
            <line x1="0" y1="6" x2="12" y2="6" stroke={INK} strokeWidth="1" />
            <line x1="6" y1="0" x2="6" y2="12" stroke={INK} strokeWidth="1" />
          </svg>
        ))}

        <div style={{ position: 'absolute', top: 24, left: 28 }}>
          <Wordmark color={INK} accent={PURPLE} scale={0.72} />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: 28,
            fontFamily: 'var(--font-geist-mono)',
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: INK,
            lineHeight: 1.7,
          }}
        >
          <div style={{ opacity: 0.55 }}>Vex</div>
          <div>Principal · Dravex</div>
          <div style={{ opacity: 0.55, marginTop: 6 }}>vex@dravexinnovations.com</div>
        </div>

        <div style={{ position: 'absolute', bottom: 24, right: 28 }}>
          <Crest size={72} color={INK} accent={PURPLE} />
        </div>
      </div>
      <div
        className="font-mono text-[10px] uppercase tracking-[0.22em]"
        style={{ color: INK, opacity: 0.55 }}
      >
        Business card · 3.5" × 2"
      </div>
    </div>
  )
}

/* ============================================================
   HELPERS
   ============================================================ */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-geist-mono)',
        fontSize: 10,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        opacity: 0.55,
      }}
    >
      {children}
    </div>
  )
}

function CandidateTile({
  letter,
  name,
  idea,
  children,
  featured,
}: {
  letter: string
  name: string
  idea: string
  children: React.ReactNode
  featured?: boolean
}) {
  return (
    <div
      style={{
        background: PAPER,
        border: featured ? `2px solid ${PURPLE}` : `1px solid ${INK}`,
        borderRadius: 4,
        padding: 28,
        position: 'relative',
      }}
      className="flex flex-col"
    >
      {featured && (
        <div
          style={{
            position: 'absolute',
            top: -10,
            left: 16,
            background: PURPLE,
            color: 'white',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: 9,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            padding: '3px 8px',
            borderRadius: 3,
            fontWeight: 500,
          }}
        >
          Current pick
        </div>
      )}
      <div className="flex items-baseline gap-3 mb-2">
        <span
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: 10,
            letterSpacing: '0.22em',
            opacity: 0.5,
            textTransform: 'uppercase',
          }}
        >
          {letter}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-geist-sans)',
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: INK,
          }}
        >
          {name}
        </span>
      </div>
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: '#4a4642', minHeight: 64 }}
      >
        {idea}
      </p>
      <div
        className="flex-1 flex items-center justify-center"
        style={{
          background: 'white',
          borderRadius: 4,
          border: '1px solid rgba(0,0,0,0.08)',
          padding: '40px 16px',
          minHeight: 200,
        }}
      >
        {children}
      </div>
    </div>
  )
}

function Tile({
  children,
  bg,
  color,
  label,
  tall = false,
}: {
  children: React.ReactNode
  bg: string
  color: string
  label: string
  tall?: boolean
}) {
  const borderColor =
    bg === PAPER || bg === CREAM || bg === 'white'
      ? 'rgba(0,0,0,0.12)'
      : 'rgba(255,255,255,0.1)'
  return (
    <div
      style={{
        background: bg,
        color,
        padding: 28,
        borderRadius: 4,
        border: `1px solid ${borderColor}`,
        minHeight: tall ? 260 : 200,
      }}
      className="flex flex-col"
    >
      <div style={{ color }}>
        <Label>{label}</Label>
      </div>
      <div className="flex-1 flex items-center justify-center py-4">{children}</div>
    </div>
  )
}

function NavMock({
  bg,
  fg,
  logo,
  accent,
}: {
  bg: string
  fg: string
  logo: React.ReactNode
  accent: string
}) {
  const borderColor =
    bg === PAPER || bg === CREAM || bg === 'white'
      ? 'rgba(0,0,0,0.12)'
      : 'rgba(255,255,255,0.08)'
  return (
    <div
      style={{ background: bg, color: fg, borderRadius: 6, border: `1px solid ${borderColor}` }}
      className="px-6 py-4 flex items-center justify-between"
    >
      {logo}
      <div
        className="flex items-center gap-6"
        style={{ fontFamily: 'var(--font-geist-sans)', fontSize: 13 }}
      >
        <span style={{ opacity: 0.7 }}>Work</span>
        <span style={{ opacity: 0.7 }}>Services</span>
        <span style={{ opacity: 0.7 }}>About</span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            padding: '6px 14px',
            borderRadius: 999,
            background: accent,
            color: 'white',
          }}
        >
          Contact
        </span>
      </div>
    </div>
  )
}

/* ============================================================
   PAGE
   ============================================================ */

export default function LogosPage() {
  return (
    <div
      className="font-editorial -mt-20"
      style={{ background: PAPER, color: INK, minHeight: '100vh' }}
    >
      {/* ============ SESSION CHECKPOINT ============
          Read this first if you're resuming this work in a
          new session. Everything below is the template state
          at end-of-session 2026-04-20.
      */}
      <section
        style={{
          background: INK,
          color: CREAM,
          borderBottom: `4px solid ${PURPLE}`,
          paddingTop: '6rem',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
          <div
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: 10,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: PURPLE_LIGHT,
            }}
          >
            ◆ Session checkpoint · 2026-04-20 · read me first
          </div>
          <h1
            className="mt-4 text-4xl md:text-5xl tracking-[-0.03em] font-medium leading-[1.05] max-w-3xl"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Picking up where we left off.
          </h1>
          <p
            className="mt-6 max-w-2xl leading-relaxed"
            style={{ color: '#bcb9b1', fontSize: 15 }}
          >
            This page is the identity <em>template</em> — frozen at end-of-session so a
            future run can resume without re-deriving everything. The site theme has been
            decided; the mark has not.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {/* DECIDED */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: 10,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: PURPLE_LIGHT,
                  marginBottom: 10,
                }}
              >
                ✓ Decided
              </div>
              <ul className="space-y-2.5 text-[14px] leading-relaxed" style={{ color: CREAM }}>
                <li>
                  <strong style={{ color: 'white' }}>Site theme:</strong> Framework /
                  Teenage Engineering direction (cream ground, ink typography, technical
                  annotations, schematic illustration). Live at{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>/</code>.
                </li>
                <li>
                  <strong style={{ color: 'white' }}>Accent color:</strong> Purple{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>#7c3aed</code>{' '}
                  (light variant{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>#a78bfa</code>{' '}
                  for dark backgrounds).
                </li>
                <li>
                  <strong style={{ color: 'white' }}>Palette:</strong> INK{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>#161514</code> ·
                  CREAM <code style={{ fontFamily: 'var(--font-geist-mono)' }}>#ece6d8</code>{' '}
                  · PAPER <code style={{ fontFamily: 'var(--font-geist-mono)' }}>#f7f4ee</code>
                  . Capability/project tints keep a small secondary palette (yellow, blue,
                  green) for visual variety.
                </li>
                <li>
                  <strong style={{ color: 'white' }}>Typography:</strong> Geist Sans for
                  display/body, Geist Mono for technical annotations. Keep via
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>
                    {' '}.font-editorial{' '}
                  </code>
                  scope in globals.css.
                </li>
                <li>
                  <strong style={{ color: 'white' }}>Identity architecture:</strong> Crest
                  + Wordmark + faceted-D mark, three dress codes (solid/mono/stitch),
                  built for embroidery and merch.
                </li>
                <li>
                  <strong style={{ color: 'white' }}>Navigation + Footer:</strong> rebuilt
                  framework-styled. Both import the shared{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>Wordmark</code>{' '}
                  from{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>
                    components/brand/Wordmark.tsx
                  </code>
                  . Swap the chosen mark there once picked.
                </li>
                <li>
                  <strong style={{ color: 'white' }}>Purple usage:</strong> subdued to
                  accents only — status dots, one italic word, heading emphasis spans,
                  single CTA button. No full-bleed purple sections.
                </li>
                <li>
                  <strong style={{ color: 'white' }}>Inner pages ported:</strong>{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>/about</code>,{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>/services</code>,{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>/projects</code>,{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>/contact</code>{' '}
                  — all rebuilt in framework style with top spec strips, numbered
                  sections, mono labels, subdued purple.
                </li>
                <li>
                  <strong style={{ color: 'white' }}>ContactForm</strong> restyled:
                  underline-label inputs, ink border, mono eyebrows, purple asterisks on
                  required fields.
                </li>
              </ul>
            </div>

            {/* OPEN */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: 10,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: PURPLE_LIGHT,
                  marginBottom: 10,
                }}
              >
                ○ Still open
              </div>
              <ul className="space-y-2.5 text-[14px] leading-relaxed" style={{ color: CREAM }}>
                <li>
                  <strong style={{ color: 'white' }}>Pick a mark.</strong> Six candidates
                  below (Struck, Modular, Terminal, Assembled, Keyed, Riveted). Current
                  placeholder primary:{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>MarkStruck</code>{' '}
                  (see
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>
                    {' '}const DravexMark = MarkStruck{' '}
                  </code>
                  near the top of this file).
                </li>
                <li>
                  <strong style={{ color: 'white' }}>Generate favicon</strong> from the
                  chosen mark at 16/32/apple-touch sizes. Replace{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>
                    app/favicon.ico
                  </code>
                  .
                </li>
                <li>
                  <strong style={{ color: 'white' }}>Prune legacy CSS.</strong> Nothing
                  uses glass / glow / scan-lines / Orbitron anymore — most of{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>globals.css</code>{' '}
                  can be deleted. Keep the{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>
                    .font-editorial
                  </code>{' '}
                  scope and blueprint grid utilities.
                </li>
                <li>
                  <strong style={{ color: 'white' }}>Delete legacy components:</strong>{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>
                    components/Button.tsx
                  </code>{' '}
                  and{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>
                    components/ProjectCard.tsx
                  </code>{' '}
                  — no longer used anywhere.
                </li>
                <li>
                  <strong style={{ color: 'white' }}>Project detail pages</strong> —
                  placeholder &ldquo;case study pending&rdquo; pages now exist at{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>
                    /projects/[slug]
                  </code>
                  . Replace{' '}
                  <code style={{ fontFamily: 'var(--font-geist-mono)' }}>
                    PlaceholderFrame
                  </code>{' '}
                  with real screenshots / photography when available, then expand the
                  brief + add case-study sections.
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: 10,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: PURPLE_LIGHT,
                marginBottom: 10,
              }}
            >
              ◆ Files &amp; routes
            </div>
            <div
              className="grid md:grid-cols-3 gap-6 text-[13px]"
              style={{ fontFamily: 'var(--font-geist-mono)', color: '#bcb9b1' }}
            >
              <div>
                <div style={{ color: 'white', marginBottom: 6 }}>PAGES</div>
                <div>/ — framework theme · purple (final)</div>
                <div>/alt — framework theme · orange (reference)</div>
                <div>/logos — this page (template)</div>
                <div>/about /services /projects /contact — legacy, need porting</div>
              </div>
              <div>
                <div style={{ color: 'white', marginBottom: 6 }}>COMPONENTS</div>
                <div>components/Navigation.tsx — needs new logo</div>
                <div>components/Footer.tsx — needs new wordmark</div>
                <div>components/Button.tsx — legacy, may not be needed</div>
                <div>components/ProjectCard.tsx — legacy</div>
              </div>
              <div>
                <div style={{ color: 'white', marginBottom: 6 }}>KEY IDENTITIES</div>
                <div>MarkStruck / Modular / Terminal</div>
                <div>MarkAssembled / Keyed / Riveted</div>
                <div>Crest — wraps the primary mark</div>
                <div>Wordmark — horizontal lockup</div>
              </div>
            </div>
          </div>

          <div
            className="mt-10 pt-8 flex flex-wrap items-center gap-3"
            style={{ borderTop: `1px solid rgba(255,255,255,0.12)` }}
          >
            <Link
              href="/"
              style={{
                background: PURPLE,
                color: 'white',
                padding: '10px 18px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              View the homepage →
            </Link>
            <Link
              href="/alt"
              style={{
                border: '1px solid rgba(255,255,255,0.25)',
                color: CREAM,
                padding: '10px 18px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Orange reference version
            </Link>
          </div>
        </div>
      </section>

      {/* HEADER */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-14">
          <Label>— Identity system · Revision 05</Label>
          <h1
            className="mt-4 text-5xl md:text-6xl tracking-[-0.035em] font-medium leading-[1.02]"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            D-shaped objects,
            <br />
            <span style={{ color: '#4a4642' }}>not just D-shaped blocks.</span>
          </h1>
          <p
            className="mt-8 max-w-2xl leading-relaxed"
            style={{ color: '#4a4642', fontSize: 16 }}
          >
            You liked Struck and Modular — both Ds that look like <em>something</em>, not
            just a shape. Six candidates below, all pushing that direction. Rows: the two
            originals on top, four new evolutions below (connector strips, keyways, handles,
            rivets). Pick one.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border rounded-full transition-colors hover:bg-black hover:text-white"
              style={{ borderColor: 'rgba(0,0,0,0.2)' }}
            >
              Live homepage (/)
            </Link>
            <Link
              href="/alt"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border rounded-full transition-colors hover:bg-black hover:text-white"
              style={{ borderColor: 'rgba(0,0,0,0.2)' }}
            >
              Orange reference (/alt)
            </Link>
          </div>
        </div>
      </section>

      {/* CANDIDATES */}
      <section style={{ background: CREAM, borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <Label>— The mark · three candidates</Label>
          <h2
            className="mt-4 text-4xl md:text-5xl tracking-[-0.03em] font-medium leading-[1.02] mb-14"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Pick a shape language.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <CandidateTile
              letter="A · original"
              name="The Struck D"
              idea="Faceted D (5 edges on the right curve) stamped with a purple crossbar through its upper stem. Reads as a hallmarked Ð."
              featured
            >
              <MarkStruck size={180} color={INK} accent={PURPLE} />
            </CandidateTile>
            <CandidateTile
              letter="B · original"
              name="The Modular D"
              idea="A D assembled from three horizontal blocks with visible purple seams. Hardware-first — the D as a stack of components."
            >
              <MarkModular size={180} color={INK} accent={PURPLE} />
            </CandidateTile>
            <CandidateTile
              letter="C · new"
              name="The Terminal D"
              idea="Struck D evolved — the crossbar becomes a purple connector strip with pin-holes punched through it. Circuit-block energy."
            >
              <MarkTerminal size={180} color={INK} accent={PURPLE} />
            </CandidateTile>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CandidateTile
              letter="D · new"
              name="The Assembled D"
              idea="Modular + Struck, welded together. Three stacked blocks with a purple handle-bar running through the middle — like a stacked case with a strap."
            >
              <MarkAssembled size={180} color={INK} accent={PURPLE} />
            </CandidateTile>
            <CandidateTile
              letter="E · new"
              name="The Keyed D"
              idea="A faceted D with a mechanical keyway cut out of the stem and a purple bar seated inside — like the bitting on a physical key."
            >
              <MarkKeyed size={180} color={INK} accent={PURPLE} />
            </CandidateTile>
            <CandidateTile
              letter="F · new"
              name="The Riveted D"
              idea="Modular D evolved — three blocks with purple rivets at the seams. Plated, structural, engineered — a D held together by visible fasteners."
            >
              <MarkRiveted size={180} color={INK} accent={PURPLE} />
            </CandidateTile>
          </div>

          <div className="mt-14">
            <Label>— At favicon size (16px · 24px · 40px)</Label>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {[
                { name: 'A · Struck', Comp: MarkStruck },
                { name: 'B · Modular', Comp: MarkModular },
                { name: 'C · Terminal', Comp: MarkTerminal },
                { name: 'D · Assembled', Comp: MarkAssembled },
                { name: 'E · Keyed', Comp: MarkKeyed },
                { name: 'F · Riveted', Comp: MarkRiveted },
              ].map(({ name, Comp }) => (
                <div
                  key={name}
                  style={{
                    background: 'white',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: 4,
                    padding: 20,
                  }}
                  className="flex items-end justify-around gap-4"
                >
                  <Comp size={16} color={INK} accent={PURPLE} />
                  <Comp size={24} color={INK} accent={PURPLE} />
                  <Comp size={40} color={INK} accent={PURPLE} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREST (using current pick) */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <Crest size={380} color={INK} accent={PURPLE} />
          </div>
          <div className="lg:col-span-6">
            <Label>— The crest · using current pick</Label>
            <h2
              className="mt-4 text-4xl md:text-5xl tracking-[-0.03em] font-medium leading-[1.02]"
              style={{ fontFamily: 'var(--font-geist-sans)' }}
            >
              Dress-uniform
              <br />
              <span style={{ color: '#4a4642' }}>version.</span>
            </h2>
            <p
              className="mt-6 max-w-md leading-relaxed"
              style={{ color: '#4a4642', fontSize: 15 }}
            >
              The crest frames the mark in compass tick marks, circular monospace text, and a
              divider with a diamond flourish. Swap the mark at the center by picking a
              different candidate above — everything else stays the same.
            </p>
            <ul
              className="mt-8 space-y-3"
              style={{ color: '#4a4642', fontSize: 15, lineHeight: 1.6 }}
            >
              <li>
                <span style={{ color: INK, fontWeight: 500 }}>— Solid.</span> Full color with
                the purple accent dot at 12 o&apos;clock.
              </li>
              <li>
                <span style={{ color: INK, fontWeight: 500 }}>— Mono.</span> Single-color for
                embroidery, foil stamping, laser etching, favicon.
              </li>
              <li>
                <span style={{ color: INK, fontWeight: 500 }}>— Stitch.</span> Dashed
                rendering to preview embroidery stitch density.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* VARIANTS */}
      <section style={{ background: CREAM, borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <Label>— Variants</Label>
          <h3
            className="mt-3 text-3xl tracking-[-0.02em] font-medium mb-12"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Dress codes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Tile bg={PAPER} color={INK} label="Solid · full color">
              <Crest size={200} variant="solid" color={INK} accent={PURPLE} />
            </Tile>
            <Tile bg={PAPER} color={INK} label="Mono · single color">
              <Crest size={200} variant="mono" color={INK} accent={PURPLE} />
            </Tile>
            <Tile bg={PAPER} color={INK} label="Stitch preview · dashed">
              <Crest size={200} variant="stitch" color={INK} accent={PURPLE} />
            </Tile>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <Tile bg={DARK} color="white" label="Inverted · on dark">
              <Crest size={160} variant="solid" color={CREAM} accent={PURPLE_LIGHT} />
            </Tile>
            <Tile bg={PURPLE} color="white" label="On accent">
              <Crest size={160} variant="mono" color="white" />
            </Tile>
            <Tile bg={CREAM} color={INK} label="On cream">
              <Crest size={160} variant="solid" color={INK} accent={PURPLE} />
            </Tile>
            <Tile bg="white" color={INK} label="On white">
              <Crest size={160} variant="solid" color={INK} accent={PURPLE} />
            </Tile>
          </div>
        </div>
      </section>

      {/* SCALE + WORDMARK */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <Label>— Mark alone</Label>
              <h3
                className="mt-3 text-3xl tracking-[-0.02em] font-medium mb-8"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                At scale
              </h3>
              <div
                className="flex items-end justify-around gap-6 p-10"
                style={{ background: PAPER, border: `1px solid ${INK}`, borderRadius: 4 }}
              >
                {[96, 64, 40, 24, 16].map((s) => (
                  <div key={s} className="flex flex-col items-center gap-3">
                    <DravexMark size={s} color={INK} accent={PURPLE} />
                    <div
                      className="font-mono text-[10px] uppercase"
                      style={{ letterSpacing: '0.2em', opacity: 0.5 }}
                    >
                      {s}px
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label>— Horizontal lockup</Label>
              <h3
                className="mt-3 text-3xl tracking-[-0.02em] font-medium mb-8"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Wordmark
              </h3>
              <div
                className="p-10 flex items-center justify-center"
                style={{
                  background: PAPER,
                  border: `1px solid ${INK}`,
                  borderRadius: 4,
                  minHeight: 220,
                }}
              >
                <Wordmark color={INK} accent={PURPLE} scale={1.2} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MERCH */}
      <section style={{ background: CREAM, borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <Label>— Carried into the world</Label>
          <h3
            className="mt-3 text-4xl md:text-5xl tracking-[-0.03em] font-medium mb-4 leading-[1.02]"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Embroidery, ink, &amp; foil.
          </h3>
          <p className="max-w-xl mb-14 leading-relaxed" style={{ color: '#4a4642' }}>
            Drawn for single-color reproduction. Consistent line weights, solid geometry,
            no gradients or hairlines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div
              className="p-10 flex items-center justify-center"
              style={{ background: PAPER, border: `1px solid ${INK}`, borderRadius: 4 }}
            >
              <HatMockup
                capColor={INK}
                threadColor={CREAM}
                accent={PURPLE_LIGHT}
                label="Black cap · cream thread · purple accent"
              />
            </div>
            <div
              className="p-10 flex items-center justify-center"
              style={{ background: PAPER, border: `1px solid ${INK}`, borderRadius: 4 }}
            >
              <HatMockup
                capColor={CREAM}
                threadColor={INK}
                accent={PURPLE}
                label="Cream cap · ink thread"
              />
            </div>
            <div
              className="p-10 flex items-center justify-center"
              style={{ background: PAPER, border: `1px solid ${INK}`, borderRadius: 4 }}
            >
              <HatMockup
                capColor={PURPLE}
                threadColor="white"
                accent={CREAM}
                label="Purple cap · white thread"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div
              className="p-10 flex items-center justify-center"
              style={{ background: PAPER, border: `1px solid ${INK}`, borderRadius: 4 }}
            >
              <TeeMockup
                teeColor={CREAM}
                threadColor={INK}
                accent={PURPLE}
                label="Natural tee · screen-print"
              />
            </div>
            <div
              className="p-10 flex items-center justify-center"
              style={{ background: PAPER, border: `1px solid ${INK}`, borderRadius: 4 }}
            >
              <TeeMockup
                teeColor={INK}
                threadColor={CREAM}
                accent={PURPLE_LIGHT}
                label="Ink tee · cream print · purple accent"
              />
            </div>
            <div
              className="p-10 flex items-center justify-center"
              style={{ background: PAPER, border: `1px solid ${INK}`, borderRadius: 4 }}
            >
              <TeeMockup
                teeColor="#9a9591"
                threadColor={INK}
                accent={PURPLE}
                label="Heather tee · ink print"
              />
            </div>
          </div>

          <div
            className="p-10 flex items-center justify-center"
            style={{ background: PAPER, border: `1px solid ${INK}`, borderRadius: 4 }}
          >
            <CardMockup />
          </div>
        </div>
      </section>

      {/* NAV CONTEXT */}
      <section style={{ borderBottom: `1px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <Label>— In context</Label>
          <h3
            className="mt-3 text-3xl tracking-[-0.02em] font-medium mb-10"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Navigation
          </h3>
          <div className="space-y-3">
            <NavMock
              bg={DARK}
              fg="white"
              accent={PURPLE}
              logo={<Wordmark color="white" accent={PURPLE_LIGHT} scale={0.95} />}
            />
            <NavMock
              bg={CREAM}
              fg={INK}
              accent={PURPLE}
              logo={<Wordmark color={INK} accent={PURPLE} scale={0.95} />}
            />
            <NavMock
              bg="white"
              fg={INK}
              accent={PURPLE}
              logo={<Wordmark color={INK} accent={PURPLE} scale={0.95} />}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section style={{ background: PAPER }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <h3
            className="text-2xl tracking-[-0.02em] font-medium"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Next steps
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#4a4642' }}>
            Tell me A, B, or C (or &ldquo;none of the above, try ___&rdquo;) and I&apos;ll
            make it the primary, rebuild the crest and mockups around it, and wire the
            wordmark into global navigation.
          </p>
        </div>
      </section>
    </div>
  )
}
