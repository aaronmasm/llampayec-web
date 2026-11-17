import Reveal from './Reveal'

/** Large decorative quote. `tone="dark"` for dark backgrounds. */
export default function PullQuote({ text, author, tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <Reveal>
      <blockquote className={`relative border-l-4 py-2 pl-6 ${dark ? 'border-gold' : 'border-terracotta'}`}>
        <p className={`display text-2xl italic sm:text-3xl ${dark ? 'text-cream' : 'text-terracotta'}`}>
          «{text}»
        </p>
        {author && (
          <footer className={`label mt-4 ${dark ? 'text-gold' : 'text-ink-soft'}`}>— {author}</footer>
        )}
      </blockquote>
    </Reveal>
  )
}