import Button from '@/components/Button'
import Link from 'next/link'

export default function FamilyConnectPage() {
    const features = [
        {
            title: 'Signal-Level Encryption',
            description: 'End-to-end encrypted messaging using the Signal Protocol. Messages are encrypted on your device before they ever leave — the server never sees your content.',
            icon: '🔒',
        },
        {
            title: 'Kids Mode',
            description: 'A dedicated, kid-friendly interface where children can draw pictures, create custom stickers, take selfies, and send them to parents. Simple, colorful, and safe.',
            icon: '🎨',
        },
        {
            title: 'Video Calls with Screen Lock',
            description: 'Crystal-clear encrypted video calls. In kids mode, screen lock prevents children from accidentally exiting the call — requires a parent PIN to unlock.',
            icon: '📹',
        },
        {
            title: 'Storytelling Mode',
            description: 'Scan pages from a physical book, then record yourself reading while tapping through pages on screen. Send pre-recorded stories or read live during video calls.',
            icon: '📖',
        },
        {
            title: 'Scheduled Messages',
            description: 'Compose messages now and schedule delivery for any time. Set up recurring good-morning messages so your family hears from you even when you can\'t be there.',
            icon: '⏰',
        },
        {
            title: 'Low-Bandwidth Optimized',
            description: 'Built for deployed service members with limited connectivity. Adaptive bitrate, audio-only fallback, and optimized media compression keep you connected anywhere.',
            icon: '📡',
        },
    ]

    return (
        <div className="gradient-bg">
            <section className="section pt-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/projects" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Projects
                        </Link>

                        <div className="space-y-6 mb-16">
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-600/20 text-purple-300 border border-purple-500/30">
                                    Mobile App
                                </span>
                                <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-600/20 text-amber-300 border border-amber-500/30">
                                    In Development
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold">
                                Family<span className="gradient-text">Connect</span>
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed">
                                Secure, encrypted messaging built for families separated by military deployment
                                or coparenting. Stay connected with the people who matter most — no matter
                                where you are in the world.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {['React Native', 'Expo', 'Signal Protocol', 'WebRTC', 'Supabase', 'TypeScript'].map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 rounded-md text-xs font-mono bg-white/5 text-gray-400 border border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Screenshot placeholder */}
                        <div className="glass rounded-2xl overflow-hidden mb-16 aspect-video flex items-center justify-center bg-slate-900/50">
                            <p className="text-gray-500 text-sm">App preview coming soon</p>
                        </div>

                        <h2 className="text-3xl font-bold mb-8">
                            Core <span className="gradient-text">Features</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            {features.map((feature, index) => (
                                <div key={index} className="glass rounded-xl p-6 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{feature.icon}</span>
                                        <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="glass-strong rounded-2xl p-8 text-center space-y-4">
                            <h3 className="text-2xl font-bold">Built for Military Families</h3>
                            <p className="text-gray-400 max-w-xl mx-auto">
                                FamilyConnect is designed by a service member who understands the challenges
                                of staying connected during deployment. Sign up for early access and help
                                shape the app.
                            </p>
                            <Button href="/contact" variant="primary" size="lg">
                                Join the Waitlist
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
