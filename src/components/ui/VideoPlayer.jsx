/**
 * Local video with a poster. `preload="none"` keeps the page light: the file is
 * only downloaded when the visitor presses play.
 */
export default function VideoPlayer({ video, className = '' }) {
  return (
    <figure className={className}>
      <video
        controls
        playsInline
        preload="none"
        poster={video.poster}
        aria-label={video.title}
        className="aspect-video w-full rounded-xl bg-ink shadow-xl ring-1 ring-ink/10"
      >
        <source src={video.src} type="video/mp4" />
        Tu navegador no puede reproducir este video.
      </video>
      <figcaption className="label mt-3 text-ink-soft">{video.title}</figcaption>
    </figure>
  )
}