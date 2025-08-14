// src/components/textbg.jsx

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Textbg = ({ 
  backgroundImage, 
  textColor = 'white', 
  position = 'center', 
  title, 
  description 
}) => {
  const positionClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right'
  };

  return (
    <section
      className="relative w-full h-[500px] flex justify-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div
        className={clsx(
          'relative z-20 flex flex-col justify-center max-w-4xl h-full px-6 md:px-10',
          positionClasses[position],
          `text-${textColor}`
        )}
      >
        {title && <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>}
        {description && <p className="text-base md:text-lg">{description}</p>}
      </div>
    </section>
  );
};

Textbg.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  textColor: PropTypes.oneOf(['white', 'black', 'gray-200', 'gray-700']),
  position: PropTypes.oneOf(['left', 'center', 'right']),
  title: PropTypes.string,
  description: PropTypes.string
};

export default Textbg;
