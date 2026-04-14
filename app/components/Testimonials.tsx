export default function Testimonials() {
  const testimonials = [
    { name: 'Mrs. Sharma, Parent', text: 'The school has helped my daughter grow in confidence and academics.' },
    { name: 'Amit, Student', text: 'I love the activities, teachers, and the support I receive every day.' },
    { name: 'Mr. Verma, Parent', text: 'The safe campus and strong values make this the best choice for our family.' },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
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