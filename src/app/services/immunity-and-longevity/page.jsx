import React from 'react';
import ServicesHero from '@/components/ServicesHero';
import TextSection from '@/components/TextSection';
import FitCheckSection from '@/components/FitCheckSection';
import InfoSection from '@/components/InfoSection';
import Imagetext from '@/components/Imagetext';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
const servicesPageData = {
  hero: {
    title: "Immunity & Longevity",
    subtitle: "A focused approach to lifelong resilience",
    
    image: "/images/immunity/1.jpg",
  },
  textSectionData: {
    
    description: `Longevity isn’t defined by age alone. It depends on how well your biology responds to stress, recovers from damage, and adapts over time. This program combines detailed diagnostics with personalized medical guidance to assess your immune strength, biological age, and overall resilience. It helps uncover hidden imbalances before they develop into disease and supports your path toward long-term health.`,
    bgColor: "bg-one",       // dark blue background
    titleColor: "text-two",  // gold title
    textColor: "text-two",    // light gray text
    align: "left",
  },
  textSectionData1: {
    
    description: `We don’t just give you test results. We help you understand what they mean and build a plan that fits your needs. That might include changes to your diet, supplements, focused therapies, or further referrals. We check your progress through follow-up tests so you can see real changes over time.`,
    bgColor: "bg-two",       // dark blue background
    titleColor: "text-white",  // gold title
    textColor: "text-white",    // light gray text
    align: "left",
  },
  infoSection: {
    title: "Overview",
    description: `Longevity isn’t defined by age alone. It depends on how well your biology responds to stress, recovers from damage, and adapts over time. This program combines detailed diagnostics with personalized medical guidance to assess your immune strength, biological age, and overall resilience. It helps uncover hidden imbalances before they develop into disease and supports your path toward long-term health.`,
    buttonText: "Know More",
    buttonLink: "/services",
    images: [
      "/images/Immunity/2.jpg",
      "/images/Immunity/3.jpg",
      "/images/Immunity/4.jpg",
    ],
  },
  imageTextData: {
    title: "Your Biology, Visualized",
    description: `Through detailed diagnostics and visualization, we give you a real look at your biological health — including gut, immune, and genetic markers. These insights help guide a proactive and preventive care plan tailored just for you.`,
    image: "/images/biology.jpg",
  },
};
const fitCheckData = {
  title : "Is This Program Right for You?",
  subtitle : "This may be a good fit if:",
  imageSrc: "/images/main.jpg", // change to your actual path
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
      <TextSection {...servicesPageData.textSectionData} />
      
        <InfoSection {...servicesPageData.infoSection} />
        <Imagetext
  title="Immune System Assessment and Analysis"
  description="Your immune system is the body’s first line of defense against illness, inflammation, and early aging. We carry out a complete analysis, including blood work, immunoglobulin levels, lymphocyte subtypes, and markers like CRP and interleukins. These results show whether your immune system is underactive, chronically active, or fighting hidden infections. Based on the findings, care may involve micronutrients, immune support therapies, or detox strategies to help restore balance and reduce stress on your system."
 
  image="/images/Immunity/5.jpg" // make sure this image exists in /public/images/
  reverse={false}
  bgColor="bg-white"
  textColor="text-black"
  buttonText="Know More"
  buttonLink="#"
   
/>
<Imagetext
  title="Genetic Mapping"
  description="Genetic testing reveals tendencies toward conditions like autoimmunity, oxidative stress, detox difficulties, or immune imbalance. We focus on specific SNPs (single nucleotide polymorphisms) tied to inflammation, antioxidant systems (such as SOD2 and GPX1), and immune markers like IL6 and TNF-alpha. This information helps us design an approach tailored to your genetic profile. Personalizing your care using genetic insights can lower your risk of long-term illness and help your body handle stress and inflammation more effectively."
 
  image="/images/Immunity/6.jpg" // make sure this image exists in /public/images/
  reverse={false}
  bgColor="bg-two"
  textColor="text-white"
  buttonText="Know More"
  buttonLink="#"
   
/>
<Imagetext
  title="Gut Microbiome Mapping"
  description="A large part of your immune system lives in your gut. We check your gut bacteria to understand its balance, spot harmful strains, and look at how well it produces helpful compounds like short-chain fatty acids. We also check markers like zonulin to see if your gut lining is healthy. This helps us find problems like dysbiosis or small intestinal bacterial overgrowth (SIBO).When the gut is out of balance, it can weaken your immune system, lower your energy, cause skin problems, and affect your mood. Restoring gut health supports overall well-being."
 
  image="/images/Immunity/7.jpg" // make sure this image exists in /public/images/
  reverse={true}
  bgColor="bg-one"
  textColor="text-two"
  buttonText="Know More"
  buttonLink="#"
   
/>
<Imagetext
  title="Biological Age Mapping"
  description="Your body may not age at the same rate as your actual age. We check markers like telomere length, DNA quality, mitochondrial function, and signs of stress to see how your body is aging on the inside.

Knowing your biological age helps you understand your health more clearly. If it's higher than it should be, we focus on steps that support repair, improve energy, and ease long-term strain."
 
  image="/images/Immunity/8.jpg" // make sure this image exists in /public/images/
  reverse={false}
  bgColor="bg-white"
  textColor="text-two"
  buttonText="Know More"
  buttonLink="#"
   
/>


      
      
      <FitCheckSection {...fitCheckData} />
      <TextSection {...servicesPageData.textSectionData1} />
      <ContactSection />
            <ContactForm />
    </div>
  );
}

export default Page;
