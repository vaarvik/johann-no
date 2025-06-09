import { useEffect, useState } from "react"

export function useYearCount(startDate: Date) {
  const [yearCount, setYearCount] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const start = startDate.getTime()
      const diffYears = (now - start) / (1000 * 60 * 60 * 24 * 365.25)
      setYearCount(diffYears)
    }, 100)
    return () => clearInterval(interval)
  }, [startDate])

  return yearCount
}
