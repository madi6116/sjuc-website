import { useEffect, useState } from 'react'

export default function Nav({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">印</span>
          <span className="brand-text">
            <span className="full">San Jose University of California</span>
            <span className="sub">TCM &amp; Acupuncture</span>
          </span>
        </a>
        <nav className="links">
          <a href="#programs">Programs</a>
          <a href="#approach">Approach</a>
          <a href="#admissions">Admissions</a>
          <a href="#visit">Visit</a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
