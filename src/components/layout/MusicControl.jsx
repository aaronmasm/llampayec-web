import { useMusic } from '../../context/MusicContext'

/** Compact navbar control: play / pause, mute and the track name. */
export default function MusicControl() {
  const { isPlaying, muted, togglePlay, toggleMute, label } = useMusic()
  const icon = 'size-3 fill-current'

  return (
    <div
      data-music-control
      className="flex items-center gap-0.5 rounded-full bg-sand/80 p-0.5 ring-1 ring-gold/40 xl:pr-2.5"
    >
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        className="grid size-6 place-items-center rounded-full bg-terracotta text-cream transition hover:bg-clay"
      >
        <svg viewBox="0 0 24 24" className={icon} aria-hidden="true">
          {isPlaying ? <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /> : <path d="M8 5v14l11-7z" />}
        </svg>
      </button>
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? 'Activar sonido' : 'Silenciar música'}
        aria-pressed={muted}
        className="grid size-6 place-items-center rounded-full text-ink transition hover:bg-gold/30"
      >
        <svg viewBox="0 0 24 24" className={icon} aria-hidden="true">
          <path d="M4 9v6h4l5 4V5L8 9z" />
          {muted ? (
            <path d="m16 9 5 6m0-6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          ) : (
            <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          )}
        </svg>
      </button>
      <span className="label hidden whitespace-nowrap text-[9px] tracking-normal text-ink-soft xl:block" title={label}>
        {label}
      </span>
    </div>
  )
}