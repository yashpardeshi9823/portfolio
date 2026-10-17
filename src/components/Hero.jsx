import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import Coin from './Coin'
import { profile } from '../data'

const ease = [0.22, 1, 0.36, 1]

const smoke = [
  { left: '58%', top: '35%', size: 420, dur: 18, delay: 0 },
  { left: '70%', top: '55%', size: 520, dur: 22, delay: 3 },
  { left: '48%', top: '65%', size: 380, dur: 20, delay: 6 },
]

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 50, damping: 20 })
  const sy = useSpring(my, { stiffness: 50, damping: 20 })
  const rotateY = useTransform(sx, [-0.5, 0.5], [6, -6])
  const rotateX = useTransform(sy, [-0.5, 0.5], [-4, 4])
  const photoX = useTransform(sx, (v) => v * 25)
  const textX = useTransform(sx, (v) => v * -12)

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <section
      id="home"
      onMouseMove={onMove}
      style={{ perspective: 1600 }}
      className="grain relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-night via-[#0b1328] to-ink"
    >
      {/* Stage glow, spotlight beam and smoke */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full bg-gold-300/10 blur-[140px]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.75, 1] }}
          transition={{ duration: 2.2, delay: 0.4, times: [0, 0.4, 0.6, 1] }}
          className="absolute right-[-5%] top-[-10%] h-[130%] w-[60%] origin-top-right rotate-[22deg] bg-gradient-to-b from-gold-200/25 via-gold-200/5 to-transparent blur-2xl [clip-path:polygon(40%_0,60%_0,100%_100%,0_100%)]"
        />
        {smoke.map((s, i) => (
          <motion.div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(226,220,200,0.12),transparent_65%)] blur-2xl"
            style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
            animate={{ x: [0, 60, -40, 0], y: [0, -30, 20, 0], opacity: [0.4, 0.9, 0.5, 0.4], scale: [1, 1.15, 0.95, 1] }}
            transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute bottom-[6%] right-[20%] h-12 w-96 rounded-[50%] bg-gold-200/15 blur-2xl" />
      </div>

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pt-28 lg:grid-cols-[1.2fr_1fr]"
      >
        <motion.div style={{ x: textX, translateZ: 60 }} className="relative z-10">
          <h1 className="font-display uppercase leading-[0.88] text-gold-gradient drop-shadow-[0_4px_30px_rgba(226,184,92,0.25)]">
            {profile.headline.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="block text-[17vw] sm:text-[13vw] lg:text-[8.5rem] xl:text-[9.5rem]"
                  initial={{ y: '110%', rotateX: -80 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{ duration: 1.1, delay: 0.5 + i * 0.15, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-300"
          >
            {profile.roles.map((r, i) => (
              <span key={r} className="flex items-center gap-4">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-gold-400" />}
                {r}
              </span>
            ))}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="mt-5 max-w-md text-sm leading-relaxed text-slate-400"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#work" className="btn-gold">
              Explore my work <ArrowUpRight size={14} />
            </a>
            <a href={profile.resume} download className="btn-ghost">
              Download resume <Download size={14} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ x: photoX, translateZ: 20 }} className="relative flex h-[60vh] items-end justify-center lg:h-[85vh]">
          <motion.img
            src={profile.photo}
            alt={profile.name}
            initial={{ opacity: 0, scale: 1.08, filter: 'brightness(0.2)' }}
            animate={{ opacity: 1, scale: 1, filter: 'brightness(1)' }}
            transition={{ duration: 2, delay: 0.6, ease }}
            className="relative z-10 h-full w-auto object-contain object-bottom drop-shadow-[0_0_60px_rgba(241,212,138,0.18)]"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute right-0 top-1/2 z-20 hidden text-right lg:block"
          >
            {profile.quote.map((q) => (
              <p key={q} className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-300">
                {q}
              </p>
            ))}
            <p className="mt-2 font-script text-5xl text-gold-300">{profile.name.split(' ')[0]}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-[12%] right-0 z-20 hidden lg:block"
          >
            <Coin />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-slate-500 md:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="h-8 w-px bg-gradient-to-b from-gold-400 to-transparent" />
      </motion.a>
    </section>
  )
}
