import Reveal from './Reveal.jsx'

const steps = [
  {
    step: '01',
    title: 'Get in touch',
    body: "Reach out by phone or email and share which track you're interested in — CALE exam preparation or CEU coursework.",
  },
  {
    step: '02',
    title: 'Advising conversation',
    body: 'A short call to confirm eligibility, review the CALE application requirements, and outline a study timeline.',
  },
  {
    step: '03',
    title: 'Enrollment',
    body: 'Once a cohort is scheduled, confirmed candidates receive course materials, exam-format practice sets, and a calendar.',
  },
]

export default function Admissions() {
  return (
    <section className="section" id="admissions">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Admissions</div>
          <h2>How to get started.</h2>
          <svg className="brush-underline" viewBox="0 0 240 14" width="180">
            <path d="M2 8 Q 60 2, 120 8 T 236 7" />
          </svg>
          <p>Here's the path from first inquiry to enrollment.</p>
        </Reveal>

        <Reveal className="timeline">
          {steps.map((s) => (
            <div className="t-row" key={s.step}>
              <span className="step">{s.step}</span>
              <div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
