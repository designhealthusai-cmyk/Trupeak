import React from "react";

const InfoCard = ({ title, description }) => {
  return (
    <div className="bg-two text-white rounded-xl p-6 shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-one mb-3">{title}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
      <button className="mt-6 bg-white text-[#0E2B4C] font-medium px-4 py-2 rounded-md shadow hover:bg-gray-200">
        Read More ▼
      </button>
    </div>
  );
};

const FeatureSection = ({ heading, cards, footerText }) => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {heading}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* Footer text */}
        {footerText && (
          <p className="mt-8 text-md text-two text-center max-w-7xl mx-auto">
            {footerText}
          </p>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;

