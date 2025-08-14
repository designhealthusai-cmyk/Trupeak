import React from "react";
import Image from "next/image";

export default function InfoSection({ title, description, buttonText, buttonLink, images = [] }) {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        
        {/* Images */}
        <div className="flex flex-col sm:flex-row gap-6 md:w-1/2">
          {images.length > 0 ? (
            images.map((src, index) => (
              <div key={index} className="relative flex-1 overflow-hidden rounded-tr-3xl rounded-bl-3xl">
            {/* Image */}
            <Image
              src={src}
              alt={`Info image ${index + 1}`}
              width={300}
              height={400}
              className="object-cover object-center h-[500px] w-full rounded-tr-2xl rounded-bl-2xl "
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-tr-2xl rounded-bl-2xl"></div>
          </div>


            ))
          ) : (
            <p className="text-gray-500">No images available</p>
          )}
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-[#0f1a34] mb-6">{title}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
          {buttonText && (
            <a
              href={buttonLink || "#"}
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
            >
              {buttonText}
              <span className="ml-2">▶</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
