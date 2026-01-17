import Button from '@/components/Button'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'

export default function Home() {
  const projects = [
    {
      title: 'MasterSet',
      slug: 'masterset',
      category: 'Mobile App',
      description: 'A comprehensive mobile app for TCG collectors and vendors to track collections, card values, and completion progress.',
      techStack: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      featured: true,
    },
    {
      title: 'Creative Finance Platform',
      slug: 'creative-finance',
      category: 'Web SaaS',
      description: 'Full-featured platform with marketplace, verified contractor profiles, community forum, education center, and custom CRM tools for real estate investors.',
      techStack: ['Next.js', 'Supabase', 'PostgreSQL', 'Stripe', 'TypeScript'],
      featured: true,
    },
    {
      title: 'Real Estate Browser Extension',
      slug: 'real-estate-extension',
      category: 'Browser Extension',
      description: 'Intelligent extension that scrapes addresses, pulls MLS data, provides contact info, and recommends creative finance strategies.',
      techStack: ['TypeScript', 'Chrome API', 'React', 'MLS Integration'],
      featured: true,
    },
    {
      title: 'FRAMEWORK Dock',
      slug: 'framework-dock',
      category: 'Hardware',
      description: 'Modular, repairable docking station designed around the Framework laptop philosophy of sustainability and user repairability.',
      techStack: ['PCB Design', 'USB-C', 'Thunderbolt', 'Modular Design'],
      featured: true,
    },
  ]

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks and best practices.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Browser Extensions',
      description: 'Powerful browser extensions that enhance productivity and user experience.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'Hardware Solutions',
      description: 'Innovative hardware products focused on modularity and sustainability.',
    },
  ]

  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-10 fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-600/10 text-purple-300 border border-purple-500/20 backdrop-blur-sm">
                🚀 Innovation Meets Excellence
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Building the Future with
              <br />
              <span className="gradient-text">Custom Solutions</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We create cutting-edge software and hardware solutions that solve real-world problems for businesses and consumers.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button href="/projects" variant="primary" size="lg">
                View Our Work
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover-lift hover-glow transition-all duration-300 flex flex-col space-y-4 fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-slate-800 border border-purple-500/30 flex items-center justify-center text-purple-400 glow-purple flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:text-purple-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button href="/services" variant="secondary" size="lg">
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Innovative solutions we've built for real-world challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/projects" variant="primary" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center space-y-8 glow">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Build Something <span className="gradient-text">Amazing</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button href="/contact" variant="primary" size="lg">
                Start Your Project
              </Button>
              <Button href="/about" variant="secondary" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
