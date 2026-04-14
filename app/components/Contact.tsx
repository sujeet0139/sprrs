export default function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-heading text-primary">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-2"><strong>Phone:</strong> 7054272888, 9935535005</p>
            <p className="mb-4"><strong>Address:</strong> Pushp Nagar, Azamgarh</p>
            <div className="mb-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.123456789012!2d83.123456!3d25.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzI0LjQiTiA4M8KwMDcnMjQuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowFullScreen loading="lazy"></iframe>
            </div>
            <a href="tel:7054272888" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition">Call Now</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
              <textarea placeholder="Your Message" className="w-full p-3 border rounded" rows={5}></textarea>
              <button type="submit" className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}