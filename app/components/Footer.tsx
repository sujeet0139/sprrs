export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Shri Rama Prasad Singh Shiksha Sansthan</h3>
            <p>Empowering Future Through Education Since 1986</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-amber-200">Home</a></li>
              <li><a href="#about" className="hover:text-amber-200">About</a></li>
              <li><a href="#academics" className="hover:text-amber-200">Academics</a></li>
              <li><a href="#facilities" className="hover:text-amber-200">Facilities</a></li>
              <li><a href="#contact" className="hover:text-amber-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Phone: 7054272888, 9935535005</p>
            <p>Pushp Nagar, Azamgarh</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-200">Facebook</a>
              <a href="#" className="hover:text-amber-200">Instagram</a>
              <a href="#" className="hover:text-amber-200">YouTube</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t pt-4">
          <p>&copy; 2024 Shri Rama Prasad Singh Shiksha Sansthan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}