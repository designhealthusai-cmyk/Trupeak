// "use client";
// import React from "react";

// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// const MissionSection = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.3,
//     triggerOnce: false, // re-trigger when in view
//   });

//   return (
//     <section
//       ref={ref}
//       className="bg-one min-h-[80vh] rounded-[3rem] flex flex-col md:flex-row items-center justify-between relative overflow-visible py-12 px-8 md:px-24 font-body max-w-[1800px] mx-auto"
//     >
//       {/* Left Content */}
//       <div className="flex-1 max-w-[50%] z-20 space-y-10">
//         <h2 className="text-5xl font-semibold max-w-2xl text-left">
//           Welcome to Trupeak
//         </h2>

//         <p className="font-body text-primary text-base sm:text-lg md:text-xl font-semibold max-w-2xl text-left pb-16">
//           Our mission is to empower every individual to reach their true
//           potential—physically, mentally, and emotionally. We’re committed to
//           transforming lives by delivering{" "}
//           <span className="text-[#2c886a] font-semibold">
//             science-backed, personalized health solutions that go beyond
//             symptoms
//           </span>{" "}
//           to ignite lasting change. Through compassionate care, innovation, and
//           community, we help you take charge of your health journey and rise to
//           your peak—every single day.
//         </p>

//         {/* Stats Card */}
//         <div
//           className="absolute bottom-[5rem] left-0 md:left-20 w-[95%] max-w-[1100px] rounded-[2rem] px-8 py-8 z-30 font-body"
//           style={{
//             backdropFilter: "blur(30px)",
//             boxShadow: "0px 4px 4px 0px #00000040",
//             backgroundColor: "#ffffffb5",
//           }}
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8">
//             {[
//               ["Accuracy Rate", "in diagnostics", 38],
//               ["Years of", "Experience", 15],
//               ["Satisfied", "Customers", 13, "K+"],
//               ["Countries in", "Services", 38],
//             ].map(([line1, line2, end, suffix], idx) => (
//               <div key={idx} className="flex flex-col items-center">
//                 <div className="text-4xl md:text-5xl font-bold font-body text-gray-700 mb-2">
//                   {inView && <CountUp end={end} duration={2.5} separator="," />}
//                   {suffix || "+"}
//                 </div>
//                 <div className="text-lg md:text-xl text-[#1a2233] font-medium text-center leading-tight">
//                   {line1} <br /> {line2}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right: Floating Doctor Image */}
//       <div className="flex-1 relative hidden md:flex justify-end items-center">
//         <img
//           src="images/Doctor.jpg"
//           alt="Doctor"
//           className="h-[43rem] w-[37rem] object-cover rounded-[3rem] z-10 animate-float"
//         />
//       </div>
//     </section>
//   );
// };

// export default MissionSection;
"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const MissionSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false, // re-trigger when in view
  });

  return (
    <section
      ref={ref}
      className="bg-one rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row items-center justify-between relative overflow-visible py-12 px-4 sm:px-8 md:px-24 font-body max-w-[1800px] mx-auto"
    >
      {/* Left Content */}
      <div className="flex-1 w-full md:max-w-[50%] z-20 space-y-6 md:space-y-10 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold max-w-2xl mx-auto md:mx-0">
          Welcome to Trupeak
        </h2>

        <p className="font-body text-primary text-sm sm:text-base md:text-xl font-semibold max-w-2xl mx-auto md:mx-0 pb-10 md:pb-16">
          Our mission is to empower every individual to reach their true
          potential—physically, mentally, and emotionally. We’re committed to
          transforming lives by delivering{" "}
          <span className="text-[#2c886a] font-semibold">
            science-backed, personalized health solutions that go beyond
            symptoms
          </span>{" "}
          to ignite lasting change. Through compassionate care, innovation, and
          community, we help you take charge of your health journey and rise to
          your peak—every single day.
        </p>

        {/* Stats Card */}
        <div
          className="relative md:absolute md:bottom-[5rem] left-0 md:left-20 w-full sm:w-[95%] md:max-w-[1100px] rounded-[1.5rem] md:rounded-[2rem] px-6 sm:px-8 py-8 z-30 font-body"
          style={{
            backdropFilter: "blur(30px)",
            boxShadow: "0px 4px 4px 0px #00000040",
            backgroundColor: "#ffffffb5",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-6 sm:gap-x-8">
            {[
              ["Accuracy Rate", "in diagnostics", 38],
              ["Years of", "Experience", 15],
              ["Satisfied", "Customers", 13, "K+"],
              ["Countries in", "Services", 38],
            ].map(([line1, line2, end, suffix], idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-700 mb-2">
                  {inView && <CountUp end={end} duration={2.5} separator="," />}
                  {suffix || "+"}
                </div>
                <div className="text-sm sm:text-base md:text-xl text-[#1a2233] font-medium text-center leading-tight">
                  {line1} <br /> {line2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Floating Doctor Image */}
      <div className="flex-1 relative hidden md:flex justify-end items-center">
        <img
          src="images/Doctor.jpg"
          alt="Doctor"
          className="h-[28rem] lg:h-[43rem] w-auto object-cover rounded-[2rem] md:rounded-[3rem] z-10 animate-float"
        />
      </div>
    </section>
  );
};

export default MissionSection;
