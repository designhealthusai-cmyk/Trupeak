import React from "react";
import DownArrow from "../utils/svg/DownArrow";

const services = [
  "Advanced Diagnostics",
  "Cardiology",
  "Mental Wellness",
  "Preventive Care",
  "24/7 Support",
  "Telemedicine",
];

const RunningText = () => (
  <section className="w-full bg-white py-8 overflow-hidden">
    <div className="relative">
      <div className="logo-marquee flex items-center gap-10 animate-marquee whitespace-nowrap text-lg font-medium text-gray-700">
        {[...services, ...services].map((service, idx) => (
          <div
            key={idx}
            className="flex text-40 font-body text-gray-500 font-semibold items-center gap-2"
          >
            <span>{service}</span>
            <DownArrow className="w-4 h-4 text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RunningText;
