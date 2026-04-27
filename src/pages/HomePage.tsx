import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import About from '../components/About';
import Skills from '../components/Skills';
import UXMethodologies from '../components/UXMethodologies';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <UXMethodologies />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
