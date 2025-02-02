import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to create a horizontal scroll effect
 * @param threshold - The threshold for an item to be considered visible
 * @returns The refs for the wrapper, container, section, content, and items, as well as the indices of the visible items
 */
export function useHorizontalScroll(threshold = 0.2) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  if (threshold > 1 || threshold < -1)
    throw Error('Threshold must be between -1 and 1');

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const wrapperElement = wrapperRef.current;
    const contentElement = contentRef.current;
    const itemElements = itemRefs.current;
    if (!wrapperElement || !sectionElement || !contentElement) {
      throw new Error(
        'All elements must be defined: sectionRef, wrapperRef, and contentRef',
      );
    }

    const updateSectionHeight = (): void => {
      const sectionWidth = contentElement.offsetWidth;
      wrapperElement.style.height = `${
        window.innerHeight + (sectionWidth - window.innerWidth)
      }px`;
    };

    const onScroll = (): void => {
      const offsetTop = wrapperElement.offsetTop;
      const contentWidth = contentElement.offsetWidth;

      let amount = window.scrollY - offsetTop;
      console.log(amount, window.scrollY, offsetTop);
      console.log(contentWidth, window.innerWidth);
      amount = amount < 0 ? 0 : amount;

      if (amount < contentWidth - window.innerWidth) {
        sectionElement.style.transform = `translate3d(-${amount}px, 0, 0)`;
      }

      const visibleItemsIndices: number[] = [];
      itemElements.forEach((item, index) => {
        if (isElementVisible(item, threshold)) {
          visibleItemsIndices.push(index);
        }
      });
      setVisibleItems(visibleItemsIndices);
    };

    const isElementVisible = (
      element: HTMLDivElement,
      threshold: number,
    ): boolean => {
      const rect = element.getBoundingClientRect();

      const elementWidth = rect.width;
      const elementHeight = rect.height;

      // Calculate how much of the element is currently visible (in the viewport)
      const visibleWidth =
        Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      // Element is visible if the visible width/height is more than the threshold of its total width/height
      const visibleWidthRatio = visibleWidth / elementWidth;
      const visibleHeightRatio = visibleHeight / elementHeight;

      return visibleWidthRatio >= threshold && visibleHeightRatio >= threshold;
    };

    updateSectionHeight();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updateSectionHeight);

    return (): void => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateSectionHeight);
    };
  }, [threshold]);

  return {
    wrapperRef,
    containerRef,
    sectionRef,
    contentRef,
    itemRefs,
    visibleItems,
  };
}
