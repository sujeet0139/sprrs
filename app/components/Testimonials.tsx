export default function Testimonials() {
  const testimonials = [
    { name: 'Parent 1', text: 'Excellent education and values taught here.' },
    { name: 'Parent 2', text: 'My child has grown so much academically and personally.' },
    { name: 'Student 1', text: 'Great teachers and fun activities.' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-heading text-primary">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"{t.text}"</p>
              <p className="font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}