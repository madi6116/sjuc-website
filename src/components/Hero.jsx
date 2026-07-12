export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Traditional Chinese Medicine &middot; Acupuncture</div>
          <h1>Preparing California's next licensed <em>acupuncturists.</em></h1>
          <p className="lede">
            San Jose University of California is a new institute based in Santa Clara, built
            around a single focus: rigorous, exam-ready preparation for the California
            Acupuncturist Licensure Examination, alongside continuing education for
            practicing acupuncturists.
          </p>
          <div className="hero-ctas">
            <a href="#programs" className="btn btn-seal">Explore Programs</a>
          </div>
          <div className="fact-chips">
            <span className="chip">CALE Exam Prep</span>
            <span className="chip">CAB-Approved CEU</span>
            <span className="chip">Santa Clara, CA</span>
          </div>
        </div>

        <div className="hero-visual">
          <svg viewBox="0 0 420 480" xmlns="http://www.w3.org/2000/svg">
            <path className="meridian-line" d="M210 40 C 150 90, 260 130, 190 180 S 260 260, 200 320 S 260 400, 210 440" />
            <path className="meridian-line" d="M210 40 C 270 90, 160 130, 230 180 S 160 260, 220 320 S 160 400, 210 440" />
            <g>
              <circle className="meridian-point" cx="210" cy="40" r="5"></circle>
              <circle className="meridian-point-ring pulse" cx="210" cy="40" r="5" style={{ animationDelay: '0s' }}></circle>
              <circle className="meridian-point" cx="190" cy="180" r="5"></circle>
              <circle className="meridian-point-ring pulse" cx="190" cy="180" r="5" style={{ animationDelay: '.6s' }}></circle>
              <circle className="meridian-point" cx="200" cy="320" r="5"></circle>
              <circle className="meridian-point-ring pulse" cx="200" cy="320" r="5" style={{ animationDelay: '1.2s' }}></circle>
              <circle className="meridian-point" cx="210" cy="440" r="5"></circle>
              <circle className="meridian-point-ring pulse" cx="210" cy="440" r="5" style={{ animationDelay: '1.8s' }}></circle>
              <circle className="meridian-point" cx="230" cy="180" r="3.5" opacity=".7"></circle>
              <circle className="meridian-point" cx="220" cy="320" r="3.5" opacity=".7"></circle>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
