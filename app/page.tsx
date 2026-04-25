import AnnouncementBanner from './components/AnnouncementBanner';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import About from './components/About';
import Academics from './components/Academics';
import Leadership from './components/Leadership';
import Teachers from './components/Teachers';
import TopperList from './components/TopperList';
import FacilitiesPreview from './components/FacilitiesPreview';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import NewsUpdates from './components/NewsUpdates';
import Testimonials from './components/Testimonials';
import AwardsAffiliations from './components/AwardsAffiliations';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Shri Rama Prasad Singh Shiksha Sansthan",
    "url": "https://sprsschool.com",
    "logo": "https://sprsschool.com/favicon.svg",
    "description": "Empowering Future Through Education Since 1986. Quality education with strong moral values for classes 1-12 in Pushp Nagar, Azamgarh.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pushp Nagar",
      "addressLocality": "Azamgarh",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "telephone": "+91-7054272888",
    "foundingDate": "1986"
  };

  return (
    <div className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
      />
      <AnnouncementBanner />
      <Header />
      <MainBanner />
      <About />
      <Academics />
      <Leadership />
      <Teachers />
      <TopperList />
      <FacilitiesPreview />
      <Activities />
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
