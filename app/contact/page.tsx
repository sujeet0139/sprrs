import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Shri Rama Prasad Singh Shiksha Sansthan',
  description: 'Get in touch with us for inquiries about admission, fees, and more.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 font-poppins">Get in Touch</h1>
            <p className="text-xl text-blue-100">We&apos;d love to hear from you!</p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8 font-poppins">Contact Information</h2>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="text-4xl flex-shrink-0">📞</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                      <a href="tel:7054272888" className="text-blue-600 hover:text-blue-700 text-lg font-semibold">
                        7054272888
                      </a>
                      <br />
                      <a href="tel:9935535005" className="text-blue-600 hover:text-blue-700 text-lg font-semibold">
                        9935535005
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="text-4xl flex-shrink-0">📍</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600 text-lg">
                        Shri Rama Prasad Singh Shiksha Sansthan<br />
                        Deedarganj–Saraimeer Road, Pushpnagar<br />
                        Post: Pushpnagar<br />
                        Tehsil: Martinganj<br />
                        Block: Phoolpur<br />
                        Police Station: Deedarganj<br />
                        District: Azamgarh<br />
                        Uttar Pradesh – 223226<br />
                        India
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="text-4xl flex-shrink-0">📧</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                      <a href="mailto:info@srpss.edu.in" className="text-blue-600 hover:text-blue-700 text-lg font-semibold">
                        info@srpss.edu.in
                      </a>
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="flex gap-4 items-start">
                    <div className="text-4xl flex-shrink-0">⏰</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">School Hours</h3>
                      <p className="text-gray-600 text-lg">
                        Monday - Friday: 8:00 AM - 3:30 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Send us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600">
                      <option>Select a subject</option>
                      <option>Admission Inquiry</option>
                      <option>Fee Information</option>
                      <option>General Query</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Type your message here..."
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                  >
                    Send Message 📤
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-poppins">Find Us on Map</h2>
            <div className="rounded-3xl overflow-hidden shadow-xl h-96 md:h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=Deedarganj%E2%80%93Saraimeer%20Road%2C%20Pushpnagar%2C%20Azamgarh%2C%20Uttar%20Pradesh%20223226%2C%20India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-poppins">Quick Links</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Admission Inquiry', icon: '📋', link: '#admission' },
                { title: 'Fee Details', icon: '💰', link: '#fees' },
                { title: 'Facilities Tour', icon: '🏫', link: '/facilities-detail' },
                { title: 'Academics Info', icon: '📚', link: '/academics-detail' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-blue-600 hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600">{item.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
