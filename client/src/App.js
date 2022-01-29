import Navbar from './components/Navbar';
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
import UpButton from './components/UpButton';

function App() {
  return (
    <>
      <UpButton />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
