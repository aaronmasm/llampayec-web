import { LightboxProvider } from './context/LightboxContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Editorial from './components/sections/Editorial'
import Criollismo from './components/sections/Criollismo'
import Masters from './components/sections/Masters'
import Instruments from './components/sections/Instruments'
import Voices from './components/sections/Voices'
import Actualidad from './components/sections/Actualidad'
import Videos from './components/sections/Videos'
import Credits from './components/sections/Credits'

/** Page composition: the order here is the order on screen (and in the navbar). */
export default function App() {
  return (
    <LightboxProvider>
      <Navbar />
      <main>
        <Hero />
        <Editorial />
        <Criollismo />
        <Masters />
        <Instruments />
        <Voices />
        <Actualidad />
        <Videos />
        <Credits />
      </main>
      <Footer />
    </LightboxProvider>
  )
}