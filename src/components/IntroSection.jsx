// import React from "react";

// const IntroSection = () => {
//   return (
//     <section className="w-full bg-two py-12 text-white md:py-20 px-4 shadow-xl border-b-4 border-[#7ec3b0] relative">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 relative z-10">
//         {/* Left: Headline */}
//         <div className="md:w-full text-center  mx-5">
//           <h2 className="text-secondary font-body font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-snug">
//             Leverage precision diagnostics to transform healthcare outcomes for patients and enable them to reach their “Tru” peak state of being from a physical, mental, and metabolic purview
           
//           </h2>
//         </div>

//         {/* Right: Paragraph */}
        
//       </div>

//       {/* 🔻 Down Arrow */}
//       <div className="absolute left-28 -translate-x-1/2 bottom-[-3.5rem] sm:bottom-[-4rem]">
//         <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#2C886A] rounded-full flex items-center justify-center shadow-2xl">
//           <svg
//             width="64"
//             height="64"
//             fill="none"
//             viewBox="0 0 24 24"
//             aria-hidden="true"
//             focusable="false"
//           >
//             <path
//               d="M12 5v14m0 0l-7-7m7 7l7-7"
//               stroke="#fff"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntroSection;
import React from "react";

const IntroSection = () => {
  return (
    <section className="w-full bg-two py-10 text-white md:py-20 px-4 shadow-xl border-b-4 border-[#7ec3b0] relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Headline */}
        <h2 className="text-secondary font-body font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed px-2">
          Leverage precision diagnostics to transform healthcare outcomes for
          patients and enable them to reach their “Tru” peak state of being from
          a physical, mental, and metabolic purview
        </h2>
      </div>

      {/* 🔻 Down Arrow */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2.5rem] sm:bottom-[-3rem]">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#2C886A] rounded-full flex items-center justify-center shadow-xl">
          <svg
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 5v14m0 0l-7-7m7 7l7-7"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
