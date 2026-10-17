import Reveal from './Reveal'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="eyebrow">03 / Skills</p>
        <h2 className="section-title mt-3">My toolkit</h2>
      </Reveal>
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.1}>
            <h3 className="border-b border-gold-400/30 pb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">{s.group}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300 transition hover:bg-gold-400 hover:text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
