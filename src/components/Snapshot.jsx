const items = [
  {
    num: '01',
    title: 'Single Discipline Focus',
    body: "Every course is built around TCM and acupuncture — nothing else competes for the curriculum's attention.",
  },
  {
    num: '02',
    title: 'Licensure-Aligned Curriculum',
    body: 'Coursework is mapped directly to the California Acupuncturist Licensure Examination content outline.',
  },
  {
    num: '03',
    title: 'Bay Area Location',
    body: "Based in Santa Clara, within reach of the South Bay's acupuncture and East Asian medicine community.",
  },
]

export default function Snapshot() {
  return (
    <section className="snapshot">
      <div className="wrap">
        {items.map((item) => (
          <div className="snapshot-item" key={item.num}>
            <span className="num">{item.num}</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
