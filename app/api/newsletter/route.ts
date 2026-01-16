import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { email } = body

        // Validate email
        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
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

        // Create Supabase client
        const supabase = await createClient()

        // Check if email already exists
        const { data: existing } = await supabase
            .from('newsletter_subscribers')
            .select('email')
            .eq('email', email)
            .single()

        if (existing) {
            return NextResponse.json(
                { error: 'Email already subscribed' },
                { status: 409 }
            )
        }

        // Insert into database
        const { data, error } = await supabase
            .from('newsletter_subscribers')
            .insert([
                {
                    email,
                    subscribed_at: new Date().toISOString(),
                    is_active: true,
                },
            ])
            .select()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Failed to subscribe to newsletter' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: 'Successfully subscribed to newsletter', data },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error processing newsletter subscription:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
