import AnimatedCounter from './AnimatedCounter';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mrs. Sharma, Parent',
      text: 'The school has helped my daughter grow in confidence and academics. I completely trust their teaching methods and care for students.',
      trust: '⭐⭐⭐⭐⭐',
      role: 'Parent of Class 10 Student'
    },
    {
      name: 'Mr. Verma, Parent',
      text: 'The safe campus and strong values make this the best choice for our family. We trust SRPSS completely with our children\'s future.',
      trust: '⭐⭐⭐⭐⭐',
      role: 'Parent of Class 8 Student'
    },
    {
      name: 'Mrs. Joshi, Parent',
      text: 'Teachers are supportive and the environment is very encouraging for every child. Parents can trust that their children are in good hands.',
      trust: '⭐⭐⭐⭐⭐',
      role: 'Parent of Class 5 Student'
    },
    {
      name: 'Ms. Gupta, Parent',
      text: 'The school consistently communicates with parents and keeps students focused on success. Their transparency builds complete trust.',
      trust: '⭐⭐⭐⭐⭐',
      role: 'Parent of Class 12 Student'
    },
    {
      name: 'Mr. Singh, Parent',
      text: 'From discipline to academics, everything is handled with care. We trust this school more than any other institution in the area.',
      trust: '⭐⭐⭐⭐⭐',
      role: 'Parent of Class 7 Student'
    },
    {
      name: 'Mrs. Patel, Parent',
      text: 'The leadership and teachers work together to ensure every student\'s success. Parents can have complete peace of mind.',
      trust: '⭐⭐⭐⭐⭐',
      role: 'Parent of Class 9 Student'
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            💬 Parent Testimonials
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 font-poppins">Trusted by Parents</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Real feedback from our school families showcasing the trust and confidence parents place in SRPSS for their children's education.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="text-lg font-semibold text-slate-700">4.9/5</span>
            <span className="text-slate-600">(Based on 200+ parent reviews)</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <div key={index} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-1 mb-4">
                {t.trust.split('').map((star, i) => (
                  <span key={i} className="text-amber-400 text-lg">{star}</span>
                ))}
              </div>
              <p className="mb-6 text-slate-700 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 rounded-2xl bg-white px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                <AnimatedCounter endValue={98} suffix="%" />
              </div>
              <div className="text-sm text-slate-600">Parent Satisfaction</div>
            </div>
            <div className="h-12 w-px bg-slate-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                <AnimatedCounter endValue={15} suffix="+" />
              </div>
              <div className="text-sm text-slate-600">Years of Trust</div>
            </div>
            <div className="h-12 w-px bg-slate-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                <AnimatedCounter endValue={500} suffix="+" />
              </div>
              <div className="text-sm text-slate-600">Happy Families</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}