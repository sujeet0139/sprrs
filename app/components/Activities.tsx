'use client';

import { useState } from 'react';

export default function Activities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activities = [
    {
      title: 'Cultural Activities',
      desc: 'Celebrating diversity through dance, music, and cultural performances',
      icon: '🎭',
      color: 'from-purple-500 to-pink-500',
      highlights: ['Annual Functions', 'Cultural Night', 'Folk Performances']
    },
    {
      title: 'Annual Sports Day',
      desc: 'Promoting physical fitness, teamwork, and sportsmanship among students',
      icon: '🏃',
      color: 'from-red-500 to-orange-500',
      highlights: ['Athletic Events', 'Team Sports', 'Prize Distribution']
    },
    {
      title: 'Dance Programs',
      desc: 'Showcasing talent and creativity through classical and contemporary dance',
      icon: '💃',
      color: 'from-pink-500 to-rose-500',
      highlights: ['Classical Dance', 'Modern Dance', 'Inter-School Competitions']
    },
    {
      title: 'Technical Exhibitions',
      desc: 'Innovative projects and technological innovations showcased by students',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
      highlights: ['Science Projects', 'Robotics', 'Tech Innovations']
    },
    {
      title: 'Student Tech Projects',
      desc: 'Hands-on learning and development of coding and technology skills',
      icon: '💻',
      color: 'from-green-500 to-teal-500',
      highlights: ['Coding', 'App Development', 'Web Design']
    },
    {
      title: 'Educational Tours',
      desc: 'Learning beyond classrooms through educational field trips and excursions',
      icon: '✈️',
      color: 'from-yellow-500 to-orange-500',
      highlights: ['Museum Visits', 'Nature Trips', 'Historical Sites']
    },
  ];

  return (
    <section id="activities" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              🎉 Vibrant Campus
            </span>
          </div>
          <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Our Activities & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beyond academics - we offer a rich variety of activities for holistic development and personal growth 🌟
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative p-8 z-10 h-full flex flex-col">
                {/* Icon and header */}
                <div className="mb-4">
                  <div className={`text-6xl mb-4 group-hover:scale-125 transition-transform duration-300`}>
                    {activity.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 font-poppins">
                    {activity.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 group-hover:text-white group-hover:text-opacity-90 transition-colors duration-300 mb-6 leading-relaxed flex-grow">
                  {activity.desc}
                </p>

                {/* Highlights */}
                <div className={`space-y-2 mb-6 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-75'}`}>
                  {activity.highlights.map((highlight, hidx) => (
                    <div key={hidx} className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${activity.color.includes('purple') ? 'bg-purple-500' : 'bg-current'} group-hover:bg-white`}></span>
                      <span className="text-sm text-gray-600 group-hover:text-white group-hover:text-opacity-90 transition-colors">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 duration-300">
                  Learn More →
                </button>
              </div>

              {/* Border accent */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white group-hover:border-opacity-30 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Activities Calendar / Coming soon section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center border-t-8 border-blue-600">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
            🗓️ Upcoming Events This Season
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { date: 'APR 25', event: 'Annual Sports Day', icon: '🏆' },
              { date: 'MAY 10', event: 'Cultural Night', icon: '🎭' },
              { date: 'MAY 20', event: 'Science Exhibition', icon: '🔬' },
              { date: 'JUN 05', event: 'Educational Tour', icon: '✈️' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-sm text-gray-600 mb-2">Coming Soon</p>
                <p className="font-bold text-blue-600 mb-1">{item.date}</p>
                <p className="font-semibold text-gray-900">{item.event}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-lg mb-6">
            Our vibrant campus hosts a calendar full of engaging activities throughout the year. <br />
            Every event is an opportunity for students to learn, grow, and celebrate together!
          </p>
          <a
            href="#admission"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
          >
            Join Our Community Today 🎓
          </a>
        </div>
      </div>
    </section>
  );
}