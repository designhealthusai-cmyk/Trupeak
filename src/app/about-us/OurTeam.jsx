import React from "react";

const leaders = [
  {
    name: "Dr. Sanjith Saseedharan",
    title:
      'Medical Director and creator of our Muscle and Metabolic optimization program known as the "CEO" Protocol',
    img: "/images/image1.jpg", // Replace with correct image path
  },
  {
    name: "Dr. Vikramaditya Salvi",
    title: "Director of Dermatology and Aesthetic Surgery",
    img: "/images/image1.jpg",
  },
  {
    name: "Dr. Amit Chakraborty",
    title: "Head of Oncology Nutrition and Research",
    img: "/images/image1.jpg",
  },
  {
    name: "Dr Gaurav Mishra",
    title: "Head of Obesity, Bariatric and General Surgery",
    img: "/images/image1.jpg",
  },
];

function OurTeam() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-two mb-2">Our Team</h2>
      <div className="w-16 h-1 bg-three mb-6"></div>

      {/* Intro Paragraph */}
      <p className="text-two mb-8 max-w-6xl">
       Trupeak is home to a collaborative group of medical professionals who believe in solving problems, not just managing them. Your care team may include physicians, registered dietitians and nutritionists, clinical psychologists, physiotherapists, and research scientists who work together, not in silos.
      </p>

      {/* Leaders Include */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Leaders include:
      </h3>

      {/* Leaders Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 rounded-2xl">
  {leaders.map((leader, index) => (
    <div
      key={index}
      className="bg-two rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center"
    >
      <img
        src={leader.img}
        alt={leader.name}
        className="w-full h-64 object-cover object-top border-8 mt-1 border-two rounded-xl
        "
      />
      <div className="p-4">
        <h4 className="text-[#FFB84D] font-semibold text-lg mb-2">
          {leader.name}
        </h4>
        <p className="text-white text-sm">{leader.title}</p>
      </div>
    </div>
  ))}
</div>


      {/* Closing Sentence */}
      <p className="text-gray-700">
        Together with a team of over 30 clinicians, they bring depth,
        experience, and coordination to every plan we deliver.
      </p>
    </section>
  );
}

export default OurTeam;

