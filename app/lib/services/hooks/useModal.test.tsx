import { act, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import useModal from './useModal';

const TestComponent = ({
  preventExit = false,
  content = 'Modal Content',
}: {
  preventExit?: boolean;
  content?: string;
}) => {
  const { openModal } = useModal(preventExit);

  return (
    <div>
      <button
        data-testid="open-btn"
        onClick={() => {
          openModal(<p data-testid="modal-content">{content}</p>);
        }}
      >
        Open Modal
      </button>
    </div>
  );
};

vi.mock('@/components/Modal/Modal', () => ({
  __esModule: true,
  default: ({
    isOpen,
    onClose,
    preventExit,
    children,
  }: {
    isOpen: boolean;
    onClose: () => void;
    preventExit: boolean;
    children: React.ReactNode;
  }) => {
    return isOpen ? (
      <div data-testid="modal">
        {children}
        <button
          data-testid="close-btn"
          onClick={!preventExit ? onClose : (): void => {}}
        >
          Close
        </button>
      </div>
    ) : null;
  },
}));

describe('useModal hook', () => {
  beforeEach(() => {
    vi.useFakeTimers(); // Use fake timers to control timing behavior
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should open and close the modal', () => {
    const { getByTestId, queryByTestId, unmount } = render(<TestComponent />);

    // Modal should not be in the DOM initially
    expect(queryByTestId('modal')).toBeNull();

    act(() => {
      getByTestId('open-btn').click();
    });

    expect(queryByTestId('modal')).not.toBeNull();
    expect(getByTestId('modal-content').textContent).toBe('Modal Content');

    act(() => {
      getByTestId('close-btn').click();
    });

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(queryByTestId('modal')).toBeNull();

    unmount();
  });

  it('should update modal content when opened with new content', () => {
    const { getByTestId, rerender, unmount } = render(<TestComponent />);

    act(() => {
      getByTestId('open-btn').click();
    });

    expect(getByTestId('modal-content').textContent).toBe('Modal Content');

    act(() => {
      getByTestId('close-btn').click();
    });

    act(() => {
      vi.advanceTimersByTime(100);
    });

    act(() => {
      rerender(<TestComponent content="Modal Content 2" />);
    });

    act(() => {
      getByTestId('open-btn').click();
    });

    expect(getByTestId('modal-content').textContent).toBe('Modal Content 2');

    act(() => {
      getByTestId('close-btn').click();
    });

    act(() => {
      vi.advanceTimersByTime(100);
    });

    unmount();
  });

  /* This has to run last due to that DOM is not clean after this one. Reason: Modal is never removed as it is preventExit */
  it('should not close modal if preventExit is true and onClose is triggered', () => {
    const { getByTestId, unmount } = render(<TestComponent preventExit />);

    act(() => {
      getByTestId('open-btn').click();
    });

    expect(getByTestId('modal')).not.toBeNull();

    act(() => {
      getByTestId('close-btn').click();
    });

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(getByTestId('modal')).not.toBeNull();

    unmount();
  });
});
