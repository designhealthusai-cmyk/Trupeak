import React from "react";

const InfoBanner = ({
  title,
  subtitle,
  points,
  image,
  bgColor = "#0D1B33",
  textColor = "#FFFFFF",
  highlightColor = "#E6C98C",
  reverse = false,
}) => {
  return (
    <section style={{ backgroundColor: bgColor }} className="w-full">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 items-stretch`}
        style={{
          direction: reverse ? "rtl" : "ltr", // flip layout
        }}
      >
        {/* Text Block */}
        <div
          className="flex flex-col justify-center gap-6 px-8 py-16"
          style={{
            color: textColor,
            direction: "ltr",
            backgroundColor: bgColor,
          }}
        >
          <h2
            className="text-3xl font-bold leading-snug"
            style={{ color: highlightColor }}
          >
            {title}
          </h2>
          {subtitle && <h3 className="text-xl font-semibold">{subtitle}</h3>}
          <ul className="list-disc pl-5 space-y-2 text-lg">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Image Block */}
        <div className="w-full h-full">
          <img
            src={image}
            alt="Info"
            className="w-full h-full object-cover"
            style={{
              minHeight: "100%",
              maxHeight: "600px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;
