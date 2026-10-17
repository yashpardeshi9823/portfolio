import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { profile } from './data'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-[11px] uppercase tracking-[0.3em] text-slate-600">
        © {new Date().getFullYear()} {profile.name}. Crafted with code.
      </footer>
    </>
  )
}
