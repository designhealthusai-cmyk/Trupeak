import React from "react";

const AboutUsSection = () => {
  return (
    <section className="relative w-full page-content">
      {/* Background Image Container */}
      <div className="relative">
        <img
          src="/images/doctors/image3.jpg"
          alt="About Us"
          className="w-full h-[400px] sm:h-[600px] object-cover object-top"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-4">
          <h2 className="text-one text-4xl sm:text-6xl font-bold">Contact Us</h2>
          <p className="text-white text-lg max-w-xl">
            We’re here to support your journey to optimal health.
          </p>
        </div>
      </div>

      {/* Bottom Color Strip */}
      <div className="bg-three h-6 sm:h-8 w-full"></div>
    </section>
  );
};

export default AboutUsSection;
