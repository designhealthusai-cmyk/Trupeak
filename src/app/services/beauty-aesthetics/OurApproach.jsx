import React from "react";
import { FaPlay } from "react-icons/fa";

export default function OurApproach({ title, description, points, image }) {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-gray-700 mb-6 whitespace-pre-line">
              {description}
            </p>
          )}

          {points?.length > 0 && (
            <div className="space-y-4">
              {points.map((point, index) => (
<div
  key={index}
  className="flex items-center gap-3 bg-two text-white rounded-lg px-4 py-3 shadow-md"
>
  <div className="bg-white p-2  flex items-center justify-center shadow-lg">
    <FaPlay className="text-two text-sm" />
  </div>
  <span className="text-base md:text-lg">{point}</span>
</div>


              ))}
            </div>
          )}
        </div>

        {/* Right Image */}
        {image && (
          <div className="md:w-1/2">
            <img
              src={image}
              alt={title || "Our Approach"}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
