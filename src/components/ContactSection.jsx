// import React from "react";
// import { Mail, Phone, MapPin, Clock } from "lucide-react";

// export default function ContactSection() {
//   // Common style for icon containers
//   const iconBoxStyle = {
//   boxShadow:
//     "inset 6px 6px 12px rgba(0,0,0,0.25), inset -6px -6px 12px rgba(255,255,255,0.9)",
// };

// const iconStyle = {
//   filter:
//     "drop-shadow(inset 3px 3px 6px rgba(0,0,0,0.35)) drop-shadow(inset -3px -3px 6px rgba(255,255,255,0.9))",
// };


//   return (
//     <div className="bg-white py-12">
//       {/* Heading */}
//       <h2 className="text-5xl font-bold text-center text-two mb-10">
//         How to Reach out to us?
//       </h2>

//       {/* Grid */}
//       <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

//       {/* Email */}
// <div className="bg-two text-white px-12 py-8 flex items-center justify-between gap-4 rounded-r-3xl">
//   {/* Text on the left */}
//   <div className="flex-1">
//     <p className="text-xl font-bold">example@example@gmail.com</p>
//     <p className="text-lg mt-2">
//       Use this email for documentation, scheduling follow-ups, etc.
//     </p>
//   </div>

//   {/* Icon on the right */}
//   <div
//     className="bg-white rounded-xl p-4 flex items-center justify-center shadow-inner"
//     style={iconBoxStyle}
//   >
//     <Mail className="text-green-600 w-12 h-12" style={iconStyle} />
//   </div>
// </div>


//         {/* Phone */}
//         <div className="bg-two text-white px-12 py-8 flex items-center gap-4 rounded-l-3xl">
//           <div
//             className="bg-white rounded-xl p-4 flex items-center justify-center shadow-inner"
//             style={iconBoxStyle}
//           >
//             <Phone className="text-green-600 w-12 h-12" style={iconStyle} />
//           </div>
//           <div>
//             <p className="text-xl font-bold">91-0000000</p>
//             <p className="text-lg mt-2">
//               Call us to connect with our front desk or care coordinator.
//             </p>
//           </div>
//         </div>

//         {/* Location */}
//        <div className="bg-two text-white px-12 py-8 flex items-center justify-between gap-4 rounded-r-3xl">
//   {/* Text on the left */}
//   <div className="flex-1">
//     <p className="text-xl font-bold">*Add location here</p>
//   </div>

//   {/* Icon on the right */}
//   <div
//     className="bg-white rounded-xl p-4 flex items-center justify-center shadow-inner"
//     style={iconBoxStyle}
//   >
//     <MapPin className="text-green-600 w-12 h-12" style={iconStyle} />
//   </div>
// </div>


//         {/* Timings */}
//         <div className="bg-two text-white px-12 py-8  flex items-center gap-4 rounded-l-3xl">
//           <div
//             className="bg-white rounded-xl p-4 flex items-center justify-center shadow-inner"
//             style={iconBoxStyle}
//           >
//             <Clock className="text-green-600 w-12 h-12" style={iconStyle} />
//           </div>
//           <div>
//             <p className="text-xl font-bold">Monday to Saturday:</p>
//             <p className="text-lg font-bold">8:30 AM – 6:30 PM</p>
//             <p className="text-xl font-bold ">Sunday: Closed</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  // Common style for icon containers
  const iconBoxStyle = {
    boxShadow:
      "inset 6px 6px 12px rgba(0,0,0,0.25), inset -6px -6px 12px rgba(255,255,255,0.9)",
  };

  const iconStyle = {
    filter:
      "drop-shadow(inset 3px 3px 6px rgba(0,0,0,0.35)) drop-shadow(inset -3px -3px 6px rgba(255,255,255,0.9))",
  };

  return (
    <div className="bg-white py-12">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center text-two mb-10  ">
        How to Reach out to us?
      </h2>

      {/* Grid */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="bg-two text-white px-12 py-8 flex items-center justify-between gap-4 rounded-r-3xl  ">
          <div className="flex-1">
            <p className="text-xl font-bold">info@trupeakhealth.in</p>
            <p className="text-lg mt-2">
              Use this email for documentation, scheduling follow-ups, etc.
            </p>
          </div>
          <div
            className="bg-white rounded-xl p-4 flex items-center justify-center shadow-inner"
            style={iconBoxStyle}
          >
            <Mail className="text-green-600 w-12 h-12" style={iconStyle} />
          </div>
        </div>

        {/* Phone */}
        <div className="bg-two text-white px-12 py-8 flex items-center gap-4 rounded-l-3xl  ">
          <div
            className="bg-white rounded-xl p-4 flex items-center justify-center shadow-inner"
            style={iconBoxStyle}
          >
            <Phone className="text-green-600 w-12 h-12" style={iconStyle} />
          </div>
          <div>
            <p className="text-xl font-bold">9820 373 373</p>
            <p className="text-lg mt-2">
              Call us to connect with our front desk or care coordinator.
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="bg-two text-white px-12 py-8 flex items-center justify-between gap-4 rounded-r-3xl  ">
          <div className="flex-1">
            <p className="text-xl font-bold">Trupeak Health, Suite A/405, Kohinoor Square,
Shivaji Park, OPP Shiv Sena Bhavan,
Dadar West, Mumbai - 400028</p>
          </div>
          <div
            className="bg-white rounded-xl p-4 flex items-center justify-center shadow-inner"
            style={iconBoxStyle}
          >
            <MapPin className="text-green-600 w-12 h-12" style={iconStyle} />
          </div>
        </div>

        {/* Timings */}
        <div className="bg-two text-white px-12 py-8 flex items-center gap-4 rounded-l-3xl  ">
          <div
            className="bg-white rounded-xl p-4 flex items-center justify-center shadow-inner"
            style={iconBoxStyle}
          >
            <Clock className="text-green-600 w-12 h-12" style={iconStyle} />
          </div>
          <div>
            <p className="text-xl font-bold">Monday to Sunday:</p>
            <p className="text-lg font-bold">9:00 AM – 9:00 PM</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

