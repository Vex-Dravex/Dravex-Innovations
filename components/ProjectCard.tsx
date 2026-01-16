import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
    title: string
    description: string
    category: string
    techStack: string[]
    imageUrl?: string
    slug: string
    featured?: boolean
}

export default function ProjectCard({
    title,
    description,
    category,
    techStack,
    imageUrl,
    slug,
    featured = false,
}: ProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`} className="group block">
            <div className={`glass rounded-2xl overflow-hidden hover-lift hover-glow transition-all duration-300 h-full ${featured ? 'border-2 border-purple-500/50' : ''
                }`}>
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-900/20 to-purple-600/20 overflow-hidden">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center glow">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                        </div>
                    )}
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/90 text-white backdrop-blur-sm">
                            {category}
                        </span>
                    </div>
                    {featured && (
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/90 text-black backdrop-blur-sm">
                                Featured
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                            {description}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {techStack.slice(0, 4).map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 rounded-md text-xs bg-white/5 text-gray-300 border border-white/10"
                            >
                                {tech}
                            </span>
                        ))}
                        {techStack.length > 4 && (
                            <span className="px-2 py-1 rounded-md text-xs text-purple-400">
                                +{techStack.length - 4} more
                            </span>
                        )}
                    </div>

                    {/* View Project Link */}
                    <div className="flex items-center text-purple-400 font-medium text-sm group-hover:text-purple-300">
                        View Project
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}
