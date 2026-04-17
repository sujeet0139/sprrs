import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Shri Rama Prasad Singh Shiksha Sansthan',
  description: 'Learn about our legacy, mission, vision, and leadership at SRPSS in Azamgarh.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-slate-900">
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold tracking-tight">About Our School</h1>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Discover our history, values, and the educational vision driving SRPSS since 1986.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">Our Legacy</h2>
                <p className="text-lg leading-relaxed text-slate-600 mb-6">
                  Shri Rama Prasad Singh Shiksha Sansthan opened its doors in 1986 with the belief that quality education and strong values are the foundation of a better future. Over four decades, the school has guided students from Pushp Nagar and surrounding communities through holistic learning and character development.
                </p>
                <p className="text-lg leading-relaxed text-slate-600">
                  Founded by Late Shri Raam Prasad Singh, SRPSS continues to uphold his mission: education should be accessible, nurturing, and empowering for every child.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-xl">
                <div className="space-y-6">
                  {[
                    { title: '40+ Years', description: 'A history of trust and achievement.' },
                    { title: '500+ Students', description: 'A caring community of learners.' },
                    { title: 'Classes 1-12', description: 'From foundation to senior secondary.' },
                    { title: 'Experienced Faculty', description: 'Teachers who inspire and support.' },
                  ].map((item) => (
                    <div key={item.title}>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="rounded-[2rem] bg-white p-10 shadow-xl">
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">Mission & Vision</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  To educate with compassion, discipline, and creativity—shaping students who learn with confidence, think critically, and act with integrity.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our vision is a school community where every learner thrives both academically and personally, ready to contribute to society with knowledge, values, and leadership.
                </p>
              </div>
              <div className="rounded-[2rem] bg-gradient-to-br from-blue-900 to-blue-800 p-12 text-white shadow-xl">
                <h3 className="text-3xl font-bold mb-6 font-poppins">Our Promise</h3>
                <ul className="space-y-4 text-lg leading-relaxed">
                  <li>✔️ Respectful, caring learning environment</li>
                  <li>✔️ Rigorous academics with modern teaching</li>
                  <li>✔️ Regular co-curricular and leadership activities</li>
                  <li>✔️ Family-friendly support and communication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
