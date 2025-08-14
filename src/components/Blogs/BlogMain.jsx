import React from "react";

const BlogMain = () => {
  return (
    <section className="relative w-full page-content">
      {/* Background Image Container */}
      <div className="relative">
        <img
          src="/images/blog.jpg"
          alt="About Us"
          className="w-full h-[400px] sm:h-[600px] object-cover object-top"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white text-center text-2xl sm:text-5xl 2xl:text-6xl uppercase font-bold">Blogs<br className="hidden lg:block"/></h2>
          {/* <p className="text-white text-center font-bold pt-2 uppercase lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>
      </div>

      {/* Bottom Color Strip */}
      <div className="bg-[#D9B26A] h-6 sm:h-8 w-full"></div>
    </section>
  );
};

export default BlogMain