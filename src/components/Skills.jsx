import { skillGroups } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">
        <span className="section-title-inner">Toolbox</span>
      </h2>

      {skillGroups.map((g) => (
        <div key={g.group} className="skill-group">
          <h3 className="skill-group-title">{g.group}</h3>
          {/* A real list, so a screen reader announces how many tools are in
              each group before reading them out. */}
          <ul className="skills-cloud">
            {g.skills.map((s, i) => (
              <li
                key={s}
                className="skill-chip"
                style={{ '--wiggle-delay': `${(i % 5) * 0.15}s` }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
