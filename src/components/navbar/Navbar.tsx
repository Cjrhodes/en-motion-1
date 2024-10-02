'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useAppDispatch } from "@/redux/hooks";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import ContactFormModal from '../modal/ContactFormModal'; 

function TransparentNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useAppDispatch();
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const openContactModal = () => {
    console.log("Opening contact modal");
    dispatch(toggleContactModalOpen());
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
        className={`navbar navbar-expand-lg navbar-dark ${
          isScrolled ? 'bg-dark' : 'bg-transparent'
        } fixed-top py-1 ${styles.navbar}`}
      >
        <div className={`container-fluid ${styles['container-fluid']}`}>
          {/* Logo */}
          <Link href="/" className={`navbar-brand ${styles['navbar-brand']}`}>
            <img src="/img/whitelogo.png" alt="Logo" className="img-fluid logoImg" />
          </Link>

          {/* Nav Links */}
          <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''} ${styles['navbar-collapse']}`} id="navbarNav">
            <ul className={`navbar-nav mx-auto d-none d-lg-flex ${styles['navbar-nav']}`}>
              <li className="nav-item">
                <a className={`nav-link ${styles['nav-link']}`} href="#About" style={{ color: '#f8f9fa' }}>
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
                  <li><a className="dropdown-item" href="#Self-Defense">Self-Defense</a></li>
                  <li><a className="dropdown-item" href="#OnlineTraining">Online Training</a></li>
                  <li><a className="dropdown-item" href="#PersonalTraining">Personal Training</a></li>
                  <li><a className="dropdown-item" href="#CorporateWellness">Corporate Wellness</a></li>
                </ul>
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
          <ul className="navbar-nav ms-auto d-none d-lg-flex align-items-center" style={{ gap: '10px' }}>
            <li className="nav-item">
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
        className={`offcanvas offcanvas-end ${showMenu ? 'show' : ''}`}
        id="offcanvasNavbar"
        style={{ backgroundColor: '#333' }}
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={toggleMenu}
            style={{ color: '#f8f9fa' }}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav" style={{ gap: '1rem' }}>
            <li className="nav-item">
              <a className="nav-link" href="#About" onClick={toggleMenu} style={{ color: '#f8f9fa' }}>
                About
              </a>
            </li>
            <li className={`nav-item dropdown ${styles.dropdown}`}>
              <button
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
                style={{ color: '#f8f9fa', background: 'none', border: 'none' }}
              >
                Programs/Services
              </button>
              <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <li><a className="dropdown-item" href="#Self-Defense" onClick={toggleMenu}>Self-Defense</a></li>
                <li><a className="dropdown-item" href="#OnlineTraining" onClick={toggleMenu}>Online Training</a></li>
                <li><a className="dropdown-item" href="#PersonalTraining" onClick={toggleMenu}>Personal Training</a></li>
                <li><a className="dropdown-item" href="#CorporateWellness" onClick={toggleMenu}>Corporate Wellness</a></li>
              </ul>
            </li>
            {/* Add Self-Defense Event link to mobile menu */}
            <li className="nav-item">
              <Link href="/self-defense-event" className="nav-link" onClick={toggleMenu} style={{ color: '#f8f9fa' }}>
                Self-Defense Event
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link" onClick={toggleMenu} style={{ color: '#f8f9fa' }}>
                Blog
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav" style={{ gap: '1rem' }}>
            <li className="nav-item">
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
      </div>
      <ContactFormModal />
    </>
  );
}

export default TransparentNavbar;