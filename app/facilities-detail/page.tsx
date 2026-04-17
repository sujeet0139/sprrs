import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Facilities - Shri Rama Prasad Singh Shiksha Sansthan',
  description: 'State-of-the-art facilities including smart classes, labs, library, and sports grounds.',
};

export default function FacilitiesPage() {
  const facilities = [
    {
      name: 'Smart Classes',
      icon: '📱',
      color: 'from-blue-500 to-blue-600',
      description: 'Interactive digital classrooms with multimedia content',
      features: [
        'LED Displays and projectors',
        'Interactive learning tools',
        'Audio-visual aids',
        'Internet connectivity',
        'Real-time student engagement'
      ]
    },
    {
      name: 'Computer Lab',
      icon: '💻',
      color: 'from-purple-500 to-purple-600',
      description: 'Modern computing facility for tech education',
      features: [
        'Latest computers and servers',
        'Coding programming platform',
        'Cybersecurity training',
        'Web development tools',
        'Software development kit'
      ]
    },
    {
      name: 'Science Laboratories',
      icon: '🔬',
      color: 'from-green-500 to-green-600',
      description: 'Well-equipped labs for practical learning',
      features: [
        'Physics lab with modern equipment',
        'Chemistry lab with safety measures',
        'Biology lab with microscopes',
        'Experimental setups',
        'Safety protocols and training'
      ]
    },
    {
      name: 'Library',
      icon: '📚',
      color: 'from-orange-500 to-orange-600',
      description: 'Comprehensive knowledge resource center',
      features: [
        '10,000+ books collection',
        'Digital library access',
        'Reading zones',
        'Reference materials',
        'Library management system'
      ]
    },
    {
      name: 'Sports Ground',
      icon: '⚽',
      color: 'from-red-500 to-red-600',
      description: 'Well-maintained sports and recreational facilities',
      features: [
        'Cricket ground',
        'Basketball court',
        'Volleyball court',
        'Athletic track',
        'Indoor sports area'
      ]
    },
    {
      name: 'Auditorium',
      icon: '🎭',
      color: 'from-pink-500 to-pink-600',
      description: 'Event and assembly venue',
      features: [
        '500+ seating capacity',
        'Modern sound system',
        'Stage and lighting',
        'Air conditioning',
        'Wheelchair accessible'
      ]
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 font-poppins">Our Facilities</h1>
            <p className="text-xl text-blue-100">World-Class Infrastructure for Learning</p>
          </div>
        </section>

        {/* Facilities Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">State-of-the-Art Facilities</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide modern infrastructure designed to support academic excellence and holistic development of our students.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Gradient header */}
                  <div className={`bg-gradient-to-r ${facility.color} p-8 text-white text-center h-32 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
                    </div>
                    <div className="text-6xl relative z-10">{facility.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">{facility.name}</h3>
                    <p className="text-gray-600 mb-6">{facility.description}</p>

                    {/* Features */}
                    <div className="space-y-3">
                      {facility.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-3">
                          <span className="text-lg flex-shrink-0 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facility Highlights */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-poppins">Why Our Facilities Matter</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {[
                  {
                    title: 'Safe & Secure Environment',
                    desc: 'CCTV surveillance, trained security staff, and strict access control ensure student safety'
                  },
                  {
                    title: 'Hygiene & Cleanliness',
                    desc: 'Regular sanitization, clean classrooms, and hygienic food services'
                  },
                  {
                    title: 'Accessibility',
                    desc: 'Ramps, elevators, and facilities for differently-abled students'
                  },
                  {
                    title: 'Green Campus',
                    desc: 'Trees, gardens, and eco-friendly practices throughout the campus'
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-4xl flex-shrink-0">
                      {['🔒', '🧹', '♿', '🌱'][idx]}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-8 border-l-8 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Campus Infrastructure</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Total Campus Area', value: '2+ acres' },
                    { label: 'Buildings', value: '5 academic blocks' },
                    { label: 'Classrooms', value: '40+ technologically equipped' },
                    { label: 'Parking', value: 'Ample parking space' },
                    { label: 'Canteen', value: 'Nutritious food service' },
                    { label: 'Medical Room', value: 'First aid & health checkup' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-bold text-blue-600">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation & Logistics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-poppins">Additional Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🚌',
                  title: 'School Transport',
                  desc: 'GPS-enabled buses with trained staff covering all major areas'
                },
                {
                  icon: '🍽️',
                  title: 'Mid-Day Meal',
                  desc: 'Nutritious meal program following all health guidelines'
                },
                {
                  icon: '📱',
                  title: 'Parent Portal',
                  desc: 'Real-time updates on attendance, performance, and activities'
                },
              ].map((service, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-600">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Virtual Tour CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-6xl mb-6">🏫</div>
            <h2 className="text-4xl font-bold mb-6 font-poppins">Experience Our Campus</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a campus visit to see our state-of-the-art facilities in person. Our team would love to show you why SRPSS is the perfect place for your child&apos;s education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg"
              >
                Schedule a Visit 📅
              </a>
              <a
                href="#admission"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:bg-opacity-10 transition-all"
              >
                Learn About Admission 🎓
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
