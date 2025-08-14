// import React from 'react';

// function Cards({ data = [] }) {
//   return (
//     <div className="bg-two py-20 px-6 ">
//       <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="relative bg-four rounded-2xl shadow-xl p-6 font-nunito flex flex-col "
//           >
//             {/* Title Row with Number Badge */}
//             <div className="flex items-center relative mb-4">
//               <div className="absolute -left-12 -top-2 w-12 h-12 rounded-full bg-two border-4 border-white text-white flex items-center justify-center font-bold font-montserrat text-lg shadow-lg z-10">
//                 {index + 1}
//               </div>
//               <h3 className="text-2xl font-bold font-montserrat text-two pl-10">
//                 {item.title}
//               </h3>
//             </div>

//             {/* Description as bullet points */}
//             <ul className="text-lg list-disc pl-5 text-two mb-6 space-y-2">
//               {(Array.isArray(item.description) ? item.description : [item.description]).map((desc, i) => (
//                 <li key={i}>{desc}</li>
//               ))}
//             </ul>

//             {/* Push button to bottom */}
//             <div className="mt-auto pt-4">
//               <button className="inline-flex items-center bg-white text-two text-sm px-4 py-2 rounded-full shadow-md font-bold font-montserrat hover:scale-105 transition-transform">
//                 Read More
//                 <span className="ml-2 text-lg">▶</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cards;
import React from 'react';

function Cards({ data = [] }) {
  return (
    <div className="bg-two py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-four rounded-2xl shadow-xl p-6 font-nunito flex flex-col opacity-0 animate-on-scroll animate-fadeIn"
            
          >
            {/* Title Row with Number Badge */}
            <div className="flex items-center relative mb-4">
              <div className="absolute -left-12 -top-2 w-12 h-12 rounded-full bg-two border-4 border-white text-white flex items-center justify-center font-bold font-montserrat text-lg shadow-lg z-10">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-two pl-10">
                {item.title}
              </h3>
            </div>

            {/* Description as bullet points */}
            <ul className="text-lg list-disc pl-5 text-two mb-6 space-y-2">
              {(Array.isArray(item.description) ? item.description : [item.description]).map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            {/* Push button to bottom */}
            <div className="mt-auto pt-4">
              <button className="inline-flex items-center bg-white text-two text-sm px-4 py-2 rounded-full shadow-md font-bold font-montserrat hover:scale-105 transition-transform">
                Read More
                <span className="ml-2 text-lg">▶</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
