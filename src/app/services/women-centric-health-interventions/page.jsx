import React from 'react';
import ServicesHero from '@/components/ServicesHero';

import InfoSection from '@/components/InfoSection';

import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import Cards from '@/components/cards';
import Textbg from './components/textbg';
const servicesPageData = {
  hero: {
    title: "Women-Centric Health Interventions",
    subtitle: "Focused support that adapts to your body’s needs at every life stage.",
    image: "/images/women-centric/1.jpg",
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
    description: `At Truepeak™, we understand that women’s health needs are dynamic and often underserved. Our women-centric interventions are developed to meet the unique physiological demands across different life stages, from hormonal imbalances to post-surgical recovery and age-related degeneration.`,
    buttonText: "Know More",
    buttonLink: "/services",
    images: [
      "/images/women-centric/2.jpg",
      "/images/women-centric/3.jpg",
      "/images/women-centric/4.jpg",
    ],
  },
  imageTextData: {
    title: "Protocol Philosophy",
    description: `The original hospital model maintained blood glucose between 150 and 200 mg/dL over 12-hour windows using a structured, nurse-friendly algorithm. We extend that disciplined approach to multiple biomarkers, glucose, fat distribution, muscle quality, and energy expenditure so every step is measurable, safe, and consistent.`,
    image: "/images/hero.jpg",
  },
  cards: [
    {
    title: "PCOS and PCOD",
    description: [
      "Advanced diagnostics to uncover hormonal, metabolic, and ovarian imbalances."
    ]
  },
  {
    title: "Menopause-Related Concerns",
    description: [
      "For women navigating perimenopause and menopause, our relief protocols offer support from hot flashes, sleep disturbances, mood shifts, and bone loss."
    ]
  },
  {
    title: "Hormone Balancing",
    description: [
      "Functional hormone mapping combined with clinical-grade bioidentical or micronutrient therapies."
    ]
  },
  {
    title: "Post-Hysterectomy Support",
    description: [
      "Women who have undergone uterine removal may face pelvic floor changes, sexual health concerns, and accelerated aging."
    ]
  },
  {
    title: "HPV Vaccine Guidance",
    description: [
      "We offer guidance and help connect young adults and eligible women with HPV vaccination resources."
    ]
  },
  {
    title: "UTI Prevention & Recurrence Management",
    description: [
      "Recurrent urinary tract infections are evaluated through microbiome, hydration, and anatomical profiling."
    ]
  },
  {
    title: "Osteoporosis & Bone Health",
    description: [
      "Bone density screening, nutritional interventions, and targeted physical therapy to prevent fractures and maintain skeletal strength."
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
      <Textbg
        backgroundImage="/images/doctorimages.jpg"
        textColor="white"
        position="center"
        title="Immune System Assessment"
        description="Your immune system is the body’s first line of defense against illness, inflammation, and early aging. We carry out a complete analysis including blood work, immunoglobulin levels, lymphocyte subtypes, and more."
      />

      <ContactSection />
            <ContactForm />
    </div>
  );
}

export default Page;
