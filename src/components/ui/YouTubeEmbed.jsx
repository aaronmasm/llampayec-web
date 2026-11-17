import { useState } from 'react'

/**
 * Privacy-friendly YouTube embed (click-to-load).
 *
 * Shows the video thumbnail first and only mounts the iframe (youtube-nocookie)
 * when the visitor presses play, so the page stays light and sets no cookies up front.
 *
 * @param {object} video - {id, title, start?} where start is in seconds
 */
export default function YouTubeEmbed({ video, className = '' }) {
  const [playing, setPlaying] = useState(false)
  const { id, title, start = 0 } = video
  const params = new URLSearchParams({ autoplay: '1', rel: '0', ...(start && { start }) })

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-xl bg-ink shadow-lg ${className}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?${params}`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Reproducir: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
          />
          <span className="absolute inset-0 grid place-items-center bg-ink/30">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-terracotta text-cream shadow-lg transition group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            </span>
          </span>
        </button>
      )}
    </div>
  )
}