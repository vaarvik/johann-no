import type { VisibleThreshold } from "../utils/isElementVisible"
import { useEffect, useState } from "react"
import { isElementVisible } from "../utils/isElementVisible"

export function useVisibility(
  ref: React.RefObject<HTMLElement | null>,
  threshold: VisibleThreshold = 0.8,
) {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const checkVisibility = () =>
      setIsVisible(isElementVisible(ref.current!, threshold))
    checkVisibility()
    window.addEventListener("scroll", checkVisibility)
    return () => window.removeEventListener("scroll", checkVisibility)
  }, [ref, threshold])
  return isVisible
}
