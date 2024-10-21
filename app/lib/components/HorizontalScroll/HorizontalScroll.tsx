'use client';

import { useHorizontalScroll } from '@/components/HorizontalScroll/services/useHorizontalScroll';
import { SpacingSizes } from '@/types/spacing';
import { ReactNode } from 'react';
import { getSpacingClassNames } from '../layout/services/utils/getSpacingClassNames';
import styles from './HorizontalScroll.module.scss';

interface Props {
  gap?: SpacingSizes;
  items: { content: (isVisible: boolean) => ReactNode }[];
}

export default function HorizontalScroll({ gap, items }: Props): JSX.Element {
  const {
    wrapperRef,
    containerRef,
    sectionRef,
    contentRef,
    itemRefs,
    visibleItems,
  } = useHorizontalScroll(0.5);

  const classNamesContent = [
    styles['horizontal-scroll__content'],
    ...getSpacingClassNames(gap, styles, 'horizontal-scroll__content--gap'),
  ];

  return (
    <div ref={wrapperRef}>
      <div
        className={styles['horizontal-scroll__container']}
        ref={containerRef}
      >
        <div className={styles['horizontal-scroll__strip']} ref={sectionRef}>
          <div className={classNamesContent.join(' ')} ref={contentRef}>
            {items.map((item, index) => (
              <div
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
