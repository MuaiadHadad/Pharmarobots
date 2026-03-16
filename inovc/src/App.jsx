import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Areas from './components/Areas';
import Projetos from './components/Projetos';
import CTA from './components/CTA';
import Footer from './components/Footer';
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Areas />
        <Projetos />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
