import React from "react";
import DownArrow from "../utils/svg/DownArrow";

const services = [
  "Regenerative Therapies ",
  "Weight and Lean Body Muscle Management",
  " Immunity & Longevity",

];



const RunningText = () => (
  <section className="w-full bg-white py-8 overflow-hidden">
    <div className="relative">
      <div className="logo-marquee flex items-center gap-10 animate-marquee whitespace-nowrap text-xl font-semibold text-two">
        {[...services, ...services].map((service, idx) => (
          <div
            key={idx}
            className="flex text-40 font-body text-two font-semibold items-center gap-2"
          >
            <span>{service}</span>
            <DownArrow className="w-2 h-2 text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RunningText;
