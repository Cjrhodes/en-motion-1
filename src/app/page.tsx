import React from "react";
import type { Metadata } from 'next';
import HeaderSection from "src/components/header/HeaderSection";
import AboutSection3 from "src/components/about/AboutSection3";
import FooterSection3 from "src/components/footer/FooterSection3";
import HtmlContactFormModal from "src/components/modal/HtmlContactFormModal";
import HeroSlider from "src/components/hero/HeroSlider";
import { spaceGrotesk } from "./fonts";
import DecoLineSection from "src/components/decoline/DecolineSection";
import Newsletter from "src/components/newsletter/Newsletter";
import PersonalTrainingProgram from "src/components/program/PersonalTrainingProgram";
import SelfDefense from "src/components/program/SelfDefense";
import CorporateWellness from "src/components/program/CorporateWellness";
import OnlineTraining from "src/components/program/OnlineTrainingProgram";
import PricingSection from "src/components/pricing/PricingSection";
import dynamic from 'next/dynamic';

const TestimonialSection3 = dynamic(() => import('src/components/testimonials/TestimonialSection3'));
const FounderSection = dynamic(() => import('src/components/founder/FounderSection'));

export const metadata: Metadata = {
  title: "En Motion | Fitness & Self-Defense Training in Miami, FL",
  description: "Transform your life with En Motion in Miami, FL. Personal training, self-defense classes, corporate wellness programs, and online training. Book your free evaluation today!",
  openGraph: {
    title: "En Motion | Fitness & Self-Defense Training in Miami, FL",
    description: "Transform your life with personal training, self-defense classes, and corporate wellness programs in Miami.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className={`home-11 trainer-home ${spaceGrotesk.className}`}>   
      <div id="mainContent">
        <HeaderSection contactModal={true} />
        <section className="heroSliderSection">
          <HeroSlider />

        </section>
        
        <DecoLineSection />    
        <SelfDefense />        
        <PersonalTrainingProgram /> 
        <DecoLineSection />         
        <CorporateWellness />    
        <DecoLineSection />        
        <OnlineTraining />
        <DecoLineSection />
        <div id="About">
          <FounderSection />
        </div>
        <TestimonialSection3 />
        <DecoLineSection />      
        <Newsletter />       
        <FooterSection3 />
      </div>
      <HtmlContactFormModal />
    </main>
  );
}
