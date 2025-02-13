import styles from '@/assets/scss/animation.module.scss';
import { AnimationProps } from '@/types/animations';
import { useEffect, useRef, useState } from 'react';
import { generateClassNamesByStringOrObject } from '../utils/generateClassNamesByStringOrObject';
import { isElementVisible } from '../utils/isElementVisible';

interface UseAnimationProps {
  animations: AnimationProps;
  wrapper?: {
    classes?: string[];
    tag?: keyof HTMLElementTagNameMap;
  };
}

export function useAnimation<T extends HTMLElement>({
  animations,
  wrapper = { classes: ['animation-wrapper'] },
}: UseAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [animationClasses, setAnimationClasses] = useState<string[]>([
    styles['animation'],
  ]);
  const elementRef = useRef<T | null>(null);
  const wrapperRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const checkVisibility = () => {
      if (wrapperRef.current) {
        const visible = isElementVisible(wrapperRef.current, 1);
        if (isVisible !== visible) {
          setIsVisible(visible);
        }
      }
    };

    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [isVisible, isInitialized]);

  useEffect(() => {
    if (!elementRef.current) return;

    if (!isInitialized) {
      setIsInitialized(true);

      const wrapperElement = document.createElement(wrapper.tag ?? 'div');
      elementRef.current?.parentNode?.insertBefore(
        wrapperElement,
        elementRef.current,
      );
      wrapperElement.appendChild(elementRef.current);
      if (wrapper.classes) {
        wrapperElement.classList.add(...wrapper.classes);
      }
      wrapperRef.current = wrapperElement;
    }

    setAnimationClasses(prevClasses => {
      const newClasses = [
        ...generateClassNamesByStringOrObject(animations, styles, `animation`),
        styles['animation'],
        isVisible ? styles['animation--visible'] : '',
        isInitialized ? styles['animation--init'] : '',
      ];

      if (prevClasses.join(' ') !== newClasses.join(' ')) {
        return newClasses;
      }

      return prevClasses;
    });
  }, [isVisible, isInitialized, animations, wrapper]);

  return { classes: animationClasses, ref: elementRef };
}
