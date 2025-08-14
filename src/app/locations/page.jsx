import React from 'react';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import LocationsSection from './LocationsSection';
import MultiLocation from './MultiLocation';
function Page() {
  return (
    <div>
     
      <LocationsSection />
       <MultiLocation />
      <ContactSection />
                  <ContactForm />
    </div>
  );
}

export default Page;
