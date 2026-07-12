import Reveal from './Reveal.jsx'

export default function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Approach</div>
          <h2>Built specifically for the licensure path.</h2>
          <svg className="brush-underline" viewBox="0 0 240 14" width="180">
            <path d="M2 8 Q 60 2, 120 8 T 236 7" />
          </svg>
        </Reveal>

        <div className="approach-grid">
          <Reveal className="approach-item">
            <svg className="mark" viewBox="0 0 34 34">
              <circle cx="17" cy="17" r="15" fill="none" stroke="#a53228" strokeWidth="1.6" />
              <circle cx="17" cy="17" r="3" fill="#a53228" />
            </svg>
            <h3>Exam-mapped curriculum</h3>
            <p>Every module traces back to a specific section of the CALE content outline, so study time goes where the exam actually tests.</p>
          </Reveal>

          <Reveal className="approach-item" delay={1}>
            <svg className="mark" viewBox="0 0 34 34">
              <path d="M6 24 Q17 4 28 24" fill="none" stroke="#234a3c" strokeWidth="1.6" />
              <circle cx="17" cy="12" r="2.6" fill="#234a3c" />
            </svg>
            <h3>Practitioner-taught</h3>
            <p>Courses are designed and led by practicing acupuncturists and TCM educators, not adapted from unrelated pre-health material.</p>
          </Reveal>

          <Reveal className="approach-item" delay={2}>
            <svg className="mark" viewBox="0 0 34 34">
              <rect x="5" y="5" width="24" height="24" rx="2" fill="none" stroke="#b98a3d" strokeWidth="1.6" />
              <path d="M11 17h12M17 11v12" stroke="#b98a3d" strokeWidth="1.6" />
            </svg>
            <h3>Small, focused cohorts</h3>
            <p>Class sizes are kept small by design, so instructors can work through case material with each candidate rather than lecture at scale.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
