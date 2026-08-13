import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">
        <span className="section-title-inner">The journey so far</span>
      </h2>

      <ol className="timeline">
        {experience.map((item) => (
          <li key={item.role} className="timeline-item">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="card timeline-card">
              <span className="timeline-period sticker sticker-yellow">{item.period}</span>
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-org">{item.org}</p>
              <p className="timeline-summary">{item.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
