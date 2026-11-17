import { useEffect, useRef, useState } from 'react'
import { VIDEO_EVENT } from '../../context/MusicContext'

let apiPromise
/** Loads the YouTube IFrame API once and resolves with window.YT. */
function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  if (!apiPromise) {
    apiPromise = new Promise((resolve, reject) => {
      window.onYouTubeIframeAPIReady = () => resolve(window.YT)
      const script = document.createElement('script')
      script.src = 'https://www.youtube.com/iframe_api'
      script.onerror = () => {
        apiPromise = null
        reject(new Error('YouTube API unavailable'))
      }
      document.head.appendChild(script)
    })
  }
  return apiPromise
}

/** Tells the background music whether this video is playing (see MusicContext). */
const announce = (id, playing) =>
  window.dispatchEvent(new CustomEvent(VIDEO_EVENT, { detail: { id, playing } }))

/**
 * Privacy-friendly YouTube embed (click-to-load).
 *
 * Shows the video thumbnail first and only mounts the player (youtube-nocookie)
 * when the visitor presses play, so the page stays light. Play / pause / end events
 * are announced to the music so it can fade out while the video runs.
 *
 * @param {object} video - {id, title, start?} where start is in seconds
 */
export default function YouTubeEmbed({ video, className = '' }) {
  const [playing, setPlaying] = useState(false)
  const [fallback, setFallback] = useState(false) // API blocked: plain iframe, no auto-mute
  const hostRef = useRef(null)
  const { id, title, start = 0 } = video

  useEffect(() => {
    if (!playing || fallback) return
    let player
    let cancelled = false
    const host = hostRef.current
    loadYouTubeApi()
      .then((YT) => {
        if (cancelled) return
        const mount = document.createElement('div')
        host.appendChild(mount)
        player = new YT.Player(mount, {
          host: 'https://www.youtube-nocookie.com',
          videoId: id,
          playerVars: { autoplay: 1, rel: 0, playsinline: 1, start },
          events: {
            // 1 = playing, 3 = buffering; anything else (paused, ended...) = stopped
            onStateChange: (e) => announce(id, e.data === 1 || e.data === 3),
          },
        })
      })
      .catch(() => !cancelled && setFallback(true))
    return () => {
      cancelled = true
      announce(id, false)
      player?.destroy?.()
      if (host) host.innerHTML = ''
    }
  }, [playing, fallback, id, start])

  const frame = 'absolute inset-0 h-full w-full'
  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-xl bg-ink shadow-lg ${className}`}>
      {playing && fallback && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&start=${start}`}
          title={title}
          className={frame}
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      )}
      {playing && !fallback && <div ref={hostRef} className={`${frame} [&_iframe]:h-full [&_iframe]:w-full`} />}
      {!playing && (
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