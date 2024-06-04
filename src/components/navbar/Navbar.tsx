"use client";
import React, { useState, useEffect } from 'react';


function TransparentNavbar() {
  const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleDropdownLinkClick = () => {
    setShowMenu(false);
    setShowProgramsDropdown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${
          isScrolled ? 'bg-dark' : 'bg-transparent'
        } fixed-top py-1`}
      >
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="#">
  <img src="/img/whitelogo.png" alt="Logo" className="img-fluid logoImg" />
</a>

          {/* Nav Links */}
          <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto d-none d-lg-flex">
              <li className="nav-item">
                <a className="nav-link" href="#About" style={{ color: '#f8f9fa' }}>
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={showProgramsDropdown}
                  onClick={() => setShowProgramsDropdown(!showProgramsDropdown)}
                  style={{ color: '#f8f9fa' }}
                >
                  Programs
                </a>
                <ul className={`dropdown-menu ${showProgramsDropdown ? 'show' : ''}`}>
                  <li>
                    <a className="dropdown-item" href="#Self-Defense" onClick={handleDropdownLinkClick}>
                      Self-Defense
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#OnlineTraining" onClick={handleDropdownLinkClick}>
                      Online Training
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#PersonalTraining" onClick={handleDropdownLinkClick}>
                      Personal Training
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#CorporateWellness" onClick={handleDropdownLinkClick}>
                      Corporate Wellness
                    </a>
                  </li>
                </ul>
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

          {/* Social Icons and Free Evaluation Button */}
          <ul className="navbar-nav ms-auto d-none d-lg-flex align-items-center" style={{ gap: '10px' }}>
            <li className="nav-item">
              <a className="nav-link" href="tel:786-925-8086" style={{ color: '#f8f9fa' }}>
                (786) 925-8086
              </a>
            </li>
            <li className="nav-item">
  <a className="nav-link freeEvaluationBtn rounded-pill" href="#" style={{ color: '#f8f9fa', backgroundColor: '#ac161e' }}>
    Free Evaluation
  </a>
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={showProgramsDropdown}
                onClick={() => setShowProgramsDropdown(!showProgramsDropdown)}
                style={{ color: '#f8f9fa' }}
              >
                Programs
              </a>
              <ul className={`dropdown-menu ${showProgramsDropdown ? 'show' : ''}`}>
                <li>
                  <a className="dropdown-item" href="#Self-Defense" onClick={handleDropdownLinkClick}>
                    Self-Defense
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#OnlineTraining" onClick={handleDropdownLinkClick}>
                    Online Training
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#PersonalTraining" onClick={handleDropdownLinkClick}>
                    Personal Training
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#CorporateWellness" onClick={handleDropdownLinkClick}>
                    Corporate Wellness
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav" style={{ gap: '1rem' }}>
            <li className="nav-item">
              <a className="nav-link" href="tel:786-925-8086" style={{ color: '#f8f9fa' }}>
                (786) 925-8086
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link freeEvaluationBtn" href="#" style={{ color: '#f8f9fa', backgroundColor: '#e74c3c' }}>
                Free Evaluation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TransparentNavbar;
