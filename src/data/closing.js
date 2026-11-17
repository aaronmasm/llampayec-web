/** "Música y actualidad" and the video section copy. */
import { IMAGES } from './images'

export const ACTUALIDAD = {
  kicker: 'Música y actualidad',
  title: '¿Cómo se difunde la música lambayecana hoy?',
  text: 'La música lambayecana sigue presente en nuestra región, aunque ahora existen nuevas maneras de escucharla y compartirla. Las redes sociales, los medios de comunicación y los proyectos culturales han abierto espacios para que sus canciones y artistas lleguen a más personas, especialmente a los jóvenes.',
  channels: [
    { title: 'Redes sociales y plataformas', detail: 'Facebook, YouTube, TikTok, Spotify' },
    { title: 'Medios de comunicación', detail: 'Radio y televisión' },
    { title: 'Nuevas formas de difusión', detail: 'Podcasts y contenidos digitales' },
  ],
  keysTitle: 'Cinco claves para su futuro',
  keys: [
    { q: '¿Qué necesita?', a: 'Mayor apoyo y espacios para los artistas' },
    { q: '¿Cómo acercarla a los jóvenes?', a: 'Con redes, festivales y talleres' },
    { q: '¿Qué dificultades enfrentan?', a: 'Poca difusión y recursos' },
    { q: '¿Cómo preservar nuestro patrimonio?', a: 'Registrando canciones y testimonios' },
    { q: '¿Hacia dónde ir?', a: 'Con nuevos sonidos, sin perder la esencia' },
  ],
  photos: [
    { src: IMAGES.difusion[0], alt: 'Cantante en escena' },
    { src: IMAGES.difusion[1], alt: 'Niña cantando' },
    { src: IMAGES.difusion[2], alt: 'Niños participando en un taller musical' },
  ],
}

/**
 * Videos are not delivered yet. To publish one: drop the file in /public/video
 * and add an entry here -> { src: '/video/name.mp4', poster: '/img/x.webp', title, caption }.
 * While the list is empty, the section shows a placeholder.
 */
export const VIDEOS_INTRO = {
  kicker: 'Videos',
  title: 'La música, en movimiento',
  text: 'Imágenes y sonidos de la música lambayecana.',
}
export const VIDEOS = []
