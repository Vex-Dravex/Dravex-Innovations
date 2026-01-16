import { Metadata } from 'next'
import Button from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'FRAMEWORK Dock | Dravex Innovations',
    description: 'Modular, repairable docking station designed around the Framework laptop philosophy of sustainability and user repairability.',
}

export default function FrameworkDockPage() {
    const features = [
        { title: 'Modular Design', description: 'Individual port modules can be swapped, upgraded, or replaced independently.', icon: '🔧' },
        { title: 'User Repairable', description: 'Designed for easy disassembly with standard tools and available repair guides.', icon: '🛠️' },
        { title: 'Thunderbolt 4', description: 'High-speed connectivity with up to 40Gbps data transfer and power delivery.', icon: '⚡' },
        { title: 'Multiple Ports', description: 'USB-C, USB-A, HDMI, DisplayPort, Ethernet, SD card, and audio ports.', icon: '🔌' },
        { title: 'Power Delivery', description: 'Up to 100W power delivery to charge your laptop and peripherals.', icon: '🔋' },
        { title: 'Sustainable Materials', description: 'Built with recyclable materials and designed for longevity.', icon: '♻️' },
        { title: 'Firmware Updates', description: 'Updateable firmware ensures compatibility with future devices.', icon: '💾' },
        { title: 'Open Source', description: 'Schematics and repair documentation available to the community.', icon: '📖' },
    ]

    const techStack = ['PCB Design', 'KiCad', 'USB-C', 'Thunderbolt 4', 'Power Delivery', 'Modular Architecture', 'Firmware Development', '3D CAD']

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
                                Hardware
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold">
                                <span className="gradient-text">FRAMEWORK Dock</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300">
                                A modular, repairable docking station that embodies the Framework laptop philosophy of sustainability, upgradability, and user empowerment.
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
                                The FRAMEWORK Dock is a revolutionary docking station designed to complement the Framework laptop's commitment to modularity and repairability. Unlike traditional docks that become obsolete when ports change, the FRAMEWORK Dock features swappable port modules.
                            </p>
                            <p>
                                Each port module can be individually replaced or upgraded, ensuring the dock remains relevant as technology evolves. Need to add a new USB-C port? Simply swap in a new module. Thunderbolt 5 comes out? Upgrade just that module without replacing the entire dock.
                            </p>
                            <p>
                                Built with sustainability in mind, the dock uses recyclable materials and is designed for easy disassembly. Complete repair documentation and schematics are available, empowering users to fix and modify their hardware. This is hardware designed to last decades, not years.
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
                        <h2 className="text-4xl md:text-5xl font-bold">Need <span className="gradient-text">Hardware Design</span>?</h2>
                        <p className="text-xl text-gray-300">We design innovative hardware products with sustainability and user repairability at the core.</p>
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
