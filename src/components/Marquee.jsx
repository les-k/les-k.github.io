import { marqueeWords } from '../data.js'

export default function Marquee({ direction = 'left' }) {
  // Duplicate the word list so the loop is seamless
  const words = [...marqueeWords, ...marqueeWords, ...marqueeWords]
  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marquee-track marquee-${direction}`}>
        {words.map((w, i) => (
          <span key={i} className="marquee-item">
            {w} <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
