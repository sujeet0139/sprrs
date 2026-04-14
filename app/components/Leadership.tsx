export default function Leadership() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading text-primary">Leadership Messages</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <img src="/principal.jpg" alt="Principal" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">Mrs. Kusham Lata</h3>
            <p className="text-center text-gray-600 mb-4">Principal</p>
            <p>At Shri Rama Prasad Singh Shiksha Sansthan, we believe that education is not just about academic excellence but about shaping character and values. Our goal is to nurture students into confident, disciplined, and responsible individuals. We focus on holistic development through academics, cultural activities, and moral education. We are committed to providing a safe and inspiring learning environment for every child.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <img src="/director.jpg" alt="Director" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">Mr. Krishna Kumar Singh</h3>
            <p className="text-center text-gray-600 mb-4">Director</p>
            <p>Our institution has proudly served the community for over 40 years. We continuously strive to maintain high standards of education while adapting to modern learning methods. Our focus is on innovation, discipline, and overall personality development of students. We welcome parents to be a part of this journey in building a brighter future for their children.</p>
          </div>
        </div>
      </div>
    </section>
  );
}