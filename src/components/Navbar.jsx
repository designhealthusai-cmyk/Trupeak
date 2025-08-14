// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import MegaMenu from "./MegaMenu";

// export default function Navbar() {
//   const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white border-b sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
//         {/* Left menu */}
//         <ul className="flex space-x-8">
//           <li
//             className="relative"
//             onMouseEnter={() => setMegaMenuOpen(true)}
//             onMouseLeave={() => setMegaMenuOpen(false)}
//           >
//             <button className="hover:text-blue-600">Services</button>
//             <MegaMenu isOpen={isMegaMenuOpen} />
//           </li>
//           <li><Link href="/at-home">At-Home</Link></li>
//           <li><Link href="/locations">Locations</Link></li>
//         </ul>

//         {/* Logo */}
//         <div className="font-bold">Trupeak Health</div>

//         {/* Right menu */}
//         <ul className="flex space-x-8">
//           <li><Link href="/blog">Blogs</Link></li>
//           <li><Link href="/about-us">About Us</Link></li>
//           <li><Link href="/contact">Contact Us</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import MegaMenu from "./MegaMenu";

// export default function Navbar() {
//   const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50  bg-white shadow-md py-2 text-two text-2xl font-bold">

//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
//         {/* Left menu */}
//         <ul className="flex space-x-8">
//           <li
//             onMouseEnter={() => setMegaMenuOpen(true)}
//             onMouseLeave={() => setMegaMenuOpen(false)}
//             className="cursor-pointer"
//           >
//             <button className="hover:text-one">Services</button>
//           </li>
//           <li className="hover:text-one"><Link href="/at-home">At-Home</Link></li>
//           <li className="hover:text-one"><Link href="/locations">Locations</Link></li>
//         </ul>

//         {/* Logo */}
//         <div className="flex items-center">
//   <img 
//     src="/images/truepeaklogo.png"
//     alt="Trupeak Health" 
//     className="h-56 w-auto object-cover"
//   />
// </div>

//         {/* Right menu */}
//         <ul className="flex space-x-8">
//           <li className="hover:text-one"><Link href="/blog">Blogs</Link></li>
//           <li className="hover:text-one"><Link href="/about-us">About Us</Link></li>
//           <li className="hover:text-one"><Link href="/contact">Contact Us</Link></li>
//         </ul>
//       </div>

//       {/* MegaMenu - full width */}
//       {isMegaMenuOpen && (
//         <div 
//   onMouseEnter={() => setMegaMenuOpen(true)}
//   onMouseLeave={() => setMegaMenuOpen(false)}
//   className={`transition-all duration-200 ${isMegaMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
// >
//   <MegaMenu isOpen={isMegaMenuOpen} />
// </div>
//       )}
//     </nav>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  const services = [
    {
      category: "Regenerative Therapies",
      subServices: [
        { name: "Restorative Medicine at Trupeak", href: "/restorative-medicine" },
        { name: "Cancer Nutrition at Trupeak", href: "/cancer-nutrition" },
        { name: "Renal Nutrition", href: "/renal-nutrition" },
        { name: "Hormone Optimisation Therapy", href: "/hormone-therapy" },
        { name: "Pain Management", href: "/pain-management" },
        { name: "NAD+ Therapy", href: "/nad-therapy" },
        { name: "IV Therapy", href: "/iv-therapy" },
        { name: "Post-surgical Rehabilitation", href: "/post-surgical-rehab" },
        { name: "Chronic Illness Management", href: "/chronic-illness" },
      ],
    },
    {
      category: "Wellness",
      subServices: [
        { name: "Weight Management", href: "/weight-management" },
        { name: "Sports Performance", href: "/sports-performance" },
        { name: "Mental Wellness", href: "/mental-wellness" },
      ],
    },
  ];

  let timeoutId = null;
  const handleMouseEnter = () => {
  if (timeoutId) clearTimeout(timeoutId);
  setMegaMenuOpen(true);
};

const handleMouseLeave = () => {
  timeoutId = setTimeout(() => {
    setMegaMenuOpen(false);
  }, 300);
};

  return (
    <nav className=" fixed top-0 left-0 w-full z-50 bg-white shadow-md py-2 ">
<div className="relative">
  <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

    {/* Left menu (desktop only) */}
    <div className="hidden md:flex items-center space-x-8 text-two text-2xl font-semibold">
      {/* Services Button */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="hover:text-one cursor-pointer">Services</button>
      </div>

      <Link href="/at-home" className="hover:text-one">At-Home</Link>
      <Link href="/locations" className="hover:text-one">Locations</Link>
    </div>

    {/* Logo */}
    <div className="flex items-center justify-start px-0">
      {/* Desktop Logo */}
      <img
        src="/images/truepeaklogo.png"
        alt="Trupeak Health Desktop"
        className="hidden md:block h-80 w-auto object-contain"
      />
      {/* Mobile Logo */}
      <img
        src="/images/truepeaklogo.png"
        alt="Trupeak Health Mobile"
        className="block md:hidden h-48 w-auto object-contain"
      />
    </div>

    {/* Right menu (desktop only) */}
    <ul className="hidden md:flex space-x-8 text-two text-2xl font-semibold list-none">
      <li className="hover:text-one"><Link href="/blog">Blogs</Link></li>
      <li className="hover:text-one"><Link href="/about-us">About Us</Link></li>
      <li className="hover:text-one"><Link href="/contact">Contact Us</Link></li>
    </ul>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      className="md:hidden text-3xl text-two focus:outline-none"
    >
      ☰
    </button>
  </div>

  {/* Full-Width Mega Menu */}
  {isMegaMenuOpen && (
  <div
    className="fixed top-[64px] left-0 w-full bg-white shadow-lg border-t z-50"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div className="max-w-7xl mx-auto p-6">
      <MegaMenu isOpen={isMegaMenuOpen} />
    </div>
  </div>
)}
</div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-screen bg-white z-40 p-6 overflow-y-auto">
          {!activeMobileSubmenu ? (
            <ul className="space-y-4 text-two text-lg font-semibold">
              <li>
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => setActiveMobileSubmenu("services")}
                >
                  <span>Services</span>
                  <span className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </li>
              <li><Link href="/at-home">At-Home</Link></li>
              <li><Link href="/locations">Locations</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          ) : (
            <div>
              <button
                className="mb-4 flex items-center gap-2 text-one font-bold"
                onClick={() => setActiveMobileSubmenu(null)}
              >
                <span className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
                <span>Back</span>
              </button>

              {/* Submenus */}
              {activeMobileSubmenu === "services" && (
                <ul className="space-y-4">
                  {services.map((cat, idx) => (
                    <li key={idx}>
                      <button
                        className="w-full flex justify-between items-center text-left font-semibold"
                        onClick={() => setActiveMobileSubmenu(cat.category)}
                      >
                        <span>{cat.category}</span>
                        <span className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* Sub-services */}
              {services.map((cat, idx) =>
                activeMobileSubmenu === cat.category ? (
                  <div key={idx}>
                    <button
                      className="mb-4 flex items-center gap-2 text-one font-bold"
                      onClick={() => setActiveMobileSubmenu("services")}
                    >
                      <span className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </span>
                      <span>Back to Services</span>
                    </button>
                    <ul className="space-y-3">
                      {cat.subServices.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link href={sub.href}>{sub.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
