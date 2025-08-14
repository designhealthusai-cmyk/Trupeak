"use client";
import React, { useEffect, useRef, useState } from "react";
// import gluco from "../assets/gluco.png";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    desc: "High-precision devices that measure fat, muscle, water levels, and metabolism using bioelectrical impedance and DEXA-level accuracy.",
  },
  {
    desc: "High-precision devices that measure fat, muscle, water levels, and metabolism using bioelectrical impedance and DEXA-level accuracy.",
  },
  {
    desc: "High-precision devices that measure fat, muscle, water levels, and metabolism using bioelectrical impedance and DEXA-level accuracy.",
  },
];

const ScienceBehindServices = () => {
  const [active, setActive] = useState(0);
  const imgRef = useRef(null);
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView && imgRef.current) {
      const tl = gsap.timeline();
      tl.to(imgRef.current, {
        x: 60,
        y: 30,
        duration: 0.4,
        ease: "power2.out",
      }).to(imgRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "bounce.out",
      });
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#e1c78f] rounded-[56px] max-w-6xl mx-auto my-16 pl-10 py-12 shadow-lg"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <h2 className="text-primary font-body font-semibold text-48 md:text-5xl mb-4">
            The Science Behind <br /> Our Services
          </h2>
          <button className="float-right md:float-none bg-white border-4 border-[#725E44] text-[#6b5b36] font-semibold px-4 mt-10 ml-20 rounded-full text-xl mb-8 md:mb-0 hover:bg-[#f5e7c6] transition">
            Know More
          </button>
          <div className="pt-[56px] ml-28">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 30 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevrons-left-right-icon"
            >
              <path d="m9 7-5 5 5 5" />
              <path d="m15 7 5 5-5 5" />
            </svg>
          </div>
        </div>

        <div className="flex-1 mt-8 md:mt-0 md:ml-8 relative">
          <p className="text-primary text-lg md:text-xl font-body text-right z-10 relative w-[55%] pr-8 mt-10">
            TruPeak Health integrates cutting-edge medical and wellness
            technologies that are designed to{" "}
            <span className="text-[#2c886a] font-semibold">
              deliver accurate diagnostics, optimized therapies, and measurable
              outcomes.
            </span>
          </p>
          <img
            ref={imgRef}
            // src={gluco}
            alt="img"
            className="absolute -right-[200px] top-1/2 -translate-y-1/2 w-74 h-74 object-contain z-20 pointer-events-none"
          />
        </div>
      </div>

      {/* Timeline / Stepper */}
      <div className="mt-16 mr-20 gap-6">
        <div className="flex items-center relative">
          <div className="flex-1 flex items-center">
            <div className="w-full h-1 bg-[#bda86a] absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0" />
            {steps.map((_, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center flex-1"
              >
                <div
                  className={`w-10 h-10 rounded-full border-4 ${
                    idx === active
                      ? "bg-[#2C886A] border-[#2C886A]"
                      : "bg-[#bda86a] border-[#bda86a] opacity-70"
                  } flex items-center justify-center`}
                >
                  <span className="w-4 h-4 bg-[#2C886A] rounded-full block opacity-50"></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-8 gap-[10px]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex-1 text-center text-primary text-14 md:text-lg font-body transition-opacity duration-300 ${
                idx === active ? "opacity-100" : "opacity-50"
              }`}
            >
              {step.desc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceBehindServices;
