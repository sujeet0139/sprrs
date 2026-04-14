export default function Gallery() {
  const images = [
    '/gallery1.jpg', '/gallery2.jpg', '/gallery3.jpg', '/gallery4.jpg', '/gallery5.jpg', '/gallery6.jpg'
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-heading text-primary">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index+1}`} className="w-full h-48 object-cover rounded-lg hover:scale-105 transition" />
          ))}
        </div>
      </div>
    </section>
  );
}