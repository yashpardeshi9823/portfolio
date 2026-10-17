// Spinning gold 3D coin built from stacked CSS layers.
export default function Coin({ className = '' }) {
  const layers = Array.from({ length: 10 }, (_, i) => i)
  return (
    <div className={className} style={{ perspective: 600 }}>
      <div className="coin relative h-20 w-20" style={{ transformStyle: 'preserve-3d' }}>
        {layers.map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full bg-gold-500"
            style={{ transform: `translateZ(${i - 5}px)`, filter: `brightness(${0.55 + i * 0.02})` }}
          />
        ))}
        {[5, -5].map((z) => (
          <div
            key={z}
            className="absolute inset-0 flex items-center justify-center rounded-full border-2 border-gold-200/70 bg-[radial-gradient(circle_at_35%_30%,#fbefc9,#e2b85c_45%,#8a6420)] font-display text-3xl text-[#5a3f10] shadow-[inset_0_0_12px_rgba(0,0,0,0.35)]"
            style={{ transform: `translateZ(${z}px) ${z < 0 ? 'rotateY(180deg)' : ''}`, backfaceVisibility: 'hidden' }}
          >
            ₹
          </div>
        ))}
      </div>
    </div>
  )
}
