export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.4),_transparent_45%)]"></div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:py-28">
        <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/20 text-amber-100">✨</span>
            Continuing a legacy of care, courage, and confidence
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Excellence in Education
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-100 sm:text-xl">
            A student-first school in Azamgarh where every child belongs, learns with joy, and grows into a confident leader.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#admission"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-300"
            >
              Admission Open
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {['40+ Years', 'Modern Labs', 'Holistic Growth'].map((label, idx) => (
              <div key={idx} className="rounded-3xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-sm">
                <p className="text-2xl font-bold text-white">{label}</p>
                <p className="mt-2 text-sm text-slate-200">{label === '40+ Years' ? 'Trusted education in Azamgarh' : label === 'Modern Labs' ? 'Smart classrooms & practical learning' : 'Sports, arts and values-based life skills'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
