/**
 * Central image registry. Every path lives here, so renaming or swapping a
 * photo is a one-line change. Files are served from /public/img.
 */

const img = (name) => `/img/${name}.webp`

export const IMAGES = {
  logo: '/img/logo.png',
  heroMain: img('mochicas-portada'),
  chabuca: img('chabuca-granda'),
  takahashi: {
    portada: img('takahashi-portada'),
    sepia: img('takahashi-sepia'),
    reunion: img('takahashi-reunion'),
    cantina: img('takahashi-cantina'),
  },
  escajadillo: {
    portada: img('escajadillo-portada'),
    esmoquin: img('escajadillo-esmoquin'),
    gafas: img('escajadillo-gafas'),
    guitarra: img('escajadillo-guitarra'),
    oea: img('escajadillo-oea'),
    ceremonia: img('escajadillo-ceremonia'),
    placa: img('escajadillo-placa'),
  },
  mochicas: {
    primera: img('mochicas-primera'),
    esquina: img('mochicas-esquina'),
    achica: img('mochicas-achica'),
    madison: img('mochicas-madison'),
  },
  voices: {
    yim: img('yim-sampietegui'),
    cesar: img('cesar-chima'),
    manuel: img('manuel-delacruz'),
    manuelGrupo: img('manuel-delacruz-grupo'),
    pedro: img('pedro-bardales'),
  },
  difusion: [
    img('difusion-cantante'),
    img('difusion-nina'),
    img('difusion-ninos'),
  ],
  instrument: (slug) => img(`instrumentos/${slug}`),
}