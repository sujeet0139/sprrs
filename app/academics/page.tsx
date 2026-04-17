import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContactCTA from '@/app/components/ContactCTA';
import TopperList from '@/app/components/TopperList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academics - Shri Rama Prasad Singh Shiksha Sansthan',
  description: 'Learn about our classes, teaching approach, and academic programs from primary to senior secondary.',
};

const academicPrograms = [
  {
    stage: 'Primary (Classes 1-5)',
    icon: '🎒',
    focus: 'Foundation Building',
    points: ['Balanced literacy and numeracy', 'Experiential learning', 'Character development'],
  },
  {
    stage: 'Upper Primary (Classes 6-8)',
    icon: '📖',
    focus: 'Skill Development',
    points: ['STEM projects', 'Computer science basics', 'Counselling and life skills'],
  },
  {
    stage: 'Secondary (Classes 9-10)',
    icon: '🏆',
    focus: 'Board Preparation',
    points: ['Mock exams', 'Revision coaching', 'Doubt-clearing sessions'],
  },
  {
    stage: 'Senior Secondary (Classes 11-12)',
    icon: '🎓',
    focus: 'Career Shaping',
    points: ['Science and Commerce streams', 'Competitive exam support', 'College guidance'],
  },
];

export default function AcademicsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-slate-900">
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold tracking-tight">Academics at SRPSS</h1>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              A complete academic program from primary to senior secondary, designed to build strong learners and confident leaders.
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2">
              {academicPrograms.map((program) => (
                <div key={program.stage} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{program.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 font-poppins">{program.stage}</h2>
                      <p className="text-blue-700 font-semibold">{program.focus}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-slate-600">
                    {program.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-900 to-blue-800 p-10 text-white shadow-xl">
                <h2 className="text-3xl font-bold mb-6 font-poppins">How We Teach</h2>
                <ul className="space-y-4 text-lg leading-relaxed">
                  <li>✔️ Hands-on learning with practical labs and digital tools</li>
                  <li>✔️ Regular assessment, feedback and mentoring</li>
                  <li>✔️ Integrated co-curricular programs for well-rounded growth</li>
                  <li>✔️ Personalized attention with strong student support</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 font-poppins">Why Parents Choose SRPSS</h2>
                <div className="space-y-4 text-slate-600">
                  <p>Our curriculum blends academic rigor with life skills, creativity, and cultural learning so students are prepared for higher education and beyond.</p>
                  <p>We maintain strong parent partnerships, safe campus routines, and a friendly learning culture for every child.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TopperList />

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
