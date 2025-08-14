// "use client";
// import React from "react";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen text-white text-base overflow-hidden">
//       {/* 🔹 Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/videos/vedio1.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* 🔹 Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       {/* 🔹 Content */}
//       <div className="relative z-20 flex items-center justify-center h-full">
//         <h1 className="text-4xl md:text-6xl font-bold">Welcome to Trupeak Health</h1>
//       </div>

//       {/* 🔻 Bottom Border */}
//       <hr className="absolute bottom-0 left-0 w-full border-t border-[#18243A] z-20" />
//     </section>
//   );
// };

// export default Hero;
"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen text-white text-base overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/vedio1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 🔹 Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
          Welcome to <span className="text-one">Trupeak Health</span>
        </h1>
      </div>

      {/* 🔻 Bottom Border */}
      <hr className="absolute bottom-0 left-0 w-full border-t border-[#18243A] z-20" />
    </section>
  );
};

export default Hero;
