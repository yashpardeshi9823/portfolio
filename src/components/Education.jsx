import { Award, GraduationCap, Users } from 'lucide-react'
import Reveal from './Reveal'
import { credentials, education } from '../data'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="eyebrow">05 / Education</p>
        <h2 className="section-title mt-3">Credentials</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.1} className="border border-white/10 p-6">
            <GraduationCap size={20} className="text-gold-400" />
            <h3 className="mt-4 text-lg font-semibold text-white">{e.degree}</h3>
            <p className="mt-1 text-sm text-slate-400">{e.school}</p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-slate-500">{e.period}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {[
          { title: 'Certifications', icon: Award, items: credentials.certifications },
          { title: 'Leadership', icon: Users, items: credentials.leadership },
        ].map(({ title, icon: Icon, items }, i) => (
          <Reveal key={title} delay={i * 0.1} className="border border-white/10 p-6">
            <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">
              <Icon size={18} /> {title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
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
