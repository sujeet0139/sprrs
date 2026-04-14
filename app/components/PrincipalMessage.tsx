'use client';

export default function PrincipalMessage() {
  return (
    <section id="principal" className="py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold uppercase tracking-[0.2em]">
            Principal's Message
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 font-poppins">
            A warm welcome from our Principal
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-4">
            Within every student, we see a story waiting to unfold. At SRPSS, we guide each learner with compassion, strong values, and a future-ready education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              Our school is committed to nurturing academic excellence, personal confidence, and social responsibility. We blend disciplined learning with creative exploration so every child can thrive.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Personal Growth', value: 'Mentorship programs and leadership training.' },
                { label: 'Safe Campus', value: '24/7 security and supportive staff.' },
                { label: 'Modern Learning', value: 'Smart classes and practical labs.' },
                { label: 'Community Values', value: 'Ethics, respect and teamwork.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                  <p className="text-sm text-amber-700 font-semibold uppercase tracking-[0.2em] mb-3">{item.label}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#admission" className="inline-flex items-center justify-center rounded-full bg-blue-700 text-white px-8 py-3 font-semibold transition hover:bg-blue-800 shadow-lg">
                Apply Now
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-blue-700 text-blue-700 px-8 py-3 font-semibold transition hover:bg-blue-50">
                Contact School
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
              alt="Principal of the school"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-white/90 rounded-3xl p-6 shadow-lg backdrop-blur-sm max-w-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold">Principal</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">Dr. Priya Singh</h3>
              <p className="text-slate-600 mt-2 text-sm">Committed to developing confident students who excel in academics and life.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
