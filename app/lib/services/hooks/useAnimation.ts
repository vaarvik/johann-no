import { AnimationProps } from '@/types/animations';
import { useEffect, useRef, useState } from 'react';
import { generateClassNamesByStringOrObject } from '../utils/generateClassNamesByStringOrObject';
import { isElementVisible } from '../utils/isElementVisible';
import styles from './useAnimation.module.scss';

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

    // Initial check
    checkVisibility();

    // Listen for scroll events
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
      // const finalAnimation = animations;
      // // Combine the animation properties into a single property

      // // if any of the animation properties inside any of the objects in the animations object is translateX or translateY, then combine them to a single translate property - this needs to be checked at every level, so recurrsive is best
      // const checkForProperties = (
      //   obj: AnimationProps,
      //   properties: (keyof AnimationTransformValues)[],
      //   callback: (obj: AnimationTransformValues) => void,
      // ) => {
      //   Object.keys(obj).forEach(_key => {
      //     const key = _key as keyof AnimationProps;
      //     if (typeof obj[key] === 'object') {
      //       checkForProperties(obj[key], properties, callback);
      //     } else {
      //       const finalProperties: AnimationTransformValues = {};
      //       properties.forEach(property => {
      //         if (property === key) {
      //           finalProperties[property] = obj[key];
      //         }
      //       });

      //       if (Object.keys(finalProperties).length) {
      //         callback(finalProperties);
      //       }
      //     }
      //   });
      // };

      // checkForProperties(finalAnimation, ['translateX', 'translateY'], obj => {
      //   obj.translate = `translateX(${obj.translateX ?? 0}) translateY(${obj.translateY ?? 0})`;
      //   delete obj.translateX;
      //   delete obj.translateY;
      // });

      // console.log(finalAnimation);

      // if any of the animation properties inside any of the objects in the animations object is scale, then combine them to a single scale property - this needs to be checked at every level, so recurrsive is best

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
  }, [isVisible, isInitialized, animations, wrapper]);

  return { classes: animationClasses, ref: elementRef };
}
