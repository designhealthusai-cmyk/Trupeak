

// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function MegaMenu({ isOpen }) {
//   const [activeCategory, setActiveCategory] = useState(0);

//   const services = [
//     {
//       category: { name: "Regenerative Therapies", href: "/services/regenerative-therapies" },
//       subServices: [
//         { name: "Restorative Medicine at Trupeak", href: "/restorative-medicine" },
//         { name: "Cancer Nutrition at Trupeak", href: "/cancer-nutrition" },
//         { name: "Renal Nutrition", href: "/renal-nutrition" },
//         { name: "Hormone Optimisation Therapy", href: "/hormone-therapy" },
//         { name: "Pain Management", href: "/pain-management" },
//         { name: "NAD+ Therapy", href: "/nad-therapy" },
//         { name: "IV Therapy", href: "/iv-therapy" },
//         { name: "Post-surgical Rehabilitation", href: "/post-surgical-rehab" },
//         { name: "Chronic Illness Management", href: "/chronic-illness" }
//       ]
//     }
//   ];

//   const quickLinks = [
//     { title: "Call Us", href: "tel:9820373373" },
//     { title: "Book an Appointment", href: "/contact" },
//     { title: "Location", href: "/locations" }
//   ];

//   if (!isOpen) return null;

//   return (
//     <div className="absolute left-0 top-full w-screen bg-white shadow-lg border-t border-gray-200 z-50">
//       <div className="p-6 grid grid-cols-3 gap-6">
        
//         {/* First Column - Categories */}
//         <div className="border-r border-one">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               onMouseEnter={() => setActiveCategory(idx)}
//               className={`p-2 cursor-pointer transition-colors duration-200 rounded 
//                 ${activeCategory === idx ? "bg-gray-100 font-semibold text-two" : "hover:bg-gray-50"}`}
//             >
//               <Link href={service.category.href}>
//                 {service.category.name}
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* Second Column - Sub Services */}
//         <div className="border-r border-one">
//           {services[activeCategory]?.subServices.map((sub, subIdx) => (
//             <Link
//               key={subIdx}
//               href={sub.href}
//               className="block p-2 text-two hover:bg-gray-50 hover:text-one transition-colors duration-200"
//             >
//               {sub.name}
//             </Link>
//           ))}
//         </div>

//         {/* Third Column - Quick Links */}
//         <div>
//           <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//           <ul className="space-y-2 inline-flex flex-col items-stretch">
//             {quickLinks.map((link, idx) => (
//               <li key={idx} className="w-full">
//                 <Link
//                   href={link.href}
//                   className="inline-flex items-center justify-between gap-2 px-4 py-2 bg-three text-white rounded-3xl hover:bg-two/90 transition-colors duration-200 w-full"
//                 >
//                   <span>{link.title}</span>
//                   <div className="bg-white p-1 rounded-full inline-flex items-center justify-center w-6 h-6">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={2}
//                       stroke="green"
//                       className="w-4 h-4"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M13.5 4.5L21 12l-7.5 7.5M3 12h18"
//                       />
//                     </svg>
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";

export default function MegaMenu({ isOpen }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const services = [
    {
      category: { name: "Regenerative Therapies", href: "/services/regenerative-therapies" },
      subServices: [
        { name: "Restorative Medicine at Trupeak", href: "/restorative-medicine" },
        { name: "Cancer Nutrition at Trupeak", href: "/cancer-nutrition" },
        { name: "Renal Nutrition", href: "/renal-nutrition" },
        { name: "Hormone Optimisation Therapy", href: "/hormone-therapy" },
        { name: "Pain Management", href: "/pain-management" },
        { name: "NAD+ Therapy", href: "/nad-therapy" },
        { name: "IV Therapy", href: "/iv-therapy" },
        { name: "Post-surgical Rehabilitation", href: "/post-surgical-rehab" },
        { name: "Chronic Illness Management", href: "/chronic-illness" }
      ]
    },
    {
      category: { name: "Weight and Lean Muscle Management", href: "/services/weight-and-lean-muscle-management" },
      subServices: [
        { name: "Nutrition Counseling", href: "/nutrition" },
        { name: "Weight Management", href: "/weight-management" },
        { name: "Fitness Optimization", href: "/fitness" }
      ]
    },
    {
      category: { name: "Immunity and Longevity", href: "/services/immunity-and-longevity" },
      subServices: [
        { name: "Nutrition Counseling", href: "/nutrition" },
        { name: "Weight Management", href: "/weight-management" },
        { name: "Fitness Optimization", href: "/fitness" }
      ]
    },
    {
      category: { name: "Women Centric Health Interventions", href: "/services/women-centric-health-interventions" },
      subServices: [
        { name: "Nutrition Counseling", href: "/nutrition" },
        { name: "Weight Management", href: "/weight-management" },
        { name: "Fitness Optimization", href: "/fitness" }
      ]
    },
    {
      category: { name: "Beauty Aesthetics", href: "/services/beauty-aesthetics" },
      subServices: [
        { name: "Nutrition Counseling", href: "/nutrition" },
        { name: "Weight Management", href: "/weight-management" },
        { name: "Fitness Optimization", href: "/fitness" }
      ]
    },
    {
      category: { name: "Mental Health and Counselling", href: "/services/mental-health-and-counselling" },
      subServices: [
        { name: "Nutrition Counseling", href: "/nutrition" },
        { name: "Weight Management", href: "/weight-management" },
        { name: "Fitness Optimization", href: "/fitness" }
      ]
    },
    {
      category: { name: "Ergogenic Medicine", href: "/services/ergogenic-medicine" },
      subServices: [
        { name: "Nutrition Counseling", href: "/nutrition" },
        { name: "Weight Management", href: "/weight-management" },
        { name: "Fitness Optimization", href: "/fitness" }
      ]
    },
    {
      category: { name: "Technology", href: "/services/technology" },
      subServices: [
        { name: "Nutrition Counseling", href: "/nutrition" },
        { name: "Weight Management", href: "/weight-management" },
        { name: "Fitness Optimization", href: "/fitness" }
      ]
    }
  ];

  const quickLinks = [
    { title: "Call Us", href: "tel:9820373373" },
    { title: "Book an Appointment", href: "/contact" },
    { title: "Location", href: "/locations" }
  ];

  return (
    <div
      className={`absolute left-0 top-full w-screen bg-white shadow-lg border-t border-gray-200 z-50 
      transition-all duration-300 ease-in-out
      ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
    >
      <div className="p-6 grid grid-cols-3 gap-6 max-w-7xl mx-auto">
        
        {/* First Column - Categories */}
        <div className="border-r border-gray-200">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveCategory(idx)}
              className={`p-2 cursor-pointer transition-colors duration-200 rounded 
                ${activeCategory === idx ? "bg-gray-100 font-semibold text-two" : "hover:bg-gray-50"}`}
            >
              <Link href={service.category.href}>
                {service.category.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Second Column - Sub Services */}
        <div className="border-r border-gray-200">
          {services[activeCategory]?.subServices.map((sub, subIdx) => (
            <Link
              key={subIdx}
              href={sub.href}
              className="block p-2 text-two hover:bg-gray-50 hover:text-one transition-colors duration-200"
            >
              {sub.name}
            </Link>
          ))}
        </div>

        {/* Third Column - Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 inline-flex flex-col items-stretch">
            {quickLinks.map((link, idx) => (
              <li key={idx} className="w-full">
                <Link
                  href={link.href}
                  className="inline-flex items-center justify-between gap-2 px-4 py-2 bg-three text-white rounded-3xl hover:bg-two/90 transition-colors duration-200 w-full"
                >
                  <span>{link.title}</span>
                  <div className="bg-white p-1 rounded-full inline-flex items-center justify-center w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="green"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12l-7.5 7.5M3 12h18"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
