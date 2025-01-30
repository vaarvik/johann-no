import { RefObject, useEffect, useRef } from 'react';

export function useShortcut<T extends HTMLElement>(
  shortcut: string[],
  onKeyDown: (ref: RefObject<T | null>, e: KeyboardEvent) => void,
  onKeyUp?: (ref: RefObject<T | null>, e: KeyboardEvent) => void,
  disableWhenTyping = true,
) {
  const isEventListened = useRef(false);
  const shortcutString = shortcut.toString();
  const pressedKeys = useRef(new Set<string>());
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute('data-shortcut', shortcutString);
    }

    if (isEventListened.current) return;

    const allShortcutButtonsWithThisShortcut = document.querySelectorAll(
      `[data-shortcut="${shortcutString}"]`,
    );

    if (allShortcutButtonsWithThisShortcut.length > 1) {
      throw new Error(
        `More than one component on this page has ${shortcutString} as a shortcut.`,
      );
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (disableWhenTyping) {
        if (e.target instanceof HTMLInputElement) return;
        if (e.target instanceof HTMLTextAreaElement) return;
      }
      pressedKeys.current.add(e.key.toLowerCase());
      pressedKeys.current.add(e.key.toUpperCase());
      const allKeysPressed = shortcut.every(
        key =>
          pressedKeys.current.has(key.toLowerCase()) ||
          pressedKeys.current.has(key.toUpperCase()),
      );
      if (allKeysPressed) {
        onKeyDown(ref, e);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      pressedKeys.current.delete(e.key.toLowerCase());
      pressedKeys.current.delete(e.key.toUpperCase());
      onKeyUp?.(ref, e);
    };

    document.addEventListener('keydown', e =>
      handleKeyDown(e as KeyboardEvent),
    );
    document.addEventListener('keyup', e => handleKeyUp(e as KeyboardEvent));

    isEventListened.current = true;

    return () => {
      document.removeEventListener('keydown', e =>
        handleKeyDown(e as KeyboardEvent),
      );
      document.removeEventListener('keyup', e =>
        handleKeyUp(e as KeyboardEvent),
      );
      isEventListened.current = false;
    };
  }, [shortcut, shortcutString, onKeyDown, onKeyUp, disableWhenTyping]);

  return ref;
}

export default useShortcut;
