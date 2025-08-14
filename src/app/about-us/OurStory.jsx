import React from "react";

function OurStory() {
  return (
    <section className="bg-one rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-stretch gap-8 max-w-6xl mx-auto my-6">
      {/* Left Side - Text */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-two mb-2">Our Story</h2>
        <div className="w-16 h-1 bg-three mb-6"></div>

        <p className="text-two mb-4">
          <span className="text-three font-semibold">Trupeak</span>  was founded on the belief that health should not be managed passively. It should be tracked, measured, and continuously improved through precise, clinically-guided care. The model was developed in collaboration with experts in functional medicine, metabolic science, and rehabilitation, bringing together disciplines that focus on root-cause resolution rather than symptom suppression.
        </p>

        <p className="text-two mb-4">
          Our integrated approach combines medical diagnostics, personalized protocols, and long-term health planning to help individuals reach their highest level of physical and mental performance. This philosophy guides every aspect of care, from preventive wellness to chronic condition recovery.
        </p>

        <p className="text-[#1A1A1A]">
          At <span className="text-[#009688] font-semibold">Trupeak</span>,, each patient is approached as a complete system guided by their underlying biology. This commitment to clarity, depth, and accountability is what defines our care model and drives outcomes that are not only measurable but also sustainable.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2">
        <img
          src="/images/about-us3.jpg"
          alt="DNA concept"
          className="rounded-2xl border-4 border-white w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default OurStory;
