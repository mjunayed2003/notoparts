
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">Hi, we are always open for cooperation and suggestions, contact us in one of the ways below:</p>
          <p className="flex items-center gap-2 mb-1"><Phone className="w-4 h-4" />(+88)01939104157</p>
          <p className="flex items-center gap-2 mb-1"><Mail className="w-4 h-4" /> nosto-parts@example.com</p>
          <p className="flex items-center gap-2 mb-1"><MapPin className="w-4 h-4" /> Fake Street, Dhaka 10021 Bangladesh</p>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Information</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Brands</li>
            <li>Contact Us</li>
            <li>Returns</li>
            <li>Site Map</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-xl font-bold mb-4">My Account</h3>
          <ul className="space-y-1">
            <li>Store Location</li>
            <li>Order History</li>
            <li>Wish List</li>
            <li>Newsletter</li>
            <li>Special Offers</li>
            <li>Gift Certificates</li>
            <li>Affiliate</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="mb-2">Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-2 rounded-md border border-white text-gray-900 w-full bg-white"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">Subscribe</button>
          </div>

          <div className="mt-4">
            <p>Follow us on social networks</p>
             <div className="flex justify-center">
                <Facebook  className="bg-blue-600 text-white rounded-full p-2 h-10 w-10 mt-2 mx-2 hover:bg-gray-300"/>
                <Twitter className="bg-blue-400 text-white rounded-full p-2 h-10 w-10 mt-2 mx-2"/>
                <Youtube className="bg-red-600 text-white rounded-full p-2 h-10 w-10 mt-2 mx-2"/>
                <Instagram className="bg-[#8661cf] text-white rounded-full p-2 h-10 w-10 mt-2 mx-2"/>
             </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-8 pt-4 text-center text-white text-sm pb-5">
        Powered by React+vite / typescript — Designed by Kos
      </div>
    </footer>
  );
};

export default Footer;
