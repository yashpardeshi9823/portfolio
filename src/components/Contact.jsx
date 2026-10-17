import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data'

export default function Contact() {
  const { socials } = profile
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/10 blur-[120px]" />
      <Reveal className="relative">
        <p className="eyebrow">05 / Contact</p>
        <h2 className="mt-4 font-display text-6xl uppercase leading-none text-gold-gradient md:text-8xl">Let's build</h2>
        <h2 className="font-display text-6xl uppercase leading-none text-white md:text-8xl">something great</h2>
        <a href={`mailto:${profile.email}`} className="btn-gold mt-12">
          <Mail size={14} /> {profile.email}
        </a>
        <div className="mt-10 flex justify-center gap-6 text-slate-400">
          <a href={socials.github} aria-label="GitHub" className="hover:text-gold-300"><Github /></a>
          <a href={socials.linkedin} aria-label="LinkedIn" className="hover:text-gold-300"><Linkedin /></a>
          <a href={socials.instagram} aria-label="Instagram" className="hover:text-gold-300"><Instagram /></a>
        </div>
      </Reveal>
    </section>
  )
}
