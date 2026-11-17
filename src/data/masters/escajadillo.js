import { IMAGES } from '../images'

const { escajadillo } = IMAGES

export const escajadilloProfile = {
  id: 'escajadillo',
  name: 'José Escajadillo Farro',
  kicker: 'El poeta que convirtió el desengaño en canción',
  title: 'La noche en que quemó 80 canciones',
  years: 'Nace en 1942',
  photo: { src: escajadillo.portada, alt: 'Retrato de José Escajadillo Farro' },
  lead: 'Nacido el 1 de diciembre de 1942, es conocido en el ámbito musical como «Pelusa». A través de sus canciones expresa emociones y experiencias humanas, encontrando en el amor y el desengaño una fuente constante de inspiración.',
  facts: [
    { label: 'Nace', text: '1 de diciembre de 1942' },
    { label: 'Colegio', text: 'San José de Chiclayo, donde formó un trío de boleros, valses y bossa nova' },
    { label: 'Primer disco', text: '«El compositor de moda» (1972), con doce canciones' },
    { label: 'Festival de Trujillo', text: 'Ganador en 1972 con «Cada día»' },
    { label: 'Distinción', text: 'Compositor de las Américas, OEA (2014)' },
  ],
  paragraphs: [
    'Desde pequeño soñaba con ser piloto, médico y futbolista. A los nueve años comenzó a jugar en equipos locales y llegó a Los Caimanes, club al que años después dedicaría su primer vals, «A ti, Caimanes». Sin embargo, durante su etapa escolar descubrió su vocación musical. De aquella experiencia nació «Naufragio», una de sus primeras composiciones.',
    'Al terminar el colegio viajó a Lima para estudiar Medicina en la Universidad Nacional Mayor de San Marcos, pero permaneció allí solo unos meses: su interés por la música terminó imponiéndose. En la capital se integró a agrupaciones como Los Ángeles, que luego se convirtió en el cuarteto Los Hits, y llegó a presentarse en la Peña Ferrando.',
    'Abrirse camino no fue sencillo. A pesar de tener numerosas canciones escritas, sentía que no recibían la atención que esperaba. La frustración llegó a tal punto que decidió quemar alrededor de 80 temas y pensó en regresar a la universidad. Pero aquella noche terminaría cambiando su destino.',
    'Se quedó dormido entre la tristeza y la incertidumbre. Según relató, unas cuatro horas después despertó con la melodía y la letra de una canción que había escuchado en sueños. Ya no tenía lapiceros, los había quemado junto con sus canciones, así que tomó el clavo de un cuadro y escribió los versos directamente sobre la pared. Al despertar de nuevo encontró la composición completa, incluso con su título: «Jamás impedirás».',
    'Con ella participó en el Gran Festival de la Canción Criolla, organizado por Panamericana Televisión, donde llegó a la final en el Teatro Municipal de Lima. Aunque obtuvo el cuarto lugar, su canción empezó a ganar reconocimiento y encontró en el público una respuesta que hasta entonces no había conseguido.',
    'Su estilo encontró en el vals criollo un espacio para explorar las emociones humanas: el amor, las despedidas, las dudas y las relaciones difíciles se volvieron temas recurrentes. A lo largo de más de cinco décadas, voces como Cecilia Barraza, Eva Ayllón y Cecilia Bracamonte incorporaron sus canciones a sus repertorios.',
    'El 4 de noviembre de 2024, durante el Festival por el Día de la Canción Criolla «Chiclayo 2024», la Municipalidad Provincial de Chiclayo le rindió homenaje: la alcaldesa Janet Cubas le entregó una placa conmemorativa por su aporte a la música criolla y a la cultura.',
  ],
  quote: {
    text: 'Es una inmensa satisfacción estar en mi amado Chiclayo en el Día de la Canción Criolla',
    author: 'José Escajadillo',
  },
  stories: [
    { title: 'Jamás impedirás', text: 'La canción que soñó la noche en que quemó sus composiciones. El propio compositor atribuyó la experiencia a una fuerza superior que identificó con Dios.' },
    { title: 'Qué somos amantes', text: 'Compuesta en 1980 a partir de la confidencia de un amigo sobre una relación sentimental que no podía expresar abiertamente; abordó un tema poco hablado en la sociedad de entonces.' },
    { title: 'Yo perdí el corazón', text: 'Reunió experiencias de personas que habían perdido a alguien importante. En lugar de contar una sola historia, recogió sentimientos que podían representar a muchas otras.' },
  ],
  recognition: {
    title: 'Compositor de las Américas',
    text: 'En 2014 la Organización de los Estados Americanos (OEA) lo distinguió con este título, en reconocimiento a su trayectoria y aporte a la música: un galardón que puso en valor su talento creativo y la trascendencia de sus composiciones, y un motivo de orgullo para la cultura del país.',
    photo: { src: escajadillo.oea, alt: 'José Escajadillo y el reconocimiento de la OEA' },
  },
  gallery: [
    { src: escajadillo.esmoquin, alt: 'Escajadillo de esmoquin', caption: 'En escena.' },
    { src: escajadillo.gafas, alt: 'Escajadillo con gafas', caption: 'Retrato.' },
    { src: escajadillo.guitarra, alt: 'Escajadillo con su guitarra', caption: 'Con su guitarra.' },
    { src: escajadillo.ceremonia, alt: 'Escajadillo durante la ceremonia', caption: 'Homenaje en Chiclayo, 2024.' },
    { src: escajadillo.placa, alt: 'Escajadillo con la placa conmemorativa', caption: 'Placa de la Municipalidad de Chiclayo.' },
  ],
}