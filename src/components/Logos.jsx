// src/components/SeenInSection.jsx

const logoList = [
  { src: "/logosvg/Abc.svg", alt: "ABC" },
  { src: "/logosvg/Cnn.svg", alt: "CNN" },
  { src: "/logosvg/Cosmo.svg", alt: "Cosmopolitan" },
  { src: "/logosvg/Forbes.svg", alt: "Forbes" },
];

const SeenInSection = () => {
  // Repeat logos for marquee effect
  const logos = [...logoList, ...logoList, ...logoList];

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="relative">
        <div className="logo-marquee flex items-center gap-12 animate-marquee">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto filter grayscale brightness-75 opacity-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeenInSection;
