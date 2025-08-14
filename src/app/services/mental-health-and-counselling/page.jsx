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
    image: "/images/mental/1.jpg",
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
    description: `At Trupeak, mental well-being is treated as a key component of total health. Whether you're facing daily stress, long-term anxiety, or emotional burnout, we offer care that is grounded, respectful, and personalized. Every program is built to meet your needs, with a balance of clinical expertise and human understanding.`,
    // buttonText: "Know More",
    buttonLink: "/services",
    images: [
      "/images/mental/2.jpg",
      "/images/mental/3.jpg",
      "/images/mental/4.jpg",
    ],
  },
  imageTextData: {
    title: "Protocol Philosophy",
    description: `The original hospital model maintained blood glucose between 150 and 200 mg/dL over 12-hour windows using a structured, nurse-friendly algorithm. We extend that disciplined approach to multiple biomarkers, glucose, fat distribution, muscle quality, and energy expenditure so every step is measurable, safe, and consistent.`,
    image: "/images/hero.jpg",
  },
  cards: [
    {
    title: "Peptides for Mental Support",
    description: [
      "In some cases, we include peptides that help regulate mood, improve focus, and support cognitive function."
    ]
  },
  {
    title: "Counselling for Cancer-Related Stress",
    description: [
      "Our trained counselors offer a space to talk, reflect, and build coping skills through every stage of diagnosis and treatment."
    ]
  },
  {
    title: "Nutrition for Mental Clarity",
    description: [
      "We build customized nutrition strategies that support mood, reduce brain fog, and help balance your energy levels."
    ]
  },
  
  {
    title: "Private Sessions with Psychologists",
    description: [
      "Whether you're dealing with anxiety, grief, or life transitions, these sessions give you tools and structure to move through challenges"
    ]
  },
  {
    title: "Pediatric Counselling and Behavior Support",
    description: [
      "We work with children and families to support ADHD, anxiety, and other challenges using practical tools and consistent guidance."
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
