import React from 'react';
import AboutUsSection from './AboutUsSection';
import AboutUsInfoSection from './AboutUsInfoSection';
import OurStory from './OurStory';
import OurTeam from './OurTeam';
import Testimonials from './Testimonials';
import CareersSection from './CareersSection';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
function Page() {
  return (
    <div>
      <AboutUsSection/>
      <AboutUsInfoSection />
      <OurStory />
      <OurTeam />
      <Testimonials />
      <CareersSection />
      
      <ContactSection/>
      <ContactForm/>
    </div>
  );
}

export default Page;
