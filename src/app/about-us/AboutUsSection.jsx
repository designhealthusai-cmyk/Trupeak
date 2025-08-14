import React from "react";

const AboutUsSection = () => {
  return (
    <section className="relative w-full page-content">
      {/* Background Image Container */}
      <div className="relative">
        <img
          src="/images/about-us.jpg"
          alt="About Us"
          className="w-full h-[400px] sm:h-[800px] object-cover object-top"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl sm:text-6xl font-bold">About Us</h2>
        </div>
      </div>

      {/* Bottom Color Strip */}
      <div className="bg-[#D9B26A] h-6 sm:h-8 w-full"></div>
    </section>
  );
};

export default AboutUsSection;
