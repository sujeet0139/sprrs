export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            📞 Contact
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 font-poppins">Reach Out to SRPSS</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We’re here to answer your questions, guide your child’s next step, and welcome families to our campus.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
            <div>
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-slate-700">Pushp Nagar, Azamgarh</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-slate-700">7054272888</p>
              <p className="text-slate-700">9935535005</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <p className="text-slate-700">info@srpssschool.in</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="tel:7054272888" className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800 transition">
                Call Now
              </a>
              <a href="https://wa.me/917054272888?text=Hello%20SRPSS,%20I%20want%20to%20know%20about%20admission%20details." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-blue-700 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
                WhatsApp Chat
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl">
            <iframe
              src="https://maps.google.com/maps?q=Pushp%20Nagar%20Azamgarh%20India&output=embed"
              width="100%"
              height="520"
              className="border-0"
              allowFullScreen
              loading="lazy"
              title="SRPSS Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
