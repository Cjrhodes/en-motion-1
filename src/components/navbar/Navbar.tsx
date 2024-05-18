import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

function TransparentNavbar() {
  const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleDropdownLinkClick = () => {
  setShowMenu(false);
  setShowProgramsDropdown(false);
};

  return (
    <>
      {/* Navbar for larger screens */}
      <nav className={styles.navContainer}>
        <div className={styles.logo}>
          <img src="/img/whitelogo.png" alt="Logo" className={styles.logoImg} />
        </div>
        <div className={styles.navLinks}>
          <a href="#" style={{ color: 'white', fontSize: '1.2rem' }}>
            Home
          </a>
          <a href="#About" style={{ color: 'white', fontSize: '1.2rem' }}>
            About
          </a>
          <div>
            <a
              href="#"
              onClick={() => setShowProgramsDropdown(!showProgramsDropdown)}
              style={{ color: 'white', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}
            >
              Programs <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '5px' }} />
            </a>
            {showProgramsDropdown && (
              <div className={styles.programsDropdown}>
                <a href="#Self-Defense" style={{ color: 'white', fontSize: '1.2rem' }}>
                  Self-Defense
                </a>
                <a href="#OnlineTraining" style={{ color: 'white', fontSize: '1.2rem' }}>
                  Online Training
                </a>
                <a href="#PersonalTraining" style={{ color: 'white', fontSize: '1.2rem' }}>
                  Personal Training
                </a>
                <a href="#CorporateWellness" style={{ color: 'white', fontSize: '1.2rem' }}>
                  Corporate Wellness
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={styles.socialNav}>
          <a href="https://www.facebook.com/profile.php?id=61558229676688" style={{ color: 'white' }}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/enmotionfit/" style={{ color: 'white' }}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.instagram.com/enmotionfit/" style={{ color: 'white' }}>
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
        <button className={styles.hamburgerToggle} onClick={toggleMenu}>
          <span className={styles.hamburgerIcon} />
          <span className={styles.hamburgerIcon} />
          <span className={styles.hamburgerIcon} />
        </button>
      </nav>

      {/* Hamburger Menu for smaller screens */}
      <div className={`${styles.hamburgerMenu} ${showMenu ? styles.open : ''}`}>
        <div className={styles.navLinks}>
          <a href="#" onClick={() => setShowMenu(false)}>
            Home
          </a>
          <a href="#" onClick={() => setShowMenu(false)}>
            About
          </a>
          <div>
            <a href="#" onClick={() => setShowProgramsDropdown(!showProgramsDropdown)}>
              Programs <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '5px' }} />
            </a>
            {showProgramsDropdown && (
              <div className={styles.programsDropdown}>
                <a href="#Self-Defense" onClick={() => setShowMenu(false)}>
                  Self-Defense
                </a>
                <a href="#OnlineTraining" onClick={() => setShowMenu(false)}>
                  Online Training
                </a>
                <a href="#PersonalTraining" onClick={() => setShowMenu(false)}>
                  Personal Training
                </a>
                <a href="#CorporateWellness" onClick={() => setShowMenu(false)}>
                  Corporate Wellness
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={styles.socialNav}>
          <a href="https://www.facebook.com/profile.php?id=61558229676688" onClick={() => setShowMenu(false)}>
            <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} />
          </a>
          <a href="https://www.instagram.com/enmotionfit/" onClick={() => setShowMenu(false)}>
            <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} />
          </a>
          <a href="https://www.instagram.com/enmotionfit/" style={{ color: 'white' }}>
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
    </>
  );
}

export default TransparentNavbar;