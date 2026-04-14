'use client';

const faqs = [
  {
    question: 'How can I apply for admission?',
    answer: 'Submit the admission form online or visit our campus to complete the registration process. Our admissions team is happy to guide you.'
  },
  {
    question: 'What streams are offered for classes 11 and 12?',
    answer: 'We offer Science, Commerce, and Arts streams with skilled faculty and support for board exam preparation.'
  },
  {
    question: 'Do you provide transportation facilities?',
    answer: 'Yes, we operate safe and reliable transport routes across Azamgarh with trained staff.'
  },
  {
    question: 'What extracurricular activities are available?',
    answer: 'Students can take part in sports, music, drama, debate, robotics, and many cultural clubs.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-24 bg-gradient-to-br from-amber-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-[0.2em]">
            Frequently Asked Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 font-poppins">Find answers to common queries</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mt-4">
            Explore our most requested FAQs about admission, curriculum, facilities, and school life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-3xl p-6 shadow-lg border border-slate-200 open:border-blue-200">
              <summary className="cursor-pointer text-lg font-semibold text-slate-900 list-none marker:hidden">
                {faq.question}
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
