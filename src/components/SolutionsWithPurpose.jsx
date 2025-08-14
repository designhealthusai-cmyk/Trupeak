"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const cards = [
  {
    id: 1,
    title: "Injectable Therapies",
    image: "https://www.visualsstock.com/details_watermark.php?filename=39515",
    description:
      "At TruPeak Health, our Injectable Therapies are designed to deliver essential nutrients, vitamins, and wellness compounds directly into your bloodstream for maximum absorption and immediate results. These therapies bypass the digestive system, ensuring your body receives the full benefit of each treatment.",
    bullets: [
      "Energy & Vitality (e.g., B12 shots)",
      "Immunity Boosting",
      "Metabolism & Weight Support",
      "Skin, Hair & Nail Health",
      "Mood & Cognitive Clarity",
    ],
  },
  {
    id: 2,
    title: "Card 2",
    image: "https://www.visualsstock.com/details_watermark.php?filename=39515",
    description:
      "Card 2 focuses on holistic wellness, offering solutions that rejuvenate your body and mind for a balanced lifestyle.",
    bullets: [
      "Holistic Wellness",
      "Mind & Body Balance",
      "Stress Reduction",
      "Improved Sleep",
      "Enhanced Focus",
    ],
  },
  {
    id: 3,
    title: "Card 3",
    image: "https://www.visualsstock.com/details_watermark.php?filename=39515",
    description:
      "Card 3 provides advanced therapies for rapid recovery and sustained energy, perfect for active lifestyles.",
    bullets: [
      "Rapid Recovery",
      "Sustained Energy",
      "Muscle Repair",
      "Hydration Boost",
      "Performance Support",
    ],
  },
  {
    id: 4,
    title: "Card 4",
    image: "https://via.placeholder.com/300x200",
    description:
      "Card 4 delivers targeted solutions for skin, hair, and nail health, helping you look and feel your best.",
    bullets: [
      "Skin Health",
      "Hair Strengthening",
      "Nail Growth",
      "Anti-Aging",
      "Radiance Boost",
    ],
  },
  {
    id: 5,
    title: "Card 5",
    image: "https://via.placeholder.com/300x200",
    description:
      "Card 5 supports cognitive clarity and mood enhancement, empowering you to perform at your peak every day.",
    bullets: [
      "Cognitive Clarity",
      "Mood Enhancement",
      "Stress Management",
      "Mental Energy",
      "Focus & Productivity",
    ],
  },
];

const GSAPPopOutCards = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        onEnter: () => {
          gsap.to(window, {
            scrollTo: {
              y: containerRef.current,
              offsetY: 0,
            },
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              cards.length - 1,
              Math.floor(progress * cards.length)
            );
            setActiveIndex(index);
          },
        },
      });

      cards.forEach((_, i) => {
        const cardSelector = `.card-${i}`;
        tl.to(
          cardSelector,
          {
            scale: 1.05,
            y: -200,
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "+=0.1"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-[#0f172a] text-white overflow-hidden rounded-[3rem]"
      ref={containerRef}
    >
      {/* Background Text */}
      {/* <div
        className="absolute inset-0 text-[160px] font-extrabold whitespace-nowrap tracking-widest pointer-events-none z-0 flex justify-center items-center"
        style={{ opacity: 0.3, color: "#E1C78F" }}
      >
        TRUPEAK HEALTH&nbsp;&nbsp;TRUPEAK HEALTH&nbsp;&nbsp;TRUPEAK HEALTH
      </div> */}

      <div className="absolute inset-0 z-0 text-[160px] font-bold text-white/10 whitespace-nowrap overflow-hidden flex items-center justify-center">
        <div
          className="purpose-text-animate-marquee"
          style={{ opacity: 0.3, color: "#E1C78F" }}
        >
          TRUPEAK HEALTH &nbsp; TRUPEAK HEALTH &nbsp; TRUPEAK HEALTH &nbsp;
        </div>
      </div>

      {/* Section Title */}
      <h2 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-40 font-semibold font-body tracking-wide text-secondary z-10">
        Solutions With Purpose
      </h2>

      {/* SVG Diagonal Line */}
      {/* <svg
        className="absolute left-0 top-0 pointer-events-none z-20"
        width="1600"
        height="1000"
      >
        <polyline
          points="1350,220 980,260 720,360 420,620 420,660"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg> */}

      {/* Right Paragraph Description (Animated) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex + "-desc"}
          className="absolute top-[120px] right-[80px] max-w-sm text-[15px] font-medium font-body leading-relaxed text-white z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p>{cards[activeIndex].description}</p>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Left Bullet Points (Animated) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex + "-bullets"}
          className="absolute bottom-[80px] left-[80px] max-w-sm text-[15px] font-body text-white leading-relaxed z-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-2">
            {activeIndex === 0
              ? "We offer a curated range of injectables tailored to support:"
              : "Key Benefits:"}
          </p>
          <ul className="list-disc ml-5 space-y-1 font-body">
            {cards[activeIndex].bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

      {/* Card Stack */}
      {cards.map((card, i) => {
        const rotation = (i - 2) * 10;
        const offset = i * 10;
        const isActive = i === activeIndex;

        return (
          <div
            key={card.id}
            className={`card-${i} absolute w-[370px] h-[480px] bg-[#c69c6d] rounded-[30px] shadow-xl text-black transition-all duration-300 overflow-hidden flex flex-col ${
              isActive ? "scale-105 shadow-2xl z-50" : "opacity-80"
            }`}
            style={{
              transform: `translate(-50%, -50%) rotate(${rotation}deg) translate(${offset}px, ${offset}px)`,
              top: "50%",
              left: "50%",
              zIndex: cards.length - i + (isActive ? 100 : 0),
            }}
          >
            {/* Top Arrow Icon */}
            <div className="absolute top-11 left-9 w-10 h-10 rounded-full bg-white flex items-center justify-center z-10">
              <svg
                width="50"
                height="50"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_22_73)">
                  <path
                    d="M12.5659 11.4793L23.8252 11.9277C24.7145 11.9632 25.5534 12.3505 26.1572 13.0045C26.7611 13.6584 27.0805 14.5254 27.0452 15.4148C26.9763 17.1445 25.461 18.6108 23.7448 18.6375L27.4143 22.6113C28.6698 23.9709 28.585 26.0991 27.2254 27.3547C25.8657 28.6102 23.7375 28.5254 22.482 27.1658L18.8126 23.192C18.6495 24.9006 17.0674 26.2945 15.3376 26.2256C14.4482 26.1901 13.6094 25.8028 13.0055 25.1488C12.4017 24.4949 12.0823 23.6279 12.1176 22.7385L12.5659 11.4793ZM24.4507 16.1033C24.6138 15.9534 24.7286 15.7584 24.7807 15.5431C24.8327 15.3278 24.8197 15.1019 24.7431 14.894C24.6665 14.6862 24.5299 14.5057 24.3507 14.3757C24.1714 14.2456 23.9575 14.1717 23.7361 14.1634L14.7126 13.804L14.3533 22.8276C14.3415 23.124 14.448 23.413 14.6493 23.631C14.8506 23.849 15.1302 23.9781 15.4266 23.9899C15.7215 23.9959 16.0073 23.8875 16.224 23.6874C16.4407 23.4873 16.5715 23.211 16.589 22.9166L16.7964 17.7099L24.1261 25.6476C24.331 25.8505 24.6063 25.9666 24.8946 25.9716C25.183 25.9766 25.4621 25.8703 25.674 25.6746C25.8859 25.479 26.0141 25.2091 26.032 24.9213C26.0499 24.6335 25.9561 24.3498 25.7702 24.1294L18.4404 16.1918L23.6471 16.3991C23.9436 16.4109 24.2327 16.3045 24.4507 16.1033Z"
                    fill="#18243A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_22_73">
                    <rect
                      width="26.8539"
                      height="26.8539"
                      fill="white"
                      transform="translate(38.6081 19.8896) rotate(137.28)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Image: 80% of card height */}
            <div className="w-full  pt-8 px-6 pb-0" style={{ height: "75%" }}>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-t-[30px]"
              />
            </div>

            {/* Title & Button: 20% of card height, in one line, bigger title */}
            <div
              className="flex items-center justify-between px-3 py-2"
              style={{ height: "15%" }}
            >
              <h3 className="text-2xl font-bold leading-tight">{card.title}</h3>
              <button className="px-4 py-3 bg-white rounded-full text-sm font-semibold text-black shadow hover:bg-gray-200 mt-24">
                Know More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GSAPPopOutCards;
