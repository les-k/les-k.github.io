import { profile, services } from '../data.js'

const tilts = ['card-tilt-left', 'card-tilt-right']

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="section-title">
        <span className="section-title-inner">What I do</span>
      </h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={s.title} className={`card service-card ${tilts[i % 2]}`}>
            <div className="service-emoji" aria-hidden="true">
              {s.emoji}
            </div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-blurb">{s.blurb}</p>
            {/* Opens in the browser's own PDF viewer, which has a download
                button of its own — so the reader decides, rather than landing
                a file in their downloads folder for clicking a link. */}
            <a href={s.resume} target="_blank" rel="noreferrer" className="service-resume">
              View resume (PDF) →
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        ))}
      </div>

      {/* A full-width bar rather than a sixth card. Square corners and no tilt
          keep it reading as a different kind of thing to the five above. */}
      <a href={profile.cv} target="_blank" rel="noreferrer" className="services-cv">
        CV 📄
        <span className="visually-hidden"> (PDF, opens in a new tab)</span>
      </a>
    </section>
  )
}
