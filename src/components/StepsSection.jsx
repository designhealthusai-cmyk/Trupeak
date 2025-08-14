import React from "react";

export default function StepsSection({ title, steps }) {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-two mb-8">
          {title}
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-two text-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-one mb-6">
                {step.title}
              </h3>
              <p className="text-md leading-relaxed text-gray-200">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
