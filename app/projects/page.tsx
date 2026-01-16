import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
    title: 'Our Projects | Dravex Innovations',
    description: 'Explore our portfolio of innovative software and hardware projects including MasterSet, Creative Finance Platform, Real Estate Extension, and FRAMEWORK Dock.',
}

export default function ProjectsPage() {
    const projects = [
        {
            title: 'MasterSet',
            slug: 'masterset',
            category: 'Mobile App',
            description: 'A comprehensive mobile app for TCG collectors and vendors to track collections, card values, and completion progress with real-time market data.',
            techStack: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Stripe'],
            featured: true,
        },
        {
            title: 'Creative Finance Platform',
            slug: 'creative-finance',
            category: 'Web SaaS',
            description: 'Full-featured platform with marketplace, verified contractor profiles, community forum, education center, and custom CRM tools for real estate investors and wholesalers.',
            techStack: ['Next.js', 'Supabase', 'PostgreSQL', 'Stripe', 'TypeScript', 'Tailwind CSS'],
            featured: true,
        },
        {
            title: 'Real Estate Browser Extension',
            slug: 'real-estate-extension',
            category: 'Browser Extension',
            description: 'Intelligent extension that scrapes addresses from any webpage, pulls MLS and public data, provides contact info, and recommends creative finance strategies.',
            techStack: ['TypeScript', 'Chrome API', 'React', 'MLS Integration', 'Web Scraping'],
            featured: true,
        },
        {
            title: 'FRAMEWORK Dock',
            slug: 'framework-dock',
            category: 'Hardware',
            description: 'Modular, repairable docking station designed around the Framework laptop philosophy of sustainability, user repairability, and upgradability.',
            techStack: ['PCB Design', 'USB-C', 'Thunderbolt 4', 'Modular Design', 'KiCad'],
            featured: true,
        },
    ]

    return (
        <div className="gradient-bg min-h-screen">
            {/* Hero Section */}
            <section className="section pt-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold">
                            Our <span className="gradient-text">Projects</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300">
                            Innovative solutions we've built to solve real-world problems
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section bg-gradient-to-b from-transparent to-black/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Project <span className="gradient-text">Categories</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            We specialize in diverse areas of technology
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { name: 'Web Applications', count: '15+', icon: '🌐' },
                            { name: 'Mobile Apps', count: '10+', icon: '📱' },
                            { name: 'Browser Extensions', count: '5+', icon: '🔌' },
                            { name: 'Hardware', count: '3+', icon: '⚙️' },
                        ].map((category, index) => (
                            <div
                                key={index}
                                className="glass rounded-2xl p-6 text-center space-y-3 hover-glow transition-all duration-300 fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-5xl">{category.icon}</div>
                                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                                <p className="text-3xl font-bold gradient-text">{category.count}</p>
                                <p className="text-gray-400 text-sm">Projects Completed</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
