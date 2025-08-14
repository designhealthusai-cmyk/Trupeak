import React from 'react';
import AtHomeSection from './component/AtHomeSection';
import Imagetext from '@/components/Imagetext';
import ContactSection from '@/components/ContactSection';
import ContactForm from '@/components/ContactForm';
function Page() {
  return (
    <div className='page-content'>
      <AtHomeSection/>
      <Imagetext
        title="Supplement Store"
        description="Explore practitioner-grade supplements selected for purity, potency, and therapeutic value. Each product is backed by clinical protocols and designed to support targeted outcomes across energy, immunity, recovery, and hormonal balance."
        image="/images/at-home/3.jpg" // make sure this image exists in /public/images/
        reverse={false}
        bgColor="bg-white"
        textColor="text-two"
        buttonText="Read More"
        buttonLink="#"
         
      />
      <Imagetext
        title="At-Home Testing"
        description="Diagnostic accuracy starts at home with kits that allow you to collect blood, saliva, or stool samples safely and easily. Results are processed in accredited labs and interpreted by our team as part of your personalized care plan."
        image="/images/at-home/4.jpg" // make sure this image exists in /public/images/
        reverse={true}
        bgColor="bg-white"
        textColor="text-gray-800"
        buttonText="Read More"
        buttonLink="#"
         
      />
      {/* <Imagetext
        title="Immune System Assessment and Analysis"
        description="Your immune system is the body’s first line of defense against illness, inflammation, and early aging. We carry out a complete analysis, including blood work, immunoglobulin levels, lymphocyte subtypes, and markers like CRP and interleukins. These results show whether your immune system is underactive, chronically active, or fighting hidden infections. Based on the findings, care may involve micronutrients, immune support therapies, or detox strategies to help restore balance and reduce stress on your system."
       
        image="/images/main.jpg" // make sure this image exists in /public/images/
        reverse={false}
        bgColor="bg-white"
        textColor="text-gray-800"
        buttonText="Know More"
        buttonLink="/services/immune-system"
         
      /> */}
       <ContactSection />
                   <ContactForm />
    </div>
  );
}

export default Page;
