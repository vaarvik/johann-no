import type { VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const listVariants = cva("list", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    color: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive",
      accent: "text-accent",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  },
})

type ListVariantProps = VariantProps<typeof listVariants>
export interface ListProps
  extends Omit<React.HTMLAttributes<HTMLOListElement | HTMLUListElement>, keyof ListVariantProps>,
  ListVariantProps {
  ordered?: boolean
}

export default function List({ children, ordered, className, color, size, ...props }: ListProps) {
  const HTMLTag = ordered ? "ol" : "ul"

  return (
    <HTMLTag
      className={cn(
        ordered ? "list-decimals" : "list-disc",
        "list-inside",
        listVariants({ color, size }),
        className,
      )}
      {...props}
    >
      {children}
    </HTMLTag>
  )
}

export function ListItem({
  children,
  className,
  ...props
}: { children: ReactNode } & React.ComponentProps<"li">) {
  return (
    <li className={cn("list-item", className)} {...props}>
      {children}
    </li>
  )
}
