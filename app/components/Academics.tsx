'use client';

export default function Academics() {
  const academicLevels = [
    {
      level: 'Primary',
      range: 'Classes 1–5',
      icon: '🎒',
      color: 'from-blue-500 to-blue-600',
      description: 'Foundation building with play-based learning',
      features: [
        'Interactive learning methods',
        'Phonics & number basics',
        'Creative activities',
        'Character development'
      ]
    },
    {
      level: 'Middle School',
      range: 'Classes 6–8',
      icon: '📖',
      color: 'from-purple-500 to-purple-600',
      description: 'Developing critical thinking and creativity',
      features: [
        'Science & mathematics focus',
        'Language proficiency',
        'Subject specialization',
        'Competitive exam prep'
      ]
    },
    {
      level: 'Secondary',
      range: 'Classes 9–10',
      icon: '🏆',
      color: 'from-amber-500 to-amber-600',
      description: 'Board exam preparation and skill development',
      features: [
        'Board curriculum focus',
        'Stream selection',
        'Mock tests & coaching',
        'Career guidance'
      ]
    },
    {
      level: 'Senior Secondary',
      range: 'Classes 11–12',
      icon: '🎓',
      color: 'from-green-500 to-green-600',
      description: 'Preparing for higher education and careers',
      features: [
        'Advanced subject streams',
        'Competitive exam coaching',
        'College preparation',
        'Mentorship programs'
      ]
    }
  ];

  return (
    <section id="academics" className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            📚 Academic Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Our Academic Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive education from classes 1 to 12, focusing on academic excellence, discipline, and character building
          </p>
        </div>

        {/* Academic Levels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {academicLevels.map((program, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Top colored bar */}
              <div className={`h-1 bg-gradient-to-r ${program.color}`}></div>

              {/* Card Content */}
              <div className="p-8 flex flex-col h-full relative z-10">
                {/* Icon */}
                <div className={`text-6xl mb-6 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300`}>
                  {program.icon}
                </div>

                {/* Level name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">
                  {program.level}
                </h3>

                {/* Class range */}
                <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${program.color} mb-4`}>
                  {program.range}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                  {program.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More button */}
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${program.color} text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 group-hover:shadow-lg`}>
                  Learn More →
                </button>
              </div>

              {/* Hover border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient transition-all duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Academics Highlight Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-10 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { stat: '95%', label: 'Pass Rate', icon: '✅' },
              { stat: '1-12', label: 'Classes Covered', icon: '📚' },
              { stat: '40+', label: 'Years Experience', icon: '🏆' }
            ].map((item, idx) => (
              <div key={idx} className="animate-fade-in-delay" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-3xl font-bold mb-2">{item.stat}</p>
                <p className="text-blue-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}