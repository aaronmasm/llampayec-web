/**
 * "Memoria de grandes maestros". All profiles share one shape (see takahashi.js),
 * so a single <MasterProfile /> component renders every one of them.
 */
import { takahashiProfile } from './takahashi'
import { escajadilloProfile } from './escajadillo'
import { mochicasProfile } from './mochicas'

export const MASTERS_INTRO = {
  kicker: 'Memoria de grandes maestros',
  title: 'Los nombres detrás de nuestras canciones',
  text: 'Compositores e intérpretes que llevaron el sentir de Lambayeque a Lima, al Perú y al mundo.',
}

export const MASTERS = [takahashiProfile, escajadilloProfile, mochicasProfile]