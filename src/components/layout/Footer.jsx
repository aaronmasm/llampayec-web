import { EDITION } from '../../data/site'
import { IMAGES } from '../../data/images'
import Greca from '../ui/Greca'

export default function Footer() {
  return (
    <footer className="bg-ink text-sand">
      <Greca />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-12 text-center sm:px-8">
        <img src={IMAGES.logo} alt={EDITION.name} className="h-14 w-auto rounded bg-cream p-2" />
        <p className="label text-gold">{EDITION.tagline} · {EDITION.place}</p>
        <p>{EDITION.issue} · {EDITION.date}</p>
        <p className="text-sm text-sand/70">{EDITION.school}</p>
      </div>
    </footer>
  )
}