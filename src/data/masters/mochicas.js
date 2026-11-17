import { IMAGES } from '../images'

const { mochicas } = IMAGES

export const mochicasProfile = {
  id: 'mochicas',
  name: 'Los Mochicas',
  kicker: '¡Achica, achica, Mochica!',
  title: 'La voz norteña de Nicolás Seclén',
  years: 'Desde 1955',
  photo: { src: IMAGES.heroMain, alt: 'Los Mochicas del Perú con guitarras, entre flores andinas' },
  lead: 'Hablar de Los Mochicas es volver la mirada a un Chiclayo de antaño, una época en la que la música criolla encontraba en el norte peruano una forma propia de expresión. Las reuniones familiares, las serenatas y las celebraciones populares eran espacios donde las agrupaciones compartían sus interpretaciones.',
  facts: [
    { label: 'Fundación', text: '1955, con José Domingo Arbulú y Antonio Medina Ramírez' },
    { label: 'Nombre', text: 'Segundo lugar en un concurso de música popular de la empresa Mayascon' },
    { label: 'Lima', text: 'Primera visita en 1956; Nicolás se traslada a la capital dos años después' },
    { label: 'Mundo', text: 'Feria de Sevilla (1992) y Madison Square Garden, Nueva York' },
    { label: 'Memoria', text: 'Nicolás Seclén fallece en febrero de 2017; centenario de su nacimiento en 2026' },
  ],
  paragraphs: [
    'Desde Chiclayo, Los Mochicas construyeron una propuesta que recogía el sentir de Lambayeque y la identidad de su gente. Sus canciones retrataban paisajes, costumbres y escenas de la vida cotidiana: una manera de contar la historia de una región a través de sus melodías.',
    'Al frente estuvo Nicolás Seclén. No tuvo formación musical: aprendió escuchando, y los pájaros fueron sus primeros maestros. Durante su infancia fue pajarero en el campo, espantando a las aves que se acercaban a los cultivos de arroz y maíz. Esa convivencia con los sonidos de la naturaleza contribuyó al desarrollo de la potente voz que más adelante lo distinguiría.',
    'Su propuesta no buscaba reproducir el estilo de los conjuntos limeños, sino conservar los ritmos, las expresiones y los instrumentos que daban personalidad a la música norteña, y así construyó una identidad musical propia.',
    'Antes de ser una agrupación reconocida, Nicolás frecuentaba la llamada «esquina del movimiento», en el cruce de las avenidas Pedro Ruiz y Siete de Enero: un punto de encuentro para músicos que buscaban participar en serenatas, cumpleaños y reuniones. En 1955, junto a José Domingo Arbulú y Antonio Medina Ramírez, participó en un concurso de música popular organizado por una empresa de chocolates; el trío obtuvo el segundo lugar y recibió el nombre de Los Mochicas.',
    'Entre sus temas más recordados figuran «El guayacán», «Caballito de totora», «El Cholo Cadenas» y «La chongoyapana». En junio de 1992, por el V Centenario del Encuentro de América, fueron invitados a la Feria de Sevilla, y su trayectoria alcanzó escenarios como el Madison Square Garden. El Ministerio de Cultura otorgó a Nicolás Seclén Sampén la distinción de Personalidad Meritoria de la Cultura.',
    'En 2020 su hijo Eloy Seclén Neyra publicó «Vuelven Los Mochicas», que reconstruye la trayectoria de la agrupación mediante canciones, testimonios y recuerdos familiares. En 2026, por el centenario de su nacimiento, hubo una misa y una romería en el cementerio El Carmen, de Chiclayo, y en Lima el espectáculo «El último mochica: cien años después» (26 de septiembre, Teatro Manuel A. Segura), con Bartola, Lucy Avilés y Julie Freundt, junto a sus hijos Segundo y Ricardo Seclén.',
  ],
  quote: {
    text: 'La naturaleza le enseñó a cantar antes que cualquier escenario',
    author: 'Sobre Nicolás Seclén',
  },
  stories: [
    {
      title: 'Una frase que hizo historia',
      text: 'En una presentación en el Centro Social Musical Cultural Felipe Pinglo Alva, en Lima, alguien del público pidió que aparecieran los chiclayanos. Nicolás hizo una señal a José Reluz, su compañero en el banjo, y respondió con un grito espontáneo: «¡Achica, achica, Mochica!». Gustó tanto que se repitió en sus actuaciones y se volvió el sello del conjunto: orgullo de ser norteños y de no hacerse menos frente a otros. Según su hijo Eloy, también podía entenderse como una invocación de energía antes de salir al escenario.',
    },
  ],
  recognition: null,
  gallery: [
    { src: mochicas.primera, alt: 'Primera formación de Los Mochicas', caption: 'Los inicios del conjunto.' },
    { src: mochicas.esquina, alt: 'Nicolás Seclén tocando en La Esquina', caption: 'Nicolás Seclén en los años de «La Esquina». Foto del libro «Vuelven los Mochicas».' },
    { src: mochicas.achica, alt: 'Los Mochicas del Perú', caption: 'Los Mochicas del Perú.' },
    { src: mochicas.madison, alt: 'Los Mochicas en Madison Square Garden', caption: 'Lambayeque llega a Nueva York.' },
  ],
}