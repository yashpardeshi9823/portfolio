import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { tick } from '../sound'

// Gold dot + trailing ring cursor for mouse users; grows over links and buttons.
export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 180, damping: 20 })
  const ry = useSpring(y, { stiffness: 180, damping: 20 })
  const [hover, setHover] = useState(false)
  const [fine, setFine] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setFine(true)
    document.documentElement.classList.add('custom-cursor')
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      const interactive = e.target.closest('a, button')
      setHover(Boolean(interactive))
      if (interactive && !interactive.contains(e.relatedTarget)) tick()
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.documentElement.classList.remove('custom-cursor')
    }
  }, [x, y])

  if (!fine) return null
  return (
    <>
      <motion.div style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[200] -ml-1 -mt-1 h-2 w-2 rounded-full bg-gold-300" />
      <motion.div
        style={{ x: rx, y: ry }}
        animate={{ scale: hover ? 1.8 : 1, backgroundColor: hover ? 'rgba(226,184,92,0.12)' : 'rgba(226,184,92,0)' }}
        className="pointer-events-none fixed left-0 top-0 z-[200] -ml-5 -mt-5 h-10 w-10 rounded-full border border-gold-300/60"
      />
    </>
  )
}
