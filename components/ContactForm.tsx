'use client'

import { useState } from 'react'
import { INK, PURPLE } from './brand/Wordmark'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ text: string; ok: boolean } | null>(
    null
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage({
          text: 'Received. We&apos;ll be in touch within two business days.',
          ok: true,
        })
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        setSubmitMessage({ text: 'Something went wrong. Try again.', ok: false })
      }
    } catch {
      setSubmitMessage({ text: 'Something went wrong. Try again.', ok: false })
    } finally {
      setIsSubmitting(false)
    }
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-geist-mono)',
    fontSize: 10,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#6a645c',
    marginBottom: 8,
    display: 'block',
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    background: 'transparent',
    border: `1px solid ${INK}`,
    color: INK,
    fontSize: 15,
    fontFamily: 'var(--font-geist-sans)',
    borderRadius: 2,
    outline: 'none',
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" style={labelStyle}>
            — Name <span style={{ color: PURPLE }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            — Email <span style={{ color: PURPLE }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
            placeholder="you@somewhere.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" style={labelStyle}>
          — Company / Studio (optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Where you're from"
        />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>
          — The brief <span style={{ color: PURPLE }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          style={{ ...inputStyle, resize: 'vertical' }}
          placeholder="Tell us what you're trying to build, the constraints you're working with, and when it needs to ship."
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{ background: INK, color: 'white' }}
        >
          {isSubmitting ? 'Sending…' : 'Send the brief'}
          <svg
            className="w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <span
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#6a645c',
          }}
        >
          Reply within 48 hours
        </span>
      </div>

      {submitMessage && (
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 2,
            border: `1px solid ${submitMessage.ok ? '#41c38a' : '#e08585'}`,
            color: submitMessage.ok ? '#2a7d56' : '#b04545',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: 11,
            letterSpacing: '0.1em',
          }}
        >
          {submitMessage.text}
        </div>
      )}
    </form>
  )
}
