// import React, { useState } from "react";
// import luca1 from "../assets/testomonial1.png";
// import luca2 from "../assets/testomonial12.png";
// import james from "../assets/testomonial13.png";

// const testimonials = [
//   {
//     name: "Luca Moretti",
//     image: luca1,
//     quote:
//       "TruPeak helped me feel balanced, energized, and truly understood. It’s the first time PCOS care felt personal and effective.",
//   },
//   {
//     name: "Luca Moretti",
//     image: luca2,
//     quote: "TruPeak has transformed my routine. The guidance was exceptional.",
//   },
//   {
//     name: "James Walker",
//     image: james,
//     quote:
//       "I never knew personalized health could feel so empowering. Thanks to TruPeak!",
//   },
// ];

// const TestimonialSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="bg-white px-6 md:px-16 py-16">
//       <div className="flex flex-col md:flex-row items-start gap-10 relative">
//         {/* Left Side */}
//         <div className="md:w-1/2 relative">
//           <div className="text-[80px] text-[#E3D2A2] leading-[0.6] font-serif">
//             “
//           </div>
//           <h2 className="text-3xl md:text-5xl font-semibold text-[#1D253C] leading-tight mb-6">
//             Our Expertise.
//             <br />
//             Your Edge.
//           </h2>
//           <div className="bg-[#B28C5A] text-white p-6 rounded-xl shadow-md text-base mt-4">
//             “{testimonials[activeIndex].quote}”
//           </div>
//         </div>

//         {/* Right Side: Images */}
//         <div className="flex gap-4 md:gap-6">
//           {testimonials.map((person, idx) => (
//             <div
//               key={idx}
//               onMouseEnter={() => setActiveIndex(idx)}
//               className="relative rounded-3xl cursor-pointer"
//               style={{ minWidth: 0 }}
//             >
//               <div className="p-1  rounded-3xl transition-all duration-300">
//                 <img
//                   src={person.image}
//                   alt={person.name}
//                   className={`transition-all duration-300 object-cover rounded-3xl
//     ${
//       activeIndex === idx
//         ? "w-64 md:w-80 h-[350px] md:h-[400px] z-10"
//         : "w-48 md:w-64 h-[300px] md:h-[350px] hover:w-56 md:hover:w-72 hover:h-[350px] md:hover:h-[400px]"
//     }
//   `}
//                 />
//               </div>
//               <div className="absolute bottom-4 left-4 text-white font-medium text-lg md:text-xl">
//                 {person.name}
//               </div>
//               {activeIndex === idx && idx > 0 && (
//                 <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-[100px] text-[#E3D2A2] leading-none"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default TestimonialSection;

"use client";
import React, { useState } from "react";
// import luca1 from "../assets/testomonial1.png";
// import luca2 from "../assets/testomonial12.png";
// import james from "../assets/testomonial13.png";

const testimonials = [
  {
    name: "Luca Moretti",
    // image: luca1,
    quote:
      "TruPeak helped me feel balanced, energized, and truly understood. It’s the first time PCOS care felt personal and effective.",
  },
  {
    name: "Derrick Rose",
    // image: luca2,
    quote: "TruPeak has transformed my routine. The guidance was exceptional.",
  },
  {
    name: "James Walker",
    // image: james,
    quote:
      "I never knew personalized health could feel so empowering. Thanks to TruPeak!",
  },
];

const quoteColor = "#E3D2A2";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white px-4 md:px-12 py-16 overflow-hidden">
      <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-screen-2xl">
        {/* Top-left Quote */}
        <div className="absolute left-20 top-24 z-0 text-[160px] md:text-[200px] text-[#E3D2A2] leading-none font-serif select-none">
          “
        </div>

        {/* Bottom-right Quote */}
        <div className="absolute right-3 bottom-0 z-0 text-[140px] md:text-[200px] text-[#E3D2A2] leading-none font-serif select-none">
          ”
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12">
          {/* Left Column */}
          <div className="flex-1 flex flex-col items-start justify-center md:justify-start mt-8 md:mt-24">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1D253C] leading-tight mb-6 font-body">
              Our Expertise.
              <br />
              Your Edge.
            </h2>
            {/* Quote Box */}
            <div className="bg-[#B28C5A] text-[#1D253C] p-6 rounded-2xl shadow-md text-base md:text-lg font-medium font-body relative z-20 w-[90%] md:w-[85%] lg:w-[75%]">
              “{testimonials[activeIndex].quote}”
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-row gap-4 md:gap-12 items-end md:items-end -mt-4 md:-mt-0">
            {testimonials.map((person, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`relative rounded-[36px] cursor-pointer transition-all duration-500 flex flex-col items-center ${
                  activeIndex === idx ? "scale-[1.13] z-20" : "scale-100 z-10"
                }`}
                style={{
                  background: "#F7F6F2",
                  minWidth: "180px",
                  maxWidth: "280px",
                  boxShadow:
                    activeIndex === idx
                      ? "0 12px 36px rgba(178,140,90,0.25)"
                      : "0 4px 12px rgba(178,140,90,0.12)",
                }}
              >
                {/* <img
                  src={person.image}
                  alt={person.name}
                  className="w-48 md:w-60 h-[300px] md:h-[400px] object-cover rounded-[36px] transition-all duration-500"
                /> */}

                {/* Name inside image */}
                <div
                  className={`absolute bottom-4 left-0 w-full text-center font-body transition-all duration-300 ${
                    activeIndex === idx
                      ? "text-[21px] font-bold text-[#b28c5a]"
                      : "text-[18px] font-medium text-[#b28c5a]"
                  }`}
                >
                  {person.name}
                </div>

                {/* Quote on mobile only */}
                {activeIndex === idx && (
                  <div className="block md:hidden absolute left-1/2 -bottom-20 transform -translate-x-1/2 w-[90%]">
                    <div className="bg-[#B28C5A] text-[#1D253C] p-4 rounded-xl shadow-md text-sm font-medium">
                      “{person.quote}”
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
