import { motion, useMotionValue, useSpring } from 'framer-motion'

// Pulls its child slightly toward the cursor.
export default function Magnetic({ children, strength = 0.35 }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * strength)
    y.set((e.clientY - r.top - r.height / 2) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={reset} className="inline-block">
      {children}
    </motion.div>
  )
}
