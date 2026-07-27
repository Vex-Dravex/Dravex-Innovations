import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'vex@dravexinnovations.com'
const FROM_EMAIL =
    process.env.CONTACT_FROM_EMAIL ||
    'Dravex Innovations <noreply@dravexinnovations.com>'

// Submitted values land inside an HTML email, so escape them before interpolating.
function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, company, message } = body

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Store the submission. A storage failure must not stop the email —
        // the inbox is the channel that actually gets read.
        let stored = false
        try {
            const supabase = await createClient()

            const { error } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        name,
                        email,
                        company: company || null,
                        message,
                        created_at: new Date().toISOString(),
                    },
                ])

            if (error) {
                console.error('Supabase error:', error)
            } else {
                stored = true
            }
        } catch (dbError) {
            console.error('Failed to store contact submission:', dbError)
        }

        // Notify via Resend
        let notified = false
        const resendKey = process.env.RESEND_API_KEY
        if (resendKey) {
            try {
                const res = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${resendKey}`,
                    },
                    body: JSON.stringify({
                        from: FROM_EMAIL,
                        to: [TO_EMAIL],
                        reply_to: email,
                        subject: `New brief from ${name}${company ? ` — ${company}` : ''}`,
                        html: `
                            <div style="font-family: sans-serif; max-width: 600px;">
                                <h2 style="color: #7c3aed;">New Contact Submission</h2>
                                <table style="width: 100%; border-collapse: collapse;">
                                    <tr><td style="padding: 8px; font-weight: bold; color: #666;">Name</td><td style="padding: 8px;">${escapeHtml(name)}</td></tr>
                                    <tr><td style="padding: 8px; font-weight: bold; color: #666;">Email</td><td style="padding: 8px;">${escapeHtml(email)}</td></tr>
                                    <tr><td style="padding: 8px; font-weight: bold; color: #666;">Company</td><td style="padding: 8px;">${escapeHtml(company || '—')}</td></tr>
                                </table>
                                <div style="margin-top: 16px; padding: 16px; background: #f4f4f5; border-radius: 8px;">
                                    <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
                                </div>
                                <p style="margin-top: 16px; font-size: 12px; color: #888;">
                                    Reply directly to this email to reach ${escapeHtml(name)}.
                                </p>
                            </div>
                        `,
                    }),
                })

                if (res.ok) {
                    notified = true
                } else {
                    console.error('Resend email failed:', await res.text())
                }
            } catch (emailError) {
                console.error('Failed to send contact email:', emailError)
            }
        } else {
            console.warn(
                'RESEND_API_KEY not set — contact email not sent to ' + TO_EMAIL
            )
        }

        // Only fail the request if the submission was lost entirely.
        if (!stored && !notified) {
            return NextResponse.json(
                { error: 'Failed to submit contact form' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: 'Contact form submitted successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error processing contact form:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
