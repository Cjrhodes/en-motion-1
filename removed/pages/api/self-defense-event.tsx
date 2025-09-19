'use client'

import React from 'react';
import TransparentNavbar from '@/components/navbar/Navbar';
import SelfDefenseEvent from '@/components/SelfDefenseEvent';
import FooterSection3 from "@/components/footer/FooterSection3";

export default function SelfDefenseEventPage() {
  return (
    <>
      <TransparentNavbar />
      <SelfDefenseEvent />
      <FooterSection3 />
    </>
  );
}