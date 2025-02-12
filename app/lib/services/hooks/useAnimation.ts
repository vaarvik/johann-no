import { ScreenOptions } from '@/types/layout';
import { useEffect, useRef, useState } from 'react';
import { generateClassNamesByStringOrObject } from '../utils/generateClassNamesByStringOrObject';
import { isElementVisible } from '../utils/isElementVisible';
import styles from './useAnimation.module.scss';

export type AnimationDelayValues = 200 | 500 | 700 | 1000 | 1500 | 2000;
export type AnimationDurationValues = 200 | 500 | 700 | 1000 | 1500 | 2000;
export type AnimationFadeValues =
  | '0'
  | '50px'
  | '100px'
  | '200px'
  | '400px'
  | '800px'
  | '25%'
  | '50%'
  | '75%'
  | '100%';
export type AnimationScaleValues = 0 | 20 | 40 | 60 | 80 | 100 | 120 | 140;
export type AnimationOpacityValues = 0 | 20 | 40 | 60 | 80 | 100;
export type AnimationRotateValues =
  | 0
  | 15
  | 30
  | 45
  | 60
  | 75
  | 90
  | 105
  | 120
  | 135
  | 150
  | 165
  | 180
  | 195
  | 210
  | 225
  | 240
  | 255
  | 270
  | 285
  | 300
  | 315
  | 330
  | 345
  | 360;
export type AnimationEaseValues =
  | 'linear'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'ease'
  | 'smooth'
  | 'snappy'
  | 'slow-rise'
  | 'fast-fall';

export interface AnimationConfig {
  delay?: AnimationDelayValues;
  duration?: AnimationDurationValues;
  easing?: AnimationEaseValues;
  start?: {
    // Custom easing (e.g., 'ease-in-out', 'cubic-bezier(0.4, 0, 0.2, 1)')
    translateX?: AnimationFadeValues; // px or %
    translateY?: AnimationFadeValues;
    scaleX?: AnimationScaleValues;
    scaleY?: AnimationScaleValues;
    rotate?: AnimationRotateValues; // e.g., '45deg'
    opacity?: AnimationOpacityValues; // Allow setting starting opacity
  };
  end?: {
    // Custom easing (e.g., 'ease-in-out', 'cubic-bezier(0.4, 0, 0.2, 1)')
    translateX?: AnimationFadeValues;
    translateY?: AnimationFadeValues;
    scaleX?: AnimationScaleValues;
    scaleY?: AnimationScaleValues;
    rotate?: AnimationRotateValues;
    opacity?: AnimationOpacityValues;
  };
}

export type AnimationProps =
  | AnimationConfig
  | { in: AnimationConfig; out?: AnimationConfig }
  | ScreenOptions<{ in: AnimationConfig; out?: AnimationConfig }>;

interface UseAnimationProps {
  animations: AnimationProps;
}

export function useAnimation({ animations }: UseAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationClasses, setAnimationClasses] = useState<string[]>([]);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const checkVisibility = () => {
      if (elementRef.current) {
        const visible = isElementVisible(elementRef.current, 0.8);
        // ✅ Only update state if visibility actually changed (prevents infinite loop)
        setTimeout(() => {
          setIsVisible(prevVisible => {
            if (prevVisible !== visible) return visible;
            return prevVisible; // No change, prevents re-render
          });
        }, 1000);
      }
    };

    // Initial check
    checkVisibility();

    // Listen for scroll events
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  useEffect(() => {
    // ✅ Only update class state if it actually changed
    setAnimationClasses(prevClasses => {
      const newClasses = [
        ...generateClassNamesByStringOrObject(animations, styles, `animation`),
        isVisible ? styles['animation--visible'] : '',
      ];

      if (prevClasses.join(' ') !== newClasses.join(' ')) {
        return newClasses;
      }

      return prevClasses; // No change, prevents re-render
    });
  }, [isVisible, animations]);

  return { classes: animationClasses, ref: elementRef };

  // return useMemo(() => {
  //   const animationClasses: string[] = [styles.animation];

  //   animationClasses.push(
  //     ...generateClassNamesByStringOrObject(animations, styles, `animation`),
  //   );
  //   console.log(isVisible);

  //   return [...animationClasses, isVisible && styles['animation--visible']];
  // }, [isVisible, animations]);
}
