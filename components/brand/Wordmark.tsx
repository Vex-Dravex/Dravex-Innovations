/* ============================================================
   DRAVEX BRAND — shared mark + wordmark
   Source of truth for the logo across the site.
   Currently set to "The Struck D" — the placeholder primary.
   Update DravexMark here to propagate everywhere.
   ============================================================ */

import type { CSSProperties } from 'react'

export const PURPLE = '#7c3aed'
export const PURPLE_LIGHT = '#a78bfa'
export const INK = '#161514'
export const CREAM = '#ece6d8'

export function DravexMark({
  size = 48,
  color = 'currentColor',
  accent = PURPLE,
  style,
}: {
  size?: number
  color?: string
  accent?: string
  style?: CSSProperties
}) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} style={style} aria-hidden>
      {/* Faceted D — 5 edges on the right instead of pentagon's 2 */}
      <path
        d="M 8 4 H 28 L 40 10 L 50 20 L 54 30 L 50 40 L 40 50 L 28 56 H 8 Z"
        fill={color}
      />
      {/* Purple crossbar through upper stem (Ð-style hallmark strike) */}
      <rect x="0" y="18" width="34" height="5" fill={accent} />
    </svg>
  )
}

export function Wordmark({
  color = 'currentColor',
  accent = PURPLE,
  scale = 1,
  showMeta = true,
}: {
  color?: string
  accent?: string
  scale?: number
  showMeta?: boolean
}) {
  return (
    <div className="inline-flex items-center" style={{ gap: 12 * scale }}>
      <DravexMark size={38 * scale} color={color} accent={accent} />
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: 'var(--font-geist-sans)',
            fontWeight: 500,
            fontSize: 22 * scale,
            letterSpacing: '-0.035em',
            color,
          }}
        >
          Dravex
        </span>
        {showMeta && (
          <span
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontWeight: 500,
              fontSize: 8 * scale,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color,
              opacity: 0.6,
              marginTop: 5 * scale,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5 * scale,
            }}
          >
            Innovations
            <span
              style={{
                display: 'inline-block',
                width: 4 * scale,
                height: 4 * scale,
                background: accent,
                borderRadius: '50%',
              }}
            />
            <span>Nº 001</span>
          </span>
        )}
      </div>
    </div>
  )
}
