import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Shri Rama Prasad Singh Shiksha Sansthan',
  description: 'Learn about our 40+ year legacy, mission, vision, and leadership. Empowering education in Azamgarh.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 font-poppins">About Our Institution</h1>
            <p className="text-xl text-blue-100">40+ Years of Excellence in Education</p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">Our Legacy</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Shri Rama Prasad Singh Shiksha Sansthan was established in <span className="font-bold text-blue-600">1986</span> with a vision to provide quality education to all. For over 40 years, we have been committed to nurturing young minds and shaping responsible citizens.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Founded by the late Shri Raam Prasad Singh, our institution stands as a testament to his belief in the power of education. Today, we serve more than 500 students from classes 1 to 12, providing them with education that goes beyond textbooks.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our journey has been marked by consistent growth, innovation, and an unwavering commitment to excellence. We have produced generations of successful professionals, educators, and community leaders.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-amber-100 rounded-3xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-5xl font-bold text-blue-600 font-poppins">40+</p>
                    <p className="text-gray-700 font-semibold">Years of Service</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-5xl font-bold text-amber-600 font-poppins">500+</p>
                    <p className="text-gray-700 font-semibold">Students Enrolled</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-5xl font-bold text-blue-600 font-poppins">1-12</p>
                    <p className="text-gray-700 font-semibold">Classes Offered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-poppins">Our Founder</h2>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-blue-600">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">🙏</div>
                  <h3 className="text-2xl font-bold text-gray-900 font-poppins">Late Shri Raam Prasad Singh</h3>
                  <p className="text-amber-600 font-semibold">Founder (1986)</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Late Shri Raam Prasad Singh was a visionary educator and philanthropist who believed that education was the foundation of a better society. His philosophy was simple yet profound: <span className="italic font-semibold text-blue-600">&ldquo;Shiksha Se Hi Sambhav Hai&rdquo;</span> (Everything is possible through education).
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    With dedication and passion, he established this institution to make quality education accessible to all children, regardless of their background. He believed in holistic development - not just academic excellence, but also character building, discipline, and moral values.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    His legacy continues to inspire us every day. We remain committed to the principles he laid down and continue to uphold the traditions of excellence and integrity that define our institution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-poppins">Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold mb-4 font-poppins">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To provide quality education with strong moral values, fostering intellectual growth, character development, and social responsibility in every student. We aim to create confident, disciplined, and compassionate individuals who contribute positively to society.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-3xl font-bold mb-4 font-poppins">Our Vision</h3>
                <p className="text-amber-100 leading-relaxed">
                  To develop responsible and successful citizens who are equipped with knowledge, skills, and values to excel in their personal and professional lives. We envision a generation that leads with integrity, innovation, and a commitment to nation-building.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-poppins">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '📚', title: 'Education', desc: 'Quality learning for all' },
                { icon: '⭐', title: 'Excellence', desc: 'Striving for the best' },
                { icon: '🤝', title: 'Integrity', desc: 'Honesty and ethics' },
                { icon: '🌍', title: 'Responsibility', desc: 'Social commitment' },
              ].map((value, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center hover:-translate-y-1">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{value.title}</h4>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-poppins">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Mrs. Kusham Lata',
                  position: 'Principal',
                  icon: '👩‍🏫',
                  bio: 'Visionary leader with deep commitment to educational excellence and student welfare.'
                },
                {
                  name: 'Mr. Krishna Kumar Singh',
                  position: 'Director',
                  icon: '👨‍💼',
                  bio: 'Strategic thinker focused on innovation, infrastructure, and holistic development.'
                },
                {
                  name: 'Late Shri Raam Prasad Singh',
                  position: 'Founder',
                  icon: '🙏',
                  bio: 'Visionary founder whose legacy continues to guide our institution.'
                },
              ].map((member, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-600">
                  <div className="text-6xl mb-4 text-center">{member.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-2 font-poppins">{member.name}</h3>
                  <p className="text-amber-600 font-semibold text-center mb-4">{member.position}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
