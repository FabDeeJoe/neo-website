import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-primary',
        secondary:
          'bg-secondary text-white hover:bg-secondary-dark hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-secondary',
        gradient:
          'bg-gradient-to-r from-primary via-accent-blue to-secondary text-white hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-primary',
        outline:
          'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-primary',
        ghost:
          'text-foreground hover:bg-primary/10 hover:text-primary focus-visible:ring-primary',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-11 px-6',
        lg: 'h-14 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
