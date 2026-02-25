import Button from '@/components/Button'
import Link from 'next/link'

export default function HTXREIGroupPage() {
    const features = [
        {
            title: 'Deal Marketplace',
            description: 'Browse, filter, and save wholesale real estate deals from investors across Texas. Advanced search with property type, ARV, and investment strategy filters.',
        },
        {
            title: 'Social Feed',
            description: 'Instagram-style showcase feed where investors share deals, before/after transformations, and market insights. Like, comment, share, and message directly.',
        },
        {
            title: 'Contractor Directory',
            description: 'Verified contractor profiles with reviews, portfolio images, service areas, and direct messaging. Find trusted GCs, plumbers, electricians, and more.',
        },
        {
            title: 'Education Center',
            description: 'Curated courses and video content on wholesaling, creative finance, property analysis, and deal structuring. Track your progress with watch-later lists.',
        },
        {
            title: 'Community Forum',
            description: 'Discussion boards organized by topic — wholesale deals, financing, market updates, and general networking. Build connections with local investors.',
        },
        {
            title: 'CRM Tools',
            description: 'Built-in contact management, deal pipeline tracking, and automated follow-up tools designed specifically for real estate wholesalers and investors.',
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
                                    Web + Mobile Platform
                                </span>
                                <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-green-600/20 text-green-300 border border-green-500/30">
                                    Live — Deployed
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold">
                                HTX <span className="gradient-text">REI Group</span>
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed">
                                A social media and networking platform built for wholesale real estate investors.
                                Find deals, connect with contractors, learn creative finance strategies, and grow
                                your real estate business — all in one place.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {['Next.js 16', 'React 19', 'Supabase', 'Stripe', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'React Native'].map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 rounded-md text-xs font-mono bg-white/5 text-gray-400 border border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Screenshot placeholder */}
                        <div className="glass rounded-2xl overflow-hidden mb-16 aspect-video flex items-center justify-center bg-slate-900/50">
                            <p className="text-gray-500 text-sm">Screenshots coming soon</p>
                        </div>

                        <h2 className="text-3xl font-bold mb-8">
                            Key <span className="gradient-text">Features</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            {features.map((feature, index) => (
                                <div key={index} className="glass rounded-xl p-6 space-y-3">
                                    <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="glass-strong rounded-2xl p-8 text-center space-y-4">
                            <h3 className="text-2xl font-bold">Interested in Early Access?</h3>
                            <p className="text-gray-400">We&apos;re onboarding investors in the Houston metro area.</p>
                            <Button href="/contact" variant="primary" size="lg">
                                Request Access
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
