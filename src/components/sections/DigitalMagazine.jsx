import { DIGITAL } from '../../data/digital'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

/** Entry point to the page-turning digital edition (opens in a new tab). */
export default function DigitalMagazine() {
  const { kicker, title, text, cta, url, cover } = DIGITAL
  return (
    <Section id="revista-digital" tone="dark">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeader kicker={kicker} title={title} text={text} tone="dark" />
          <Reveal delay={0.15} className="mt-10">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-ink shadow-lg transition hover:scale-105 hover:bg-cream"
            >
              {cta}
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.5" aria-hidden="true">
                <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto w-full max-w-sm">
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={cta}>
            <img
              src={cover.src}
              alt={cover.alt}
              loading="lazy"
              className="w-full rotate-2 rounded-md shadow-2xl ring-1 ring-gold/40 transition duration-500 hover:rotate-0"
            />
          </a>
        </Reveal>
      </div>
    </Section>
  )
}