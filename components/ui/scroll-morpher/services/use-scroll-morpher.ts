import { useEffect, useRef, useState } from "react"
import { isElementVisible } from "@/lib/services/utils/isElementVisible"

export function useScrollMorpher(
  threshold = 0.2,
  direction: "horizontal" | "vertical" = "horizontal",
) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const isVertical = direction === "vertical"

    if (!wrapperRef.current || !sectionRef.current || !contentRef.current) {
      return
    }

    const initTimeout = requestAnimationFrame(() => {
      updateTransformation()
      updateSectionSize()
    })

    window.addEventListener("resize", updateSectionSize)
    window.addEventListener("scroll", updateTransformation)

    return () => {
      cancelAnimationFrame(initTimeout)
      window.removeEventListener("scroll", updateTransformation)
      window.removeEventListener("resize", updateSectionSize)
    }

    function updateSectionSize() {
      if (!wrapperRef.current || !contentRef.current)
        return
      if (typeof window === "undefined")
        return

      wrapperRef.current.style.height = isVertical
        ? "auto"
        : `${window.innerHeight + (contentRef.current.offsetWidth - window.innerWidth)}px`
    }

    function updateTransformation() {
      if (!wrapperRef.current || !sectionRef.current || !contentRef.current)
        return
      if (typeof window === "undefined")
        return

      const offset = Math.max(
        0,
        window.scrollY - (wrapperRef.current.offsetTop ?? 0),
      )

      const contentSize = isVertical
        ? contentRef.current.offsetHeight
        : contentRef.current.offsetWidth
      const windowSize = isVertical ? window.innerHeight : window.innerWidth
      const limit = contentSize - windowSize

      if (offset < limit) {
        const transformValue = isVertical
          ? `translate3d(0, -0px, 0)`
          : `translate3d(-${offset}px, 0, 0)`
        sectionRef.current.style.transform = transformValue
      }

      // Filter out null items and check visibility
      const visibleItems = itemRefs.current
        .filter(item => item !== null && item !== undefined)
        .map((item, index) =>
          isElementVisible(item, threshold) ? index : -1,
        )
        .filter(index => index !== -1)

      setVisibleItems(visibleItems)
    }
  }, [threshold, direction, wrapperRef, sectionRef, contentRef, itemRefs])

  return {
    visibleItems,
    wrapperRef,
    containerRef,
    sectionRef,
    contentRef,
    itemRefs,
  }
}
