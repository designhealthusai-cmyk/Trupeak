import React from 'react';
import ServicesHero from '@/components/ServicesHero';
import InfoSection from '@/components/InfoSection';
import OurApproach from './OurApproach';
import Cards from '@/components/cards';
import WhyTrupeakBeauty from './WhyTrupeakBeauty';
import FeatureSection from "./InfoCard";
import ConversationSection from './ConversationSection';
import ContactSection from '@/components/ContactSection';
import ContactForm from '@/components/ContactForm';
const servicesPageData = {
  hero: {
    title: "Beauty Aesthetics at Trupeak",
    subtitle: "Where clinical precision meets regenerative care.",
    image: "/images/beauty/1.jpg",
  },
  infoSection: {
    title: "Overview",
    description: `At TrupeakTM  enhanced beauty transformation is a 
culmination of managing and altering your biological 
blueprint.

It encompasses detailed diagnostics into how your 
body functions, how you feel each day, and how 
confident you are in your skin.

Our treatments are based on medical insight and 
supported by therapies that work with your body. 
These treatments and interventions are highly 
personalized and conducted only by certified 
professionals who are experts in their fields.

Whether you’re noticing changes with age or healing 
after childbirth or surgery, we create plans that feel 
personal, safe, and true to you.`,
    // buttonText: "Know More",
    // buttonLink: "/services",
    images: [
      "/images/beauty/2.jpg",
      "/images/beauty/3.jpg",
      "/images/beauty/4.jpg",
    ],
  },
  ourApproach: {
    title: "Our Approach",
    description:
      "Each recovery plan is customized based on injury severity, pain patterns, and mobility limitations. Key focus areas include",
    points: [
      "Joint alignment and post–trauma stabilization",
      "Muscle memory reactivation and neuromuscular training",
      "Cryotherapy and IV nutrient support for inflammation control",
      "Manual therapy to manage scar tissue and soft-tissue restriction",
    ],
    image: "/images/beauty/5.jpg",
  },
    cards: [
    {
    title: "Hair Restoration",
    description: [
      "We provide targeted, clinically designed solutions for hair thinning and loss."
    ]
  },
  {
    title: "Face Aesthetics",
    description: [
      "We use gentle, non-surgical methods to refresh your skin."
    ]
  },
  {
    title: "Injectable Therapies",
    description: [
      "Every face is different. That’s why we tailor all injectables, from muscle relaxers and fillers to collagen boosters and PRP, to fit your unique features."
    ]
  },
  {
    title: "Laser Treatments",
    description: [
      "Some changes in the body are hard to talk about, but they’re common."
    ]
  },
  {
    title: "Aesthetic Gynaecology",
    description: [
      "If surgery is part of your care plan, we refer you to certified specialists in aesthetic gynaecology."
    ]
  },
  {
    title: "Plastic Surgery Referrals",
    description: [
      "We work with skilled plastic surgeons when surgical care is the best fit."
    ]
  },
  
  ],
  whyTrupeak: {
    title: "Why Trupeak Beauty Aesthetics",
    points: [
      "Beauty is more than just your appearance.",
      "It’s a reflection of health, vitality, and emotional well-being.",
      "At Trupeak, every detail of our aesthetic approach is rooted in clinical insight, regenerative care, and personalized diagnostics to ensure each client receives tangible outcomes that feel authentic and enduring.",
    ],
    image: "/images/beauty/6.jpg", // Replace with your image path
  },
  features : [
  {
    title: "Clinically Guided Diagnostics",
    description:
      "Each client begins with a tailored evaluation, including skin analysis, trichoscopy, hormonal assessments, or micronutrient testing as needed."
  },
  {
    title: "Medical-Grade Technologies and Protocols",
    description:
      "All interventions are performed using certified, clinically validated technologies and formulations. From platelet-rich plasma and more."
  },
  {
    title: "Designed for Privacy and Recovery",
    description:
      "Trupeak centers are designed for discretion, calm, and restorative care. Treatments take place in serene, private settings."
  },
  {
    title: "Integrated Wellness Support",
    description:
      "Healthy skin starts on the inside. We pay close attention to your hormones, diet, and how your body handles stress."
  },
  {
    title: "Surgical Referral Partnerships",
    description:
      "Some treatments call for surgery. We refer you to trusted surgeons, help you prepare, and support you after treatment."
  },
  {
    title: "Realistic Results and Long-Term Care",
    description:
      "We believe in results you can see without shortcuts or pressure. After treatment, we set up a long-term plan for you."
  }
],
  conversationData : {
  heading: "Start With a Conversation",
  description:
    "Every step starts with listening. Whether you're looking to refresh your skin, restore hair growth, or feel stronger after giving birth, we'll work with you to create a care plan that fits your lifestyle.",
  backgroundImage: "/images/hospital-hall.jpg",
  cards: [
    { text: "Book your private consultation when you’re ready." },
    { text: "We’ll start with a conversation and build your care plan." }
  ]
}
}
function Page() {
  return (
    <>
    <ServicesHero {...servicesPageData.hero} />
    <InfoSection {...servicesPageData.infoSection} />
     <OurApproach {...servicesPageData.ourApproach} />
     <Cards data={servicesPageData.cards} />
     <WhyTrupeakBeauty {...servicesPageData.whyTrupeak} />
     <FeatureSection
  heading="What Sets Us Apart"
  cards={servicesPageData.features}
  footerText="Every Trupeak aesthetic plan is backed by biomarker insights, clinical imaging, and regenerative therapies. From PRP to post–surgical nutrition, we don’t guess; we measure."
/>

<ConversationSection {...servicesPageData.conversationData} />
<ContactSection/>
<ContactForm/>

    </>
  );
}

export default Page;
