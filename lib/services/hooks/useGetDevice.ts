import type { ScreenSizes } from "@/types/layout"
import { useEffect, useState } from "react"
import { SCREEN_SIZES_MAP } from "@/constants"

export function useGetDevice() {
  const [device, setDevice] = useState<ScreenSizes>("mobile")

  const handleResize = () => {
    if (window.innerWidth >= SCREEN_SIZES_MAP["large-desktop"]) {
      setDevice("large-desktop")
    } else if (window.innerWidth >= SCREEN_SIZES_MAP.desktop) {
      setDevice("desktop")
    } else if (window.innerWidth >= SCREEN_SIZES_MAP.tablet) {
      setDevice("tablet")
    } else {
      setDevice("mobile")
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return device
}
