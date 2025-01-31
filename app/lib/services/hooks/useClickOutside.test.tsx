import { fireEvent, render } from '@testing-library/react';
import { useRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import useClickOutside from './useClickOutside';

function MockComponent({ onClickOutside }: { onClickOutside: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClickOutside);
  return <div ref={ref}>Mock Component</div>;
}

describe('useClickOutside', () => {
  it('should call onClickOutside when clicking outside the element', () => {
    const onClickOutside = vi.fn();
    const { unmount } = render(
      <MockComponent onClickOutside={onClickOutside} />,
    );

    fireEvent.mouseDown(document.body);

    expect(onClickOutside).toHaveBeenCalled();
    unmount();
  });

  it('should not call onClickOutside when clicking inside the element', () => {
    const onClickOutside = vi.fn();
    const { getByText, unmount } = render(
      <MockComponent onClickOutside={onClickOutside} />,
    );

    const element = getByText('Mock Component');
    fireEvent.mouseDown(element);

    expect(onClickOutside).not.toHaveBeenCalled();
    unmount();
  });

  it('should remove event listener on unmount', () => {
    const addEventListener = vi.spyOn(document, 'addEventListener');
    const removeEventListener = vi.spyOn(document, 'removeEventListener');
    const { unmount } = render(<MockComponent onClickOutside={() => {}} />);

    expect(addEventListener).toHaveBeenCalledWith(
      'mousedown',
      expect.any(Function),
    );

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith(
      'mousedown',
      expect.any(Function),
    );
  });
});
