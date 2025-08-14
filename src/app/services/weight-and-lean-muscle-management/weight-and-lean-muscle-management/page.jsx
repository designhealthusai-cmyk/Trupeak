"use client";
import { FaPlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";

const images = [
  "/images/weight1.jpg",
  "/images/weight2.jpg",
  "/images/weight3.jpg", // large center
  "/images/weight4.jpg",
  "/images/weight5.jpg",
  "/images/weight6.jpg", // bottom right
];
const items = [
  "Detailed diet history and food recall",
  "Analysis of symptoms linked to food choices",
  "Review of sleep, stress, and physical activity patterns",
  "Identification of foods that support or sabotage your goals",
];

export default function Page() {
  return (
    <>
      <section className="">
        {/* Top Heading + Image Cards */}
        <div className="w-full mx-auto px-4 pt-16 text-center bg-[#141833]">
          <h2 className="text-[64px] font-bold text-[#F3E5B6] mb-12 leading-snug">
            Diet Management &<br />
            Nutrition Counselling
          </h2>

          {/* Image Cards */}
          <div className="flex flex-wrap justify-around items-end px-2 ">
            {images.slice(0, 5).map((src, index) => {
              const isCenter = index === 2;

              return (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden bg-white border-4 border-[#141833] shadow-xl transition-all duration-300 flex-shrink-0
                ${
                  isCenter
                    ? "w-64 h-80 md:w-80 md:h-[400px] z-20" // 🟥 Center card: much larger
                    : "w-44 h-60 md:w-60 md:h-[320px] z-10" // 🟦 Side cards: also larger
                }`}
                >
                  <Image
                    src={src}
                    alt={`Food ${index + 1}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        {/* Overlapping Second Section */}
        {/* <div className="absolute top-[300px] md:top-[340px] left-0 right-0 px-4 z-20"> */}
        <div className="z-20">
          <div className="w-full mx-auto bg-[#E0CC8F] shadow-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="md:w-1/2 text-[#141833]">
              <h3 className="text-3xl md:text-[48px] font-bold mb-4">
                Dummy Title
              </h3>
              <p className="mb-6 text-[24px] leading-[40px] font-normal">
                Food is more than fuel. At Trupeak<sup>TM</sup>, we view
                nutrition as a clinical intervention capable of shifting
                inflammatory pathways, rewiring metabolic patterns, and
                restoring balance to your body’s core systems.
              </p>
              <button className="flex items-center gap-3 bg-[#2C886A] text-white px-16 py-3 rounded-full hover:bg-[#26755C] transition text-[24px] shadow-md">
                Know More <FaPlay />
              </button>
            </div>

            {/* Image */}
            <div className="md:w-1/2 w-full flex justify-center md:justify-end">
              <div className="w-[420px] md:w-[600px] rounded-2xl overflow-hidden">
                <Image
                  src={images[5]}
                  alt="Main Food"
                  width={1000}
                  height={700}
                  className="object-cover w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Difference Section */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
          {/* Left Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-[48px] md:text-[48px] font-bold text-[#000000] mb-4 leading-snug">
              What Makes Our <br />{" "}
              <span className="text-[#2C886A]">Nutrition Approach</span>{" "}
              Different?
            </h2>
            <p className="text-lg md:text-xl text-[#000000]">
              At Trupeak<sup>TM</sup>, your nutrition plan is not based on
              trends or guesswork. It is built on:
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-[300px] md:w-[584px] h-[252px] rounded-2xl overflow-hidden">
              <Image
                src="/images/weight7.jpg" // Replace with your actual image path
                alt="Nutrition Difference"
                width={584}
                height={252}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Four Cards */}
        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 justify-items-center">
          {[
            {
              title: "Metabolic testing",
              desc: "Using Q-NRG to assess actual energy expenditure",
            },
            {
              title: "Body composition analysis",
              desc: "Via InBody 970 to evaluate fat-to-muscle ratio",
            },
            {
              title: "Micronutrient status and blood work",
              desc: "To identify deficiencies or imbalances",
            },
            {
              title: "Hormone and gut health data",
              desc: "To tailor anti-inflammatory and functional food",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#18243A] aspect-square w-full max-w-[280px] rounded-xl shadow-md p-6 flex flex-col justify-start"
            >
              <h3 className="text-[#E1C78F] text-[24px] font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-white text-[20px] font-semibold mt-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <p className="max-w-7xl mx-auto mt-10 text-[#000000] text-lg md:text-xl text-center">
          From these insights, we design a plan that supports your specific
          goals, whether it’s improving energy, maintaining lean mass, managing
          appetite, reducing bloating, or enhancing mental clarity.
        </p>
      </section>

      <section className="bg-[#0F1A2C] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[#E1C78F] text-3xl md:text-4xl font-bold mb-4">
            What to Expect
          </h2>
          <p className="text-white text-base md:text-lg mb-12">
            At TrupeakTM, your nutrition plan is not based on trends or
            guesswork. It is built on:
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((text, index) => (
              <div
                key={index}
                className="relative bg-white rounded-[20px] shadow-lg px-6 py-8 pt-12 text-left"
              >
                {/* Icon circle */}
                <div className="absolute -top-6 left-6 w-12 h-12 bg-[#0F1A2C] border-[3px] border-[#E1C78F] rounded-full flex items-center justify-center shadow-md">
                  <FaPlus className="text-[#6EE7B7] text-lg" />
                </div>

                {/* Text */}
                <p className="text-[#0F1A2C] text-base font-medium leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
