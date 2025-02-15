'use client';

import { useScrollMorpher } from '@/components/ScrollMorpher/services/useScrollMorpher';
import classNames from '@/services/utils/classNames';
import { generateClassNamesByStringOrObject } from '@/services/utils/generateClassNamesByStringOrObject';
import { SpacingVariantXY } from '@/types/spacing';
import { ReactNode } from 'react';
import styles from './ScrollMorpher.module.scss';

interface Props {
  gap?: SpacingVariantXY;
  items: {
    content: (isVisible: boolean) => ReactNode;
  }[];
  direction?: 'horizontal' | 'vertical';
}

export default function ScrollMorpher({
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
  } = useScrollMorpher(0.7, direction);

  const gapClassNames = generateClassNamesByStringOrObject(
    gap,
    styles,
    'scroll-morpher__content--gap',
  );

  return (
    <div ref={wrapperRef}>
      <div
        className={classNames(
          styles['scroll-morpher__container'],
          direction === 'vertical' &&
            styles['scroll-morpher__container--vertical'],
        )}
        ref={containerRef}
      >
        <div className={styles['scroll-morpher__strip']} ref={sectionRef}>
          <div
            className={classNames(
              styles['scroll-morpher__content'],
              ...gapClassNames,
            )}
            ref={contentRef}
          >
            {items.map((item, index) => (
              <div
                className={styles['scroll-morpher__item']}
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
