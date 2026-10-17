import { Linkedin, Mail, Phone } from 'lucide-react'
import Section3D from './Section3D'
import Tilt from './Tilt'
import { profile } from '../data'

export default function Contact() {
  const { socials } = profile
  const channels = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'Yash Pardeshi', href: socials.linkedin },
  ]
  return (
    <Section3D id="contact" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/10 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="eyebrow">06 / Contact</p>
        <h2 className="mt-4 font-display text-6xl uppercase leading-none text-gold-gradient md:text-8xl">Let's talk</h2>
        <h2 className="font-display text-6xl uppercase leading-none text-white md:text-8xl">numbers</h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <Tilt key={label}>
              <a
                href={href}
                target={label === 'LinkedIn' ? '_blank' : undefined}
                rel="noreferrer"
                className="flex h-full flex-col items-center gap-3 border border-gold-400/40 bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-colors hover:border-gold-300"
              >
                <Icon className="text-gold-300" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">{label}</span>
                <span className="break-all text-sm text-slate-100">{value}</span>
              </a>
            </Tilt>
          ))}
        </div>
      </div>
    </Section3D>
  )
}
