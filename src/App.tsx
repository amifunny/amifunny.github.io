import { SmoothScroll } from './components/SmoothScroll';
import { Cursor } from './components/Cursor';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { MemeSlider } from './components/MemeSlider';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      <Cursor />
      <Nav />
      <main className="bg-paper text-ink">
        <Hero />
        <About />
        <Work />
        <MemeSlider />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;
