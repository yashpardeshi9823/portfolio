import { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { play } from '../sound'

// Section that starts tilted back like a screen and flattens as it scrolls into view.
export default function Section3D({ id, children, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.35'] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])
  const inView = useInView(ref, { once: true, margin: '-35% 0px' })
  useEffect(() => {
    if (inView) play('swoosh', 0.25)
  }, [inView])

  return (
    <section id={id} ref={ref} style={{ perspective: 1400 }} className={className}>
      <motion.div style={{ rotateX, scale, opacity, transformOrigin: 'center top' }}>{children}</motion.div>
    </section>
  )
}
