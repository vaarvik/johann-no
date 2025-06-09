// import { SCREEN_SIZES_MAP } from '@/constants';
// import { act, renderHook } from '@testing-library/react';
// import { beforeEach, describe, expect, it, vi } from 'vitest';
// import { useGetDevice } from './useGetDevice';

// describe('useGetDevice', () => {
//   let addEventListenerSpy: ReturnType<typeof vi.spyOn>;
//   let removeEventListenerSpy: ReturnType<typeof vi.spyOn>;

//   beforeEach(() => {
//     addEventListenerSpy = vi.spyOn(window, 'addEventListener');
//     removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
//   });

//   // Helper function to trigger resize event
//   const resizeWindow = (width: number) => {
//     window.innerWidth = width;
//     window.dispatchEvent(new Event('resize'));
//   };

//   it('should return the correct device on init', () => {
//     window.innerWidth = SCREEN_SIZES_MAP.tablet - 1;
//     const { result, unmount } = renderHook(() => useGetDevice());

//     expect(result.current).toBe('mobile');

//     unmount();

//     window.innerWidth = SCREEN_SIZES_MAP.desktop;
//     const { result: resultDesktop } = renderHook(() => useGetDevice());

//     expect(resultDesktop.current).toBe('desktop');
//   });

//   it('should return "tablet" when screen width is between tablet and desktop', () => {
//     window.innerWidth = SCREEN_SIZES_MAP.tablet;
//     const { result } = renderHook(() => useGetDevice());

//     expect(result.current).toBe('tablet');
//   });

//   it('should return "desktop" when screen width is between desktop and large-desktop', () => {
//     window.innerWidth = SCREEN_SIZES_MAP.desktop;
//     const { result } = renderHook(() => useGetDevice());

//     expect(result.current).toBe('desktop');
//   });

//   it('should return "large-desktop" when screen width is larger than large-desktop breakpoint', () => {
//     window.innerWidth = SCREEN_SIZES_MAP['large-desktop'];
//     const { result } = renderHook(() => useGetDevice());

//     expect(result.current).toBe('large-desktop');
//   });

//   it('should update the device type when the window is resized', () => {
//     window.innerWidth = SCREEN_SIZES_MAP.mobile;
//     const { result } = renderHook(() => useGetDevice());

//     expect(result.current).toBe('mobile');

//     act(() => {
//       resizeWindow(SCREEN_SIZES_MAP.tablet);
//     });
//     expect(result.current).toBe('tablet');

//     act(() => {
//       resizeWindow(SCREEN_SIZES_MAP.desktop);
//     });
//     expect(result.current).toBe('desktop');

//     act(() => {
//       resizeWindow(SCREEN_SIZES_MAP['large-desktop']);
//     });
//     expect(result.current).toBe('large-desktop');
//   });

//   it('should add and remove event listeners correctly', () => {
//     const { unmount } = renderHook(() => useGetDevice());

//     expect(addEventListenerSpy).toHaveBeenCalledWith(
//       'resize',
//       expect.any(Function),
//     );
//     expect(removeEventListenerSpy).not.toHaveBeenCalled();

//     unmount();

//     expect(removeEventListenerSpy).toHaveBeenCalledWith(
//       'resize',
//       expect.any(Function),
//     );
//   });
// });
