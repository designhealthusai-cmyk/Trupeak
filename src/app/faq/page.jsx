import React from 'react';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import FAQSection from './FAQSection';
function Page() {
  return (
    <>
    <section className="relative w-full page-content">
      {/* Background Image Container */}
      <div className="relative">
        <img
          src="/images/doctors/image3.jpg"
          alt="About Us"
          className="w-full h-[400px] sm:h-[600px] object-cover object-top"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl sm:text-6xl font-bold">FAQ's</h2>
        </div>
      </div>

      {/* Bottom Color Strip */}
      <div className="bg-two h-6 sm:h-8 w-full"></div>
    </section>
    <FAQSection/>
    <ContactSection/>
    <ContactForm/>
    </>
  );
}

export default Page;
