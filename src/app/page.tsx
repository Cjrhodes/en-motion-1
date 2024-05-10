
import React from "react";
import HeaderSection from "@/components/header/HeaderSection";
import AboutSection3 from "@/components/about/AboutSection3";
import FooterSection3 from "@/components/footer/FooterSection3";
import SidebarSection from "@/components/side-panel/SidebarSection";
import ContactFormModal from "@/components/modal/ContactFormModal";
import HeroSlider from "@/components/hero/HeroSlider";
import { trainingProgramData } from "@/data/Data";
import TrainingProgram from "../components/program/TrainingProgram";
import { spaceGrotesk } from "./fonts";
import FounderSection from "@/components/founder/FounderSection";
import DecoLineSection from "@/components/decoline/DecolineSection";
import VideoSection3 from "@/components/video/VideoSection3";
import VideoModal from "@/components/modal/VideoModal";




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
        <AboutSection3 />
      
        <TrainingProgram  />      
        <DecoLineSection />
        <FounderSection />
        <DecoLineSection />   
        <VideoSection3/>
        <DecoLineSection /> 
        <FooterSection3 />
      </div>
      <ContactFormModal />
      <VideoModal videoUrl="https://www.youtube.com/embed/wV5yw3cqEs8?si=JcRR0qB7_lkdlX4h" />
      
    </main>
  );
}
