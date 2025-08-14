// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         one: "#E6AC43",  // Meat Brown
//         two: "#233452",  // Space Cadet
//         three: "#2C886A", // Illuminating Emerald
//         four:"#E1C78F"
//       },
//       fontFamily: {
//         montserrat: ['var(--font-montserrat)', 'sans-serif'],
//         nunito: ['var(--font-nunito)', 'sans-serif'],
//         sans: ['var(--font-montserrat)', 'sans-serif'], // Default font
//       },
//       keyframes: {
//         slideInLeft: {
//           '0%': { transform: 'translateX(-100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         slideInRight: {
//           '0%': { transform: 'translateX(100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//       },
//       animation: {
//         slideInLeft: 'slideInLeft 1s ease-out forwards',
//         slideInRight: 'slideInRight 1s ease-out forwards',
//         fadeIn: 'fadeIn 1.5s ease-in-out forwards',
//       },
//     },
//   },
//   plugins: [],
// }
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      safelist: [
    'bg-one', 'bg-two', 'bg-three',
    'text-one', 'text-two', 'text-three',
    'text-white', 'text-black',
  ],
      colors: {
        one: "#E1C78F",  
        two: "#233452",  
        three: "#2C886A", 
        four: "#E1C78F",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        zoomOut: {
          "0%": { opacity: "0", transform: "scale(1.2)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        rotateIn: {
          "0%": { opacity: "0", transform: "rotate(-10deg)" },
          "100%": { opacity: "1", transform: "rotate(0)" },
        },
         marquee: {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-50%)" }, // moves half the width for seamless loop
  },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        fadeInUp: "fadeInUp 1s ease-out forwards",
        fadeInDown: "fadeInDown 1s ease-out forwards",
        fadeInLeft: "fadeInLeft 1s ease-out forwards",
        fadeInRight: "fadeInRight 1s ease-out forwards",
        zoomIn: "zoomIn 1s ease-out forwards",
        zoomOut: "zoomOut 1s ease-out forwards",
        rotateIn: "rotateIn 1s ease-out forwards",
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
