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
        <Link href={`/projects/${slug}`} className="group block h-full">
            <div className={`glass rounded-2xl overflow-hidden hover-lift hover-glow transition-all duration-300 h-full flex flex-col ${featured ? 'border-2 border-purple-500/20' : ''
                }`}>
                {/* Image */}
                <div className="relative h-48 bg-slate-900/50 overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-slate-800 border border-purple-500/30 flex items-center justify-center glow-purple transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500/50">
                                <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                        </div>
                    )}
                    {/* Badges Container */}
                    <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                        {featured && (
                            <span className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold bg-amber-500 text-black shadow-lg">
                                Featured
                            </span>
                        )}
                        <span className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold bg-slate-900/90 text-purple-400 border border-purple-500/30 backdrop-blur-sm ml-auto">
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                            {title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                            {description}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {techStack.slice(0, 4).map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 rounded-md text-[10px] font-mono bg-white/5 text-gray-400 border border-white/10 group-hover:border-purple-500/30 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                        {techStack.length > 4 && (
                            <span className="px-3 py-1.5 rounded-md text-[10px] text-purple-400/70 font-mono">
                                +{techStack.length - 4} MORE
                            </span>
                        )}
                    </div>

                    {/* View Project Link */}
                    <div className="flex items-center text-purple-400 font-bold text-xs uppercase tracking-widest group-hover:text-purple-300 pt-2 transition-colors">
                        View Project
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}
