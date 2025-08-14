"use client";
import React, { useState } from "react";
// import logo from "@/images/truepeaklogo.png";
// import video1 from "@/videos/vedio1.mp4";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-screen text-white overflow-hidden text-base">
      {/* 🔹 Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🔹 Navigation */}
      <header className="relative z-30 flex items-center justify-between px-4 md:px-10 py-6">
        {/* 📱 Hamburger Icon (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white z-40"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        {/* 🔗 Left Nav (desktop only) */}
        <nav className="hidden md:flex space-x-6 font-normal text-2xl text-white ml-10 gap-[38px]">
          <a href="#" className="hover:text-secondary font-navbar">
            Services
          </a>
          <a href="#" className="hover:text-secondary font-navbar">
            Locations
          </a>
          <a href="#" className="hover:text-secondary font-navbar">
            At-Home
          </a>
        </nav>

        {/* 🔹 Logo - Centered */}
        <div className="absolute left-1/2 top-[55px] -translate-x-1/2 -translate-y-1/2 z-30">
          <img
            // src={logo}
            alt="Trupeak Health Logo"
            className="w-[200px] sm:w-[240px] md:w-[280px] object-contain"
          />
        </div>

        {/* 🔗 Right Nav (desktop only) */}
        <div className="hidden md:flex items-center space-x-6 font-normal text-2xl text-white  mr-10 gap-[38px] font-navbar">
          <a href="#" className="hover:text-secondary">
            About Us
          </a>
          <a href="#" className="hover:text-secondary">
            Blogs
          </a>
          <button className="bg-[#505a6e] text-white px-6 py-2 rounded-full hover:bg-secondary shadow-lg transition font-navbar">
            Join Us
          </button>
        </div>

        {/* 📱 Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/80 z-20 flex items-center justify-center md:hidden">
            <div className="bg-white rounded-xl px-8 py-10 space-y-6 text-[#1a1a38] font-semibold text-center w-4/5 max-w-xs">
              {["Services", "Locations", "At-Home", "About Us", "Blogs"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-lg hover:text-secondary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <button
                className=" bg-white text-white w-full py-2 rounded-full hover:bg-[#505a6e] transition"
                onClick={() => setMenuOpen(false)}
              >
                Join Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 🔻 Bottom Border */}
      <hr className="absolute bottom-0 left-0 w-full border-t border-[#18243A] z-20" />
    </div>
  );
};

export default Header;
