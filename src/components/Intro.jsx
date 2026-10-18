import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import { play, preload, setEnabled } from '../sound'
import { profile } from '../data'

const ease = [0.76, 0, 0.24, 1]

// Loading screen with a count-up, then an "enter" choice that also unlocks audio.
export default function Intro({ onEnter }) {
  const [count, setCount] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    preload()
    const start = performance.now()
    let raf
    const step = (now) => {
      const p = Math.min(1, (now - start) / 1800)
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  const enter = (withSound) => {
    setEnabled(withSound)
    play('whoosh', 0.7)
    setLeaving(true)
    setTimeout(onEnter, 350)
    setTimeout(() => setGone(true), 1400)
  }

  if (gone) return null
  const ready = count === 100

  return (
    <div className="fixed inset-0 z-[100]">
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className={`absolute inset-x-0 h-1/2 bg-ink ${i === 0 ? 'top-0' : 'bottom-0'}`}
          animate={leaving ? { y: i === 0 ? '-100%' : '100%' } : { y: 0 }}
          transition={{ duration: 1.1, ease }}
        />
      ))}
      <AnimatePresence>
        {!leaving && (
          <motion.div
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          >
            <p className="eyebrow">Portfolio · {new Date().getFullYear()}</p>
            <h1 className="mt-4 overflow-hidden font-display text-6xl uppercase text-gold-gradient md:text-8xl">
              {profile.name.split('').map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.04, ease }}
                >
                  {ch === ' ' ? ' ' : ch}
                </motion.span>
              ))}
            </h1>
            <div className="mt-8 h-px w-64 overflow-hidden bg-white/10">
              <div className="h-full bg-gradient-to-r from-gold-500 to-gold-200" style={{ width: `${count}%` }} />
            </div>
            <p className="mt-3 font-display text-2xl tabular-nums text-slate-400">{count}%</p>

            <div className="mt-10 flex h-14 flex-wrap justify-center gap-4">
              {ready && (
                <>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => enter(true)}
                    className="btn-gold"
                  >
                    <Volume2 size={14} /> Enter with sound
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => enter(false)}
                    className="btn-ghost"
                  >
                    <VolumeX size={14} /> Enter silently
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
