import { CRIOLLISMO } from '../../data/editorial'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

/** Dark section with a scrolling strip of musical genres (pure CSS animation). */
export default function Criollismo() {
  const loop = [...CRIOLLISMO.genres, ...CRIOLLISMO.genres]
  return (
    <Section id="criollismo" tone="dark">
      <SectionHeader kicker={CRIOLLISMO.kicker} title={CRIOLLISMO.title} tone="dark" />

      <div className="relative -mx-5 mt-12 overflow-hidden border-y border-gold/30 py-4 sm:-mx-8" aria-hidden="true">
        <div className="marquee flex w-max gap-10">
          {loop.map((genre, i) => (
            <span key={i} className="display whitespace-nowrap text-2xl text-gold">
              {genre} <span className="mx-4 text-clay">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="prose-mag mt-12 grid max-w-5xl gap-x-12 text-sand md:grid-cols-2">
        {CRIOLLISMO.paragraphs.map((text) => (
          <Reveal key={text.slice(0, 24)}><p>{text}</p></Reveal>
        ))}
        <Reveal><p className="text-cream">{CRIOLLISMO.closing}</p></Reveal>
      </div>
    </Section>
  )
}