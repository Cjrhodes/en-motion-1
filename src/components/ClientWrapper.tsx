// src/components/ClientWrapper.tsx
"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import HeaderSection from '@/components/header/HeaderSection';
import Newsletter from '@/components/newsletter/Newsletter';
import PricingSection from '@/components/pricing/PricingSection';
import ContactModal from '@/components/ContactModal';
import ContactFormModal from '@/components/modal/ContactFormModal';
import FooterSection3 from '@/components/footer/FooterSection3';
import HeroSlider from '@/components/hero/HeroSlider';

// Dynamic imports for client-only components
const TestimonialSection3 = dynamic(() => import('@/components/testimonials/TestimonialSection3'), { ssr: false });
const FounderSection = dynamic(() => import('@/components/founder/FounderSection'), { ssr: false });

const ClientWrapper: React.FC = () => {
  return (
    <>
      <HeaderSection contactModal={true} />
      <HeroSlider /> {/* Top */}
      <PricingSection /> {/* After services, moved up */}
      <Newsletter />
      <FounderSection />
      <TestimonialSection3 />
      <ContactModal />
      <ContactFormModal />
      <FooterSection3 />
    </>
  );
};

export default ClientWrapper;