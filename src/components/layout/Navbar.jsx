import { useState } from 'react'
import { NAV_ITEMS } from '../../data/site'
import { IMAGES } from '../../data/images'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useMusic } from '../../context/MusicContext'
import MusicControl from './MusicControl'

const IDS = NAV_ITEMS.map((item) => item.id)

/** Sticky top menu. Links scroll to sections (single-page app, no router). */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(IDS)
  const { label } = useMusic()

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8" aria-label="Principal">
        <a href="#inicio" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img src={IMAGES.logo} alt="Llampayec" className="h-11 w-auto" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.slice(1).map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`label whitespace-nowrap rounded-full px-2 py-2 transition xl:px-2.5 ${
                  active === id ? 'bg-terracotta text-cream' : 'text-ink-soft hover:text-terracotta'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
        <MusicControl />
        <button
          type="button"
          className="grid size-10 place-items-center rounded-md text-ink lg:hidden"
          aria-expanded={open}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-ink/10 bg-paper px-5 pb-4 lg:hidden">
          {NAV_ITEMS.slice(1).map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`label block py-3 ${active === id ? 'text-terracotta' : 'text-ink-soft'}`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="label border-t border-ink/10 pt-3 text-[11px] text-clay">♪ {label}</li>
        </ul>
      )}
    </header>
  )
}