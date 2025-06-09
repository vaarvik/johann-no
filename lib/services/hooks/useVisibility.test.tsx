// import { act, render } from '@testing-library/react';
// import { useRef } from 'react';
// import { beforeEach, describe, expect, it, vi } from 'vitest';
// import { isElementVisible } from '../utils/isElementVisible';
// import { useVisibility } from './useVisibility';

// vi.mock('../utils/isElementVisible', () => ({
//   isElementVisible: vi.fn(() => false),
// }));

// const VisibilityTestComponent = ({
//   threshold = 0.8,
// }: {
//   threshold?: number;
// }) => {
//   const elementRef = useRef<HTMLDivElement | null>(null);
//   const isVisible = useVisibility(elementRef, threshold);

//   return (
//     <div>
//       <div ref={elementRef} data-testid="visibility-element">
//         Visibility Test Element
//       </div>
//       <p data-testid="visibility-status">
//         {isVisible ? 'Visible' : 'Not Visible'}
//       </p>
//     </div>
//   );
// };

// describe('useVisibility Hook', () => {
//   beforeEach(() => {
//     vi.clearAllMocks();
//   });

//   it('should update visibility status when element becomes visible', () => {
//     const isElementVisibleMock = vi.mocked(isElementVisible);
//     isElementVisibleMock.mockReturnValueOnce(false);

//     const { getByTestId, unmount } = render(<VisibilityTestComponent />);
//     expect(getByTestId('visibility-status').textContent).toBe('Not Visible');

//     act(() => {
//       isElementVisibleMock.mockReturnValueOnce(true);
//       window.dispatchEvent(new Event('scroll'));
//     });

//     expect(getByTestId('visibility-status').textContent).toBe('Visible');
//     unmount();
//   });

//   it('should call isElementVisible on scroll', () => {
//     const isElementVisibleSpy = vi.spyOn(
//       { isElementVisible },
//       'isElementVisible',
//     );
//     isElementVisibleSpy.mockImplementation(() => false);

//     const { unmount } = render(<VisibilityTestComponent />);

//     act(() => {
//       window.dispatchEvent(new Event('scroll'));
//     });

//     expect(isElementVisibleSpy).toHaveBeenCalledTimes(2);
//     unmount();
//   });
// });
