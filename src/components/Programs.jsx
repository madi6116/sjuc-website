import Reveal from './Reveal.jsx'
import SpotlightCard from './SpotlightCard.jsx'

export default function Programs() {
  return (
    <section className="section" id="programs">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Programs</div>
          <h2>Two focused tracks, one goal.</h2>
          <svg className="brush-underline" viewBox="0 0 240 14" width="180">
            <path d="M2 8 Q 60 2, 120 8 T 236 7" />
          </svg>
          <p>
            SJUC's early offerings are intentionally narrow — built for candidates
            approaching licensure, and for practitioners maintaining it.
          </p>
        </Reveal>

        <div className="program-grid">
          <Reveal>
            <SpotlightCard
              tag="Licensure Prep"
              title="CALE Exam Preparation"
              description="A structured review of the California Acupuncturist Licensure Examination content outline — biomedicine, TCM theory and diagnosis, safety and ethics, and clinical case formats — for candidates preparing to sit the exam."
              points={[
                'Full content-outline coverage across all exam domains',
                'Timed practice examinations in CALE format',
                'Case-based review sessions with working practitioners',
                'Cohort and self-paced study options',
              ]}
            />
          </Reveal>
          <Reveal delay={1}>
            <SpotlightCard
              tag="Continuing Education"
              title="CEU Courses"
              description="Continuing education courses approved by the California Acupuncture Board, designed for licensed acupuncturists fulfilling renewal requirements."
              points={[
                'CAB-approved continuing education hours',
                'Rotating topics in clinical practice and safety',
                'Evening and weekend cohorts for working practitioners',
                'Certificates of completion issued for each course',
              ]}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
