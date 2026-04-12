import Link from 'next/link'

type Variant = 'primary' | 'ghost' | 'secondary'
type Size = 'sm' | 'md' | 'lg'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'btn-primary',
  ghost: 'btn-ghost',
  secondary: 'btn-secondary',
}

const sizeClasses: Record<Size, string> = {
  sm: 'text-sm py-2 px-4',
  md: 'text-base py-3 px-6',
  lg: 'text-lg py-4 px-8',
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: CTAButtonProps) {
  const classes = `${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
