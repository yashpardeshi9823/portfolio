import { Linkedin, Mail } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data'

export default function Contact() {
  const { socials } = profile
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/10 blur-[120px]" />
      <Reveal className="relative">
        <p className="eyebrow">06 / Contact</p>
        <h2 className="mt-4 font-display text-6xl uppercase leading-none text-gold-gradient md:text-8xl">Let's talk</h2>
        <h2 className="font-display text-6xl uppercase leading-none text-white md:text-8xl">numbers</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="btn-gold normal-case tracking-normal">
            <Mail size={14} /> {profile.email}
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  )
}
