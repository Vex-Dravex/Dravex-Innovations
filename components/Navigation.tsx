'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 ml-8">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center glow transition-all duration-300 group-hover:glow-strong">
                                <span className="text-white font-bold text-xl">D</span>
                            </div>
                            <span className="text-xl font-bold gradient-text hidden sm:block">
                                Dravex Innovations
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium whitespace-nowrap"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block flex-shrink-0">
                        <Link
                            href="/contact"
                            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium hover:from-purple-500 hover:to-purple-600 transition-all duration-200 glow hover:glow-strong"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-2 border-t border-white/10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block mx-4 mt-4 px-6 py-2.5 text-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium"
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
