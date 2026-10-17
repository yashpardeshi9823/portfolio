import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Reveal from './Reveal'
import Section3D from './Section3D'
import { experience } from '../data'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  return (
    <Section3D id="experience" className="mx-auto max-w-7xl px-6 py-28">
      <p className="eyebrow">04 / Experience</p>
      <h2 className="section-title mt-3">The journey</h2>
      <ol ref={ref} className="relative mt-12 pl-8">
        <span className="absolute left-0 top-0 h-full w-px bg-white/10" />
        <motion.span style={{ scaleY }} className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-gold-200 via-gold-400 to-gold-500 shadow-[0_0_12px_#e2b85c]" />
        {experience.map((e, i) => (
          <Reveal key={e.role + e.company} delay={i * 0.1}>
            <li className="relative pb-12">
              <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_12px_#e2b85c]" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">{e.period}</p>
              <h3 className="mt-2 font-display text-3xl uppercase text-white">{e.role}</h3>
              <p className="text-gold-300">{e.company}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-400">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section3D>
  )
}
