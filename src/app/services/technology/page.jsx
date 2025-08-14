import React from 'react';
import ServicesHero from '@/components/ServicesHero';

import InfoSection from '@/components/InfoSection';

import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import Cards from '@/components/cards';

const servicesPageData = {
  hero: {
    title: "Technology",
    subtitle: "Focused support that adapts to your body’s needs at every life stage.",
    image: "/images/tech/1.jpg",
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
    description: `At Trupeak, technology is fully integrated into how we deliver care. From the first test to the latest therapy update, every step is driven by real-time health data. Instead of relying on guesswork, we tailor treatment plans using insights directly from your body. This allows our team to curate care based on actual results, not just symptoms, guesses, or broad averages.`,
    buttonText: "Know More",
    buttonLink: "/services",
    images: [
     "/images/tech/2.jpg",
     "/images/tech/3.jpg",
      "/images/tech/4.jpg",
    ],
  },
  imageTextData: {
    title: "Real Data, Real Decisions",
    description: `We use advanced lab testing and medical-grade diagnostics to study your hormonal health, metabolism, brain chemistry, and more.`,
    image: "/images/hero.jpg",
  },
  cards: [
    {
    title: "Ongoing Progress Checks",
    description: [
      "Every patient’s progress is closely monitored. We track changes in strength, recovery, mood, and biomarkers to fine-tune therapies and ensure you're moving in the right direction."
    ]
  },
 
  {
    title: "Biomarker-Based Insights",
    description: [
      "Each person is evaluated using over 800 biomarkers. These markers give insight into inflammation, immunity, organ health, tissue repair, and how your systems are working together."
    ]
  },
  {
    title: "Real Data, Real Decisions",
    description: [
      "We use advanced lab testing and medical-grade diagnostics to study your hormonal health, metabolism, brain chemistry, and more."
    ]
  },
  {
    title: "Monthly Health Summary",
    description: [
      "Patients receive a detailed monthly update highlighting what’s improved, what needs work, and what’s next. "
    ]
  },
  
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