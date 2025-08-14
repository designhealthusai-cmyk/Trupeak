import React from 'react';
  
  

  import IntroSection from "@/components/IntroSection";
import MissionSection from "@/components/MissionSection";
import RunningText from "@/components/RunningText";
import ScienceBehindServices from "@/components/ScienceBehindServices";
import Videosection from "@/components/Videosection";
import TransformNow from "@/components/TransformNow";
import TestimonialShowcase from "@/components/Testimonial";
import GSAPCardStack from "@/components/SolutionsWithPurpose.jsx";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos"

export default function Home() {
  return (
    <>
    <Hero />
      <IntroSection />
      <Logos />
      <MissionSection />
      
      <RunningText />
      <GSAPCardStack />
      {/* <ScienceBehindServices /> */}
      {/* <TestimonialShowcase /> */}
      {/* <Videosection /> */}
      <TransformNow />
    </>
  )
}