import React from "react";

export default function Content({ title, description }) {
  return (
    <section className="w-full bg-[#0b1c3a] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-xl md:text-2xl font-semibold text-[#d4af37] mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
