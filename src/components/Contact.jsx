import { profile, socials } from '../data.js'

// This card already offers three ways to email — the button and both other
// addresses — so the mailto chip is a fourth copy of something on screen.
// Matched on the URL rather than the label, so renaming the entry can't
// quietly bring it back. The hero keeps it: nothing else there is an address.
const links = socials.filter((s) => !s.url.startsWith('mailto:'))

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-card card">
        <h2 className="contact-heading">Let&apos;s build something fun.</h2>
        <p className="contact-sub">
          Got a project, a job, or just a weird idea? My inbox is open.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn-primary btn-big">
          {profile.email}
        </a>
        <div className="contact-details">
          {profile.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="social-chip">
              📞 {p}
            </a>
          ))}
          {profile.otherEmails.map((e) => (
            <a key={e} href={`mailto:${e}`} className="social-chip">
              ✉️ {e}
            </a>
          ))}
        </div>
        <div className="contact-socials">
          {links.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="social-chip"
            >
              <span aria-hidden="true">{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name} · seven old websites, one new home ·
          built with React, coffee, and questionable amounts of border-radius
        </p>
      </footer>
    </section>
  )
}
