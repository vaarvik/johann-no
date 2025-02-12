import { isElementVisible } from '@/services/utils/isElementVisible';
import { useEffect, useRef, useState } from 'react';

export function useHorizontalScroll(
  threshold = 0.2,
  mobileScrollDirection: 'horizontal' | 'vertical' = 'horizontal',
) {
  if (threshold > 1 || threshold < -1) {
    throw new Error('Threshold must be between -1 and 1');
  }

  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (!wrapperRef.current || !sectionRef.current || !contentRef.current) {
      throw new Error(
        'All elements must be defined: wrapperRef, sectionRef, and contentRef.',
      );
    }

    updateSectionSize();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updateSectionSize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateSectionSize);
    };

    function isVertical() {
      return isMobile && mobileScrollDirection === 'vertical';
    }

    function updateSectionSize() {
      setIsMobile(window.innerWidth < 768);
      wrapperRef.current!.style.height = isVertical()
        ? 'auto'
        : `${window.innerHeight + (contentRef.current!.offsetWidth - window.innerWidth)}px`;
    }

    function onScroll() {
      const offsetTop = wrapperRef.current!.offsetTop;
      const contentSize = isVertical()
        ? contentRef.current!.offsetHeight
        : contentRef.current!.offsetWidth;
      const scrollAmount = Math.max(0, window.scrollY - offsetTop);
      const maxScroll =
        contentSize - (isVertical() ? window.innerHeight : window.innerWidth);

      if (scrollAmount < maxScroll) {
        sectionRef.current!.style.transform = isVertical()
          ? `translate3d(0, -${scrollAmount}px, 0)`
          : `translate3d(-${scrollAmount}px, 0, 0)`;
      }

      setVisibleItems(
        itemRefs
          .current!.map((item, index) =>
            isElementVisible(item, threshold) ? index : -1,
          )
          .filter(index => index !== -1),
      );
    }
  }, [
    threshold,
    isMobile,
    mobileScrollDirection,
    wrapperRef,
    sectionRef,
    contentRef,
    itemRefs,
  ]);

  return {
    visibleItems,
    wrapperRef,
    containerRef,
    sectionRef,
    contentRef,
    itemRefs,
  };
}
