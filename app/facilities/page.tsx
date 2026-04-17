import Facilities from '@/app/components/Facilities';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContactCTA from '@/app/components/ContactCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facilities - Shri Rama Prasad Singh Shiksha Sansthan',
  description: 'Discover our modern classrooms, labs, library, sports field, and auditorium at SRPSS.',
};

export default function FacilitiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-slate-900">
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold tracking-tight">Our Facilities</h1>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Modern infrastructure, safe campuses, and facility-rich programs that support learning and personal growth.
            </p>
          </div>
        </section>

        <Facilities />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
