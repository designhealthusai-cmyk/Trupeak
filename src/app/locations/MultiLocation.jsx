import React from "react";
import { FaMapMarkerAlt, FaShareAlt, FaDirections } from "react-icons/fa";

const locations = [
  {
    name: "TruPeak Health – Mumbai",
    address:
      "Consigliere Healthcare Pvt. Ltd, Suite No. A/405, Kohinoor Square, Opp. Shivaji Park, Opp. Shiv Sena Bhavan, Gate No. 2, NC Kelkar Marg, Dadar West, Mumbai – 400028",
    mapsUrl: "https://goo.gl/maps/example1",
    description:
      "Located in a premium medical zone with private access and valet parking available upon request.",
    image: "/images/mumbai-location.jpg",
  },
  {
    name: "TruPeak Health – Pune",
    address:
      "Suite No. 505 & 506, Kushal Wall Street, Plot No. 576/4, Millennium Plaza, Fergusson College Road, Next to TOI Building, Shivajinagar, Deccan, Pune – 411004",
    mapsUrl: "https://goo.gl/maps/example2",
    description: "GST No: 27AAJCC9456E1ZD",
    image: "/images/pune-location.jpg",
  },
];

function MultiLocation() {
  return (
    <section className="bg-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-left text-two mb-12">
        Our Locations
      </h2>

      {/* Location Cards */}
      <div className="max-w-7xl mx-auto space-y-10">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border p-6 flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            {/* Left: Text */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-two mb-4">
                {loc.name}
              </h3>
              <div className="flex items-start mb-2 text-two">
                <FaMapMarkerAlt className="mt-1 mr-2 text-one" />
                <p>{loc.address}</p>
              </div>
              <div className="flex items-center mb-4">
                <FaDirections className="mr-2 text-one" />
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline hover:text-teal-900"
                >
                  View on Google Maps
                </a>
              </div>
              <p className="text-two">{loc.description}</p>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-80 flex-shrink-0 relative">
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <button
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                aria-label="Share location"
              >
                <FaShareAlt className="text-teal-700" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MultiLocation;
