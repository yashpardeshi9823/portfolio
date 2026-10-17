import Reveal from './Reveal'
import Section3D from './Section3D'
import Tilt from './Tilt'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section3D id="skills" className="mx-auto max-w-7xl px-6 py-28">
      <p className="eyebrow">03 / Skills</p>
      <h2 className="section-title mt-3">My toolkit</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.1}>
            <Tilt className="h-full">
              <div className="h-full border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-gold-400/50">
                <h3 className="border-b border-gold-400/30 pb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">{s.group}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300 transition hover:bg-gold-400 hover:text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section3D>
  )
}
