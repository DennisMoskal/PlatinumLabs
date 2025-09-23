"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Button-Styles. "brand" lässt dir die volle Kontrolle via zusätzlicher Klassen (z. B. Gradient).
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        brand: "", // für deinen Gradient via className (z. B. "maestro-btn")
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  /**
   * Rendert das Kind (z. B. <Link/>) als Root-Element.
   * Klasse & Props werden in das Kind gemerged – keine Extra-Dependency nötig.
   */
  asChild?: boolean
  children?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, type, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className)

    if (asChild) {
      // Erwartet exakt ein React-Element (z. B. <Link/> oder <a/>)
      const child = React.Children.only(children) as React.ReactElement<
        { className?: string } & React.HTMLAttributes<HTMLElement>
      >

      if (!React.isValidElement(child)) {
        // Fallback: normales Button-Element
        return (
          <button ref={ref} className={classes} type={type ?? "button"} {...props}>
            {children}
          </button>
        )
      }

      return React.cloneElement(child, {
        ...props,
        className: cn(child.props.className, classes),
      })
    }

    return (
      <button ref={ref} className={classes} type={type ?? "button"} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { buttonVariants }
