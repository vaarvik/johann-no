import { ModalProps } from '@/components/Modal/Modal';
import { act, Matcher, MatcherOptions, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import useModal from './useModal';

type GetByTestIdResult = (
  id: Matcher,
  options?: MatcherOptions | undefined,
) => HTMLElement;

type QueryByTestIdResult = (
  id: Matcher,
  options?: MatcherOptions | undefined,
) => HTMLElement | null;

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
  default: ({ isOpen, onClose, preventExit, children }: ModalProps) => {
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

const openModalAndVerify = (
  getByTestId: GetByTestIdResult,
  expectedContent: string,
) => {
  act(() => getByTestId('open-btn').click());
  expect(getByTestId('modal')).not.toBeNull();
  expect(getByTestId('modal-content').textContent).toBe(expectedContent);
};

const closeModalAndVerify = (
  getByTestId: GetByTestIdResult,
  queryByTestId: QueryByTestIdResult,
) => {
  act(() => getByTestId('close-btn').click());
  act(() => vi.advanceTimersByTime(100));
  expect(queryByTestId('modal')).toBeNull();
};

describe('useModal hook', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should open and close the modal', () => {
    const { getByTestId, queryByTestId, unmount } = render(<TestComponent />);
    expect(queryByTestId('modal')).toBeNull();

    openModalAndVerify(getByTestId, 'Modal Content');
    closeModalAndVerify(getByTestId, queryByTestId);

    unmount();
  });

  it('should update modal content when opened with new content', () => {
    const { getByTestId, rerender, queryByTestId, unmount } = render(
      <TestComponent />,
    );

    openModalAndVerify(getByTestId, 'Modal Content');
    closeModalAndVerify(getByTestId, queryByTestId);

    act(() => rerender(<TestComponent content="Modal Content 2" />));
    openModalAndVerify(getByTestId, 'Modal Content 2');
    closeModalAndVerify(getByTestId, queryByTestId);

    unmount();
  });

  it('should not close modal if preventExit is true', () => {
    const { getByTestId, unmount } = render(<TestComponent preventExit />);

    openModalAndVerify(getByTestId, 'Modal Content');

    act(() => getByTestId('close-btn').click());
    act(() => vi.advanceTimersByTime(100));

    expect(getByTestId('modal')).not.toBeNull();
    unmount();
  });
});
