import { Metadata } from 'next'
import Button from '@/components/Button'

export const metadata: Metadata = {
    title: 'Our Services | Dravex Innovations',
    description: 'Explore our comprehensive software and hardware development services including web apps, mobile apps, browser extensions, and custom hardware.',
}

export default function ServicesPage() {
    const services = [
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Custom Web Development',
            description: 'Build powerful, scalable web applications tailored to your business needs.',
            features: [
                'Full-stack web applications',
                'E-commerce platforms',
                'SaaS products',
                'Progressive Web Apps (PWAs)',
                'API development & integration',
                'Database design & optimization',
            ],
            technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Supabase'],
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Mobile App Development',
            description: 'Create engaging mobile experiences for iOS and Android platforms.',
            features: [
                'Native iOS & Android apps',
                'Cross-platform development',
                'App Store optimization',
                'Push notifications',
                'Offline functionality',
                'Real-time data sync',
            ],
            technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Desktop Applications',
            description: 'Develop robust desktop software for Windows, macOS, and Linux.',
            features: [
                'Cross-platform desktop apps',
                'Native performance',
                'System integration',
                'Auto-updates',
                'Offline-first design',
                'Custom UI/UX',
            ],
            technologies: ['Electron', 'Tauri', 'Qt', 'C++', '.NET'],
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            title: 'Browser Extensions',
            description: 'Enhance browser functionality with powerful, user-friendly extensions.',
            features: [
                'Chrome, Firefox, Edge support',
                'Content script injection',
                'Background workers',
                'Data scraping & analysis',
                'Third-party API integration',
                'User data privacy',
            ],
            technologies: ['TypeScript', 'Chrome API', 'WebExtensions', 'React'],
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            title: 'Hardware Solutions',
            description: 'Design and prototype innovative hardware products with sustainability in mind.',
            features: [
                'PCB design & prototyping',
                'Modular architecture',
                'Repairability focus',
                '3D modeling & printing',
                'Firmware development',
                'Manufacturing coordination',
            ],
            technologies: ['KiCad', 'Fusion 360', 'Arduino', 'Raspberry Pi', 'C/C++'],
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            ),
            title: 'Full-Stack Integration',
            description: 'Seamlessly integrate all your systems and services for maximum efficiency.',
            features: [
                'Third-party API integration',
                'Microservices architecture',
                'Cloud infrastructure setup',
                'CI/CD pipeline implementation',
                'Database migration',
                'Performance optimization',
            ],
            technologies: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Vercel', 'GitHub Actions'],
        },
    ]

    return (
        <div className="gradient-bg min-h-screen">
            {/* Hero Section */}
            <section className="section pt-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold">
                            Our <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300">
                            Comprehensive software and hardware solutions to bring your vision to life
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="glass rounded-3xl p-8 hover-lift hover-glow transition-all duration-300 space-y-6 fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Icon & Title */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white glow flex-shrink-0">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                        <p className="text-gray-400">{service.description}</p>
                                    </div>
                                </div>

                                {/* Features */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3">What We Offer:</h4>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-gray-300">
                                                <svg className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full text-sm bg-white/5 text-purple-300 border border-purple-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section bg-gradient-to-b from-transparent to-black/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Our <span className="gradient-text">Process</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A proven approach to delivering exceptional results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
                            { step: '02', title: 'Design', desc: 'Creating detailed plans and prototypes' },
                            { step: '03', title: 'Development', desc: 'Building with best practices' },
                            { step: '04', title: 'Delivery', desc: 'Testing, deployment, and support' },
                        ].map((phase, index) => (
                            <div
                                key={index}
                                className="glass rounded-2xl p-6 text-center space-y-3 hover-glow transition-all duration-300 fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-5xl font-bold gradient-text">{phase.step}</div>
                                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                                <p className="text-gray-400 text-sm">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-strong rounded-3xl p-12 md:p-16 text-center space-y-8 glow max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Ready to Get <span className="gradient-text">Started</span>?
                        </h2>
                        <p className="text-xl text-gray-300">
                            Let's discuss your project and find the perfect solution for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" variant="primary" size="lg">
                                Contact Us
                            </Button>
                            <Button href="/projects" variant="secondary" size="lg">
                                View Our Work
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
