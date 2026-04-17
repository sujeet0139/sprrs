import Link from 'next/link';

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
              <li><Link href="/" className="hover:text-amber-200 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-200 transition">About</Link></li>
              <li><Link href="/academics" className="hover:text-amber-200 transition">Academics</Link></li>
              <li><Link href="/facilities" className="hover:text-amber-200 transition">Facilities</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-200 transition">Gallery</Link></li>
              <li><Link href="/media" className="hover:text-amber-200 transition">Media</Link></li>
              <li><Link href="/contact" className="hover:text-amber-200 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Phone: 7054272888, 9935535005</p>
            <p>Deedarganj–Saraimeer Road, Pushpnagar</p>
            <p>Post: Pushpnagar, Tehsil: Martinganj</p>
            <p>Block: Phoolpur, Police Station: Deedarganj</p>
            <p>Azamgarh, Uttar Pradesh – 223226</p>
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