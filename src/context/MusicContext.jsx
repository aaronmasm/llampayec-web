/**
 * Background music state, shared by the audio element and the navbar control.
 *
 * Rules:
 *  - Browsers block sound before the first user gesture, so playback starts on the
 *    first click / tap / key press (unless the visitor already paused it).
 *  - While any YouTube video is playing the music fades out; it comes back when the
 *    videos stop, but only if the visitor had not paused it by hand.
 *  - Pressing play while a video is running overrides that auto-pause.
 *  - The music also pauses while the browser tab is hidden.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { MUSIC } from '../data/music'

/** Event fired by <YouTubeEmbed /> with detail {id, playing}. */
// eslint-disable-next-line react-refresh/only-export-components
export const VIDEO_EVENT = 'llampayec:video'

const FADE_MS = 700
const MusicContext = createContext(null)

export function MusicProvider({ children }) {
  const audioRef = useRef(null)
  const fadeRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [muted, setMuted] = useState(false)
  const [unlocked, setUnlocked] = useState(false) // true after the first user gesture
  const [forced, setForced] = useState(false) // visitor pressed play during a video
  const [tabHidden, setTabHidden] = useState(false)
  const [videos, setVideos] = useState(() => new Set())

  const shouldPlay = !userPaused && !tabHidden && (videos.size === 0 || forced)

  /** Smooth volume change; calls `done` at the end (used to pause after fading out). */
  const fadeTo = useCallback((target, done) => {
    const audio = audioRef.current
    clearInterval(fadeRef.current)
    const from = audio.volume
    const t0 = performance.now()
    fadeRef.current = setInterval(() => {
      const k = Math.min(1, (performance.now() - t0) / FADE_MS)
      audio.volume = from + (target - from) * k
      if (k === 1) {
        clearInterval(fadeRef.current)
        done?.()
      }
    }, 50)
  }, [])

  // Start / stop according to the rules above.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (shouldPlay) {
      if (audio.paused) audio.volume = 0
      audio.play().then(() => fadeTo(MUSIC.volume)).catch(() => {}) // blocked until a gesture
    } else {
      fadeTo(0, () => audio.pause())
    }
  }, [shouldPlay, unlocked, fadeTo])

  // First gesture unlocks audio (ignoring clicks on the music control itself).
  useEffect(() => {
    if (unlocked) return
    const unlock = (e) => {
      if (e.target.closest?.('[data-music-control]')) return
      setUnlocked(true)
    }
    const events = ['pointerdown', 'keydown', 'touchend']
    events.forEach((name) => window.addEventListener(name, unlock, { once: false }))
    return () => events.forEach((name) => window.removeEventListener(name, unlock))
  }, [unlocked])

  // YouTube videos announce when they start/stop.
  useEffect(() => {
    const onVideo = ({ detail: { id, playing } }) => {
      setVideos((prev) => {
        const next = new Set(prev)
        if (playing) next.add(id)
        else next.delete(id)
        return next
      })
      if (playing) setForced(false)
    }
    window.addEventListener(VIDEO_EVENT, onVideo)
    return () => window.removeEventListener(VIDEO_EVENT, onVideo)
  }, [])

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      setUserPaused(true)
    } else {
      setUserPaused(false)
      setUnlocked(true)
      if (videos.size > 0) setForced(true)
    }
  }, [isPlaying, videos])

  const toggleMute = useCallback(() => setMuted((m) => !m), [])

  const value = useMemo(
    () => ({ isPlaying, muted, togglePlay, toggleMute, label: MUSIC.label }),
    [isPlaying, muted, togglePlay, toggleMute],
  )

  return (
    <MusicContext.Provider value={value}>
      {children}
      <audio
        ref={audioRef}
        src={MUSIC.src}
        loop
        preload="auto"
        muted={muted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </MusicContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMusic() {
  const ctx = useContext(MusicContext)
  if (!ctx) throw new Error('useMusic must be used inside <MusicProvider>')
  return ctx
}