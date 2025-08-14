import React from 'react';

const CareersSection = () => {
  return (
    <section
      className="relative text-white px-6 bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/images/image2.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-two opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-between min-h-[600px]">
        {/* Text Content */}
        <div className="w-full md:w-1/2 py-12 md:py-16 md:pr-8">
          <h2 className="text-3xl font-bold mb-2">Careers at Trupeak</h2>
          <div className="w-16 h-1 bg-green-500 mb-6"></div>
          <p className="mb-4 text-base leading-relaxed">
            We’re always looking for people who want to change healthcare for the better. If you’re a clinician, scientist, technologist, sports scientist or wellness expert passionate about precision care, we want to hear from you.
          </p>
          <p className="mb-4 text-base leading-relaxed">
            Trupeak offers a dynamic, research-oriented environment where professionals grow alongside mentors and leaders in their fields. Our roles range from hands-on clinical positions to research, analytics, and patient experience roles.
          </p>
          <p className="text-base leading-relaxed">
           Explore open positions and join a team focused on meaningful care that leads to lasting results.
          </p>
        </div>

        {/* Foreground Image */}
<div className="w-full md:w-1/2 h-[60vh] md:h-auto md:px-0">
      <img
        src="/images/image2.png"
        alt="Smiling doctor"
        className="w-full h-full object-cover rounded-none"
      />
    </div>

      </div>
    </section>
  );
};

export default CareersSection;
