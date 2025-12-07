import React from "react";
import { Metadata } from "next";
import HeaderSection from "@/components/header/HeaderSection";
import FooterSection3 from "@/components/footer/FooterSection3";
// import SidebarSection from "@/components/side-panel/SidebarSection";
// import ContactFormModal from "@/components/modal/ContactFormModal";
import PricingSection from "@/components/pricing/PricingSection"; // Import the PricingSection component
//import Lightbox from "@/components/modal/Lightbox";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Affordable fitness training packages at En Motion Miami. Choose from personal training, self-defense classes, and corporate wellness programs. View our pricing plans.",
  openGraph: {
    title: "Pricing | En Motion Miami",
    description: "Affordable fitness training packages. Personal training, self-defense classes, and corporate wellness programs.",
    url: "/pricing",
  },
  alternates: {
    canonical: "/pricing",
  },
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
