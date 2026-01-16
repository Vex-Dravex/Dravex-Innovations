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
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantStyles = {
        primary: 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-500 hover:to-purple-600 glow hover:glow-strong',
        secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/20',
        outline: 'bg-transparent text-purple-400 border-2 border-purple-500 hover:bg-purple-500/10',
    }

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3 text-lg',
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
