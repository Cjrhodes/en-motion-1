import React from "react";
import HeaderSection from "@/components/header/HeaderSection";
import AboutSection3 from "@/components/about/AboutSection3";
import FooterSection3 from "@/components/footer/FooterSection3";

import ContactFormModal from "@/components/modal/ContactFormModal";
import HeroSlider from "@/components/hero/HeroSlider";

import GradientDivider from "@/components/decoline/gradient";
import { spaceGrotesk } from "./fonts";
import FounderSection from "@/components/founder/FounderSection";
import DecoLineSection from "@/components/about/decoline/DecolineSection";
import VideoSection3 from "@/components/video/VideoSection3";
import VideoModal from "@/components/modal/VideoModal";
import PersonalTrainingProgram from "@/components/program/PersonalTrainingProgram";
import SelfDefense from "@/components/program/SelfDefense";
import CorporateWellness from "@/components/program/CorporateWellness";
import OnlineTraining from "@/components/program/OnlineTrainingProgram";

import TestimonialSection3 from "@/components/testimonials/TestimonialSection3";




export const metadata = {
  title: "En Motion",
  description: "Developed by Chris Rhodes",
};

export default function Home() {
  return (
    <main className={`home-11 trainer-home ${spaceGrotesk.className}`}>   

      <div id="mainContent">
        <HeaderSection contactModal={true} />
        <HeroSlider />
        <GradientDivider
  height="12px"
  gradient="linear-gradient(to right, #8b008b, #4b0082)"
  style={{ backgroundImage: 'solid' }}
/>
        <AboutSection3 />

<GradientDivider
  height="5px"
  gradient="linear-gradient(to right, #800000, #330000)"
  style={{
    backgroundImage: 'dotted',
    backgroundSize: '4px 4px',
    backgroundPosition: '0 0, 2px 2px',
  }}
/>


        <PersonalTrainingProgram />
        <GradientDivider
  height="5px"
  gradient="linear-gradient(to right, #800000, #330000)"
  style={{
    backgroundImage: 'dotted',
    backgroundSize: '4px 4px',
    backgroundPosition: '0 0, 2px 2px',
  }}
/>
      
        <SelfDefense />
        <GradientDivider
  height="5px"
  gradient="linear-gradient(to right, #800000, #330000)"
  style={{
    backgroundImage: 'dotted',
    backgroundSize: '4px 4px',
    backgroundPosition: '0 0, 2px 2px',
  }}
/>
        <CorporateWellness />
        <GradientDivider
  height="5px"
  gradient="linear-gradient(to right, #800000, #330000)"
  style={{
    backgroundImage: 'dotted',
    backgroundSize: '4px 4px',
    backgroundPosition: '0 0, 2px 2px',
  }}
/>
    
        <OnlineTraining />


        <DecoLineSection />
        <FounderSection />
        <DecoLineSection />   
   
        <DecoLineSection /> 
        <TestimonialSection3/>
        <FooterSection3 />
      </div>
      <ContactFormModal />
      <VideoModal videoUrl="https://www.youtube.com/embed/wV5yw3cqEs8?si=JcRR0qB7_lkdlX4h" />
      
    </main>
  );
}
