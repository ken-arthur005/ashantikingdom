import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';
import Funfacts from './sections/Funfacts';


import Goldenstoolintro from './sections/Goldenstoolintro';
import Stooldeets from './sections/Stooldeets';
import Symbols from './sections/Symbols';


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Hero />
      <FirstVideo />
      <Funfacts />
      <Goldenstoolintro/>
      <Stooldeets />
      <Symbols/>
    </main>
  )
}

export default App