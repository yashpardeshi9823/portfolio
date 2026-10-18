import { motion, useReducedMotion } from 'framer-motion'

const WALK = 3.4
const DELAY = 0.4

// Photo that "walks" out of the dark toward the viewer: it grows from far away,
// bobs and sways in step, then settles into a slow breathing idle.
export default function WalkIn({ src, alt }) {
  const reduce = useReducedMotion()
  const steps = 5
  const bob = Array.from({ length: steps * 2 + 1 }, (_, i) => (i % 2 ? -9 * (1 - i / (steps * 2 + 2)) : 0))
  const sway = Array.from({ length: steps * 2 + 1 }, (_, i) => (i % 2 ? (i % 4 === 1 ? -1 : 1) * (1 - i / (steps * 2 + 2)) : 0))

  return (
    <motion.div
      className="relative z-10 h-full"
      style={{ transformOrigin: '50% 100%' }}
      initial={reduce ? false : { scale: 0.42, y: '-14%', opacity: 0, filter: 'blur(8px) brightness(0.1)' }}
      animate={{ scale: 1, y: '0%', opacity: 1, filter: 'blur(0px) brightness(1)' }}
      transition={{ duration: WALK, delay: DELAY, ease: [0.3, 0.1, 0.3, 1], opacity: { duration: 1, delay: DELAY } }}
    >
      {/* Floor shadow and stage glow under the feet */}
      <div className="absolute -bottom-3 left-1/2 h-8 w-[70%] -translate-x-1/2 rounded-[50%] bg-black/70 blur-md" />
      <div className="absolute -bottom-6 left-1/2 h-16 w-[120%] -translate-x-1/2 rounded-[50%] bg-gold-200/10 blur-2xl" />

      <motion.div
        className="h-full"
        animate={reduce ? undefined : { y: bob, rotate: sway }}
        transition={{ duration: WALK, delay: DELAY, ease: 'easeInOut' }}
        style={{ transformOrigin: '50% 100%' }}
      >
        <motion.div
          className="relative h-full"
          animate={reduce ? undefined : { scale: [1, 1.008, 1] }}
          transition={{ duration: 5, delay: DELAY + WALK, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50% 100%' }}
        >
          <img src={src} alt={alt} className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_60px_rgba(241,212,138,0.18)]" />
          {/* Glossy stage-floor reflection */}
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-full h-full w-auto -scale-y-100 object-contain object-bottom opacity-20 blur-[1px] [mask-image:linear-gradient(to_top,black,transparent_25%)]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
