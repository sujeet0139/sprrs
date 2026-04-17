'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How to take admission?',
    answer: 'You can begin the admission process by contacting the school office, visiting the campus, or sending an enquiry through WhatsApp. The team will guide you through registration, document submission, and the next available intake.'
  },
  {
    question: 'What classes are available?',
    answer: 'The school offers a complete learning journey from primary grades through senior classes. Parents can contact the admissions team for current section availability and class-wise intake details.'
  },
  {
    question: 'What is the fee structure?',
    answer: 'Fee details vary by class and services selected. For the latest tuition, admission, and transport charges, please connect directly with the school office so the team can share the correct breakdown.'
  },
  {
    question: 'Is transport available?',
    answer: 'Yes, transport support is available for many nearby routes. Route coverage and seat availability can be confirmed during admission enquiry.'
  },
  {
    question: 'What facilities are provided?',
    answer: 'Students benefit from a structured academic environment, safe campus support, activity participation, and core school facilities designed to support learning, discipline, and overall development.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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

        <div className="grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:gap-8">
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-[0_22px_60px_rgba(15,23,42,0.16)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Admission Help</p>
            <h3 className="mt-4 font-poppins text-3xl font-bold">Need quick answers before visiting the campus?</h3>
            <p className="mt-4 text-slate-300 leading-7">
              These are the questions parents ask most often when planning admission, transport, and facilities. If you need class-specific guidance, the enquiry button on the page opens a direct WhatsApp conversation.
            </p>
          </div>

          <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}>
                  <i className="fas fa-plus"></i>
                </span>
              </button>
              {openIndex === idx && (
                <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                  <p className="leading-7 text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
