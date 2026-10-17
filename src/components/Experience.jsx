import Reveal from './Reveal'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="eyebrow">04 / Experience</p>
        <h2 className="section-title mt-3">The journey</h2>
      </Reveal>
      <ol className="mt-12 border-l border-white/10">
        {experience.map((e, i) => (
          <Reveal key={e.role + e.company} delay={i * 0.1}>
            <li className="relative pb-12 pl-8">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_12px_#e2b85c]" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">{e.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{e.role}</h3>
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
    </section>
  )
}
