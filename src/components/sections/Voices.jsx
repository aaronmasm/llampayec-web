import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { VOICES, VOICES_INTRO } from '../../data/voices'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Figure from '../ui/Figure'
import PullQuote from '../ui/PullQuote'
import VideoPlayer from '../ui/VideoPlayer'

/** Interviews: one tab per person, animated cross-fade between them. */
export default function Voices() {
  const [activeId, setActiveId] = useState(VOICES[0].id)
  const voice = VOICES.find((v) => v.id === activeId)

  return (
    <Section id="voces">
      <SectionHeader {...VOICES_INTRO} />

      <div role="tablist" aria-label="Entrevistados" className="mt-10 flex flex-wrap gap-2">
        {VOICES.map(({ id, name }) => (
          <button
            key={id}
            role="tab"
            type="button"
            aria-selected={id === activeId}
            onClick={() => setActiveId(id)}
            className={`label rounded-full px-4 py-2 transition ${
              id === activeId ? 'bg-terracotta text-cream' : 'bg-sand text-ink hover:bg-gold/40'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={voice.id}
          role="tabpanel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
          className="mt-10"
        >
          {voice.video && <VideoPlayer video={voice.video} className="mb-12 max-w-4xl" />}
          <div className="grid gap-10 lg:grid-cols-3">
          <aside>
            {voice.photo ? (
              <Figure photo={{ src: voice.photo, alt: voice.name }} showCaption={false} />
            ) : (
              <Monogram name={voice.name} />
            )}
            <h3 className="display mt-5 text-3xl">{voice.name}</h3>
            <p className="label mt-1 text-clay">{voice.role}</p>
            <div className="mt-6"><PullQuote text={voice.quote} /></div>
          </aside>

          <div className="prose-mag lg:col-span-2">
            {voice.sections.map(({ heading, paragraphs }) => (
              <div key={heading}>
                <h4>{heading}</h4>
                {paragraphs.map((text) => <p key={text.slice(0, 24)}>{text}</p>)}
              </div>
            ))}
          </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}

/** Fallback when there is no portrait: initials on a terracotta tile. */
function Monogram({ name }) {
  const initials = name.split(' ').slice(0, 2).map((w) => w[0]).join('')
  return (
    <div className="display grid aspect-[4/3] place-items-center rounded-xl bg-terracotta text-6xl text-cream">
      {initials}
    </div>
  )
}