import { ACTUALIDAD } from '../../data/closing'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Figure from '../ui/Figure'
import Reveal from '../ui/Reveal'

/** How Lambayeque's music is shared today + five keys for its future. */
export default function Actualidad() {
  const { channels, keys, keysTitle, photos } = ACTUALIDAD
  return (
    <Section id="actualidad" tone="sand">
      <SectionHeader kicker={ACTUALIDAD.kicker} title={ACTUALIDAD.title} text={ACTUALIDAD.text} />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {channels.map(({ title, detail }, i) => (
          <Reveal key={title} delay={i * 0.1} className="rounded-xl bg-paper p-6 ring-1 ring-gold/40">
            <h3 className="display text-xl text-terracotta">{title}</h3>
            <p className="mt-2 text-ink-soft">{detail}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-3 sm:grid-cols-3">
        {photos.map((photo) => (
          <Figure key={photo.src} photo={photo} ratio="aspect-[2/3]" showCaption={false} />
        ))}
      </div>

      <h3 className="display mt-16 text-3xl">{keysTitle}</h3>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {keys.map(({ q, a }, i) => (
          <Reveal as="li" key={q} className="rounded-xl bg-ink p-5 text-cream">
            <span className="display text-4xl text-gold">{i + 1}</span>
            <p className="label mt-2 text-gold">{q}</p>
            <p className="mt-2 text-sand">{a}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}