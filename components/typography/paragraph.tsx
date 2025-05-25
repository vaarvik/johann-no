import type { VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import * as React from "react"
import { cn } from "@/lib/utils"

const paragraphVariants = cva("", {
  variants: {
    color: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive",
      success: "text-green-600",
      accent: "text-accent",
      muted: "text-muted-foreground",
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
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    defaultVariants: {
      color: "default",
      size: "md",
      weight: "normal",
    },
  },
})

type ParagraphVariantProps = VariantProps<typeof paragraphVariants>
export interface ParagraphProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof ParagraphVariantProps>,
  ParagraphVariantProps {
  as?: "p" | "span" | "div"
  asChild?: boolean
}

function Paragraph({
  as: HTMLTag = "p",
  asChild,
  children,
  className,
  color,
  size,
  weight,
  ...props
}: ParagraphProps) {
  const Comp = asChild ? Slot : HTMLTag

  return (
    <Comp
      className={cn(
        paragraphVariants({
          color,
          size,
          weight,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Paragraph, paragraphVariants }
