import { ArrowUpRight, Github } from 'lucide-react'
import Reveal from './Reveal'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="eyebrow">02 / Projects</p>
        <h2 className="section-title mt-3">Selected work</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className="group relative h-full overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-7 transition duration-500 hover:-translate-y-1 hover:border-gold-400/50">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold-300/0 blur-3xl transition duration-500 group-hover:bg-gold-300/20" />
              <p className="font-display text-6xl text-white/5">0{i + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-5 text-xs uppercase tracking-[0.2em]">
                <a href={p.live} className="flex items-center gap-1 text-gold-300 hover:text-gold-200">
                  Live <ArrowUpRight size={14} />
                </a>
                <a href={p.code} className="flex items-center gap-1 text-slate-400 hover:text-white">
                  Code <Github size={14} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
