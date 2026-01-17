import Link from 'next/link'

interface ButtonProps {
    children: React.ReactNode
    href?: string
    onClick?: () => void
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
}

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    type = 'button',
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group whitespace-nowrap w-fit'

    const variantStyles = {
        primary: 'bg-gradient-to-r from-purple-700 to-slate-800 text-white hover:from-purple-600 hover:to-slate-700 shadow-lg hover:shadow-purple-500/30',
        secondary: 'bg-gradient-to-r from-amber-600 to-amber-700 text-black hover:from-amber-500 hover:to-amber-600 shadow-lg hover:shadow-amber-500/50 font-semibold',
        outline: 'bg-transparent text-purple-300 border-2 border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-400/50',
    }

    const sizeStyles = {
        sm: 'px-5 py-2 text-sm',
        md: 'px-8 py-3 text-base',
        lg: 'px-10 py-4 text-lg',
    }

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        )
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedClassName}
        >
            {children}
        </button>
    )
}
