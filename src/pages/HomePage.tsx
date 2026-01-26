import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Trainers } from '../components/Trainers';
import { Shop } from '../components/Shop';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Trainers />
        <Shop />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
