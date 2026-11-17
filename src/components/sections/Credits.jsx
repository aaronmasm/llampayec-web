import { CREDITS } from '../../data/closing'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

/** Production credits, thanks and archive sources. */
export default function Credits() {
  return (
    <Section id="creditos">
      <SectionHeader kicker="Equipo" title={CREDITS.title} align="center" />
      <dl className="mx-auto mt-12 grid max-w-3xl gap-x-8 gap-y-3 sm:grid-cols-[1fr_1fr]">
        {CREDITS.team.map(({ role, name }) => (
          <div key={role + name} className="contents">
            <dt className="text-ink-soft sm:text-right">{role}</dt>
            <dd className="font-semibold">{name}</dd>
          </div>
        ))}
      </dl>
      <CreditList title={CREDITS.thanksTitle} items={CREDITS.thanks} />
      <CreditList title={CREDITS.archiveTitle} items={CREDITS.archive} />
    </Section>
  )
}

function CreditList({ title, items }) {
  return (
    <div className="mt-12 text-center">
      <h3 className="label text-clay">{title}</h3>
      <ul className="mt-4 space-y-1 font-semibold">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}