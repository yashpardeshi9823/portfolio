import { motion } from 'framer-motion'
import CountUp from './CountUp'
import Reveal from './Reveal'
import Section3D from './Section3D'
import Tilt from './Tilt'
import { about, profile } from '../data'

export default function About() {
  return (
    <Section3D id="about" className="mx-auto max-w-7xl overflow-x-clip px-6 py-28">
      <p className="eyebrow">01 / About</p>
      <div className="mt-8 grid items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.h2
            className="font-display text-6xl uppercase leading-[0.9] md:text-8xl"
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, margin: '-80px' }}
          >
            {about.heading.map((line, li) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${li === 0 ? 'text-white' : 'shimmer'}`}
                  variants={{ hidden: { y: '110%', rotateX: -60 }, shown: { y: 0, rotateX: 0 } }}
                  transition={{ duration: 1, delay: li * 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h2>
          <motion.div
            className="mt-6 h-px w-40 origin-left bg-gradient-to-r from-gold-400 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
          <Reveal delay={0.1} className="mt-8 space-y-5 leading-relaxed text-slate-400">
            {about.text.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-8 sm:gap-4">
            {about.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.1} className="min-w-0">
                <p className="font-display text-4xl text-gold-gradient md:text-5xl">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-slate-500 sm:tracking-[0.25em]">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Tilt max={12} className="mx-auto w-full max-w-sm">
          <div className="relative border border-gold-400/60 bg-gradient-to-b from-[#1a1f2e] to-ink p-3 shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(226,184,92,0.15)]">
            <div className="absolute -inset-3 -z-10 translate-x-4 translate-y-4 border border-gold-400/30" />
            <div className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_30%,#2a2f3e,#0a0d16_70%)]">
              <img src={profile.photo} alt={profile.name} className="mx-auto h-[440px] w-auto object-cover object-top" style={{ transform: 'translateZ(40px)' }} />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
              <p className="absolute bottom-3 right-4 font-script text-4xl text-gold-300">{profile.name.split(' ')[0]}</p>
            </div>
          </div>
        </Tilt>
      </div>
    </Section3D>
  )
}
