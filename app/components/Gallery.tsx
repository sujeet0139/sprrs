export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1520915001970-7a570975c4ce?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1515165562835-c12edd0ad2b8?auto=format&fit=crop&w=900&q=80',
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            📸 Campus Life
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 font-poppins">Gallery</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Explore moments from our classrooms, events, labs and school celebrations.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-[2rem] bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img src={img} alt={`Gallery ${index + 1}`} className="h-80 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
