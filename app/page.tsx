import Header from './components/Header';
import PrayerStrip from './components/PrayerStrip';
import Hero from './components/Hero';
import About from './components/About';
import Leadership from './components/Leadership';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import StudentBirthday from './components/StudentBirthday';
import NewsUpdates from './components/NewsUpdates';
import Admission from './components/Admission';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <div>
      <PrayerStrip />
      <Header />
      <Hero />
      <About />
      <Leadership />
      <Academics />
      <Facilities />
      <Activities />
      <StudentBirthday />
      <NewsUpdates />
      <Gallery />
      <Admission />
      <Testimonials />
      <Contact />
      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
}
