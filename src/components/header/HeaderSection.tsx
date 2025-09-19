"use client";
import { useAppDispatch } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { usePathname } from "next/navigation";
import TransparentNavbar from "@/components/navbar/Navbar";

type Props = {
  contactModal: boolean;
};

const HeaderSection = ({ contactModal }: Props) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const openContactModal = () => {
    // Use the action creator as a function
    const action = toggleContactModalOpen("");
    dispatch(action);
  };

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isHeaderFixed ? "fixed" : ""}`}>
      <TransparentNavbar />
    </header>
  );
};

export default HeaderSection;
