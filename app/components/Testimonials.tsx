import AnimatedCounter from '../AnimatedCounter';

const testimonials = [
  {
    name: 'Ramesh Kumar Sharma',
    role: 'Parent of Priya Sharma — Class 10',
    text: 'SRPSS has transformed my daughter completely. She went from being an average student to topping her class. The teachers here genuinely care about every child&apos;s growth, not just marks.',
    rating: 5,
    location: 'Azamgarh',
  },
  {
    name: 'Savita Devi Yadav',
    role: 'Parent of Rahul Yadav — Class 8',
    text: 'The discipline and moral values this school instils are outstanding. My son has become more responsible, focused, and confident since joining SRPSS. I recommend it to every parent in the area.',
    rating: 5,
    location: 'Deedarganj',
  },
  {
    name: 'Mahendra Prasad Tiwari',
    role: 'Parent of Anjali Tiwari — Class 5',
    text: 'Excellent infrastructure, experienced teachers, and a safe environment. My daughter looks forward to going to school every single day. We are so grateful to the SRPSS family.',
    rating: 5,
    location: 'Phoolpur',
  },
  {
    name: 'Pushpa Rani Singh',
    role: 'Parent of Vikash Singh — Class 12',
    text: 'My son scored 94% in Class 12 boards after joining SRPSS in Class 9. The Science faculty is exceptional. The school prepared him so thoroughly for competitive exams as well.',
    rating: 5,
    location: 'Saraimeer',
  },
  {
    name: 'Dinesh Kumar Mishra',
    role: 'Parent of Kavya Mishra — Class 7',
    text: 'What impressed me most is how the school communicates with parents regularly. We always know how our child is doing. Transparent, accountable, and truly dedicated to quality education.',
    rating: 5,
    location: 'Pushpnagar',
  },
  {
    name: 'Rekha Devi Gupta',
    role: 'Parent of Arjun Gupta — Class 9',
    text: 'After switching from a city school, my son adjusted very quickly because of the warm and supportive atmosphere at SRPSS. The teachers treat every student like their own child.',
    rating: 5,
    location: 'Martinganj',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            <i className="fas fa-quote-left text-amber-500 text-xs"></i> Parent Testimonials
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 font-poppins">Trusted by Families</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Real words from real families — the trust and pride parents feel when their children learn at SRPSS.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            {[1,2,3,4,5].map((s) => (
              <i key={s} className="fas fa-star text-amber-400 text-lg"></i>
            ))}
            <span className="ml-2 text-lg font-bold text-slate-800">4.9 / 5</span>
            <span className="text-slate-500 text-sm">(Based on 200+ parent reviews)</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <div key={index} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-4 right-6 text-6xl font-serif text-blue-50 leading-none select-none">&ldquo;</div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <i key={i} className="fas fa-star text-amber-400 text-sm"></i>
                ))}
              </div>
              <p className="mb-6 text-slate-700 leading-relaxed text-sm relative z-10">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white font-bold text-sm">
                  {t.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                  <p className="text-xs text-blue-600 mt-0.5"><i className="fas fa-map-marker-alt text-[10px]"></i> {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-white px-8 py-6 shadow-lg border border-slate-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                <AnimatedCounter endValue={98} suffix="%" />
              </div>
              <div className="text-sm text-slate-600 mt-1">Parent Satisfaction</div>
            </div>
            <div className="h-12 w-px bg-slate-200 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">
                <AnimatedCounter endValue={40} suffix="+" />
              </div>
              <div className="text-sm text-slate-600 mt-1">Years of Trust</div>
            </div>
            <div className="h-12 w-px bg-slate-200 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                <AnimatedCounter endValue={500} suffix="+" />
              </div>
              <div className="text-sm text-slate-600 mt-1">Happy Families</div>
            </div>
            <div className="h-12 w-px bg-slate-200 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                <AnimatedCounter endValue={200} suffix="+" />
              </div>
              <div className="text-sm text-slate-600 mt-1">Verified Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
