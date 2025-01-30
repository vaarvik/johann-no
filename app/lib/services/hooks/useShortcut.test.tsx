import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import useShortcut from './useShortcut';

function MockComponent({
  shortcut,
  onKeyDown,
  onKeyUp,
  disableWhenTyping,
}: {
  shortcut: string[];
  onKeyDown: (e: KeyboardEvent) => void;
  onKeyUp?: (e: KeyboardEvent) => void;
  disableWhenTyping?: boolean;
}) {
  const ref = useShortcut<HTMLDivElement>(
    shortcut,
    (_, e) => onKeyDown(e),
    (_, e) => onKeyUp?.(e),
    disableWhenTyping,
  );
  return <div ref={ref}>Mock Component</div>;
}

describe('useShortcut', () => {
  it('should set the data-shortcut attribute correctly', () => {
    const { getByText, unmount } = render(
      <MockComponent shortcut={['a', 'b']} onKeyDown={() => {}} />,
    );
    const element = getByText('Mock Component');
    expect(element.getAttribute('data-shortcut')).toBe('a,b');
    unmount();
  });

  it('should call onKeyDown when the shortcut keys are pressed', () => {
    const onKeyDown = vi.fn();
    const { unmount } = render(
      <MockComponent shortcut={['a', 'b']} onKeyDown={onKeyDown} />,
    );

    fireEvent.keyDown(document, { key: 'a' });
    fireEvent.keyDown(document, { key: 'b' });

    expect(onKeyDown).toHaveBeenCalled();
    unmount();
  });

  it('should call onKeyUp when the shortcut keys are released', () => {
    const onKeyUp = vi.fn();
    const { unmount } = render(
      <MockComponent
        shortcut={['a', 'b']}
        onKeyDown={() => {}}
        onKeyUp={onKeyUp}
      />,
    );

    fireEvent.keyDown(document, { key: 'a' });
    fireEvent.keyDown(document, { key: 'b' });
    fireEvent.keyUp(document, { key: 'a' });
    fireEvent.keyUp(document, { key: 'b' });

    expect(onKeyUp).toHaveBeenCalled();
    unmount();
  });

  it('should remove its event listeners on unmount', () => {
    const addEventListener = vi.spyOn(document, 'addEventListener');
    const removeEventListener = vi.spyOn(document, 'removeEventListener');
    const { unmount } = render(
      <MockComponent shortcut={['a', 'b']} onKeyDown={() => {}} />,
    );

    expect(addEventListener).toHaveBeenCalledTimes(2);

    unmount();

    expect(removeEventListener).toHaveBeenCalledTimes(2);
  });

  it('should ignore key events when typing in input or textarea elements', () => {
    const onKeyDown = vi.fn();
    const { unmount } = render(
      <MockComponent
        shortcut={['a', 'b']}
        onKeyDown={onKeyDown}
        disableWhenTyping
      />,
    );

    const input = document.createElement('input');
    document.body.appendChild(input);
    fireEvent.keyDown(input, { key: 'a' });
    fireEvent.keyDown(input, { key: 'b' });

    expect(onKeyDown).not.toHaveBeenCalled();

    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    fireEvent.keyDown(textarea, { key: 'a' });
    fireEvent.keyDown(textarea, { key: 'b' });

    expect(onKeyDown).not.toHaveBeenCalled();

    unmount();
  });

  it('should throw an error when more than one component has the same shortcut', () => {
    const onKeyDown = vi.fn();
    expect(() =>
      render(
        <>
          <MockComponent shortcut={['a', 'b']} onKeyDown={onKeyDown} />
          <MockComponent shortcut={['a', 'b']} onKeyDown={onKeyDown} />
        </>,
      ),
    ).toThrow();
  });
});
