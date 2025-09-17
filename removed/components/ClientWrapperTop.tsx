// src/components/ClientWrapperTop.tsx
"use client";
import React from 'react';
import HeaderSection from '@/components/header/HeaderSection';
import HeroSlider from '@/components/hero/HeroSlider';
import ContactFormModal from '@/components/modal/ContactFormModal';

const ClientWrapperTop: React.FC = () => {
  return (
    <>
      <HeaderSection contactModal={true} />
      <HeroSlider />
      <ContactFormModal />
    </>
  );
};

export default ClientWrapperTop;
