import type { VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cva } from "class-variance-authority"
import * as React from "react"
import { cn } from "@/lib/utils"

const headingVariants = cva("", {
  variants: {
    color: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive",
      accent: "text-accent",
      muted: "text-muted-foreground",
    },
    level: {
      6: "text-base font-bold",
      5: "text-base font-bold",
      4: "text-lg font-bold",
      3: "text-xl font-bold",
      2: "text-2xl font-bold",
      1: "text-4xl font-bold",
    },
    size: {
      "xs": "text-xs",
      "sm": "text-sm",
      "md": "text-base",
      "lg": "text-lg",
      "xl": "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
  },
  defaultVariants: {
    color: "default",
    level: 6,
  },
})

type HeadingVariantProps = VariantProps<typeof headingVariants>
export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof HeadingVariantProps>,
  HeadingVariantProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"
  asChild?: boolean
}

function Heading({
  as: HTMLTag,
  asChild,
  children,
  className,
  color,
  level,
  size,
  ...props
}: HeadingProps) {
  const Comp = asChild
    ? Slot
    : (HTMLTag ?? (`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"))

  return (
    <Comp
      className={cn(
        headingVariants({
          color,
          level,
          size,
        }),
        "relative",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Heading, headingVariants }
