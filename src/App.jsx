import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact'; 
import Footer from './sections/Footer';

function App() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact /> 
      <Footer />
    </main>
  );
}

export default App;