import { Metadata } from 'next'
import Button from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Real Estate Browser Extension | Dravex Innovations',
    description: 'Intelligent browser extension for real estate professionals that scrapes addresses, pulls MLS data, and recommends creative finance strategies.',
}

export default function RealEstateExtensionPage() {
    const features = [
        { title: 'Address Scraping', description: 'Automatically detect and extract addresses from any webpage you visit.', icon: '🏠' },
        { title: 'MLS Data Integration', description: 'Pull comprehensive MLS data including property details, history, and comparables.', icon: '📊' },
        { title: 'Public Records Access', description: 'Access public property data, tax records, and ownership information.', icon: '📋' },
        { title: 'Contact Information', description: 'Get seller and agent contact details instantly.', icon: '📞' },
        { title: 'Mortgage Data', description: 'View existing mortgage information and payment history.', icon: '💰' },
        { title: 'Deal Underwriting', description: 'Built-in calculators to quickly underwrite wholesale offers.', icon: '🧮' },
        { title: 'Strategy Recommendations', description: 'AI-powered suggestions for creative finance strategies.', icon: '💡' },
        { title: 'Export & Save', description: 'Save properties and export data for further analysis.', icon: '💾' },
    ]

    const techStack = ['TypeScript', 'Chrome Extension API', 'React', 'MLS API Integration', 'Web Scraping', 'IndexedDB', 'Background Workers']

    return (
        <div className="gradient-bg min-h-screen">
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
                                Browser Extension
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold">
                                <span className="gradient-text">Real Estate Browser Extension</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300">
                                An intelligent browser extension that transforms any webpage into a real estate research tool with instant property data and deal analysis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Project <span className="gradient-text">Overview</span></h2>
                        <div className="space-y-4 text-gray-300 text-lg">
                            <p>
                                The Real Estate Browser Extension is a powerful tool designed for real estate investors, wholesalers, and agents. It works seamlessly in the background, detecting addresses on any webpage you visit and providing instant access to comprehensive property data.
                            </p>
                            <p>
                                With integration to MLS databases and public records, the extension pulls detailed information including property characteristics, ownership history, mortgage data, and comparable sales. This eliminates the need to manually search multiple databases.
                            </p>
                            <p>
                                The built-in underwriting tools help investors quickly analyze deals and determine offer prices. AI-powered recommendations suggest the best creative finance strategies based on the property's characteristics and market conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold">Key <span className="gradient-text">Features</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="glass rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 space-y-4 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="text-5xl">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-gradient-to-b from-transparent to-black/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold">Technology <span className="gradient-text">Stack</span></h2>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {techStack.map((tech, index) => (
                                <div key={index} className="glass rounded-xl px-6 py-3 hover-glow transition-all duration-300 fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                                    <span className="text-purple-300 font-medium">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-strong rounded-3xl p-12 md:p-16 text-center space-y-8 glow max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold">Need a <span className="gradient-text">Browser Extension</span>?</h2>
                        <p className="text-xl text-gray-300">We can build custom browser extensions that enhance productivity and streamline workflows.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" variant="primary" size="lg">Start Your Project</Button>
                            <Button href="/projects" variant="secondary" size="lg">View More Projects</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
