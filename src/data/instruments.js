/**
 * Instruments, grouped by family. `slug` maps to /public/img/instrumentos/<slug>.webp.
 */

export const INSTRUMENTS_INTRO = {
  kicker: 'Sonidos que cuentan nuestra historia',
  title: 'Instrumentos de Lambayeque',
  text: 'En Lambayeque, la música criolla y tradicional cobra vida a través de instrumentos que mantienen viva nuestra memoria.',
}

export const INSTRUMENT_FAMILIES = [
  {
    family: 'Cuerdas',
    items: [
      { slug: 'banjo', name: 'Banjo', text: 'Llegó a Chiclayo acompañando a un circo y poco a poco encontró un lugar en la música de nuestra región. Los músicos locales lo adaptaron y le dieron características propias. Su sonido se volvió muy especial para el vals norteño y la marinera, especialmente con Los Mochicas del Perú.' },
      { slug: 'arpa', name: 'Arpa', text: 'Su presencia en el Perú se remonta aproximadamente a 1590. Con el tiempo llegó a ser parte importante de la música lambayecana, especialmente en Reque, Monsefú, Mórrope y Ciudad Eten. Hoy sigue siendo símbolo de nuestra tradición.' },
      { slug: 'guitarra', name: 'Guitarra', text: 'Llegó al Perú durante la conquista y, con los años, se adaptó a nuestros estilos. Es uno de los instrumentos más usados en las reuniones criollas y acompaña la marinera, el vals, el tondero y la polca.' },
    ],
  },
  {
    family: 'Percusión',
    items: [
      { slug: 'caja', name: 'Caja', text: 'Forma parte de las antiguas tradiciones de la sierra lambayecana. Acompaña danzas como el lanchipingullo y la danza de los diablicos de Túcume. Quedó registrada en los estudios de Hans Heinrich Brüning a inicios del siglo XX.' },
      { slug: 'cajon', name: 'Cajón', text: 'Aunque no nació en Lambayeque, llegó a las principales ciudades del norte en la década de 1940. Con el crecimiento de los ritmos afroperuanos se incorporó a nuestra música, acompañando la marinera, el tondero y el baile de tierra.' },
      { slug: 'checo', name: 'Checo', text: 'Instrumento de percusión elaborado a partir de un fruto seco y usado en el norte del Perú. En Zaña existe un registro escrito de su presencia desde junio de 1894. Su sonido está muy ligado al tradicional baile de tierra zañero.' },
      { slug: 'palmas', name: 'Palmas', text: 'Una de las formas más antiguas de acompañamiento. En nuestra región marcan el compás de la marinera, el tondero y el baile de tierra. No necesitan otro instrumento: solo las manos y el ritmo de quienes participan.' },
    ],
  },
  {
    family: 'Viento',
    items: [
      { slug: 'chirimia', name: 'Chirimía', text: 'De origen europeo, llegó a América desde España en el siglo XVI. En Lambayeque es parte de las celebraciones tradicionales, sobre todo en Túcume y Mochumí, donde acompaña junto con la caja las danzas de los diablicos.' },
      { slug: 'dulzaina', name: 'Dulzaina', text: 'Instrumento de viento muy presente en la sierra lambayecana. Es parecida a la chirimía, aunque más corta. Su melodía suele acompañarse con la caja y forma parte de las tradiciones de Incahuasi.' },
      { slug: 'pingullo', name: 'Pingullo', text: 'Una pequeña flauta, de las más representativas de la sierra de Lambayeque. Acompaña danzas como el lanchipingullo y la danza torbante pingullo, principalmente en Incahuasi y Cañaris.' },
      { slug: 'saxofon', name: 'Saxofón', text: 'Creado por el belga Adolphe Sax en 1840. Aunque de origen europeo, pasó a formar parte de las bandas musicales y de las expresiones tradicionales de Lambayeque, y acompaña la marinera y el golpe de tierra.' },
    ],
  },
]