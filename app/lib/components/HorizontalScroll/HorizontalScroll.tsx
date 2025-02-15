'use client';

import { useHorizontalScroll } from '@/components/HorizontalScroll/services/useHorizontalScroll';
import classNames from '@/services/utils/classNames';
import { generateClassNamesByStringOrObject } from '@/services/utils/generateClassNamesByStringOrObject';
import { SpacingVariantXY } from '@/types/spacing';
import { ReactNode } from 'react';
import styles from './HorizontalScroll.module.scss';

interface Props {
  gap?: SpacingVariantXY;
  items: {
    content: (isVisible: boolean) => ReactNode;
  }[];
  direction?: 'horizontal' | 'vertical';
}

export default function HorizontalScroll({
  gap = '0',
  items,
  direction = 'horizontal',
}: Props) {
  const {
    wrapperRef,
    containerRef,
    sectionRef,
    contentRef,
    itemRefs,
    visibleItems,
  } = useHorizontalScroll(0.7, direction);

  const gapClassNames = generateClassNamesByStringOrObject(
    gap,
    styles,
    'horizontal-scroll__content--gap',
  );

  return (
    <div ref={wrapperRef}>
      <div
        className={classNames(
          styles['horizontal-scroll__container'],
          direction === 'vertical' &&
            styles['horizontal-scroll__container--vertical'],
        )}
        ref={containerRef}
      >
        <div className={styles['horizontal-scroll__strip']} ref={sectionRef}>
          <div
            className={classNames(
              styles['horizontal-scroll__content'],
              ...gapClassNames,
            )}
            ref={contentRef}
          >
            {items.map((item, index) => (
              <div
                className={styles['horizontal-scroll__item']}
                ref={el => {
                  if (el) {
                    itemRefs.current[index] = el;
                  }
                }}
                key={index}
              >
                {item.content(visibleItems.includes(index))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
