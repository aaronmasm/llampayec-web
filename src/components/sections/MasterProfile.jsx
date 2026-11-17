import Figure from '../ui/Figure'
import PullQuote from '../ui/PullQuote'
import Reveal from '../ui/Reveal'

/**
 * One "gran maestro" profile. Driven entirely by data (see data/masters).
 * `reverse` flips the photo/text columns so the page does not feel repetitive.
 */
export default function MasterProfile({ master, reverse = false }) {
  const { id, name, kicker, title, years, photo, lead, facts, paragraphs, quote, stories, recognition, gallery } = master
  const [firstHalf, secondHalf] = [paragraphs.slice(0, 3), paragraphs.slice(3)]

  return (
    <article id={id} className="scroll-mt-20 border-t border-ink/15 py-16 first:border-t-0 first:pt-0">
      <div className={`grid items-start gap-10 lg:grid-cols-5 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <Reveal className="lg:col-span-2">
          <Figure photo={photo} showCaption={false} className="lg:sticky lg:top-24" />
        </Reveal>

        <div className="lg:col-span-3">
          <Reveal>
            <p className="label text-clay">{kicker}</p>
            <h3 className="display mt-3 text-3xl text-ink sm:text-5xl">{name}</h3>
            <p className="display mt-2 text-xl italic text-terracotta sm:text-2xl">{title}</p>
            <p className="label mt-3 text-ink-soft">{years}</p>
            <p className="mt-6 text-lg font-medium">{lead}</p>
          </Reveal>

          <Reveal>
            <dl className="mt-8 grid gap-3 rounded-xl bg-cream p-5 ring-1 ring-gold/40 sm:grid-cols-2">
              {facts.map(({ label, text }) => (
                <div key={label}>
                  <dt className="label text-terracotta">{label}</dt>
                  <dd className="text-sm leading-snug">{text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="prose-mag mt-8">
            {firstHalf.map((text) => <Reveal key={text.slice(0, 24)}><p>{text}</p></Reveal>)}
          </div>
          <div className="my-8"><PullQuote text={quote.text} author={quote.author} /></div>
          <div className="prose-mag">
            {secondHalf.map((text) => <Reveal key={text.slice(0, 24)}><p>{text}</p></Reveal>)}
          </div>
        </div>
      </div>

      <Stories stories={stories} />

      {recognition && (
        <Reveal className="mt-12 grid items-center gap-8 rounded-2xl bg-terracotta p-6 text-cream sm:p-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h4 className="display text-2xl sm:text-3xl">{recognition.title}</h4>
            <p className="mt-4 text-sand">{recognition.text}</p>
          </div>
          <Figure photo={recognition.photo} showCaption={false} />
        </Reveal>
      )}

      <Gallery photos={gallery} />
    </article>
  )
}

/** "La historia detrás de sus canciones": cards in a responsive grid. */
function Stories({ stories }) {
  return (
    <div className="mt-12">
      <h4 className="label text-clay">La historia detrás de sus canciones</h4>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {stories.map(({ title, text }) => (
          <Reveal key={title} className="rounded-xl border border-gold/50 bg-paper p-5">
            <h5 className="display text-xl text-terracotta">{title}</h5>
            <p className="mt-2 text-base leading-relaxed">{text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/** Photo gallery; clicking an image opens it alone in the lightbox. */
function Gallery({ photos }) {
  return (
    <div className="mt-12 columns-2 gap-4 space-y-4 md:columns-3">
      {photos.map((photo) => (
        <Reveal key={photo.src} className="break-inside-avoid">
          <Figure photo={photo} />
        </Reveal>
      ))}
    </div>
  )
}