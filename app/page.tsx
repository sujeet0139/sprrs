import AnnouncementBanner from './components/AnnouncementBanner';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import About from './components/About';
import Leadership from './components/Leadership';
import Teachers from './components/Teachers';
import FacilitiesPreview from './components/FacilitiesPreview';
import Gallery from './components/Gallery';
import NewsUpdates from './components/NewsUpdates';
import Testimonials from './components/Testimonials';
import AwardsAffiliations from './components/AwardsAffiliations';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <AnnouncementBanner />
      <Header />
      <MainBanner />
      <About />
      <Leadership />
      <Teachers />
      <FacilitiesPreview />
      <Gallery />
      <NewsUpdates />
      <Testimonials />
      <AwardsAffiliations />
      <FAQ />
      <ContactCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
