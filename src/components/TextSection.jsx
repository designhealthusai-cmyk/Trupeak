import React from 'react';
import clsx from 'clsx';

const TextSection = ({
  title,
  description,
  bgColor = 'bg-white',
  titleColor = 'text-black',
  textColor = 'text-black',
  align = 'left',
  animation = '',
}) => {
  return (
    <div
      className={clsx(
        'py-12 px-6 border-t-8 border-two font-sans leading-relaxed',
        bgColor,
        textColor,
        animation
      )}
    >
      <div className={clsx('max-w-7xl mx-16', `text-${align}`)}>
        {title && <h2 className={clsx('text-4xl font-semibold mb-6', titleColor)}>{title}</h2>}
        {description && <p className="whitespace-pre-line text-2xl text-center">{description}</p>}
      </div>
    </div>
  );
};

export default TextSection;
