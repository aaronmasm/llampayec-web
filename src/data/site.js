/**
 * Site-level data: navigation and edition metadata.
 * Keeping it apart from the components lets editors change text without touching JSX.
 */

export const EDITION = {
  name: 'Llampayec',
  tagline: 'Revista cultural musical',
  place: 'Lambayeque · Perú',
  issue: 'Edición N.º 01',
  date: 'Noviembre 2026',
  school:
    'Facultad de Ciencias de la Comunicación · Universidad de San Martín de Porres',
}

/** Order here = order in the navbar and on the page. `id` doubles as the anchor. */
export const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'criollismo', label: 'Criollismo' },
  { id: 'maestros', label: 'Maestros' },
  { id: 'instrumentos', label: 'Instrumentos' },
  { id: 'voces', label: 'Voces' },
  { id: 'actualidad', label: 'Actualidad' },
  { id: 'revista-digital', label: 'Revista digital' },
]