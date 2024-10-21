import { MutableRefObject, useEffect, useRef, useState } from 'react';

export function useHorizontalScroll(threshold = 0.2): {
  wrapperRef: MutableRefObject<HTMLDivElement>;
  containerRef: MutableRefObject<HTMLDivElement>;
  sectionRef: MutableRefObject<HTMLDivElement>;
  contentRef: MutableRefObject<HTMLDivElement>;
  itemRefs: MutableRefObject<HTMLDivElement[]>;
  visibleItems: number[]; // Array of indices of visible items
} {
  const wrapperRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const containerRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const sectionRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const contentRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
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
      throw new Error('All elements must be defined');
    }

    const updateSectionHeight = (): void => {
      const sectionWidth = contentElement.offsetWidth;
      wrapperElement.style.height = `${
        window.innerHeight + sectionWidth - window.innerWidth
      }px`;
    };

    const onScroll = (): void => {
      const offsetTop = wrapperElement.offsetTop;
      const sectionWidth = contentElement.offsetWidth;

      let amount = window.scrollY - offsetTop;
      amount = amount < 0 ? 0 : amount;

      if (amount < sectionWidth - window.innerWidth) {
        sectionElement.style.transform = `translate3d(-${amount}px, 0, 0)`;
      }

      // Check visibility of each item element
      const visibleItemsIndices: number[] = [];
      itemElements.forEach((item, index) => {
        if (isElementVisible(item, threshold)) {
          visibleItemsIndices.push(index);
        }
      });
      setVisibleItems(visibleItemsIndices); // Update the state with visible items
    };

    const isElementVisible = (
      element: HTMLDivElement,
      threshold: number,
    ): boolean => {
      const rect = element.getBoundingClientRect();

      // Calculate the width and height of the visible portion of the element
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
    visibleItems, // Return the currently visible items' indices
  };
}
