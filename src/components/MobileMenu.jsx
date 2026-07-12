export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`}>
      <a href="#programs" onClick={onClose}>Programs</a>
      <a href="#approach" onClick={onClose}>Approach</a>
      <a href="#admissions" onClick={onClose}>Admissions</a>
      <a href="#visit" onClick={onClose}>Visit</a>
    </div>
  )
}
