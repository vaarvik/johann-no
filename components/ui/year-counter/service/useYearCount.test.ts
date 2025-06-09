// import { act, renderHook } from "@testing-library/react"
// import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
// import { useYearCount } from "./useYearCount"

// // Automatically unmount and reset mocks after each test
// afterEach(() => {
//   vi.clearAllMocks()
//   vi.useRealTimers()
// })

// beforeEach(() => {
//   vi.useFakeTimers()
//   vi.setSystemTime(new Date()) // Reset time before each test
// })

// describe("useYearCount", () => {
//   it("should estimate year count using a large time jump with instant effect simulation", () => {
//     const startDate = new Date()
//     const { result } = renderHook(() => useYearCount(startDate))

//     expect(result.current).toBe(0)

//     // Directly manipulate the hook’s state by forcing effect re-run
//     act(() => {
//       vi.setSystemTime(
//         new Date(startDate.getTime() + 1000 * 60 * 60 * 24 * 365.25),
//       )
//       vi.advanceTimersByTime(101) // Trigger interval effect
//     })

//     expect(result.current).toBeCloseTo(1, 2)
//   })

//   it("should handle different start dates with instant effect simulation", () => {
//     const twoYearsAgo = new Date(Date.now() - 2 * 1000 * 60 * 60 * 24 * 365.25)
//     const { result } = renderHook(() => useYearCount(twoYearsAgo))

//     act(() => {
//       vi.advanceTimersByTime(101) // Trigger interval effect immediately
//     })

//     expect(result.current).toBeCloseTo(2, 2)
//   })

//   it("should clear interval on unmount", () => {
//     const clearIntervalSpy = vi.spyOn(global, "clearInterval")
//     const { unmount } = renderHook(() => useYearCount(new Date()))
//     unmount()
//     expect(clearIntervalSpy).toHaveBeenCalled()
//   })
// })
