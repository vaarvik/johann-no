import { isElementVisible } from '@/services/utils/isElementVisible';
import { RefObject, useEffect, useRef, useState } from 'react';

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return mobile;
}

function useScrollAnimation(
  vertical = false,
  contentRef: RefObject<HTMLDivElement | null>,
  sectionRef: RefObject<HTMLDivElement | null>,
  wrapperRef: RefObject<HTMLDivElement | null>,
  threshold: number,
) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!wrapperRef.current || !sectionRef.current || !contentRef.current) {
      throw new Error(
        'All elements must be defined: wrapperRef, sectionRef, and contentRef.',
      );
    }

    const handleScroll = () => {
      const offset = Math.max(
        0,
        window.scrollY - (wrapperRef.current!.offsetTop ?? 0),
      );

      const limit =
        (vertical
          ? contentRef.current!.offsetHeight
          : contentRef.current!.offsetWidth) -
        (vertical ? window.innerHeight : window.innerWidth);

      if (offset < limit) {
        sectionRef.current!.style.transform = vertical
          ? `translate3d(0, -${offset}px, 0)`
          : `translate3d(-${offset}px, 0, 0)`;
      }

      setVisibleItems(
        itemRefs
          .current!.map((item, index) =>
            isElementVisible(item, threshold) ? index : -1,
          )
          .filter(index => index !== -1),
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [vertical, contentRef, sectionRef, wrapperRef, threshold]);

  return { itemRefs, visibleItems };
}

export function useHorizontalScroll(
  threshold = 0.2,
  mobileScrollDirection: 'horizontal' | 'vertical' = 'horizontal',
) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { itemRefs, visibleItems } = useScrollAnimation(
    isMobile && mobileScrollDirection === 'vertical',
    contentRef,
    sectionRef,
    wrapperRef,
    threshold,
  );

  useEffect(() => {
    updateSectionSize();
    window.addEventListener('resize', updateSectionSize);

    return () => {
      window.removeEventListener('resize', updateSectionSize);
    };

    function updateSectionSize() {
      wrapperRef.current!.style.height =
        isMobile && mobileScrollDirection === 'vertical'
          ? 'auto'
          : `${window.innerHeight + (contentRef.current!.offsetWidth - window.innerWidth)}px`;
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
