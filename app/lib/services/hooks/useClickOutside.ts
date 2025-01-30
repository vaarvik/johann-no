import { RefObject, useEffect } from "react";

export default function useClickOutside<HTMLEl extends HTMLElement>(
  elementRef: RefObject<HTMLEl | null>,
  onClickOutside: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [elementRef, onClickOutside]);
}
