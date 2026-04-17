'use client';

export default function Facilities() {
  const facilities = [
    {
      name: 'Smart Classes',
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
      description: 'Interactive digital learning with modern technology',
      features: ['LED Displays', 'Interactive Tools', 'Digital Content']
    },
    {
      name: 'Computer Lab',
      icon: '💻',
      color: 'from-purple-500 to-pink-500',
      description: 'Latest computers for coding and technology training',
      features: ['Latest CPUs', 'Programming Software', 'Web Design Tools']
    },
    {
      name: 'Science Labs',
      icon: '🔬',
      color: 'from-green-500 to-emerald-500',
      description: 'Well-equipped labs for practical learning',
      features: ['Physics Lab', 'Chemistry Lab', 'Biology Lab']
    },
    {
      name: 'Library',
      icon: '📚',
      color: 'from-orange-500 to-amber-500',
      description: 'Extensive collection of books and digital resources',
      features: ['10,000+ Books', 'Digital Library', 'Reading Zones']
    },
    {
      name: 'Sports Ground',
      icon: '⚽',
      color: 'from-red-500 to-rose-500',
      description: 'Facilities for various sports and activities',
      features: ['Cricket', 'Basketball', 'Volleyball', 'Athletics']
    },
    {
      name: 'Auditorium',
      icon: '🎭',
      color: 'from-indigo-500 to-purple-500',
      description: 'State-of-the-art venue for events',
      features: ['500+ Seating', 'Sound System', 'Lighting']
    }
  ];

  return (
    <section id="facilities" className="py-20 md:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            🏫 Our Campus
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            World-Class Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            State-of-the-art infrastructure designed to support academic excellence and student development
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Colored top border */}
              <div className={`h-1 bg-gradient-to-r ${facility.color}`}></div>

              {/* Card Content */}
              <div className="p-8 flex flex-col h-full relative z-10">
                {/* Icon with background */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <span className="text-4xl">{facility.icon}</span>
                </div>

                {/* Facility name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300" style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}>
                  {facility.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {facility.description}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {facility.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${facility.color}`}></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Visit button */}
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${facility.color} text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 shadow-lg hover:shadow-xl`}>
                  Learn More →
                </button>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-inner`}></div>
            </div>
          ))}
        </div>

        {/* Campus Highlights */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white rounded-2xl p-10 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 text-9xl">🏫</div>
            <div className="absolute bottom-0 right-0 text-9xl">📚</div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 font-poppins">Campus Highlights</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: '2+ Acres', desc: 'Beautiful Campus' },
                { label: '40+ Rooms', desc: 'Classrooms' },
                { label: '5 Blocks', desc: 'Academic Buildings' },
                { label: '24/7', desc: 'Security & Support' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-3xl font-bold mb-2">{item.label}</p>
                  <p className="text-blue-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}