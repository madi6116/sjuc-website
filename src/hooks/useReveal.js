import { useEffect, useRef, useState } from 'react'

// Attaches an IntersectionObserver to the returned ref and flips `inView`
// to true the first time the element scrolls into view (then stops watching).
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}
