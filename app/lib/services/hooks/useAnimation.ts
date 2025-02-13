import styles from '@/assets/scss/animation.module.scss';
import { AnimationProps } from '@/types/animations';
import { useEffect, useRef, useState } from 'react';
import { generateClassNamesByStringOrObject } from '../utils/generateClassNamesByStringOrObject';
import { isElementVisible } from '../utils/isElementVisible';
import { useWrapper } from './useWrapper';

interface UseAnimationProps {
  animations: AnimationProps;
  wrapper?: {
    classes?: string[];
    tag?: keyof HTMLElementTagNameMap;
  };
  triggerThreshold?: number;
}

function useVisibility(
  ref: React.RefObject<HTMLElement | null>,
  threshold = 0.8,
) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const checkVisibility = () =>
      setIsVisible(isElementVisible(ref.current!, threshold));
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [ref, threshold]);
  return isVisible;
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
  const [animationClasses, setAnimationClasses] = useState<string[]>([
    styles.animation,
  ]);

  useEffect(() => {
    if (!elementRef.current) return;
    if (!isInitialized) {
      setIsInitialized(true);
    }

    setAnimationClasses(prevClasses => {
      const newClasses = [
        ...generateClassNamesByStringOrObject(animations, styles, 'animation'),
        styles.animation,
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
