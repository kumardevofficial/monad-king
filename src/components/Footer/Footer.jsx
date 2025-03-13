import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import monadKing from "../../assets/1.png";

const Footer = () => {
  return (
    <footer className="bg-[#8875F8] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section - Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <img
              src={monadKing}
              alt="Monad Logo"
              className="w-6 h-6 mr-2 rounded-full"
            />
            Monad King
          </h2>
          <p className="text-sm text-black mt-2">
            Monad King is the ultimate meme coin on the Monad Blockchain,
            created purely for fun and good vibes! 🚀 No value, no roadmap—just
            pure entertainment for degens and crypto lovers.
          </p>
          {/* Social Icons */}
          {/* <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-black bg-white p-2 rounded-full text-3xl cursor-pointer" />
            <FaInstagram className="text-black bg-white p-2 rounded-full text-3xl cursor-pointer" />
            <FaTwitter className="text-black bg-white p-2 rounded-full text-3xl cursor-pointer" />
            <FaLinkedin className="text-black bg-white p-2 rounded-full text-3xl cursor-pointer" />
          </div> */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-black">
            <li>⭐ Home</li>
            <li>⭐ About</li>
            {/* <li>⭐ Roadmap</li>
            <li>⭐ Tokenomics</li>
            <li>⭐ How to Buy</li>
            <li>⭐ Contact</li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold">CONTACT</h3>
          <p className="mt-2 text-black">📍 Monad Blockchain</p>
          {/* <p className="text-black">📞 (808) 555-0111</p>
          <p className="text-black">📧 info.zenspa@gmail.com</p> */}
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-bold">SUBSCRIBE OUR NEWSLETTER</h3>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-900 text-white px-4 py-2 rounded-l-md w-full outline-none"
            />
            <button className="bg-white text-black font-bold px-4 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
