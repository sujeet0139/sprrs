export default function Academics() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-heading text-primary">Academics</h2>
        <p className="text-center mb-8">We offer comprehensive education from classes 1 to 12, focusing on academic excellence, discipline, and character building.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Primary Education (1-5)</h3>
            <p>Foundation building with play-based learning</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Middle School (6-8)</h3>
            <p>Developing critical thinking and creativity</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Secondary (9-10) & Senior Secondary (11-12)</h3>
            <p>Preparing for higher education and careers</p>
          </div>
        </div>
      </div>
    </section>
  );
}