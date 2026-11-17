/**
 * Global lightbox. Any <Figure /> can call `openLightbox(slides, index)`,
 * so there is exactly one lightbox instance in the whole app.
 */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'

const LightboxContext = createContext(null)

export function LightboxProvider({ children }) {
  const [state, setState] = useState({ open: false, slides: [], index: 0 })

  const openLightbox = useCallback((slides, index = 0) => {
    setState({ open: true, slides, index })
  }, [])

  const close = useCallback(() => setState((s) => ({ ...s, open: false })), [])
  const value = useMemo(() => ({ openLightbox }), [openLightbox])

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <Lightbox
        open={state.open}
        close={close}
        slides={state.slides}
        index={state.index}
        plugins={[Zoom, Captions]}
        carousel={{ finite: state.slides.length <= 1 }}
        controller={{ closeOnBackdropClick: true }}
        styles={{ container: { backgroundColor: 'rgba(43, 22, 15, 0.94)' } }}
      />
    </LightboxContext.Provider>
  )
}

/** Hook used by components that need to open the lightbox. */
// eslint-disable-next-line react-refresh/only-export-components
export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used inside <LightboxProvider>')
  return ctx
}