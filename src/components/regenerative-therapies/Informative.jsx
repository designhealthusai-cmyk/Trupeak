import React from "react";

const Informative = ({ title, imageSrc, leftText, rightText }) => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {title}
        </h2>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-lg mb-6">
          <img
            src={imageSrc}
            alt="Informative section"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-base sm:text-lg">
          <p>{leftText}</p>
          <p>{rightText}</p>
        </div>

      </div>
    </section>
  );
};

export default Informative;
