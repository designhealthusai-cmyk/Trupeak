
import React from 'react';
import Hero from '@/components/regenerative-therapies/Hero';
import Imagetext from '@/components/Imagetext';
import Informative from '@/components/regenerative-therapies/Informative';
import Cards from '@/components/cards';
import WhyTrupeakBeauty from '../../beauty-aesthetics/WhyTrupeakBeauty';
import InfoSection from '@/components/regenerative-therapies/WhoThisIsForSection';
import InfoBanner from '@/components/regenerative-therapies/InfoBanner';
import CtaSection from '@/components/regenerative-therapies/CtaSection';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
const Page = () => {
  const cardsData = [
    {
      title: "Targeted Cellular Repair",
      description: [
        "Senescent cell clearance to promote healthy cellular turnover",
        "Mitochondrial optimization for improved energy and metabolic health",
        "Epigenetic reprogramming to counteract age-related decline",
        "Microinflammation reduction to strengthen immune balance",
        "Neurohormonal regulation to stabilize mood, sleep, and stress response",
        "Joint and tissue regeneration for enhanced mobility and healing"
      ]
    },
    {
      title: "Personalized Intervention Plans",
      description: [
        "NAD⁺ infusions to boost mitochondrial energy and DNA repair",
        "IV micronutrient therapy for faster nutrient delivery and recovery",
        "Peptides and exosomes for targeted tissue regeneration",
        "Hormonal recalibration to restore endocrine and metabolic stability",
        "Manual regenerative physiotherapy for structural recovery",
        "Oxygen, cryo, or PEMF therapy to reduce inflammation and support healing"
      ]
    }
  ];

  const whyTrupeakData = {
    title: "Why Trupeak Beauty Aesthetics",
    points: [
      "Beauty is more than just your appearance.",
      "It’s a reflection of health, vitality, and emotional well-being.",
      "At Trupeak, every detail of our aesthetic approach is rooted in clinical insight, regenerative care, and personalized diagnostics to ensure each client receives tangible outcomes that feel authentic and enduring."
    ],
    image: "/images/regenerative-therapies/restorative-medicine/5.webp"
  };

  const infoSectionData = {
  title: "Who This Is For",
  description:
    "You don’t need to be ill to benefit, you just need to be ready to function at your best. Restorative Medicine is ideal for:",
  items: [
    {
      title: "Executives",
      description: "Facing fatigue, poor sleep, or burnout"
    },
    {
      title: "Athletes",
      description: "Recovering from injury or seeking peak performance"
    },
    {
      title: "Individuals",
      description: "Healing from long COVID, surgery, or illness"
    },
    {
      title: "Patients",
      description: "In remission needing cellular and immune restoration"
    },
    {
      title: "Anyone",
      description: "Managing autoimmunity or inflammation"
    },
    {
      title: "High-functioning Individuals",
      description: "Seeking longevity and sustained vitality"
    }
  ]
};


  return (
    <>
      <Hero
        title="Restorative Medicine"
        subtitle="Science-led. Biologically aligned. Personally engineered."
        mainImage="/images/regenerative-therapies/restorative-medicine/2.webp"
        circleImage="/images/regenerative-therapies/restorative-medicine/1.webp"
      />
      
      <Imagetext
        description="At Trupeak, restoration begins deep within your cells not just at the surface. Our Restorative Medicine program is designed to repair biological wear, optimize system performance, and renew your body's ability to heal and thrive. Whether you're recovering from illness, managing burnout, or aiming for long-term vitality, this program supports you with precision diagnostics and clinically proven interventions tailored to your unique biology. We go beyond symptom relief to interpret what your body is really telling us. Each plan is guided by biomarker data, advanced testing, and a multidisciplinary team to address dysfunction at the cellular level and build lasting resilience."
        image="/images/regenerative-therapies/restorative-medicine/3.webp"
        reverse={true}
        bgColor="bg-one"
        textColor="text-two"
      />

      <Informative
        title="Why Restorative Medicine Matters"
        imageSrc="/images/regenerative-therapies/restorative-medicine/4.webp"
        leftText="Traditional medicine often focuses on symptom suppression. Restorative medicine aims to rebuild the body’s systems: neurological, endocrine, metabolic, immune, and musculoskeletal by addressing dysfunction at its root. Using regenerative therapies and cellular optimization tools, we support your body’s natural capacity to recover, regenerate, and reset."
        rightText="Every intervention is based on data. With over 800 biomarkers analyzed through our proprietary software, we uncover the biological story behind your symptoms and guide your return to optimal function."
      />

      <Cards data={cardsData} />
       <WhyTrupeakBeauty
        title={whyTrupeakData.title}
        points={whyTrupeakData.points}
        image={whyTrupeakData.image}
      />
      {/* ✅ New InfoSection */}
      <InfoSection
        title={infoSectionData.title}
        description={infoSectionData.description}
        items={infoSectionData.items}
        bgColor="#E6C98C"
        titleColor="#2BBFA7"
        cardBgColor="#0D1B33"
      />
     <InfoBanner
  title="Benefits of Restorative Medicine at Trupeak"
  subtitle="Core Focus"
  points={[
    "Cellular repair and energy rebalancing",
    "Hormonal and metabolic recalibration",
    "Regenerative support for joints/tissue",
    "Inflammation and oxidative stress control",
    "Personalized protocols guided by data",
  ]}
  image="/images/regenerative-therapies/restorative-medicine/6.webp"
  bgColor="#0D1B33"
  textColor="#FFFFFF"
  highlightColor="#E6C98C"
/>
<InfoBanner
  
  subtitle="Results"
  points={[
    "Improved vitality, stamina, and functioín",
    "Better mood, sleep, and cognitive clarity",
    " Enhanced mobility and physical resiliencæ",
    " Reduced pain and improved immune balance",
    "Long-term performance and biological resilience",
  ]}
  image="/images/regenerative-therapies/restorative-medicine/7.webp"
  bgColor="#0D1B33"
  textColor="#FFFFFF"
  highlightColor="#E6C98C"
  reverse={true}
/>
<CtaSection title="Ready to Rebuild From the Inside Out?"
  description="Restoration is not a luxury, it’s your biological right. Whether you're recovering or proactively optimizing, our evidence-based care helps you move, feel, and live better."
  buttonText="Book Your Appointment"
  buttonLink="#"
  backgroundImage="/images/regenerative-therapies/restorative-medicine/8.webp"
/>
    <ContactSection/>
     <ContactForm/>
    </>
  );
};

export default Page;
