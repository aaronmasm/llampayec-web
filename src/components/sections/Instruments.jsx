import { INSTRUMENT_FAMILIES, INSTRUMENTS_INTRO } from '../../data/instruments'
import { IMAGES } from '../../data/images'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Figure from '../ui/Figure'
import Reveal from '../ui/Reveal'

/** Instruments grouped by family; every illustration opens in the lightbox. */
export default function Instruments() {
  return (
    <Section id="instrumentos" tone="dark">
      <SectionHeader {...INSTRUMENTS_INTRO} tone="dark" />

      {INSTRUMENT_FAMILIES.map(({ family, items }) => (
        <div key={family} className="mt-16">
          <h3 className="display border-b border-gold/40 pb-3 text-3xl text-gold">{family}</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map(({ slug, name, text }) => (
              <Reveal key={slug} className="flex gap-4 rounded-xl bg-ink-soft/60 p-4 ring-1 ring-gold/20">
                <Figure
                  className="w-28 shrink-0"
                  showCaption={false}
                  photo={{ src: IMAGES.instrument(slug), alt: `Ilustración de ${name}`, caption: name }}
                />
                <div>
                  <h4 className="display text-xl text-cream">{name}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-sand">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}