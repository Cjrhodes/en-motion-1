import React from "react";
import HeaderSection from "src/components/header/HeaderSection";
import AboutSection3 from "src/components/about/AboutSection3";
import FooterSection3 from "src/components/footer/FooterSection3";
import ContactFormModal from "src/components/modal/ContactFormModal";
import HeroSlider from "src/components/hero/HeroSlider";
import { spaceGrotesk } from "./fonts";
import DecoLineSection from "src/components/decoline/DecolineSection";
import Newsletter from "src/components/newsletter/Newsletter";
import PersonalTrainingProgram from "src/components/program/PersonalTrainingProgram";
import SelfDefense from "src/components/program/SelfDefense";
import CorporateWellness from "src/components/program/CorporateWellness";
import OnlineTraining from "src/components/program/OnlineTrainingProgram";
import dynamic from 'next/dynamic';

const TestimonialSection3 = dynamic(() => import('src/components/testimonials/TestimonialSection3'), { ssr: false });
const FounderSection = dynamic(() => import('src/components/founder/FounderSection'), { ssr: false });

export const metadata = {
  title: "En Motion",
  description: "Fitness and self-defense training in Miami, FL",
};

export default function Home() {
  return (
    <main className={`home-11 trainer-home ${spaceGrotesk.className}`}>   
      <div id="mainContent">
        <HeaderSection contactModal={true} />
        <HeroSlider />
        <DecoLineSection />   
        <AboutSection3 />   
        <SelfDefense />        
        <PersonalTrainingProgram /> 
        <DecoLineSection />             
        <SelfDefense />     
        <DecoLineSection /> 
        <CorporateWellness />    
        <DecoLineSection />        
        <OnlineTraining />      
        <DecoLineSection /> 
        <FounderSection />
        <TestimonialSection3 />
        <DecoLineSection />      
        <Newsletter />       
        <FooterSection3 />
      </div>
      <ContactFormModal />
    </main>
  );
}
