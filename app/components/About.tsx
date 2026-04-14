'use client';

export default function About() {
  const stats = [
    { icon: '📅', stat: '40+', label: 'Years of Excellence', color: 'from-blue-500 to-blue-600' },
    { icon: '👨‍🎓', stat: '500+', label: 'Students Enrolled', color: 'from-amber-500 to-amber-600' },
    { icon: '🎓', stat: '1-12', label: 'Classes Offered', color: 'from-green-500 to-green-600' },
    { icon: '👨‍🏫', stat: '50+', label: 'Experienced Staff', color: 'from-purple-500 to-purple-600' }
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            🌟 Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            About Our Institution
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building Excellence in Education for Over 40 Years
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left side - Legacy */}
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">📚</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-2">
                    40+ Years of Legacy
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Established in 1986, our institution has been a beacon of quality education in Azamgarh. Founded by the visionary Late Shri Raam Prasad Singh, we continue his mission of providing excellence to all students.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">🎯</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide quality education with strong moral values, discipline, and holistic development. We believe in nurturing confident, responsible citizens.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">🌟</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To develop responsible and successful citizens who contribute positively to society and become leaders in their fields.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl p-10 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-6 font-poppins">Key Highlights</h3>
                <div className="space-y-6">
                  {[
                    { title: 'Education Quality', desc: 'Best-in-class curriculum & teaching methods' },
                    { title: 'Holistic Development', desc: 'Sports, arts, and character building' },
                    { title: 'Modern Infrastructure', desc: 'Smart classes, labs, and facilities' },
                    { title: 'Experienced Faculty', desc: 'Dedicated educators with passion' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="text-2xl flex-shrink-0">✨</span>
                      <div>
                        <p className="font-bold text-lg">{item.title}</p>
                        <p className="text-blue-100">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border-t-4 border-transparent hover:border-blue-600"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <p className={`text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                {item.stat}
              </p>
              <p className="text-gray-600 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Motto Section */}
        <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-blue-900 rounded-2xl p-12 text-center shadow-xl">
          <p className="text-lg mb-2 font-semibold uppercase tracking-widest">Our Motto</p>
          <p className="text-4xl md:text-5xl font-bold font-poppins">
            "शिक्षा से ही संभव है"
          </p>
          <p className="text-xl mt-4 font-semibold">
            Everything is Possible Through Education
          </p>
        </div>
      </div>
    </section>
  );
}