// import { describe, expect, it, vi } from 'vitest';
// import { isElementVisible } from '../utils/isElementVisible';

// // Mocking window dimensions
// vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024);
// vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(768);

// describe('isElementVisible', () => {
//   it('should return false if the element is completely off-screen', () => {
//     const mockElement = {
//       getBoundingClientRect: () => ({
//         top: 800,
//         bottom: 900,
//         left: 1100,
//         right: 1200,
//         width: 100,
//         height: 100,
//       }),
//     } as HTMLElement;
//     expect(isElementVisible(mockElement, 0.5)).toBe(false);
//   });

//   it('should return true if the element is fully visible', () => {
//     const mockElement = {
//       getBoundingClientRect: () => ({
//         top: 100,
//         bottom: 200,
//         left: 100,
//         right: 200,
//         width: 100,
//         height: 100,
//       }),
//     } as HTMLElement;
//     expect(isElementVisible(mockElement, 0.5)).toBe(true);
//   });

//   it('should return true if the visible area meets the threshold', () => {
//     const mockElement = {
//       getBoundingClientRect: () => ({
//         top: 0,
//         bottom: 100,
//         left: 500,
//         right: 1024,
//         width: 524,
//         height: 100,
//       }),
//     } as HTMLElement;
//     expect(isElementVisible(mockElement, 0.5)).toBe(true);
//   });

//   it('should return false if the visible area is below the threshold', () => {
//     const mockElement = {
//       getBoundingClientRect: () => ({
//         top: window.innerHeight - 100 * 0.79,
//         bottom: window.innerHeight,
//         left: 0,
//         right: 174,
//         width: 174,
//         height: 100,
//       }),
//     } as HTMLElement;
//     expect(isElementVisible(mockElement, 0.8)).toBe(false);

//     const mockElement2 = {
//       getBoundingClientRect: () => ({
//         top: 0,
//         bottom: 100,
//         left: window.innerWidth - 100 * 0.59,
//         right: window.innerWidth,
//         width: 100,
//         height: 100,
//       }),
//     } as HTMLElement;
//     expect(isElementVisible(mockElement2, 0.6)).toBe(false);
//   });

//   it('should handle zero-size elements gracefully', () => {
//     const mockElement = {
//       getBoundingClientRect: () => ({
//         top: 0,
//         bottom: 0,
//         left: 0,
//         right: 0,
//         width: 0,
//         height: 0,
//       }),
//     } as HTMLElement;
//     expect(isElementVisible(mockElement, 0.5)).toBe(false);
//   });

//   it('should throw an error if threshold is out of range', () => {
//     expect(() => isElementVisible({} as HTMLElement, 1.2)).toThrow(
//       'Threshold must be between 0 and 1',
//     );
//     expect(() => isElementVisible({} as HTMLElement, -0.3)).toThrow(
//       'Threshold must be between 0 and 1',
//     );
//   });
// });
