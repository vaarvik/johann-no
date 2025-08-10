"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { initPosthog } from "@/components/providers/posthog-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heading } from "@/components/ui/typography/heading"
import { Paragraph } from "@/components/ui/typography/paragraph"

type ConsentStatus = "granted" | "denied"

const CONSENT_COOKIE_NAME = "johann_analytics_consent"

function readConsent(): ConsentStatus | null {
  if (typeof window === "undefined")
    return null
  const match = document.cookie.match(new RegExp(`${CONSENT_COOKIE_NAME}=([^;]+)`))
  const value = match?.[1]
  if (value === "granted" || value === "denied")
    return value
  return null
}

function persistConsent(status: ConsentStatus): void {
  if (typeof window === "undefined")
    return
  const oneYear = 60 * 60 * 24 * 365
  const isSecure = typeof window !== "undefined" && window.location.protocol === "https:"
  const secureAttr = isSecure ? "; Secure" : ""
  document.cookie = `${CONSENT_COOKIE_NAME}=${status}; Max-Age=${oneYear}; Path=/; SameSite=Lax${secureAttr}`
}

export default function CookieConsent() {
  const [visible, setVisible] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    const existing = readConsent()
    if (existing === "granted") {
      void initPosthog()
      setVisible(false)
    } else if (existing === "denied") {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, [])

  const accept = useCallback(() => {
    persistConsent("granted")
    void (async () => {
      await initPosthog()
      const posthog = (await import("posthog-js")).default
      // Ensure current page view is captured immediately without needing a refresh
      posthog.capture("$pageview")
    })()
    setVisible(false)
  }, [])

  const decline = useCallback(() => {
    persistConsent("denied")
    setVisible(false)
  }, [])

  if (!visible || pathname?.startsWith("/privacy"))
    return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 mb-4 flex justify-center px-4">
      <Card className="max-w-2xl w-full bg-slate-900/90 backdrop-blur border-2 border-slate-700 shadow-lg">
        <CardContent className="py-5">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex-1 text-center md:text-left">
              <Heading as="h3" level={4} className="text-white mb-2 ">Cookies and anonymous analytics</Heading>
              <Paragraph className="text-slate-300">
                We use PostHog (hosted in the EU) to collect anonymous data, such as page views and clicks, to help improve the website. We will store one cookie to remember your consent. Analytics cookies are only set if you accept. <Link href="/privacy" className="text-blue-300 hover:text-white transition-colors duration-200">Read privacy policy.</Link>
              </Paragraph>
            </div>
            <div className="flex shrink-0 items-center justify-center md:justify-end gap-3">
              <Button variant="primary" size="lg" onClick={accept} aria-label="Accept analytics cookies">
                Accept
              </Button>
              <Button variant="outline" size="lg" onClick={decline} aria-label="Decline analytics cookies">
                No thanks
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
