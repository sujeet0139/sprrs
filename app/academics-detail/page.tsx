import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academics - Shri Rama Prasad Singh Shiksha Sansthan',
  description: 'Comprehensive academics program covering classes 1-12 with focus on quality education and holistic development.',
};

export default function AcademicsPage() {
  const academicPrograms = [
    {
      stage: 'Primary (Classes 1-5)',
      icon: '🎒',
      focus: 'Foundation Building',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education'],
      highlights: [
        'Play-based learning for classes 1-2',
        'Conceptual understanding emphasized',
        'Creative and critical thinking development',
        'Personality development activities',
      ]
    },
    {
      stage: 'Upper Primary (Classes 6-8)',
      icon: '📖',
      focus: 'Skill Development',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Art', 'Sports'],
      highlights: [
        'STEM education focus',
        'Computer literacy programs',
        'Practical lab work',
        'Competitive exam preparation',
      ]
    },
    {
      stage: 'Secondary (Classes 9-10)',
      icon: '🏆',
      focus: 'Board Preparation',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Technology', 'Electives'],
      highlights: [
        'Board exam focus',
        'Regular mock tests',
        'Doubt clarification classes',
        'Career counseling',
      ]
    },
    {
      stage: 'Senior Secondary (Classes 11-12)',
      icon: '🎓',
      focus: 'Career Shaping',
      subjects: ['English', 'Language', 'Mathematics/Biology', 'Physics', 'Chemistry', 'Electives'],
      highlights: [
        'Stream selection (Science/Commerce)',
        'Competitive exam coaching',
        'College counseling',
        'Internship opportunities',
      ]
    },
  ];

  const teachingMethodologies = [
    { method: 'Experiential Learning', description: 'Learning through real-world experiences and activities' },
    { method: 'Project-Based Learning', description: 'Students work on meaningful projects and presentations' },
    { method: 'Collaborative Learning', description: 'Group activities and peer learning' },
    { method: 'Technology Integration', description: 'Smart classes and digital resources' },
    { method: 'Personalized Attention', description: 'Small class sizes for individual focus' },
    { method: 'Assessment for Learning', description: 'Continuous evaluation and feedback' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 font-poppins">Academic Excellence</h1>
            <p className="text-xl text-blue-100">Quality Education for Classes 1-12</p>
          </div>
        </section>

        {/* Academic Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-poppins">Our Academic Structure</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {academicPrograms.map((program, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-blue-600"
                >
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">{program.stage}</h3>
                  <p className="text-amber-600 font-semibold mb-4">{program.focus}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.slice(0, 4).map((subject, sidx) => (
                        <span key={sidx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {program.highlights.map((highlight, hidx) => (
                        <li key={hidx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-poppins">Teaching Methodology</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachingMethodologies.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">
                    {['📚', '🎯', '👥', '💻', '🎓', '📊'][idx]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{item.method}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-poppins">What Makes Our Curriculum Special</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  { title: 'Holistic Development', desc: 'Beyond academics - we focus on character, creativity, and confidence' },
                  { title: 'Competitive Exam Prep', desc: 'Structured coaching for JEE, NEET, and board examinations' },
                  { title: 'Digital Learning', desc: 'Smart classes and online resources for enhanced learning' },
                  { title: 'Skill Enhancement', desc: 'Life skills, communication, and leadership development' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="text-3xl flex-shrink-0">
                      {['🌱', '🏅', '💡', '🚀'][idx]}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  { title: 'Regular Assessment', desc: 'Continuous evaluation helps track progress and identify areas for improvement' },
                  { title: 'Experienced Faculty', desc: 'Qualified teachers dedicated to student success' },
                  { title: 'Personalized Mentoring', desc: 'One-on-one guidance for academic and personal growth' },
                  { title: 'Extracurricular Balance', desc: 'Sports, arts, and clubs alongside academics' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="text-3xl flex-shrink-0">
                      {['📊', '👨‍🏫', '🤝', '🎪'][idx]}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Academic Performance */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 font-poppins">Our Academic Track Record</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: '95%+', label: 'Pass Rate', icon: '✅' },
                { stat: 'A+ Grade', label: 'Class Performance', icon: '⭐' },
                { stat: '50+', label: 'Years of Excellence', icon: '🏆' },
              ].map((item, idx) => (
                <div key={idx} className="text-center p-8 bg-white bg-opacity-10 rounded-2xl border border-white border-opacity-20">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <p className="text-4xl font-bold mb-2 font-poppins">{item.stat}</p>
                  <p className="text-blue-100 text-lg">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">Ready to Join Our Academic Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience quality education with a focus on holistic development. Discover why hundreds of students and parents trust us for excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#admission"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
              >
                Apply Now 🎓
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all"
              >
                Schedule a Visit 📅
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
