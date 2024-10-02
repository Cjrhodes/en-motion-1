import React from "react";
import HeaderSection from "@/components/header/HeaderSection";
import AboutSection3 from "@/components/about/AboutSection3";
import FooterSection3 from "@/components/footer/FooterSection3";
import ContactFormModal from "@/components/modal/ContactFormModal";
import HeroSlider from "@/components/hero/HeroSlider";
import { spaceGrotesk } from "./fonts";
import FounderSection from "@/components/founder/FounderSection";
import DecoLineSection from "@/components/decoline/DecolineSection";
import Newsletter from "@/components/newsletter/Newsletter";
import PersonalTrainingProgram from "@/components/program/PersonalTrainingProgram";
import SelfDefense from "@/components/program/SelfDefense";
import CorporateWellness from "@/components/program/CorporateWellness";
import OnlineTraining from "@/components/program/OnlineTrainingProgram";
import dynamic from 'next/dynamic';


const TestimonialSection3 = dynamic(() => import('@/components/testimonials/TestimonialSection3'), { ssr: false });

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
        <SelfDefense />

        <AboutSection3 />    
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