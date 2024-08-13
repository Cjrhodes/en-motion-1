"use client";
import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/redux/hooks";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";

const FooterSection3 = () => {
  const dispatch = useAppDispatch();
  const openContactModal = () => {
    dispatch(toggleContactModalOpen({ packageName: "", packageType: "" }));
  };

  return (
    <section>
      <footer className="footer-8">
        <div className="container">
          <div className="footer-top">
            <div className="row justify-content-between gy-5">
              <motion.div
                className="col-lg-4 col-md-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="footer-widget">
                  <div className="footer-logo">
                    <img src="img/enmotion.png" alt="Enmotion Fitness Logo" className="img-fluid" style={{ maxWidth: "200px" }} />
                  </div>
                  <p className="mt-4">Empowering you to achieve your fitness goals with personalized training and unwavering support.</p>
                </div>
              </motion.div>

              <motion.div
                className="col-lg-4 col-md-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Quick Links</h4>
                  <ul className="footer-menu-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact" onClick={openContactModal}>Contact</a></li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="col-lg-4 col-md-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Follow Us</h4>
                  <div className="footer-social-icons">
                    <a href="https://www.facebook.com/profile.php?id=61558229676688" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/enmotionfit" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-x"></i>
                    </a>
                    <a href="https://www.instagram.com/enmotionfit/?hl=en" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                  <p className="mt-4">Stay connected with us for the latest fitness tips and updates!</p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-12 text-center">
                <p className="copyright-text">&copy; {new Date().getFullYear()} Enmotion Fitness. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection3;
