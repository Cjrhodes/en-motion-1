'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useAppDispatch } from "@/redux/hooks";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { usePathname } from 'next/navigation';

function TransparentNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const dispatch = useAppDispatch();
  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const pathname = usePathname(); // ✅ Detect current route
  const isPricingPage = pathname === '/pricing';
  const isHomePage = pathname === '/';

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowMobileDropdown(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const toggleMobileDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMobileDropdown(!showMobileDropdown);
  };

  const openContactModal = () => {
    console.log("Opening contact modal");
    dispatch(toggleContactModalOpen(""));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-1 ${styles.navbar} ${isPricingPage || isScrolled ? styles.solidBg : ''}`}
    >
        <div className={`container-fluid ${styles['container-fluid']}`}>
          {/* Logo */}
          <Link href="/" className={`navbar-brand ${styles['navbar-brand']}`}>
            <img src="/img/whitelogo.png" alt="Logo" className="img-fluid logoImg" />
          </Link>

          {/* Nav Links */}
          <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''} ${styles['navbar-collapse']}`} id="navbarNav">
            <ul className={`navbar-nav d-none d-lg-flex ${styles['navbar-nav']}`}>
              <li className="nav-item">
                <a className={`nav-link ${styles['nav-link']}`} href={isHomePage ? "#About" : "/#About"} style={{ color: '#f8f9fa' }}>
                  About
                </a>
              </li>
              <li className={`nav-item dropdown ${styles.dropdown}`} ref={dropdownRef}>
                <button
                  className={`nav-link dropdown-toggle ${styles['nav-link']}`}
                  onClick={toggleDropdown}
                  style={{ color: '#f8f9fa', background: 'none', border: 'none' }}
                >
                  Programs
                </button>
                <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                  <li><a className="dropdown-item" href={isHomePage ? "#Self-Defense" : "/#Self-Defense"}>Self-Defense</a></li>
                  <li><a className="dropdown-item" href={isHomePage ? "#OnlineTraining" : "/#OnlineTraining"}>Online Training</a></li>
                  <li><a className="dropdown-item" href={isHomePage ? "#PersonalTraining" : "/#PersonalTraining"}>Personal Training</a></li>
                  <li><a className="dropdown-item" href={isHomePage ? "#CorporateWellness" : "/#CorporateWellness"}>Corporate Wellness</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/pricing" className={`nav-link ${styles['nav-link']}`} style={{ color: '#f8f9fa' }}>
                  Pricing
                </Link>
              </li>
              {/* Add Self-Defense Event link */}
              <li className="nav-item">
                <Link href="/self-defense-event" className={`nav-link ${styles['nav-link']}`} style={{ color: '#f8f9fa' }}>
                  Self-Defense Seminar
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger Toggle */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            onClick={toggleMenu}
            aria-controls="offcanvasNavbar"
            aria-expanded={showMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Social Icons, Phone Number, and Free Evaluation Button */}
          <ul className={`navbar-nav ms-auto d-none d-lg-flex align-items-center ${styles.navbarRightItems}`}>
            <li className={`nav-item ${styles.phoneItem}`}>
              <a className="nav-link" href="tel:786-925-8086" style={{ color: '#f8f9fa' }}>
                (786) 925-8086
              </a>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link buyTicketsBtn rounded-pill ${styles.freeEvaluationBtn}`}
                onClick={openContactModal}
                style={{ color: '#f8f9fa', backgroundColor: '#ac161e' }}
              >
                Free Evaluation
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Menu */}
      <div
        className={`offcanvas offcanvas-end ${showMenu ? 'show' : ''} ${styles.mobileMenu}`}
        id="offcanvasNavbar"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={toggleMenu}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className={styles.mobileMenuList}>
            <li className={styles.mobileMenuItem}>
              <a className={styles.mobileMenuLink} href={isHomePage ? "#About" : "/#About"} onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className={styles.mobileMenuItem}>
              <button
                className={styles.mobileMenuLink}
                onClick={toggleMobileDropdown}
                style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
              >
                Programs/Services {showMobileDropdown ? '▴' : '▾'}
              </button>
              <ul className={`${styles.mobileDropdown} ${showMobileDropdown ? styles.show : ''}`}>
                <li className={styles.mobileDropdownItem}><a className={styles.mobileDropdownLink} href={isHomePage ? "#Self-Defense" : "/#Self-Defense"} onClick={toggleMenu}>Self-Defense</a></li>
                <li className={styles.mobileDropdownItem}><a className={styles.mobileDropdownLink} href={isHomePage ? "#OnlineTraining" : "/#OnlineTraining"} onClick={toggleMenu}>Online Training</a></li>
                <li className={styles.mobileDropdownItem}><a className={styles.mobileDropdownLink} href={isHomePage ? "#PersonalTraining" : "/#PersonalTraining"} onClick={toggleMenu}>Personal Training</a></li>
                <li className={styles.mobileDropdownItem}><a className={styles.mobileDropdownLink} href={isHomePage ? "#CorporateWellness" : "/#CorporateWellness"} onClick={toggleMenu}>Corporate Wellness</a></li>
              </ul>
            </li>
            <li className={styles.mobileMenuItem}>
              <Link href="/self-defense-event" className={styles.mobileMenuLink} onClick={toggleMenu}>
                Self-Defense Seminar
              </Link>
            </li>
            <li className={styles.mobileMenuItem}>
              <Link href="/pricing" className={styles.mobileMenuLink} onClick={toggleMenu}>
                Pricing
              </Link>
            </li>
          </ul>
          <div className={styles.mobileMenuDivider}></div>
          <ul className={styles.mobileMenuList}>
            <li className={styles.mobileMenuItem}>
              <a className={styles.mobileMenuLink} href="tel:786-925-8086">
                (786) 925-8086
              </a>
            </li>
            <li className={styles.mobileMenuItem}>
              <button
                className={`buyTicketsBtn rounded-pill ${styles.freeEvaluationBtn}`}
                onClick={() => { openContactModal(); toggleMenu(); }}
                style={{ color: '#f8f9fa', backgroundColor: '#ac161e', width: '100%' }}
              >
                Free Evaluation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TransparentNavbar;
