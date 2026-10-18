// Tiny sound manager. Sounds only play after the visitor opts in on the intro screen.
const files = {
  whoosh: '/sfx/whoosh.mp3',
  footsteps: '/sfx/footsteps.mp3',
  coin: '/sfx/coin.mp3',
  swoosh: '/sfx/swoosh.mp3',
}

let enabled = false
let ctx = null
const listeners = new Set()
const cache = {}

function load(name) {
  if (!cache[name]) {
    cache[name] = new Audio(files[name])
    cache[name].preload = 'auto'
  }
  return cache[name]
}

export function preload() {
  Object.keys(files).forEach(load)
}

export function isEnabled() {
  return enabled
}

export function setEnabled(value) {
  enabled = value
  if (value && !ctx && typeof window !== 'undefined' && window.AudioContext) ctx = new AudioContext()
  listeners.forEach((fn) => fn(enabled))
}

export function onChange(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function play(name, volume = 0.6) {
  if (!enabled) return
  const base = load(name)
  const node = base.paused ? base : base.cloneNode()
  node.volume = volume
  node.currentTime = 0
  node.play().catch(() => {})
}

// Soft synthesized tick for hovers: short filtered click, no file needed.
let lastTick = 0
export function tick() {
  if (!enabled || !ctx) return
  const now = performance.now()
  if (now - lastTick < 60) return
  lastTick = now
  const t = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(1800, t)
  osc.frequency.exponentialRampToValueAtTime(900, t + 0.05)
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(0.05, t + 0.005)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.07)
  osc.connect(gain).connect(ctx.destination)
  osc.start(t)
  osc.stop(t + 0.08)
}
