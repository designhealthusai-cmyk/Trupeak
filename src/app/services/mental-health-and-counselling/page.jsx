import React from 'react';
import ServicesHero from '@/components/ServicesHero';

import InfoSection from '@/components/InfoSection';

import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import Cards from '@/components/cards';

const servicesPageData = {
  hero: {
    title: "Mental Health and Counselling at Trupeak",
    subtitle: "Focused support that adapts to your body’s needs at every life stage.",
    image: "/images/hero.jpg",
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
    title: "Your Path to Preventive Healthcare",
    description: `At Trupeak™ we look beyond surface symptoms to identify root-level dysfunctions before they develop into chronic illness. Our interventions target multiple systems using advanced diagnostics, evidence-based therapies, and a personalized, data-led care model. Each protocol is crafted to optimize your metabolic, hormonal, neurological, and immune health. We work to reset your biology and support long-term well-being from the inside out.`,
    buttonText: "Know More",
    buttonLink: "/services",
    images: [
      "/images/doctors/doc1.jpg",
      "/images/doctors/doc2.jpg",
      "/images/doctors/doc3.jpg",
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

      <ContactSection />
            <ContactForm />
    </div>
  );
}

export default Page;
