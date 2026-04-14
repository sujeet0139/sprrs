'use client';

import { useState } from 'react';

export default function Leadership() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const leaders = [
    {
      name: 'Mrs. Kusham Lata',
      position: 'Principal',
      icon: '👩‍🏫',
      color: 'from-blue-500 to-blue-600',
      message: 'At Shri Rama Prasad Singh Shiksha Sansthan, we believe that education is not just about academic excellence but about shaping character and values. Our goal is to nurture students into confident, disciplined, and responsible individuals. We focus on holistic development through academics, cultural activities, and moral education. We are committed to providing a safe and inspiring learning environment for every child.'
    },
    {
      name: 'Mr. Krishna Kumar Singh',
      position: 'Director',
      icon: '👨‍💼',
      color: 'from-amber-500 to-amber-600',
      message: 'Our institution has proudly served the community for over 40 years. We continuously strive to maintain high standards of education while adapting to modern learning methods. Our focus is on innovation, discipline, and overall personality development of students. We welcome parents to be a part of this journey in building a brighter future for their children.'
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            💬 Leadership Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Leadership Messages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our distinguished leaders about their vision for education and our institution
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${leader.color}`}></div>

              {/* Card Content */}
              <div className="p-8 md:p-10">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="text-5xl opacity-20 group-hover:opacity-40 transition-opacity">
                    "
                  </div>
                </div>

                {/* Profile Section */}
                <div className="mb-8 text-center">
                  {/* Avatar with gradient border */}
                  <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${leader.color} p-1 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-6xl group-hover:text-7xl transition-all duration-300">
                      {leader.icon}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-poppins">
                    {leader.name}
                  </h3>

                  {/* Position */}
                  <div className="flex items-center justify-center gap-2">
                    <p className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${leader.color}`}>
                      {leader.position}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <p className="text-gray-700 leading-relaxed text-center md:text-left line-clamp-5 group-hover:line-clamp-none transition-all duration-300 mb-6 text-sm md:text-base">
                  {leader.message}
                </p>

                {/* Read More indicator */}
                <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Read Full Message</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>

              {/* Hover accent */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${leader.color} group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0">💡</div>
            <div className="absolute bottom-0 right-0">📚</div>
          </div>
          <div className="relative z-10 max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              <span className="font-bold">Our Collective Vision:</span> To create an educational environment where every student thrives academically, socially, and morally. We are committed to innovation, excellence, and the holistic development of our community.
            </p>
            <p className="text-blue-100 italic">
              — The Leadership Team of Shri Rama Prasad Singh Shiksha Sansthan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}