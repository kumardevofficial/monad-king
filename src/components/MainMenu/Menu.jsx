import React from "react";
import monadKing from "../../assets/1.png";

const Navbar = () => {
  return (
    <nav className="bg-[#8875F8] flex justify-between items-center p-4 shadow-md">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={monadKing}
          alt="Monad Logo"
          className="w-8 h-8 rounded-full" // Adjust size as needed
        />
        <span className="font-bold text-black text-xl">Monad King</span>
      </div>

      {/* Center Section: Menu Items */}
      <div className="flex space-x-4 font-bold">
        <button className="px-4 py-2 shadow-md shadow-blue rounded-full text-black hover:bg-white hover:text-[#8875F8]">
          HOME
        </button>
        {/* <button className="px-4 py-2 shadow-md shadow-blue rounded-full text-black hover:bg-white hover:text-[#8875F8]">
          HOW TO BUY
        </button> */}
        <button className="px-4 py-2 shadow-md shadow-blue rounded-full text-black hover:bg-white hover:text-[#8875F8]">
          ABOUT
        </button>
        {/* <button className="px-4 py-2 shadow-md shadow-blue rounded-full text-black hover:bg-white hover:text-[#8875F8]">
          TOKENOMICS
        </button> */}
        {/* <button className="px-4 py-2 shadow-md shadow-blue rounded-full text-black hover:bg-white hover:text-[#8875F8]">
          ROADMAP
        </button> */}
        <button className="px-4 py-2 shadow-md shadow-blue rounded-full text-black hover:bg-white hover:text-[#8875F8]">
          FAQ
        </button>
        <button className="px-4 py-2 shadow-md shadow-blue rounded-full text-black hover:bg-white hover:text-[#8875F8]">
          CONTACT
        </button>
      </div>

      {/* Right Section: Get Started Button */}
      <button className="px-6 py-2 bg-white text-[#8875F8] font-bold rounded-full border border-black hover:bg-black hover:text-yellow-400 transition opacity-0">
        GET STARTED
      </button>
    </nav>
  );
};

export default Navbar;
