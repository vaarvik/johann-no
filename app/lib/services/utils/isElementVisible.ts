export function isElementVisible(
  element: HTMLElement,
  threshold: number,
): boolean {
  if (threshold > 1 || threshold < 0) {
    throw new Error('Threshold must be between 0 and 1');
  }

  const rect = element.getBoundingClientRect();
  const elementArea = rect.width * rect.height;
  const visibleWidth = Math.max(
    0,
    Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0),
  );
  const visibleHeight = Math.max(
    0,
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0),
  );
  const visibleArea = visibleWidth * visibleHeight;

  return visibleArea / elementArea >= threshold;
}
