"use client"

import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useYearCount } from "./service/useYearCount"

const yearCounterVariants = cva(
  "inline-flex items-end justify-center",
  {
    variants: {
      variant: {
        default: "text-foreground",
        primary: "text-primary",
        secondary: "text-secondary-foreground",
        muted: "text-muted-foreground",
        accent: "text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface YearCounterProps
  extends React.ComponentProps<"div">,
  VariantProps<typeof yearCounterVariants> {
  startDate: Date
  decimals: number
}

function YearCounter({
  className,
  variant,
  startDate,
  decimals,
  ...props
}: YearCounterProps) {
  const yearCount = useYearCount(startDate).toFixed(decimals)
  const digits = yearCount.split("")

  return (
    <div
      className={cn(yearCounterVariants({ variant }), className)}
      {...props}
    >
      {digits.map((digit, index) => ({ id: digit + index, value: digit })).map(({ id, value }, index) => {
        const fontSize = 1 * (0.75 ** index)
        const curve = 1.1
        const opacity = 1 - ((index / (decimals - 1)) ** curve)

        return (
          <span
            key={id}
            className="transition-all duration-200"
            style={{
              fontSize: `${fontSize}em`,
              opacity: opacity.toFixed(2),
            }}
          >
            {value}
          </span>
        )
      })}
    </div>
  )
}

export { YearCounter, yearCounterVariants }
