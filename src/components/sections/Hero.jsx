import { motion } from 'motion/react'
import { EDITION } from '../../data/site'
import { IMAGES } from '../../data/images'
import Greca from '../ui/Greca'

/** Landing hero: logo, claim and the cover photo inside an Andean arch. */
export default function Hero() {
  return (
    <section id="inicio" className="paper-texture relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label text-clay">{EDITION.tagline} · {EDITION.place}</p>
          <img src={IMAGES.logo} alt={EDITION.name} className="mt-6 h-24 w-auto sm:h-32" />
          <h1 className="display mt-8 text-5xl text-ink sm:text-6xl lg:text-7xl">
            La música también es <span className="text-terracotta">identidad</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Instrumentos, voces y tradiciones que nos hacen lambayecanos. La música como herencia,
            memoria y orgullo de nuestra gente.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#maestros" className="label rounded-full bg-terracotta px-6 py-3 text-cream transition hover:bg-clay">
              Conocer a los maestros
            </a>
            <a href="#editorial" className="label rounded-full border border-ink/30 px-6 py-3 text-ink transition hover:border-terracotta hover:text-terracotta">
              Leer la editorial
            </a>
          </div>
          <p className="label mt-10 text-ink-soft">{EDITION.issue} · {EDITION.date}</p>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="arch overflow-hidden border-8 border-terracotta shadow-2xl">
            <img
              src={IMAGES.heroMain}
              alt="Los Mochicas del Perú"
              className="aspect-[3/4] w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <p className="label mt-4 text-center text-ink-soft">
            El legado musical de Lambayeque · Tradición y fuerza en cada nota
          </p>
        </motion.div>
      </div>
      <Greca />
    </section>
  )
}