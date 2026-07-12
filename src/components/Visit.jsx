import Reveal from './Reveal.jsx'

export default function Visit() {
  return (
    <section className="section visit" id="visit">
      <div className="wrap">
        <div className="visit-single">
          <Reveal className="eyebrow">Visit &amp; Contact</Reveal>
          <Reveal as="h2">Find us in Santa Clara.</Reveal>
          <Reveal>
            <svg className="brush-underline" viewBox="0 0 240 14" width="180">
              <path d="M2 8 Q 60 2, 120 8 T 236 7" />
            </svg>
          </Reveal>

          <Reveal className="contact-list">
            <div className="row">
              <span className="ic">&#128205;</span>
              <div>
                <span className="label">Address</span>
                <span>3170 De La Cruz Blvd., Suite 129<br />Santa Clara, CA 95054</span>
              </div>
            </div>
            <div className="row">
              <span className="ic">&#128222;</span>
              <div>
                <span className="label">Phone</span>
                <a href="tel:+15108252161">(510) 825-2161</a>
              </div>
            </div>
            <div className="row">
              <span className="ic">&#9993;</span>
              <div>
                <span className="label">Email</span>
                <a href="mailto:info@sjuc.org">info@sjuc.org</a>
              </div>
            </div>
          </Reveal>

          <Reveal className="map-frame" style={{ marginTop: '32px' }}>
            <iframe
              title="SJUC location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=3170+De+La+Cruz+Blvd+Suite+129+Santa+Clara+CA+95054&output=embed"
            ></iframe>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
