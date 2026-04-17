import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GalleryClient from './GalleryClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - Shri Rama Prasad Singh Shiksha Sansthan',
  description: 'Browse our photo gallery with campus life, events, and classroom activities grouped by category.',
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Photo Gallery</p>
            <h1 className="mt-6 text-5xl font-bold tracking-tight">School Life in Pictures</h1>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Explore our campus, classroom activities, and events, organized for quick browsing by category.
            </p>
          </div>
        </section>

        <GalleryClient />
      </main>
      <Footer />
    </>
  );
}
