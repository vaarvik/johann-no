export type VisibleThreshold = number | { x: number, y: number }

export function isElementVisible(
  element: HTMLElement,
  threshold: VisibleThreshold,
): boolean {
  // Validate threshold
  if (typeof threshold === "number") {
    if (threshold > 1 || threshold < 0) {
      throw new Error("Threshold must be between 0 and 1")
    }
  } else if (typeof threshold === "object") {
    if (
      typeof threshold.x !== "number"
      || typeof threshold.y !== "number"
      || threshold.x < 0
      || threshold.x > 1
      || threshold.y < 0
      || threshold.y > 1
    ) {
      throw new Error(
        "Threshold.x and threshold.y must be numbers between 0 and 1",
      )
    }
  } else {
    throw new TypeError("Invalid threshold type")
  }

  const rect = element.getBoundingClientRect()
  const elementArea = rect.width * rect.height

  const visibleWidth = Math.max(
    0,
    Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0),
  )
  const visibleHeight = Math.max(
    0,
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0),
  )
  const visibleArea = visibleWidth * visibleHeight

  if (typeof threshold === "number") {
    return visibleArea / elementArea >= threshold
  } else {
    const widthVisible = visibleWidth / rect.width >= threshold.x
    const heightVisible = visibleHeight / rect.height >= threshold.y
    return widthVisible && heightVisible
  }
}
