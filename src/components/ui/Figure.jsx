import { useLightbox } from '../../context/LightboxContext'

const toSlide = ({ src, alt, caption }) => ({ src, alt, description: caption })

/**
 * A photo that opens in the lightbox when clicked.
 *
 * @param {object}   photo   - {src, alt, caption?}
 * @param {string}   ratio   - Tailwind aspect class (e.g. "aspect-square"); omit to keep natural ratio
 */
export default function Figure({ photo, ratio, className = '', showCaption = true }) {
  const { openLightbox } = useLightbox()

  return (
    <figure className={className}>
      <button
        type="button"
        onClick={() => openLightbox([toSlide(photo)])}
        aria-label={`Ampliar imagen: ${photo.alt}`}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl bg-sand shadow-md ring-1 ring-ink/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
      >
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className={`w-full object-cover transition duration-500 group-hover:scale-105 ${ratio ?? ''} ${ratio ? 'h-full' : 'h-auto'}`}
        />
        <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-ink/70 text-cream opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="6" /><path d="m20 20-4.2-4.2M11 8v6M8 11h6" />
          </svg>
        </span>
      </button>
      {showCaption && photo.caption && (
        <figcaption className="mt-2 text-sm italic text-ink-soft">{photo.caption}</figcaption>
      )}
    </figure>
  )
}