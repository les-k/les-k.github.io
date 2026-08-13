import { education, certifications } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">
        <span className="section-title-inner">Education & certs</span>
      </h2>
      <div className="education-grid">
        {education.map((e) => (
          <div key={e.title} className="card card-tilt-left edu-card">
            <h3 className="edu-title">{e.title}</h3>
            <p className="edu-org">{e.org}</p>
            <p className="edu-period sticker sticker-yellow">{e.period}</p>
            <p className="edu-details">{e.details}</p>
          </div>
        ))}
      </div>
      <div className="certs">
        {certifications.map((c) => (
          <div key={c.org} className="cert-block">
            <span className="cert-org sticker sticker-coral">{c.org}</span>
            <div className="cert-items">
              {c.items.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
