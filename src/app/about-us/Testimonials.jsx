// components/Testimonials.jsx
"use client";
import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "My son was struggling to concentrate in school. The counseling team offered support that made a real difference.",
    name: "Kavita S",
    role: "Parent",
    // image: "/images/img1.jpg",
  },
  {
    text: "After my cancer treatment, I felt drained. Thanks to Trupeak, I regained my energy and could see steady progress month after month.",
    name: "Maya R",
    role: "Breast cancer survivor",
    // image: "/images/img1.jpg",
  },
  {
    text: "They reviewed my test results thoroughly, took the time to listen, and guided me toward what was really causing my exhaustion.",
    name: "Rahul K",
    role: "Executive",
    // image: "/images/img1.jpg",
  },
  {
    text: "Their guidance transformed my daily routine and boosted my confidence.",
    name: "Anita M",
    role: "Entrepreneur",
    // image: "/images/img1.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Auto-play every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getPositionStyles = (index) => {
    const total = testimonials.length;
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    if (index === activeIndex) {
      return "z-20 scale-105 translate-x-0 opacity-100";
    }
    if (index === prevIndex) {
      return "z-10 scale-90 -translate-x-80 opacity-70"; // more spacing to the left
    }
    if (index === nextIndex) {
      return "z-10 scale-90 translate-x-80 opacity-70"; // more spacing to the right
    }
    return "opacity-0 pointer-events-none";
  };

  return (
    <section className="bg-[#0B2441] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-3xl font-bold">What Patients Say</h2>
        <div className="w-16 h-1 bg-three mb-12"></div>

        {/* Carousel container */}
        <div className="relative h-[380px] flex justify-center items-center">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`absolute bg-white rounded-2xl shadow-md p-6 flex flex-col text-center w-80 h-[350px] transition-all duration-500 ease-in-out ${getPositionStyles(index)}`}
            >
              <FaQuoteLeft className="text-yellow-500 text-2xl mb-4 self-start" />
              <p className="text-gray-700 mb-10 flex-grow">“{t.text}”</p>
              <div className="flex items-center gap-3 mt-auto justify-center">
                {/* <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                /> */}
                <div className="text-left">
                  <p className="font-bold text-black">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={prevSlide}
            className="text-white text-lg hover:text-yellow-500"
          >
            ❮
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  idx === activeIndex ? "bg-yellow-500" : "bg-gray-500"
                }`}
              ></span>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="text-white text-lg hover:text-yellow-500"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
