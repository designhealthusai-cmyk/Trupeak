import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function WhyTrupeakBeauty({ title, points, image }) {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          
          <div className="space-y-4">
            {points?.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-[#19B36A] p-2 rounded-full shadow-md flex items-center justify-center">
                  <FaArrowRight className="text-white text-sm" />
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        {image && (
          <div className="md:w-1/2">
            <img
              src={image}
              alt={title}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
