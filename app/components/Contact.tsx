'use client';

import { useState } from 'react';

type FormState = {
  name: string;
  phone: string;
  currentClass: string;
  admissionFor: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  phone: '',
  currentClass: '',
  admissionFor: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim()))
      e.phone = 'Enter a valid 10-digit Indian mobile number.';
    if (!form.admissionFor) e.admissionFor = 'Please select a class.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <i className="fas fa-phone-alt text-blue-600 text-xs"></i> Contact
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 font-poppins">Reach Out to SRPSS</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We&apos;re here to answer your questions, guide your child&apos;s next step, and welcome families to our campus.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Details */}
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-xl">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100">
                <i className="fas fa-map-marker-alt text-blue-700"></i>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Visit Us</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Shri Rama Prasad Singh Shiksha Sansthan<br />
                  Deedarganj–Saraimeer Road, Pushpnagar<br />
                  Tehsil: Martinganj, Block: Phoolpur<br />
                  Azamgarh, Uttar Pradesh – 223226
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100">
                <i className="fas fa-phone-alt text-green-700"></i>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                <a href="tel:7054272888" className="block text-slate-600 text-sm hover:text-blue-700 transition">+91 70542 72888</a>
                <a href="tel:9935535005" className="block text-slate-600 text-sm hover:text-blue-700 transition">+91 99355 35005</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100">
                <i className="fas fa-envelope text-amber-700"></i>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                <a href="mailto:info@srpssschool.in" className="text-slate-600 text-sm hover:text-blue-700 transition">info@srpssschool.in</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-100">
                <i className="fas fa-clock text-purple-700"></i>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                <p className="text-slate-600 text-sm">Monday – Saturday: 8:00 AM – 4:00 PM</p>
                <p className="text-slate-500 text-xs mt-1">Sunday & Public Holidays: Closed</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              <a href="tel:7054272888" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800 transition">
                <i className="fas fa-phone-alt text-xs"></i> Call Now
              </a>
              <a href="https://wa.me/917054272888?text=Hello%20SRPSS,%20I%20want%20to%20know%20about%20admission%20details." target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-green-600 bg-green-50 px-5 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-600 hover:text-white">
                <i className="fab fa-whatsapp text-base"></i> WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10 gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <i className="fas fa-check-circle text-4xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Enquiry Sent!</h3>
                <p className="text-slate-600 max-w-sm">
                  Thank you for reaching out to SRPSS. Our team will contact you within 24 hours on the number you provided.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 rounded-full border border-blue-200 px-6 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Admission Enquiry Form</h3>
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Parent / Guardian Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar Sharma"
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white hover:border-slate-400'}`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Mobile Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white hover:border-slate-400'}`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Student&apos;s Current Class</label>
                      <select
                        name="currentClass"
                        value={form.currentClass}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition hover:border-slate-400 focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select class</option>
                        {['Nursery / KG', ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Admission For Class <span className="text-red-500">*</span></label>
                      <select
                        name="admissionFor"
                        value={form.admissionFor}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 outline-none transition focus:ring-2 focus:ring-blue-500 ${errors.admissionFor ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white hover:border-slate-400'}`}
                      >
                        <option value="">Select class</option>
                        {['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11 – PCM', 'Class 11 – PCB', 'Class 11 – Commerce', 'Class 12 – PCM', 'Class 12 – PCB', 'Class 12 – Commerce'].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      {errors.admissionFor && <p className="mt-1 text-xs text-red-600">{errors.admissionFor}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any specific questions or information you need..."
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <><i className="fas fa-spinner fa-spin"></i> Sending…</>
                    ) : (
                      <><i className="fas fa-paper-plane text-xs"></i> Send Enquiry</>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl">
          <iframe
            src="https://maps.google.com/maps?q=Deedarganj%E2%80%93Saraimeer%20Road%2C%20Pushpnagar%2C%20Azamgarh%2C%20Uttar%20Pradesh%20223226%2C%20India&output=embed"
            width="100%"
            height="400"
            className="border-0 w-full"
            allowFullScreen
            loading="lazy"
            title="SRPSS Location on Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
