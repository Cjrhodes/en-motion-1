import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

function TransparentNavbar() {
  const [colorChange, setColorChange] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    }
  }, []);

  return (
    <>
      <Navbar expand="lg" fixed="top" className={styles.navContainer} style={{ backgroundColor: colorChange ? 'black' : 'transparent', color: 'white' }}>
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            <img src="/img/whitelogo.png" alt="Logo" className={styles.logoImg} />
          </Navbar.Brand>
          <div className={styles.navLinks}>
            <Nav.Link href="#home" style={{ color: 'white', fontSize: '1.2rem' }}>
              Home
            </Nav.Link>
            <Nav.Link href="#About" style={{ color: 'white', fontSize: '1.2rem' }}>
              About
            </Nav.Link>
            <div>
              <Nav.Link href="#TrainingProgram" style={{ color: 'white', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
                Programs <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '5px' }} />
              </Nav.Link>
              <div className={styles.programLinks}>
                <div>
                  <Nav.Link href="#self-defense" style={{ color: 'white', fontSize: '1.2rem' }}>
                    Self-Defense
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link href="#personal-training" style={{ color: 'white', fontSize: '1.2rem' }}>
                    Personal Training
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link href="#corporate-wellness" style={{ color: 'white', fontSize: '1.2rem' }}>
                    Corporate Wellness
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link href="#online-training" style={{ color: 'white', fontSize: '1.2rem' }}>
                    Online Training
                  </Nav.Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.socialNav}>
            <Nav.Link href="https://www.facebook.com/profile.php?id=61558229676688" style={{ color: 'white', fontSize: '1.8rem' }}>
              <FontAwesomeIcon icon={faFacebook} />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/enmotionfit" style={{ color: 'white', fontSize: '1.8rem' }}>
              <FontAwesomeIcon icon={faTwitter} />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/enmotionfit/" style={{ color: 'white', fontSize: '1.8rem' }}>
              <FontAwesomeIcon icon={faInstagram} />
            </Nav.Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'white' }} onClick={toggleMenu} className={styles.hamburgerToggle} />
        </Container>
      </Navbar>

      {/* Hamburger Menu */}
      <div className={`${styles.hamburgerMenu} ${showMenu ? styles.open : ''}`}>
        <div className={styles.navLinks}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <div>
            <Nav.Link href="#TrainingProgram" onClick={() => setShowProgramsDropdown(!showProgramsDropdown)}>
              Programs <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '5px' }} />
            </Nav.Link>
            <div className={`${styles.programLinks} ${showProgramsDropdown ? styles.open : ''}`}>
              <div>
                <Nav.Link href="#self-defense">Self-Defense</Nav.Link>
              </div>
              <div>
                <Nav.Link href="#personal-training">Personal Training</Nav.Link>
              </div>
              <div>
                <Nav.Link href="#corporate-wellness">Corporate Wellness</Nav.Link>
              </div>
              <div>
                <Nav.Link href="#online-training">Online Training</Nav.Link>
              </div>
            </div>
          </div>
          <div className={styles.socialNav}>
            <Nav.Link href="https://www.facebook.com/profile.php?id=61558229676688">
              <FontAwesomeIcon icon={faFacebook} />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/enmotionfit">
              <FontAwesomeIcon icon={faTwitter} />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/enmotionfit/">
              <FontAwesomeIcon icon={faInstagram} />
            </Nav.Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransparentNavbar;