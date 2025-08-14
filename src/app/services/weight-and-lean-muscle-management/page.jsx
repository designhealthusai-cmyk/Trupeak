import React from 'react';
import ServicesHero from '@/components/ServicesHero';
import Cards from '@/components/cards';
import InfoSection from '@/components/InfoSection';
import ContactSection from '@/components/ContactSection';
import ContactForm from '@/components/ContactForm';
import ProgramGoals from '@/components/ProgramGoals';
import Imagetext from '@/components/Imagetext';
import StepsSection from '@/components/StepsSection';
import Content from '@/components/Content';
const servicesPageData = {
  hero: {
    title: "Weight and Lean Muscle Management",
    subtitle: "Weight and Lean Body Mass Management (CEO Protocol)",
    description: `Effective body transformation is more than lowering
the digits on a scale. This program centers on strength
development, metabolic enhancement, and muscle
preservation, the foundations for lasting health and
vitality.`,
    image: "/images/weight/1.jpg",
  },

  infoSection: {
    title: "Overview",
    description: `Effective body transformation is more than lowering the digits on a scale. This program centers on strength development, metabolic enhancement, and muscle preservation, the foundations for lasting health and vitality.
The framework builds on TrupeakTM CEO Protocol, first known as the SavenG Protocol. Developed for safe glucose control in intensive-care settings, its nurse-led structure emphasized precision and consistency. 
TrupeakTM now applies the same disciplined, data-driven logic to preventive and performance care, regulating metabolism, supporting glucose balance, and improving body composition outside the hospital environment.`,
    buttonText: "Know More",
    buttonLink: "/services",
    images: [
      "/images/weight/2.jpg",
      "/images/weight/3.jpg",
      "/images/weight/4.jpg",
    ],
  },

  programGoals: {
    title: "Program Goals",
    description: `Our priority is reducing excess fat while
maintaining or expanding lean muscle. Studies
confirm that higher muscle mass and lower fat
improve metabolic health, insulin sensitivity, and
physical function. Protecting muscle also guards
against the metabolic slowdown common in crash
diets.`,
    image: "/images/weight/5.jpg",
  },

  cards: [
    {
      title: "Body Composition Monitoring",
      description: ["Regular assessments measure fat mass, lean tissue, water balance, and limb-to-limb symmetry."],
    },
    {
      title: "Comprehensive Medical Review",
      description: ["A functional-medicine consultation explores thyroid status, insulin response, inflammation, adrenal stress, gut health, and lifestyle habits."],
    },
    {
      title: "MuscleSound - Ultrasound Analysis",
      description: ["This non-invasive scan evaluates muscle glycogen, hydration, and fat infiltration, providing real-time insight into tissue quality."],
    },
    {
      title: "InBody 970 - Bioelectrical Impedance",
      description: ["In seconds, this device delivers precise readings of visceral fat, segmental muscle, water distribution, and basal metabolic rate."],
    },
    {
      title: "Q-NRG - Indirect Calorimetry",
      description: ["By measuring oxygen use and carbon dioxide output, this test identifies your true resting energy expenditure."],
    },
    {
      title: "Sleep Cycle Evaluation",
      description: ["Wearable trackers, questionnaires, or sleep studies uncover poor sleep patterns, apnea, or hormonal disruptions."],
    },
    {
      title: "Nutrition Planning and Counselling",
      description: ["Meal plans depend on your clinical data, metabolic rate, and personal preferences."],
    },
    
  ],

  imageTextData: {
    title: "Protocol Philosophy",
    description: `The original hospital model maintained blood glucose 
between 150 and 200 mg/dL over 12-hour windows using 
a structured, nurse-friendly algorithm. We extend that 
disciplined approach to multiple biomarkers, glucose, 
fat distribution, muscle quality, and energy expenditure 
so every step is measurable, safe, and consistent.`,
    image: "/images/weight/6.jpg", // ✅ singular
    
  },
whatToExpectData: {
    title: "What to Expect",
    steps: [
      {
        title: "Comprehensive Evaluation:",
        description: "Your journey begins with a detailed assessment and baseline tests.",
      },
      {
        title: "Personalized Plan:",
        description: "A tailored strategy is created based on your unique body composition and goals.",
      },
      {
        title: "Ongoing Monitoring:",
        description: "Clinicians track metabolic markers, body composition, and your feedback at every visit.",
      },
      {
        title: "Optimized Progress:",
        description: "Clinicians track metabolic markers, body composition, and your feedback at every visit.",
      },
    ],
  },
  contentData: {
  title: "Next Steps",
  description: `If you are ready for a science-backed, doctor-driven and evidence-based
transformation, the Weight and Lean Muscle Management Program offers clear
direction. With expert oversight, advanced diagnostics, and individualized care, 
you can achieve a leaner, stronger, and healthier body that performs at its best every day.`,
},
};

function Page() {
  const { hero, infoSection, programGoals, cards, imageTextData, whatToExpectData , contentData} = servicesPageData;

  return (
    <div>
      <ServicesHero {...hero} />
      <InfoSection {...infoSection} />
      <ProgramGoals {...programGoals} />
      <Cards data={cards} />
      <Imagetext {...imageTextData} />
      <StepsSection {...whatToExpectData} />
      <Content {...servicesPageData.contentData} />
      <ContactSection />
      <ContactForm />
    </div>
  );
}

export default Page;
