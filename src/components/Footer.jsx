import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white py-10 px-6 md:px-12 rounded-3xl max-w-[1440px] mx-auto mt-28">
      {/* Top Sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-6 border-b border-gray-600">
        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Customer Service / FAQ</a></li>
            <li><a href="#" className="hover:underline">Athlete Club</a></li>
            <li><a href="#" className="hover:underline">Exchanges & returns</a></li>
            <li><a href="#" className="hover:underline">Reviews</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Follow us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">TikTok</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        {/* Left side */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-center md:text-left">
          <p>© 2025, RELODE</p>
          <span className="hidden md:inline">coi</span>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          <a href="#" className="hover:underline">General terms and conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie policy</a>
        </div>

        {/* Icons */}
        <div className="flex gap-2">
          <img src="/icons/apple-pay.svg" alt="Apple Pay" width={32} height={20} />
          <img src="/icons/google-pay.svg" alt="Google Pay" width={32} height={20} />
          <img src="/icons/klarna.svg" alt="Klarna" width={32} height={20} />
          <img src="/icons/shop.svg" alt="Shop" width={32} height={20} />
          <img src="/icons/visa.svg" alt="Visa" width={32} height={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
