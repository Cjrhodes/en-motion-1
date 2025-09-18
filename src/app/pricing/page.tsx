import React from "react";
import { Metadata } from "next";
import HeaderSection from "@/components/header/HeaderSection";
import FooterSection3 from "@/components/footer/FooterSection3";
// import SidebarSection from "@/components/side-panel/SidebarSection";
// import ContactFormModal from "@/components/modal/ContactFormModal";
import PricingSection from "@/components/pricing/PricingSection"; // Import the PricingSection component
//import Lightbox from "@/components/modal/Lightbox";

export const metadata: Metadata = {
  title: "Pricing - En Motion", // Update title for the pricing page
  description: "Choose the best pricing plan for your fitness goals at En Motion.", // Update description
};

export default function PricingPage() {
  return (
    <>
      <HeaderSection contactModal={false} />
      <PricingSection />
      <FooterSection3 />
      {/* <SidebarSection /> */}
      {/* <ContactFormModal /> */}
   
    </>
  );
}
