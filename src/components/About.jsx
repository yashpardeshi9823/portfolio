import Reveal from './Reveal'
import { about } from '../data'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="eyebrow">01 / About</p>
        <h2 className="section-title mt-3">Who I am</h2>
      </Reveal>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-slate-400">
          {about.text.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <div className="grid grid-cols-3 gap-4 self-start">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.15 + i * 0.1} className="border border-white/10 p-5">
              <p className="font-display text-4xl text-gold-gradient">{s.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-slate-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
