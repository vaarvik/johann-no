"use client"

import type { TooltipContentProps } from "@radix-ui/react-tooltip"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Paragraph } from "./typography/paragraph"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  arrowClassName,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & { arrowClassName?: string }) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className={cn("bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]", arrowClassName)} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

interface WithTooltipProps extends Omit<TooltipContentProps, "content"> {
  enabled?: boolean
  content: string | React.ReactNode
  children: React.ReactNode
  delayDuration?: number
  arrowClassName?: string
}

function WithTooltip({ children, enabled = true, content, className, arrowClassName, delayDuration = 0, asChild = true, ...props }: WithTooltipProps) {
  if (!enabled || !content)
    return <>{children}</>

  if (typeof content === "string") {
    content = <Paragraph className="max-w-[250px] whitespace-normal break-words" as="div">{content}</Paragraph>
  }

  return (
    <Tooltip delayDuration={delayDuration}>
      <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
      <TooltipContent
        className={cn(
          className,
        )}
        arrowClassName={arrowClassName}
        {...props}
      >
        {content}
      </TooltipContent>
    </Tooltip>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, WithTooltip }
