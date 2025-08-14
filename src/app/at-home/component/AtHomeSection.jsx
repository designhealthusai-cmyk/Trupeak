// import React from 'react';

// const AtHomeSection = ({
//   title = 'At-Home',
//   description = 'TruPeak extends clinical-grade care beyond the clinic. Our at-home offerings are built for comfort, convenience, and continuity delivered with the same standard of medical precision you receive on-site.',
//   bgColor = 'bg-two',
//   titleColor = 'text-one',
//   textColor = 'text-white',
//   barColor = 'bg-[#34A889]',
//   moleculeImage = 'images/at-home/1.jpg',
//   personImage = '/images/at-home/2.jpg',
// }) => {
//   return (
//     <section className="relative w-full h-[600px]">
//       {/* Left Background Text Section */}
//       <div className={`absolute left-0 top-0 h-full w-1/2 px-10 py-12 flex flex-col justify-center z-10 ${bgColor} ${textColor}`}>
//         <h2 className={`text-4xl font-bold mb-4 ${titleColor}`}>{title}</h2>
//         <p className="text-lg max-w-md">{description}</p>
//       </div>

//       {/* Right Background Image */}
//       <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
//         <img src={personImage} alt="woman" className="h-full w-full object-cover" />
//       </div>

//       {/* Centered Molecule Image */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//         <img
//           src={moleculeImage}
//           alt="molecule"
//           className="w-48 h-64 md:w-60 md:h-80 rounded-2xl shadow-lg object-cover"
//         />
//       </div>

//       {/* Bottom Bar */}
//       <div className={`absolute bottom-0 h-[6px] w-full ${barColor}`} />
//     </section>
//   );
// };

// export default AtHomeSection;
import React from 'react';

const AtHomeSection = ({
  title = 'At-Home',
  description = 'TruPeak extends clinical-grade care beyond the clinic. Our at-home offerings are built for comfort, convenience, and continuity delivered with the same standard of medical precision you receive on-site.',
  bgColor = 'bg-two',
  titleColor = 'text-one',
  textColor = 'text-white',
  barColor = 'bg-[#34A889]',
  moleculeImage = '/images/at-home/1.jpg',
  personImage = '/images/at-home/2.jpg',
}) => {
  return (
    <section className="relative w-full">
      <div className="flex flex-col md:flex-row h-auto md:h-[600px]">

        {/* Left Background Text Section */}
        <div
          className={`w-full md:w-1/2 px-6 sm:px-10 py-8 sm:py-12 flex flex-col justify-center ${bgColor} ${textColor}`}
        >
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}
          >
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-md">
            {description}
          </p>
        </div>

        {/* Right Background Image */}
        <div className="w-full md:w-1/2">
          <img
            src={personImage}
            alt="woman"
            className="h-64 sm:h-80 md:h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Centered Molecule Image */}
<div className="absolute left-1/2 transform -translate-x-1/2 z-20 top-[40%] md:top-1/2 md:-translate-y-1/2 hidden sm:block">
  <img
    src={moleculeImage}
    alt="molecule"
    className="w-32 h-44 sm:w-40 sm:h-56 md:w-60 md:h-80 rounded-2xl shadow-lg object-cover"
  />
</div>



      {/* Bottom Bar */}
      <div className={`h-[4px] sm:h-[6px] w-full ${barColor}`} />
    </section>
  );
};

export default AtHomeSection;
