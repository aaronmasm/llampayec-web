import { EDITORIAL } from '../../data/editorial'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

/** Editorial letter. The first paragraph gets a drop cap. */
export default function Editorial() {
  const [first, ...rest] = EDITORIAL.paragraphs
  return (
    <Section id="editorial">
      <SectionHeader kicker={EDITORIAL.kicker} title={EDITORIAL.title} />
      <div className="prose-mag mt-12 max-w-3xl">
        <Reveal><p className="dropcap">{first}</p></Reveal>
        {rest.map((text) => (
          <Reveal key={text.slice(0, 24)}><p>{text}</p></Reveal>
        ))}
      </div>
    </Section>
  )
}