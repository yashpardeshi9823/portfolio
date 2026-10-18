import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Intro from './components/Intro'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import SoundToggle from './components/SoundToggle'
import Ticker from './components/Ticker'
import { profile } from './data'

export default function App() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = entered ? '' : 'hidden'
    if (!entered || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true })
    let raf
    const loop = (t) => {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      e.preventDefault()
      lenis.scrollTo(link.getAttribute('href'), { offset: -20 })
    }
    document.addEventListener('click', onClick)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [entered])

  return (
    <>
      <Intro onEnter={() => setEntered(true)} />
      <Cursor />
      <ScrollProgress />
      {entered && <Navbar />}
      <main>
        {entered ? <Hero /> : <div className="h-screen bg-ink" />}
        <Ticker />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Ticker reverse />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-[11px] uppercase tracking-[0.3em] text-slate-600">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
      {entered && <SoundToggle />}
    </>
  )
}
