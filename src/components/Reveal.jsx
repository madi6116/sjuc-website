import { useReveal } from '../hooks/useReveal.js'

// Wraps children in a div that fades/slides in once scrolled into view.
// Pass `as` to render a different tag, and `delay` (1-3) to stagger a group.
export default function Reveal({ children, as: Tag = 'div', delay, className = '', style }) {
  const [ref, inView] = useReveal()
  const delayClass = delay ? `reveal-delay-${delay}` : ''
  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${inView ? 'in' : ''} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
