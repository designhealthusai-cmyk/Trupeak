import React from "react";
import Image from "next/image";

export default function ProgramGoals({ title, description, image }) {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center relative">
        
        {/* Content Card on the Left */}
        <div className="w-full md:w-1/2 relative z-10 bg-two text-white p-8 md:p-12 rounded-3xl shadow-xl md:-mr-16">
          <h2 className="text-3xl md:text-4xl font-bold text-one mb-4">
            {title}
          </h2>
          <p className="text-lg leading-relaxed">{description}</p>
        </div>

        {/* Image on the Right */}
        <div className="w-full md:w-1/2 rounded-3xl overflow-hidden relative z-0">
          <Image
            src={image}
            alt={title}
            width={700}
            height={500}
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
