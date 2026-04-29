'use client';

export default function AdmissionSteps() {
  const steps = [
    { step: '01', title: 'Submit Enquiry', desc: 'Fill out our online form or message us on WhatsApp with the student\'s details.' },
    { step: '02', title: 'Campus Visit', desc: 'Take a guided tour of our facilities and meet with our academic counselors.' },
    { step: '03', title: 'Registration', desc: 'Submit the required documents (Aadhar, Previous Marksheet, Birth Certificate).' },
    { step: '04', title: 'Confirmation', desc: 'Pay the admission fee to secure your child\'s seat for the upcoming session.' },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-white">Simple Admission Process</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            We are currently accepting applications for Classes 1 to 12. Seats are limited per section.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 z-0" />
          
          {steps.map((item, idx) => (
            <div key={idx} className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600 border-4 border-slate-900 rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-800 rounded-2xl p-8 border border-slate-700 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Fee Structure Information</h3>
          <p className="text-slate-300 mb-6">
            Our fee structure varies by class and transport requirements. We believe in complete transparency with no hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-full transition-colors">
              Enquire Now
            </a>
            <a href="https://wa.me/917054272888" target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2">
              <i className="fab fa-whatsapp text-xl"></i> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}