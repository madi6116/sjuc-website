import { useRef } from 'react'

// A card that tracks the cursor and reveals a soft radial glow under it on hover.
export default function SpotlightCard({ tag, title, description, points, className = '' }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} className={`spot-card ${className}`} onMouseMove={handleMouseMove}>
      <span className="tag">{tag}</span>
      <h3>{title}</h3>
      <p className="desc">{description}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  )
}
