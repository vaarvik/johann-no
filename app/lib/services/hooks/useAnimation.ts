import { AnimationProps } from '@/types/animations';
import { useEffect, useRef, useState } from 'react';
import { generateClassNamesByStringOrObject } from '../utils/generateClassNamesByStringOrObject';
import { isElementVisible } from '../utils/isElementVisible';
import styles from './useAnimation.module.scss';

interface UseAnimationProps {
  animations: AnimationProps;
}

export function useAnimation({ animations }: UseAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [animationClasses, setAnimationClasses] = useState<string[]>([
    styles['animation'],
  ]);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const checkVisibility = () => {
      if (elementRef.current) {
        const visible = isElementVisible(elementRef.current, 0.8);
        // ✅ Only update state if visibility actually changed (prevents infinite loop)
        setIsVisible(prevVisible => {
          if (prevVisible !== visible) return visible;
          return prevVisible; // No change, prevents re-render
        });
      }
    };

    // Initial check
    checkVisibility();

    // Listen for scroll events
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true);
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

      return prevClasses; // No change, prevents re-render
    });
  }, [isVisible, isInitialized, animations]);

  return { classes: animationClasses, ref: elementRef };
}
