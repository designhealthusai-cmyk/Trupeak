import React from 'react'

const CtaSection = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  return (
    <section
      className="relative w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "400px",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 md:px-12 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-6">{description}</p>
        <a
          href={buttonLink}
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow hover:bg-green-700 transition"
        >
          {buttonText}
          <span className="ml-3 text-2xl">▶</span>
        </a>
      </div>
    </section>
  );
};

export default CtaSection