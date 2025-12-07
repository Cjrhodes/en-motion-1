import React from 'react';
import type { Metadata } from 'next';
import SelfDefenseEvent from '@/components/SelfDefenseEvent';
import TransparentNavbar from '@/components/navbar/Navbar';
import FooterSection3 from "@/components/footer/FooterSection3";

export const metadata: Metadata = {
  title: 'Self-Defense Seminar',
  description: 'Join our self-defense seminar in Miami, FL. Learn practical safety skills, situational awareness, and defensive techniques. Perfect for beginners and all fitness levels.',
  openGraph: {
    title: 'Self-Defense Seminar | En Motion Miami',
    description: 'Learn practical self-defense skills at our Miami seminar. Perfect for beginners and all fitness levels.',
    url: '/self-defense-event',
  },
  alternates: {
    canonical: '/self-defense-event',
  },
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