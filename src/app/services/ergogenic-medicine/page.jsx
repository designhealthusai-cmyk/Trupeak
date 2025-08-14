import React from 'react';
import ServicesHero from '@/components/ServicesHero';

import InfoSection from '@/components/InfoSection';

import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import Cards from '@/components/cards';
// import Textbg from './components/textbg';
const servicesPageData = {
  hero: {
    title: "Ergogenic Medicine",
    subtitle: "Focused support that adapts to your body’s needs at every life stage.",
    image: "/images/ergogenic/1.jpg",
  },
  textSectionData: {
    description: `Longevity isn’t defined by age alone. It depends on how well your biology responds to stress, recovers from damage, and adapts over time. This program combines detailed diagnostics with personalized medical guidance to assess your immune strength, biological age, and overall resilience. It helps uncover hidden imbalances before they develop into disease and supports your path toward long-term health.`,
    bgColor: "bg-one",
    titleColor: "text-two",
    textColor: "text-two",
    align: "left",
  },
  textSectionData1: {
    description: `We don’t just give you test results. We help you understand what they mean and build a plan that fits your needs. That might include changes to your diet, supplements, focused therapies, or further referrals. We check your progress through follow-up tests so you can see real changes over time.`,
    bgColor: "bg-two",
    titleColor: "text-white",
    textColor: "text-white",
    align: "left",
  },
  infoSection: {
    title: "Overview",
    description: `At Trupeak, our Ergogenic Medicine program is designed to restore strength, boost stamina, and accelerate recovery, whether you're training for a marathon or managing the demands of everyday life. We use a precision-based approach that combines hormone optimization, performance supplements, and recovery tools, all tailored to your unique biology.With doctor-guided care and advanced diagnostics, our protocols go beyond symptom relief to support the core systems that drive energy, circulation, muscle recovery, and stress resilience. From sexual wellness and fertility to endurance and overall vitality, every plan is built to help you perform at your peak with confidence and clarity.`,
    buttonText: "Know More",
    buttonLink: "/services",
    images: [
      "/images/ergogenic/2.jpg",
      "/images/ergogenic/3.jpg",
      "/images/ergogenic/4.jpg",
    ],
  },
  imageTextData: {
    title: "Sexual Health",
    description: `Personalized hormone and metabolic support to restore libido, improve function, and enhance overall sexual vitality.`,
    image: "/images/hero.jpg",
  },
  cards: [
    {
    title: "Fertility",
    description: [
      "Targeted protocols to optimize reproductive hormones, sperm quality, and ovulation health using evidence-based nutrition and supplementation."
    ]
  },
  {
    title: "Virility",
    description: [
      "Strengthens physical drive and confidence through testosterone support, circulatory enhancement, and stress modulation."
    ]
  },
  {
    title: "Athletic Boost",
    description: [
      "Improves performance, muscle recovery, and physical output with precision supplementation, training recovery tools, and energy optimization."
    ]
  },
  {
    title: "Post-Hysterectomy Support",
    description: [
      "Women who have undergone uterine removal may face pelvic floor changes, sexual health concerns, and accelerated aging."
    ]
  },
  {
    title: "Intimate Health",
    description: [
      "Supports pelvic blood flow, nerve sensitivity, and emotional well-being to promote a fulfilling intimate experience."
    ]
  },
  {
    title: "Endurance Boost",
    description: [
      "Enhances physical and mental stamina by addressing mitochondrial health, oxygen delivery, and adrenal resilience."
    ]
  },
  {
    title: "STD Support",
    description: [
      "Offers diagnostic screening, medical guidance, and supportive therapies to manage and recover from sexually transmitted infections discreetly and effectively."
    ]
  }
  ],
};

const fitCheckData = {
  title: "Is This Program Right for You?",
  subtitle: "This may be a good fit if:",
  imageSrc: "/images/main.jpg",
  imageAlt: "DNA visual",
  items: [
    "You get sick often or take a long time to recover",
    "You want to prevent health issues as you age",
    "You're looking into proven longevity care",
    "You have a family history of immune or chronic conditions",
    "You want to understand your gut or genetic risks",
    "You feel tired even though you try to stay healthy",
  ]
};

function Page() {
  return (
    <div>
      <ServicesHero {...servicesPageData.hero} />
      {/* <TextSection {...servicesPageData.textSectionData} /> */}
      <InfoSection {...servicesPageData.infoSection} />
      
      <Cards data={servicesPageData.cards} />
      {/* Static repeated Imagetexts – ideally should be dynamic later */}
      

      <ContactSection />
            <ContactForm />
    </div>
  );
}

export default Page;
