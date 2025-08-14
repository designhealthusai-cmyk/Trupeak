import React from "react";

const LocationsSection = () => {
  return (
    <section className="relative pt-24"> {/* Adjust pt-24 for navbar height */}
      {/* Top Section with Heading */}
      <div className="bg-two text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-one text-3xl sm:text-4xl md:text-5xl font-bold pt-16">
          Our Locations
        </h2>
      </div>

      {/* Image */}
      <div className="bg-two flex justify-center px-4 sm:px-6 lg:px-8 h-[50vh] pt-4">
          <img
            src="/images/locations.jpg"
            alt="Our Locations"
            className="w-full max-w-6xl h-full object-cover rounded-t-2xl "
          />
        </div>


      {/* Bottom Tan Strip */}
      <div className="bg-one h-12 sm:h-16 w-full"></div>
    </section>
  );
};

export default LocationsSection;
