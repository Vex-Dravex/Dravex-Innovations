import { Metadata } from 'next'
import Button from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'MasterSet - TCG Collection Manager | Dravex Innovations',
    description: 'A comprehensive mobile app for TCG collectors and vendors to track collections, card values, and completion progress.',
}

export default function MasterSetPage() {
    const features = [
        {
            title: 'Collection Tracking',
            description: 'Easily catalog your entire TCG collection with barcode scanning and manual entry options.',
            icon: '📚',
        },
        {
            title: 'Real-Time Valuation',
            description: 'Get up-to-date market prices for your cards with integration to major pricing databases.',
            icon: '💰',
        },
        {
            title: 'Progress Monitoring',
            description: 'Track your completion progress for sets, view missing cards, and set collection goals.',
            icon: '📊',
        },
        {
            title: 'Vendor Tools',
            description: 'Specialized features for vendors including inventory management and pricing tools.',
            icon: '🏪',
        },
        {
            title: 'Trade Management',
            description: 'Manage trades with other collectors, track trade history, and value trades accurately.',
            icon: '🔄',
        },
        {
            title: 'Cloud Sync',
            description: 'Your collection syncs across all devices with secure cloud backup.',
            icon: '☁️',
        },
    ]

    const techStack = [
        'SwiftUI',
        'Swift 6',
        'Supabase',
        'Vision Framework',
        'CloudKit',
        'Core Animation',
        'StoreKit 2',
        'Push Notifications',
    ]

    return (
        <div className="gradient-bg min-h-screen">
            {/* Hero Section */}
            <section className="section pt-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <Link href="/projects" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Projects
                        </Link>

                        <div className="space-y-6 fade-in">
                            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-purple-600/20 text-purple-300 border border-purple-500/30">
                                Mobile App
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold">
                                <span className="gradient-text">MasterSet</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300">
                                A premium native iOS app for TCG collectors and vendors. Scan cards with your camera, track collection value in real-time, and browse sets with holographic card animations inspired by Pokemon Pocket TCG.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Project <span className="gradient-text">Overview</span>
                        </h2>
                        <div className="space-y-4 text-gray-300 text-lg">
                            <p>
                                MasterSet is a comprehensive mobile application designed specifically for Trading Card Game (TCG) collectors and vendors. Whether you're a casual collector or a professional vendor, MasterSet provides all the tools you need to manage your collection effectively.
                            </p>
                            <p>
                                The app features real-time market price integration, allowing users to track the value of their collection as the market fluctuates. With barcode scanning capabilities, adding cards to your collection is as simple as scanning the barcode on the package.
                            </p>
                            <p>
                                For vendors, MasterSet offers specialized inventory management tools, bulk pricing updates, and sales tracking features that streamline business operations and maximize profitability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                Key <span className="gradient-text">Features</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 space-y-4 fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="text-5xl">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="section bg-gradient-to-b from-transparent to-black/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                Technology <span className="gradient-text">Stack</span>
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center">
                            {techStack.map((tech, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-xl px-6 py-3 hover-glow transition-all duration-300 fade-in"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <span className="text-purple-300 font-medium">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-strong rounded-3xl p-12 md:p-16 text-center space-y-8 glow max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Interested in a Similar <span className="gradient-text">Project</span>?
                        </h2>
                        <p className="text-xl text-gray-300">
                            We can build a custom mobile app tailored to your specific needs and industry.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" variant="primary" size="lg">
                                Start Your Project
                            </Button>
                            <Button href="/projects" variant="secondary" size="lg">
                                View More Projects
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
