import React from 'react';
import AboutUsSection from './AboutUsSection';
import ContactFormSection from './ContactFormSection';
import ContactSection from '@/components/ContactSection';
function Page() {
  return (
    <div>
      <AboutUsSection/>
      <p className="bg-white text-black p-4 max-w-5xl mx-auto my-6 rounded text-xl">
        At Trupeak, our care team is ready to assist whether you're booking your first consultation, following up on a treatment, or exploring how our precision-based protocols can support your health goals. Reach out using the options below.
      </p>
      <ContactFormSection />
      <ContactSection />
    </div>
  );
}

export default Page;
