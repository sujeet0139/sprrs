export default function Admission() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 font-heading">Admission Open</h2>
        <p className="mb-8">Join our family and start your journey towards excellence</p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 1: Application</h3>
            <p>Fill out the admission form</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 2: Documents</h3>
            <p>Submit required documents</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 3: Interview</h3>
            <p>Meet with our admission team</p>
          </div>
        </div>
        <button className="bg-secondary text-primary px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">Apply Now</button>
      </div>
    </section>
  );
}