/**
 * "Sonidos que cuentan nuestra historia": four interviews, one tab each.
 * Voice shape: id, name, role, photo|null, quote, sections[{heading, paragraphs[]}].
 */
import { pedro } from './pedro'
import { yim } from './yim'
import { cesar } from './cesar'
import { manuel } from './manuel'

export const VOICES_INTRO = {
  kicker: 'Entrevistas',
  title: 'Sonidos que cuentan nuestra historia',
  text: 'El banjo, el arpa, el checo y otros instrumentos forman parte de la memoria musical de Lambayeque. Cuatro voces nos cuentan cómo la mantienen viva.',
}

export const VOICES = [pedro, yim, cesar, manuel]
