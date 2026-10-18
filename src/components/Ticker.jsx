import { motion } from 'framer-motion'

const items = [
  ['NPV', '▲'],
  ['WACC', '▲'],
  ['EBITDA', '▲'],
  ['PIRR', '▲'],
  ['EIRR', '▲'],
  ['DCF', '▲'],
  ['CAPEX', '▼'],
  ['OPEX', '▼'],
  ['Terminal value', '▲'],
  ['Sensitivity', '▲'],
  ['Market research', '▲'],
]

// Stock-ticker style marquee of finance terms.
export default function Ticker({ reverse = false }) {
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-gold-400/20 bg-gradient-to-r from-ink via-[#0d1220] to-ink py-4">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {row.map(([label, dir], i) => (
          <span key={i} className="flex items-center gap-3 font-display text-2xl uppercase tracking-wide text-slate-500">
            {label}
            <span className={dir === '▲' ? 'text-emerald-400/80' : 'text-gold-400'}>{dir}</span>
            <span className="text-gold-400/40">✦</span>
          </span>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  )
}
