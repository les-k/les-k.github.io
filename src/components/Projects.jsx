import { useMemo, useState } from 'react'

import { projects, services } from '../data.js'

const ALL = 'Everything'

// `pending` is a date, not a flag, so the notice removes itself. Once the
// repository's publish date has passed the card becomes an ordinary link with
// no code change and nothing to remember. Read once per mount rather than per
// card, so every card on a page agrees on what "today" is.
const TODAY = new Date()

function pendingUntil(iso) {
  if (!iso) return null
  // End of the publish day: the queue publishes at some point during it, and a
  // notice that lingers a few hours is better than a link that 404s.
  const until = new Date(`${iso}T23:59:59`)
  if (until <= TODAY) return null
  return until.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL)

  // Built from the services list rather than hardcoded, so a field can never
  // appear as a filter with nothing behind it.
  const fields = useMemo(() => {
    const present = new Set(projects.map((p) => p.field))
    return [ALL, ...services.map((s) => s.title).filter((t) => present.has(t))]
  }, [])

  const visible = filter === ALL ? projects : projects.filter((p) => p.field === filter)

  return (
    <section id="projects" className="section">
      <h2 className="section-title">
        <span className="section-title-inner">Things I&apos;ve built</span>
      </h2>

      <p className="projects-intro">
        Every one is public, and every number below can be reproduced by running the code.
      </p>

      {/* aria-pressed carries the state, so the styling and what a screen
          reader announces cannot drift apart. */}
      <div className="project-filters" role="group" aria-label="Filter projects by field">
        {fields.map((field) => (
          <button
            key={field}
            type="button"
            className="project-filter"
            aria-pressed={filter === field}
            onClick={() => setFilter(field)}
          >
            {field}
          </button>
        ))}
      </div>

      {/* Pressing a filter changes the grid visibly and, without this, silently. */}
      <p className="projects-count" aria-live="polite">
        {visible.length} of {projects.length} projects
      </p>

      <div className="projects-grid">
        {visible.map((p, i) => {
          // A repository still in the publishing queue has no URL yet. Rendering
          // the card as a plain article rather than an anchor is the point: a
          // link to a 404 costs more trust than saying the date out loud.
          const pending = pendingUntil(p.pending)
          const Card = pending ? 'article' : 'a'
          const linkProps = pending
            ? {}
            : { href: p.link, target: '_blank', rel: 'noreferrer' }

          return (
            <Card
              key={p.title}
              {...linkProps}
              className={`project-card card color-${p.color} ${
                i % 2 === 0 ? 'card-tilt-left' : 'card-tilt-right'
              }${pending ? ' project-card-pending' : ''}`}
            >
              <div className="project-emoji" aria-hidden="true">
                {p.emoji}
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-field">{p.field}</p>
              <p className="project-desc">{p.description}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              {pending ? (
                <span className="project-link project-link-pending">
                  Repository goes public {pending}
                </span>
              ) : (
                <span className="project-link">
                  View on GitHub →
                  {/* An unannounced new tab leaves the back button dead with no
                      explanation, so the destination is in the link text. */}
                  <span className="visually-hidden"> (opens on GitHub in a new tab)</span>
                </span>
              )}
            </Card>
          )
        })}
      </div>
    </section>
  )
}
