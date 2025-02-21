import styles from '@/assets/scss/animation.module.scss';
import { AnimationProps } from '@/types/animations';
import { useEffect, useRef, useState } from 'react';
import { generateClassNamesByStringOrObject } from '../utils/generateClassNamesByStringOrObject';
import { VisibleThreshold } from '../utils/isElementVisible';
import { useVisibility } from './useVisibility';
import { useWrapper } from './useWrapper';

interface UseAnimationProps {
  animations: AnimationProps;
  wrapper?: {
    classes?: string[];
    tag?: keyof HTMLElementTagNameMap;
  };
  triggerThreshold?: VisibleThreshold;
}

export function useAnimation<T extends HTMLElement>({
  animations,
  wrapper = { classes: ['animation-wrapper'] },
  triggerThreshold = 0.8,
}: UseAnimationProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const elementRef = useRef<T | null>(null);
  const wrapperRef = useWrapper(elementRef, wrapper.classes ?? [], wrapper.tag);
  const isVisible = useVisibility(wrapperRef, triggerThreshold);
  const initClasses = [
    styles.animation,
    ...generateClassNamesByStringOrObject(animations, styles, 'animation'),
  ];
  const [animationClasses, setAnimationClasses] =
    useState<string[]>(initClasses);

  useEffect(() => {
    if (!elementRef.current) return;
    if (!isInitialized) {
      setIsInitialized(true);
    }

    setAnimationClasses(prevClasses => {
      const newClasses = [
        ...initClasses,
        isVisible ? styles['animation--visible'] : '',
        isInitialized ? styles['animation--init'] : '',
      ];
      return prevClasses.join(' ') !== newClasses.join(' ')
        ? newClasses
        : prevClasses;
    });
  }, [isVisible, isInitialized, animations]);

  return { classes: animationClasses, ref: elementRef };
}
