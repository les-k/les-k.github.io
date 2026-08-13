import { profile, socials, roles } from '../data.js'

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="hero-photo-wrap">
        <img
          src={profile.cutout}
          alt={`Photo of ${profile.name}`}
          className="hero-photo"
        />
      </div>

      <p className="hero-hello sticker sticker-yellow">👋 hey, I&apos;m</p>
      <h1 className="hero-name">
        {profile.name.split(' ').map((word) => (
          <span key={word} className="hero-name-word">
            {word}
          </span>
        ))}
      </h1>
      <p className="hero-title">
        <span className="sticker sticker-coral">{profile.title}</span>
      </p>
      <p className="hero-tagline">{profile.tagline}</p>

      <div className="hero-roles">
        {roles.map((r, i) => (
          <span
            key={r}
            className="role-tag"
            style={{ '--rot': `${(i % 2 === 0 ? -1 : 1) * ((i % 3) + 1)}deg` }}
          >
            {r}
          </span>
        ))}
      </div>

      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          See my work ↓
        </a>
      </div>

      <div className="hero-socials">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="social-chip"
            title={s.label}
          >
            <span aria-hidden="true">{s.icon}</span> {s.label}
          </a>
        ))}
      </div>
    </header>
  )
}
