import Header from './components/Header';
import Hero from './components/Hero';
import PrincipalMessage from './components/PrincipalMessage';
import About from './components/About';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import VideoSection from './components/VideoSection';
import NewsUpdates from './components/NewsUpdates';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <Hero />
      <PrincipalMessage />
      <About />
      <Academics />
      <Facilities />
      <VideoSection />
      <NewsUpdates />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Contact />
      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
}
