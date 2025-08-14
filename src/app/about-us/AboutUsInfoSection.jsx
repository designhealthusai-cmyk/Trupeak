// import React from "react";

// function AboutUsInfoSection() {
//   return (
//     <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
//         {/* Left - Image */}
//         <div>
//           <img
//             src="/images/about-us.jpg" // Replace with your image path
//             alt="Doctor writing notes"
//             className="rounded-2xl object-cover w-full h-full"
//           />
//         </div>

//         {/* Right - Text */}
//         <div>
//           {/* Title with background */}
//           <div className="bg-two text-white w-full py-3 px-6 rounded-xl mb-6">
//             <h2 className="text-2xl font-bold">About Us</h2>
//             </div>


//           {/* Description */}
//           <p className="text-gray-700 mb-4">
//             At Trupeak, we believe true health is the foundation for energy, clarity, and long-term vitality. Our approach brings together clinical medicine, cutting-edge diagnostics, and a deep understanding of individual biological blueprints of patients. From the first consultation to each follow-up, care is personalized, precise, and always focused on results that matter to you.
//           </p>
//           <p className="text-gray-700">
//             We follow strict clinical standards while using the latest research to guide each service. Whether you're looking to improve energy, manage chronic conditions, or support healthy aging, your care plan is grounded in science and shaped around your lifestyle.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUsInfoSection;
import React from "react";

function AboutUsInfoSection() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left - Image (comes first on mobile) */}
        <div className="order-1 md:order-none">
          <img
            src="/images/about-us.jpg"
            alt="Doctor writing notes"
            className="rounded-2xl object-cover w-full h-auto md:h-full"
          />
        </div>

        {/* Right - Text */}
        <div className="order-2 md:order-none">
          {/* Title with background */}
          <div className="bg-two text-white w-full py-3 px-4 sm:px-6 rounded-xl mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">About Us</h2>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
            At Trupeak, we believe true health is the foundation for energy, clarity, and long-term vitality. Our approach brings together clinical medicine, cutting-edge diagnostics, and a deep understanding of individual biological blueprints of patients. From the first consultation to each follow-up, care is personalized, precise, and always focused on results that matter to you.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            We follow strict clinical standards while using the latest research to guide each service. Whether you're looking to improve energy, manage chronic conditions, or support healthy aging, your care plan is grounded in science and shaped around your lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsInfoSection;

