import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data'

const links = ['About', 'Work', 'Skills', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled ? 'bg-ink/80 backdrop-blur-md' : ''}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="font-display text-lg tracking-[0.3em] text-white">
          {profile.brand}
        </a>
        <ul className="hidden gap-10 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-300 transition hover:text-gold-300">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-slate-300 transition hover:border-gold-400 hover:text-gold-300 md:block">
          Let's talk
        </a>
        <button className="text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-4 bg-ink/95 px-6 pb-6 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-xs uppercase tracking-[0.3em] text-slate-300">
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.header>
  )
}
