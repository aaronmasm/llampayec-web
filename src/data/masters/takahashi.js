import { IMAGES } from '../images'

const { takahashi } = IMAGES

export const takahashiProfile = {
  id: 'takahashi',
  name: 'Luis Abelardo Takahashi Núñez',
  kicker: 'El compositor ilustre',
  title: 'De Ferreñafe a la capital: el vals con sabor a norte',
  years: '1926 – 2005',
  photo: { src: takahashi.portada, alt: 'Retrato de Luis Abelardo Takahashi Núñez' },
  lead: 'Ferreñafe, tierra de doble fe, vio nacer el 22 de noviembre de 1926 a Luis Abelardo Takahashi Núñez, hijo de Sakuzo Takahashi, natural de Fukushima, y de Tarcila Núñez, peruana. Fue un compositor que llevaría los sonidos del norte más allá de sus fronteras, dejando huella en la música criolla.',
  facts: [
    { label: 'Nace', text: 'Ferreñafe, 22 de noviembre de 1926' },
    { label: 'Primeros pasos', text: 'A los trece años ya tocaba la guitarra y el triple en agrupaciones locales' },
    { label: 'Camino', text: 'Conjunto Tropical de Ferreñafe → Orquesta La Rosa (Chiclayo, 1943) → Trujillo y Pacasmayo → Lima (1946)' },
    { label: 'Obra', text: 'Más de doscientas composiciones' },
    { label: 'Fallece', text: 'Komaki, Japón, 19 de diciembre de 2005; sus restos descansan en Ferreñafe' },
  ],
  paragraphs: [
    'Cuando llegó a Lima tenía alrededor de veinte años y, como tantos que buscaban oportunidades lejos de sus pueblos, tuvo que combinar su vocación artística con otros oficios. Durante un tiempo trabajó como relojero, labor que había aprendido de su padre, mientras se abría camino en los ambientes musicales criollos.',
    'En aquella época Lima concentraba los principales espacios de producción y difusión de la música criolla, pero esta tradición también se enriquecía con el aporte de músicos provenientes de distintas provincias, que llegaban con las melodías, los ritmos y las expresiones de sus lugares de origen.',
    'Su aporte fue más allá de componer canciones inspiradas en el norte: incorporó a sus valses una sensibilidad propia, perceptible en sus giros melódicos y recursos expresivos. No se trataba únicamente de mencionar su tierra en las letras, sino de hacerla presente en la propia construcción de la música.',
    'Esa influencia se reconoce en valses como «Engañada», «Con locura», «Mal paso», «Imaginación» y «Ansias», canciones que abordaron el amor, la nostalgia y el desengaño. «Mal paso» llegó a convertirse en un tema habitual de las peñas comerciales, según recordó su amigo y colega Manuel Acosta Ojeda.',
    'A pesar de desarrollar buena parte de su carrera en Lima, nunca dejó atrás sus raíces. Su primera gran composición exitosa fue la marinera norteña «¡Que viva Chiclayo!», una celebración musical de la ciudad y del orgullo lambayecano, a la que se sumaron «Sacachispas» y «El chisco silbador».',
    'Musicalizó «Recuerdos de amor», una letra inédita de Felipe Pinglo Alva que le entregó la viuda del compositor: un puente entre una de las figuras fundamentales del vals peruano y una generación que buscaba nuevas formas de enriquecerlo.',
    'Hoy su legado permanece en las canciones que siguen interpretándose y en aquella contribución que lo distingue: haber llevado la sensibilidad musical del norte a un género que encontró en sus melodías una nueva manera de expresarse.',
  ],
  quote: {
    text: 'El creador de valses con sabor a norte',
    author: 'Manuel Acosta Ojeda, compositor y estudioso de la canción peruana',
  },
  stories: [
    { title: 'La cosecha', text: 'Se sitúa el nacimiento de esta marinera en una celebración familiar en Ferreñafe, durante el cumpleaños de María Palacios Gonzáles, esposa de su amigo Próspero Bautista.' },
    { title: 'Sacachispas', text: 'Se relata que surgió en Ica, al observar bailar marinera a su amigo José Mercedes Estévez Chicoma, «el Cholo José». Tras su fallecimiento, Takahashi le dedicaría el vals «A un amigo».' },
    { title: 'El chisco silbador', text: 'Habría nacido durante una reunión de amigos, cuando el compositor escuchó el canto de esta ave característica del norte peruano.' },
    { title: 'Un vals en la torre', text: 'Se cuenta que compuso uno de sus valses mientras hacía un trabajo de relojería en la torre de Huancavelica, desde donde contempló el paisaje andino que despertó su inspiración.' },
  ],
  recognition: {
    title: 'El reconocimiento de una generación',
    text: 'Según relato del escritor José Watanabe, Chabuca Granda, al ser consultada sobre quién consideraba el mejor compositor de valses de su tiempo, respondió con el nombre de Luis Abelardo Takahashi Núñez: un reconocimiento significativo, viniendo de una compositora que también abrió nuevos caminos en la música peruana.',
    photo: { src: IMAGES.chabuca, alt: 'Chabuca Granda' },
  },
  gallery: [
    { src: takahashi.sepia, alt: 'Takahashi, fotografía en sepia', caption: 'Takahashi, retrato en sepia.' },
    { src: takahashi.reunion, alt: 'Takahashi en una reunión de amigos', caption: 'Entre amigos y colegas de la música criolla.' },
    { src: takahashi.cantina, alt: 'Takahashi en una cantina', caption: 'Peñas y reuniones criollas.' },
  ],
}