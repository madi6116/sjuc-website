import { useState } from 'react'
import Nav from './components/Nav.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import Hero from './components/Hero.jsx'
import Snapshot from './components/Snapshot.jsx'
import Programs from './components/Programs.jsx'
import Approach from './components/Approach.jsx'
import Admissions from './components/Admissions.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero />
      <Snapshot />
      <Programs />
      <Approach />
      <Admissions />
      <Visit />
      <Footer />
    </>
  )
}
