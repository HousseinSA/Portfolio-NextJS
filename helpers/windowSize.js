import { useState, useEffect } from "react"
export const windowSize = () => {
  const [width, setWidth] = useState(0)
  const updatePageWidth = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    updatePageWidth()
    window.addEventListener("resize", updatePageWidth)

    return () => window.removeEventListener("resize", updatePageWidth)
  }, [])
  return width
}
