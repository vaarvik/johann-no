"use client"

import { useEffect } from "react"

type ConsentStatus = "granted" | "denied"

const CONSENT_COOKIE_NAME = "johann_analytics_consent"

function readConsentCookie(): ConsentStatus | null {
  if (typeof window === "undefined")
    return null
  const match = document.cookie.match(new RegExp(`${CONSENT_COOKIE_NAME}=([^;]+)`))
  const value = match?.[1]
  return value === "granted" || value === "denied" ? value : null
}

let isInitialized = false

export async function initPosthog(): Promise<void> {
  if (isInitialized)
    return
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (!key)
    return

  const posthog = (await import("posthog-js")).default
  posthog.init(key, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    defaults: "2025-05-24",
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
  })

  isInitialized = true
}

export function hasInitializedPosthog(): boolean {
  return isInitialized
}

export function PosthogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const consent = readConsentCookie()
    if (consent === "granted") {
      void initPosthog()
    }
  }, [])

  return children
}
