import React from 'react';
import SelfDefenseEvent from '@/components/SelfDefenseEvent';
import TransparentNavbar from '@/components/navbar/Navbar';
import FooterSection3 from "@/components/footer/FooterSection3";

export const metadata = {
  title: 'Self-Defense Event | En Motion',
  description: 'Learn practical skills for real-world safety at our Self-Defense Seminar',
}

export default function SelfDefenseEventPage() {
  return (
    <>
      <TransparentNavbar />
      <SelfDefenseEvent />
      <FooterSection3 />
    </>
  );
}