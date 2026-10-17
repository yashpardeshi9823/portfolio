import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Section3D from './Section3D'
import { projects } from '../data'

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(min-width: 768px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => setIsDesktop(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return isDesktop
}

// On desktop the cards pin and stack in 3D; on phones they are taller than the screen, so they simply flow.
function StackCard({ project, index, total, progress, stacked }) {
  const start = index / total
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - index - 1) * 0.06])
  const rotateX = useTransform(progress, [start, 1], [0, (total - index - 1) * 6])
  const filter = useTransform(progress, [start, 1], ['brightness(1)', `brightness(${1 - (total - index - 1) * 0.35})`])

  return (
    <div
      className={stacked ? `sticky top-32 flex items-start justify-center ${index === total - 1 ? 'pb-24' : 'h-[75vh]'}` : 'mb-6'}
      style={{ perspective: 1400 }}
    >
      <motion.article
        style={stacked ? { scale, rotateX, filter, top: index * 24, transformOrigin: 'center top' } : undefined}
        className="relative grid w-full gap-8 border border-gold-400/50 bg-gradient-to-br from-[#161a26] via-[#0d111c] to-[#0a0c14] p-7 shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_50px_rgba(226,184,92,0.12)] md:grid-cols-[1.5fr_1fr] md:p-10"
      >
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">
            0{index + 1} // {project.category}
          </p>
          <h3 className="mt-4 font-display text-4xl uppercase leading-none text-gold-gradient md:text-5xl">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-500">
            {project.org} · {project.period}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-slate-300">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="border border-gold-400/30 bg-gold-400/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-gold-200">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="border-white/10 md:border-l md:pl-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">// Key details</p>
          <dl className="mt-4 divide-y divide-white/5">
            {project.metrics.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-3 text-xs">
                <dt className="uppercase tracking-[0.2em] text-slate-500">{k}</dt>
                <dd className="text-right text-slate-200">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.article>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const stacked = useIsDesktop()

  return (
    <div id="work" className="mx-auto max-w-6xl px-6 pt-28">
      <Section3D>
        <p className="eyebrow">02 / Featured work</p>
        <h2 className="mt-3 font-display text-5xl uppercase leading-[0.95] text-gold-gradient md:text-7xl">
          Selected work.
          <br />
          Measured value.
        </h2>
      </Section3D>
      <div ref={ref} className="relative mt-12">
        {projects.map((p, i) => (
          <StackCard key={p.title} project={p} index={i} total={projects.length} progress={scrollYProgress} stacked={stacked} />
        ))}
      </div>
    </div>
  )
}
