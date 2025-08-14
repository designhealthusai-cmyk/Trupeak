import React from "react";

export default function ServicesHero({ title, subtitle, image }) {
  return (
    <section className="relative w-full bg-two py-12 md:py-16 overflow-hidden mt-10">
      <div className="relative w-full h-[400px] md:h-[500px] rounded-l-[50px] mx-auto overflow-hidden">
        
        {/* Image Div */}
        {/* <div
          className="absolute inset-0 rounded-l-[50px] ml-10 opacity-0 "
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        > */}
        <div
  className="absolute inset-0 rounded-l-[50px] ml-10 opacity-100 h-full w-full"
  style={{
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 rounded-l-[50px]"></div>
        </div>

        {/* Content Div */}
        <div className="absolute inset-0 flex flex-col justify-center  z-10 ">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 pl-10">
            {title}
          </h1>
          {subtitle && (
            <div className="bg-one text-two px-6 py-4 rounded-r-xl shadow-lg max-w-xl">
              <p className="text-lg md:text-2xl font-medium leading-relaxed pl-6">
                {subtitle}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
