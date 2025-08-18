import React from "react";

const Hero = ({ 
  title, 
  subtitle, 
  mainImage, 
  circleImage 
}) => {
  return (
<section className="relative w-full bg-two overflow-hidden">
  <div className="flex flex-col md:flex-row items-stretch w-full">
    
    {/* Left Section */}
    <div className="bg-two text-white flex flex-col justify-center items-center md:items-start text-center md:text-right px-6 sm:px-12 md:px-48 py-12 sm:py-12 md:w-1/2 mt-16 sm:mt-16 md:mt-0">
  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
    {title}
  </h1>
  <p className="mt-4 text-sm sm:text-base md:text-xl">
    {subtitle}
  </p>
</div>



    {/* Right Section */}
    <div className="relative md:w-1/2 h-[300px] md:h-auto">
      <img
        src={mainImage}
        alt="Main"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Circle Overlay Image */}
  {circleImage && (
  <div
    className="hidden md:block absolute z-20  rounded-full  p-3"
    style={{
      width: "362px",
      height: "358px",
      top: "228px",
      left: "565px",
      opacity: 1,
      transform: "rotate(0deg)",
    }}
  >
    <img
      src={circleImage}
      alt="Circle"
      className="w-full h-full rounded-full object-cover"
    />
  </div>
)}

</section>
  );
};

export default Hero;
