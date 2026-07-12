export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="fbrand">
              <span className="brand-mark" style={{ width: '34px', height: '34px', fontSize: '11px' }}>印</span>
              <span className="full">San Jose University of California</span>
            </div>
            <p className="desc">
              A Traditional Chinese Medicine and Acupuncture institute in Santa Clara,
              California, focused on CALE licensure exam preparation and CAB-approved
              continuing education.
            </p>
          </div>
          <div>
            <h5>Explore</h5>
            <ul>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#visit">Visit</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>3170 De La Cruz Blvd., Suite 129<br />Santa Clara, CA 95054</li>
              <li><a href="tel:+15108252161">(510) 825-2161</a></li>
              <li><a href="mailto:info@sjuc.org">info@sjuc.org</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 San Jose University of California. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
