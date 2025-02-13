import { useEffect, useRef } from 'react';

export function useWrapper<T extends HTMLElement>(
  elementRef: React.RefObject<HTMLElement | null>,
  classNames: string[],
  HTMLTag: keyof HTMLElementTagNameMap = 'div',
) {
  const wrapperRef = useRef<T | null>(null);

  useEffect(() => {
    if (!elementRef.current || wrapperRef.current) return;

    const wrapperElement = document.createElement(HTMLTag);
    wrapperElement.classList.add(...classNames);

    elementRef.current.parentNode?.insertBefore(
      wrapperElement,
      elementRef.current,
    );
    wrapperElement.appendChild(elementRef.current);
    wrapperRef.current = wrapperElement as T;
  }, [elementRef, classNames, HTMLTag]);
  return wrapperRef;
}
