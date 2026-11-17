/**
 * Page section wrapper: sets the anchor id (for the navbar) and consistent spacing.
 * `tone` picks the background: "paper" (default), "sand" or "dark".
 */
const TONES = {
  paper: 'paper-texture text-ink',
  sand: 'bg-sand/60 text-ink',
  dark: 'dark-texture text-cream',
}

export default function Section({ id, tone = 'paper', children, className = '' }) {
  return (
    <section id={id} className={`${TONES[tone]} py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  )
}