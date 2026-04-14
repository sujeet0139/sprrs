'use client';

export default function VideoSection() {
  return (
    <section id="video" className="py-20 md:py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/15 text-amber-200 rounded-full text-sm font-semibold uppercase tracking-[0.2em]">
            School Intro Video
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 font-poppins">See Learning in Action</h2>
          <p className="text-slate-300 max-w-3xl mx-auto mt-4">
            Explore our campus, classrooms, and student life through this short introduction to Shri Rama Prasad Singh Shiksha Sansthan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-900/70 border border-slate-700 p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4">A modern learning environment</h3>
              <p className="text-slate-300 leading-relaxed">
                Our school blends tradition with innovation, offering student-centered learning, extracurricular opportunities, and a strong values-based culture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Creative Labs', icon: '🧪' },
                { title: 'Sports & Fitness', icon: '⚽' },
                { title: 'Digital Learning', icon: '💻' },
                { title: 'Cultural Events', icon: '🎭' }
              ].map((item, index) => (
                <div key={index} className="rounded-3xl bg-white/10 p-5 border border-slate-700">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-amber-400/20 bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="School Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
