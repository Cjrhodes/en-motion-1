"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { useAppDispatch } from "@/redux/hooks";



const HeroSlider: React.FC = () => {
  const dispatch = useAppDispatch(); // Move the hook call inside the component

  const openContactModal = () => {
    dispatch(toggleContactModalOpen({ packageName: "", packageType: "" }));
  };

  return (
    <>
      <div className="hero-slider-area">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          speed={1500}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="hero-slider"
        >
          <SwiperSlide>
            <div
              className="hero-slider-item"
              style={{
                backgroundImage: `url(/img/girl-kickboxing1.png
                )`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="hero-slider-text two">
                      
                      <h1>Put More Fight into Your Fit</h1>
                      <p>
                      Our staff at En Motion comes with extensive martial arts experience. Take classes that mix self-defense training with personal training, or choose dedicated self-defense classes. Get a free evaluation and personalized fitness plan today!
                      </p>
                      <div className="slider-btn">
                        <Link
                          href="#"
                          className="buyTicketsBtn"
                          onClick={openContactModal}
                        >
                          Get Started
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero-slider-item"
              style={{
                backgroundImage: `url(/img/corporate-wellness.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="hero-slider-text three">
                    <h1>Elevate Your Team's Health and Productivity</h1>
<p>Enhance your company's success by investing in employee well-being through our corporate wellness programs. Schedule a free evaluation and get a tailored fitness plan for your team!</p>



<div className="slider-btn">
                        <Link
                          href="#"
                          className="buyTicketsBtn"
                          onClick={openContactModal}
                        >
                          Free Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero-slider-item"
              style={{
                backgroundImage: `url(/img/girlpushup.jpeg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="hero-slider-text one">
                    <h1>Discover Your Peak Potential</h1>
<p>Unlock your potential with personalized training sessions tailored to your goals. Start today with a free evaluation and receive a customized fitness plan just for you!</p>


<div className="slider-btn">
                        <Link
                          href="#"
                          className="buyTicketsBtn"
                          onClick={openContactModal}
                        >
                          Free Evaluation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      
      </div>
    </>
  );
};

export default HeroSlider;