export default function Facilities() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-heading text-primary">Facilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <img src="/smart-class.jpg" alt="Smart Class" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Smart Classes</h3>
            <p>Modern teaching aids for interactive learning</p>
          </div>
          <div className="text-center">
            <img src="/computer-lab.jpg" alt="Computer Lab" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Computer Lab</h3>
            <p>Equipped with latest computers and software</p>
          </div>
          <div className="text-center">
            <img src="/library.jpg" alt="Library" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Library</h3>
            <p>Extensive collection of books and resources</p>
          </div>
          <div className="text-center">
            <img src="/sports.jpg" alt="Sports Ground" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Sports Ground</h3>
            <p>Facilities for various sports and physical activities</p>
          </div>
        </div>
      </div>
    </section>
  );
}