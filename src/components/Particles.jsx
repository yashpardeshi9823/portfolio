import { useEffect, useRef } from 'react'

// Gold dust drifting through the spotlight, drawn on a canvas.
export default function Particles({ count = 70, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = ref.current
    const c = canvas.getContext('2d')
    let w, h, raf
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      c.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const dots = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -Math.random() * 0.25 - 0.05,
      a: Math.random() * Math.PI * 2,
    }))
    const draw = () => {
      c.clearRect(0, 0, w, h)
      for (const d of dots) {
        d.x += d.vx + Math.sin(d.a) * 0.1
        d.y += d.vy
        d.a += 0.01
        if (d.y < -5) {
          d.y = h + 5
          d.x = Math.random() * w
        }
        const alpha = 0.25 + 0.5 * Math.abs(Math.sin(d.a))
        c.beginPath()
        c.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        c.fillStyle = `rgba(241, 212, 138, ${alpha})`
        c.shadowColor = 'rgba(241, 212, 138, 0.8)'
        c.shadowBlur = 6
        c.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return <canvas ref={ref} className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />
}
