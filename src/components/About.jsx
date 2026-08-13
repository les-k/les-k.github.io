import { profile } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">
        <span className="section-title-inner">About me</span>
      </h2>
      <div className="about-grid">
        <div className="card card-tilt-left">
          {profile.about.map((para, i) => (
            <p key={i} className="about-para">
              {para}
            </p>
          ))}
          <p className="about-location">📍 {profile.location}</p>
        </div>
        <div className="about-side">
          <div className="about-photo-frame">
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="about-photo" />
          </div>
          <div className="about-facts">
            {profile.funFacts.map((fact) => (
              <span key={fact} className="sticker sticker-fact">
                {fact}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
