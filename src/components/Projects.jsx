import Reveal from './Reveal'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="eyebrow">02 / Work</p>
        <h2 className="section-title mt-3">Featured work</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className="group relative h-full overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-8 transition duration-500 hover:-translate-y-1 hover:border-gold-400/50">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold-300/0 blur-3xl transition duration-500 group-hover:bg-gold-300/20" />
              <p className="font-display text-6xl text-white/5">0{i + 1}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-slate-500">{p.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-gold-300">{p.org}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
