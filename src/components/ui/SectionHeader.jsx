import Reveal from './Reveal'

/**
 * Standard section heading: small kicker, big serif title, optional lead text.
 * `tone="dark"` is for sections on the dark background.
 */
export default function SectionHeader({ kicker, title, text, tone = 'light', align = 'left' }) {
  const isDark = tone === 'dark'
  return (
    <Reveal className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className={`label mb-4 ${isDark ? 'text-gold' : 'text-clay'}`}>{kicker}</p>
      <h2 className={`display text-4xl sm:text-5xl lg:text-6xl ${isDark ? 'text-cream' : 'text-ink'}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-6 text-lg ${isDark ? 'text-sand' : 'text-ink-soft'}`}>{text}</p>
      )}
    </Reveal>
  )
}