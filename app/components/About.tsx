export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-heading text-primary">About Shri Rama Prasad Singh Shiksha Sansthan</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">40+ Years of Legacy</h3>
            <p className="mb-4">Established in 1986, our institution has been a beacon of quality education in Azamgarh. Founded by Late Shri Raam Prasad Singh, we continue his vision of providing education to all.</p>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p>To provide quality education with strong moral values, discipline, and holistic development.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p>To develop responsible and successful citizens who contribute positively to society.</p>
            <p className="mt-4">We offer education from classes 1 to 12 with over 500 students enrolled.</p>
          </div>
        </div>
      </div>
    </section>
  );
}