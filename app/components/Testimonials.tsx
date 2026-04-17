export default function Testimonials() {
  const testimonials = [
    { name: 'Mrs. Sharma, Parent', text: 'The school has helped my daughter grow in confidence and academics.' },
    { name: 'Mr. Verma, Parent', text: 'The safe campus and strong values make this the best choice for our family.' },
    { name: 'Mrs. Joshi, Parent', text: 'Teachers are supportive and the environment is very encouraging for every child.' },
    { name: 'Ms. Gupta, Parent', text: 'The school consistently communicates with parents and keeps students focused on success.' },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            💬 Parent Testimonials
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 font-poppins">What Parents Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Real feedback from our school families about academic growth, student care, and campus life.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {testimonials.map((t, index) => (
            <div key={index} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-lg">
              <p className="mb-6 text-slate-700 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <p className="font-semibold text-slate-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}