import React from "react";

const InfoSection = ({
  title,
  description,
  items = [],
  bgColor = "#E8D09A",
  titleColor = "#2BBFA7",
  cardBgColor = "#0D1B33",
  cardTitleColor = "#FFFFFF",
  cardTextColor = "#D1D5DB", // light gray
}) => {
  return (
    <div
      className="p-8 md:p-12 max-w-8xl mx-auto"
      style={{ backgroundColor: bgColor }}
    >
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {/* First Card - Section Title & Description */}
        <div
          className="rounded-xl p-6 relative shadow-lg flex flex-col justify-center md:col-span-2"
          style={{ backgroundColor: cardBgColor }}
        >
          {/* Pencil Shape */}
         

          {/* Content */}
          <div className="ml-6"> {/* ✅ Adds space after polygon */}
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: titleColor }}
            >
              {title}
            </h2>
            <p className="text-base" style={{ color: cardTextColor }}>
              {description}
            </p>
          </div>
        </div>

        {/* Other Feature Cards */}
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-xl p-5 relative shadow-lg"
            style={{ backgroundColor: cardBgColor }}
          >
            {/* Pencil Shape */}
            <div
              className="absolute top-4 left-[-16px] w-12 h-8"
              style={{
                backgroundColor: bgColor,
                clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",
              }}
            ></div>

            {/* Content */}
            <div className="ml-6"> {/* ✅ Adds space after polygon */}
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: titleColor }}
              >
                {item.title}
              </h3>
              <p
                className="text-md leading-relaxed"
                style={{ color: cardTextColor }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
