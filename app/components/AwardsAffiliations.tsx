export default function AwardsAffiliations() {
  const awards = [
    { title: 'Best School Award 2025', detail: 'Recognized for excellence in academics and student development.' },
    { title: 'Top Performing School 2024', detail: 'Awarded for outstanding board results and campus environment.' },
    { title: 'Innovative Teaching Award 2023', detail: 'Honoured for modern teaching methods and digital classrooms.' },
  ];

  const affiliations = [
    'CBSE Accredited School',
    'Member of National Education Board',
    'Partnered with community skill development programs',
  ];

  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🏆 Awards & Affiliation
            </span>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 font-poppins">Our Achievements</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Shri Rama Prasad Singh Shiksha Sansthan is proud to be recognised for its quality education, safe campus, and strong learning culture.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Affiliations</h3>
            <ul className="space-y-4 text-slate-700">
              {affiliations.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-1 text-blue-600">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {awards.map((award) => (
            <div key={award.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mb-4">Award</p>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{award.title}</h3>
              <p className="text-slate-600 leading-relaxed">{award.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
