// src/components/ClientWrapperBottom.tsx
"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import Newsletter from '@/components/newsletter/Newsletter';
import PricingSection from '@/components/pricing/PricingSection';
import ContactModal from '@/components/ContactModal';
import ContactFormModal from '@/components/modal/ContactFormModal';
import FooterSection3 from '@/components/footer/FooterSection3';

const TestimonialSection3 = dynamic(() => import('@/components/testimonials/TestimonialSection3'), { ssr: false });
const FounderSection = dynamic(() => import('@/components/founder/FounderSection'), { ssr: false });

const ClientWrapperBottom: React.FC = () => {
  return (
    <>
      <PricingSection />
      <Newsletter />
      <FounderSection />
      <TestimonialSection3 />
      <ContactModal />
      <ContactFormModal />
      <FooterSection3 />
    </>
  );
};

export default ClientWrapperBottom;