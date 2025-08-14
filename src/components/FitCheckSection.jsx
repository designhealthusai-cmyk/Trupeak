import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

import clsx from 'clsx';

const FitCheckSection = ({
  title = "",
  subtitle = "",
  items = [],
  imageSrc = "",
  imageAlt = "Section image",
  reverse = false, // optional: image on right
}) => {
  return (
    // <div className="bg-white py-16 px-6 lg:px-20 ">
    <div className="bg-white py-16 lg:px-20  max-w-7xl mx-auto" >
      <h2 className="text-4xl font-bold mb-6 text-two">{title}</h2>
      <div className={clsx(
        "flex flex-col lg:flex-row items-start gap-10",
        reverse && "lg:flex-row-reverse"
      )}>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center ">
  <img
    src={imageSrc}
    alt={imageAlt}
    className="rounded-xl shadow-lg  object-cover"
  />
</div>


        
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          
          <p className="mb-4 font-medium text-3xl">{subtitle}</p>
          <ul className="space-y-4">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-two text-2xl">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FitCheckSection;
