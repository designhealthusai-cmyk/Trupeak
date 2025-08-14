// import React from "react";

// const ContactFormSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-no-repeat py-12 px-6"
//       style={{
//         backgroundImage: "url('/images/doctorimages.jpg')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60 z-0"></div>

//       <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
//         {/* Left Info Card */}
//         <div className="flex justify-center md:w-1/2">
//   <div className="bg-two rounded-xl p-4 text-white shadow-lg inline-block max-w-md max-h-60 overflow-y-auto my-36">
//     <h2 className="text-2xl font-semibold mb-4 text-one">Contact Us</h2>
//     <p className="text-sm leading-relaxed">
//       Fill out the form below to schedule a consultation, ask a question, or share your health concerns. A member of the Trupeak team will respond within one business day.
//     </p>
//   </div>
// </div>


//         {/* Right Form */}
//         <form
//           className="bg-two rounded-xl p-8 md:w-1/2 shadow-lg text-white space-y-4"
//           aria-label="Contact form"
//         >
//           <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
//             <div className="flex-1">
//               <label htmlFor="name" className="block text-xs font-semibold mb-1">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full rounded px-3 py-2 text-black"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label htmlFor="email" className="block text-xs font-semibold mb-1">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full rounded px-3 py-2 text-black"
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"><div>
//             <label htmlFor="phone" className="block text-xs font-semibold mb-1">
//               Phone Number:
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               className="w-full rounded px-3 py-2 text-black"
//             />
//           </div>

//           <div>
//             <label htmlFor="service" className="block text-xs font-semibold mb-1">
//               Service of Interest:
//             </label>
//             <select
//               id="service"
//               name="service"
//               className="w-full rounded px-3 py-2 text-black"
//               defaultValue=""
//             >
//               <option value="" disabled>
//                 Select a service
//               </option>
//               <option value="consultation">Consultation</option>
//               <option value="treatment">Treatment</option>
//               <option value="follow-up">Follow-up</option>
//             </select>
//           </div>
//           </div>
          
//           {/* <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
//             <div className="flex-1">
//               <label htmlFor="date" className="block text-xs font-semibold mb-1">
//                 Date:
//               </label>
//               <input
//                 type="date"
//                 id="date"
//                 name="date"
//                 className="w-full rounded px-3 py-2 text-black"
//               />
//             </div>
//             <div className="flex-1">
//               <label htmlFor="time" className="block text-xs font-semibold mb-1">
//                 Time:
//               </label>
//               <input
//                 type="time"
//                 id="time"
//                 name="time"
//                 className="w-full rounded px-3 py-2 text-black"
//               />
//             </div>
//           </div> */}

//           <div>
//             <label htmlFor="message" className="block text-xs font-semibold mb-1">
//               Message:
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows="4"
//               className="w-full rounded px-3 py-2 text-black resize-none"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="bg-green-700 hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 text-white font-semibold px-6 py-2 rounded-md mt-2"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactFormSection;
// import React from "react";

// const ContactFormSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-no-repeat py-16 px-6"
//       style={{
//         backgroundImage: "url('/images/doctorimages.jpg')",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60 z-0"></div>

//       {/* Content Wrapper */}
//       <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        
//         {/* Left Info Card */}
//         <div className="md:w-1/2 flex justify-center">
//           <div className="bg-two rounded-xl p-6 text-white shadow-lg max-w-md my-auto">
//             <h2 className="text-3xl font-bold mb-4 text-one">Contact Us</h2>
//             <p className="text-base leading-relaxed">
//               Fill out the form to schedule a consultation, ask a question, or share your health concerns. 
//               Our Trupeak team will respond within one business day.
//             </p>
//           </div>
//         </div>

//         {/* Right Form */}
//         <form
//           className="bg-two rounded-xl p-8 md:w-1/2 shadow-lg text-white space-y-6"
//           aria-label="Contact form"
//         >
//           {/* Name + Email */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-1">
//               <label htmlFor="name" className="block text-sm font-semibold mb-1">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full rounded px-3 py-2 text-black"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label htmlFor="email" className="block text-sm font-semibold mb-1">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full rounded px-3 py-2 text-black"
//                 required
//               />
//             </div>
//           </div>

//           {/* Phone + Service */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-1">
//               <label htmlFor="phone" className="block text-sm font-semibold mb-1">
//                 Phone Number:
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 className="w-full rounded px-3 py-2 text-black"
//               />
//             </div>
//             <div className="flex-1">
//               <label htmlFor="service" className="block text-sm font-semibold mb-1">
//                 Service of Interest:
//               </label>
//               <select
//                 id="service"
//                 name="service"
//                 className="w-full rounded px-3 py-2 text-black"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Select a service
//                 </option>
//                 <option value="consultation">Consultation</option>
//                 <option value="treatment">Treatment</option>
//                 <option value="follow-up">Follow-up</option>
//               </select>
//             </div>
//           </div>

//           {/* Message */}
//           <div>
//             <label htmlFor="message" className="block text-sm font-semibold mb-1">
//               Message:
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows="4"
//               className="w-full rounded px-3 py-2 text-black resize-none"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-green-700 hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 text-white font-semibold px-6 py-3 rounded-md w-full sm:w-auto"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactFormSection;
"use client";
import React, { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    service_interest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const response = await fetch(
        "https://trupeakhealth.in/masterlogin/wp-json/custom/v1/submit-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResponseMsg("✅ Thank you! We will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          service_interest: "",
          message: "",
        });
      } else {
        setResponseMsg(data.message || "❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMsg("❌ Failed to connect to the server. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6"
      style={{
        backgroundImage: "url('/images/doctorimages.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        {/* Left Info Card */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-two rounded-xl p-6 text-white shadow-lg max-w-md my-auto">
            <h2 className="text-3xl font-bold mb-4 text-one">Contact Us</h2>
            <p className="text-base leading-relaxed">
              Fill out the form to schedule a consultation, ask a question, or share your health concerns. 
              Our Trupeak team will respond within one business day.
            </p>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-two rounded-xl p-8 md:w-1/2 shadow-lg text-white space-y-6"
          aria-label="Contact form"
        >
          {/* Name + Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-semibold mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 text-black"
                required
              />
            </div>
          </div>

          {/* Phone + Service */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="phone_number" className="block text-sm font-semibold mb-1">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 text-black"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="service_interest" className="block text-sm font-semibold mb-1">
                Service of Interest:
              </label>
              <select
                id="service_interest"
                name="service_interest"
                value={formData.service_interest}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 text-black"
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Consultation">Consultation</option>
                <option value="Treatment">Treatment</option>
                <option value="Follow-up">Follow-up</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black resize-none"
            ></textarea>
          </div>

          {/* Response Message */}
          {responseMsg && (
            <p
              className={`text-sm font-semibold ${
                responseMsg.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {responseMsg}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-green-700 hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 text-white font-semibold px-6 py-3 rounded-md w-full sm:w-auto"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
