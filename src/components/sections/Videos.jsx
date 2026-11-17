import { VIDEOS, VIDEOS_INTRO } from '../../data/closing'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

/**
 * Local videos (files in /public/video). With no entries in VIDEOS the section
 * shows a placeholder, so the layout can be reviewed before the files arrive.
 */
export default function Videos() {
  return (
    <Section id="videos" tone="dark">
      <SectionHeader {...VIDEOS_INTRO} tone="dark" />
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {VIDEOS.length === 0 ? (
          <Placeholder />
        ) : (
          VIDEOS.map(({ src, poster, title, caption }) => (
            <figure key={src}>
              <video controls preload="metadata" poster={poster} className="w-full rounded-xl bg-black">
                <source src={src} type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-sand">
                <strong className="text-cream">{title}</strong>
                {caption && <span> · {caption}</span>}
              </figcaption>
            </figure>
          ))
        )}
      </div>
    </Section>
  )
}

function Placeholder() {
  return (
    <div className="grid aspect-video place-items-center rounded-xl border-2 border-dashed border-gold/50 text-center text-sand md:col-span-2">
      <div>
        <svg viewBox="0 0 24 24" className="mx-auto size-14 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" /><path d="m10 8.5 5.5 3.5-5.5 3.5z" fill="currentColor" />
        </svg>
        <p className="display mt-4 text-2xl text-cream">Próximamente</p>
        <p className="mt-1 text-sm">Aquí se publicarán los videos de la edición.</p>
      </div>
    </div>
  )
}