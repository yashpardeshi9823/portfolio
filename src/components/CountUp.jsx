import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Counts the number inside a string (e.g. "90.83%", "CGPA 6.8") up from zero when scrolled into view.
export default function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const match = value.match(/(\d+(?:\.\d+)?)/)
  const [shown, setShown] = useState(match ? value.replace(match[1], (0).toFixed((match[1].split('.')[1] || '').length)) : value)

  useEffect(() => {
    if (!inView || !match) return
    const target = parseFloat(match[1])
    const decimals = (match[1].split('.')[1] || '').length
    const start = performance.now()
    let raf
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setShown(value.replace(match[1], (target * eased).toFixed(decimals)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return <span ref={ref}>{shown}</span>
}
