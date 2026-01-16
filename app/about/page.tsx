import { Metadata } from 'next'
import Button from '@/components/Button'

export const metadata: Metadata = {
    title: 'About Us | Dravex Innovations',
    description: 'Learn about Dravex Innovations and our mission to build custom software and hardware solutions.',
}

export default function AboutPage() {
    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Innovation First',
            description: 'We push boundaries and embrace cutting-edge technologies to deliver solutions that stand out.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            ),
            title: 'Quality Craftsmanship',
            description: 'Every line of code and every component is crafted with precision and attention to detail.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Client-Focused',
            description: 'Your success is our success. We work closely with you to understand and exceed your expectations.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Sustainability',
            description: 'We design with the future in mind, prioritizing modularity, repairability, and longevity.',
        },
    ]

    const expertise = [
        'Full-Stack Web Development',
        'Mobile App Development (iOS & Android)',
        'Browser Extension Development',
        'Hardware Design & Prototyping',
        'Cloud Architecture & DevOps',
        'UI/UX Design',
        'Database Design & Optimization',
        'API Development & Integration',
    ]

    return (
        <div className="gradient-bg min-h-screen">
            {/* Hero Section */}
            <section className="section pt-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold">
                            About <span className="gradient-text">Dravex Innovations</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300">
                            We're a team of passionate developers and engineers dedicated to creating innovative solutions that make a difference.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                            Our <span className="gradient-text">Mission</span>
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            At Dravex Innovations, we believe technology should solve real problems and improve lives. Our mission is to build custom software and hardware solutions that are not only functional and beautiful, but also sustainable and user-centric.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Whether it's a mobile app that helps collectors manage their treasures, a platform that revolutionizes real estate investing, or hardware that champions repairability, we approach every project with the same commitment to excellence and innovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="glass rounded-2xl p-8 hover-lift hover-glow transition-all duration-300 space-y-4 fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white glow">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="section bg-gradient-to-b from-transparent to-black/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Our <span className="gradient-text">Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Technologies and skills we've mastered
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {expertise.map((skill, index) => (
                            <div
                                key={index}
                                className="glass rounded-xl p-4 text-center hover-glow transition-all duration-300 fade-in"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <p className="text-gray-300 font-medium">{skill}</p>
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
                            Let's Work <span className="gradient-text">Together</span>
                        </h2>
                        <p className="text-xl text-gray-300">
                            Have a project in mind? We'd love to hear about it and discuss how we can help bring your vision to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" variant="primary" size="lg">
                                Get in Touch
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
