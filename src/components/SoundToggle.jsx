import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { isEnabled, onChange, setEnabled } from '../sound'

// Floating equalizer button that turns sound effects on and off.
export default function SoundToggle() {
  const [on, setOn] = useState(isEnabled())
  useEffect(() => onChange(setOn), [])

  return (
    <button
      onClick={() => setEnabled(!on)}
      aria-label={on ? 'Mute sound' : 'Turn sound on'}
      className="fixed bottom-6 left-6 z-50 flex h-11 items-center gap-3 border border-gold-400/40 bg-ink/70 px-4 text-[10px] uppercase tracking-[0.3em] text-gold-200 backdrop-blur transition hover:border-gold-300"
    >
      <span className="flex h-4 items-end gap-[3px]">
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            className="w-[2px] bg-gold-300"
            animate={on ? { height: ['30%', '100%', '45%', '80%', '30%'] } : { height: '20%' }}
            transition={on ? { duration: 0.9 + i * 0.15, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
          />
        ))}
      </span>
      {on ? 'Sound on' : 'Sound off'}
    </button>
  )
}
