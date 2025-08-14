// components/ConversationSection.jsx
import React from "react";

export default function ConversationSection({ heading, description, backgroundImage, cards }) {
  return (
    <section
      className="relative bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Heading + description */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 mb-10">
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <p className="text-lg">{description}</p>
      </div>

      {/* Full-width cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-0">
        {cards?.map((card, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg text-white text-lg"
          >
            {card.text}
          </div>
        ))}
      </div>
    </section>
  );
}