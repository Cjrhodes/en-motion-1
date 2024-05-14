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
                      
                      <h1>Wellness That Works</h1>
                      <p>
                        Tailored Health Strategies for Individuals and Teams
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
                    <h1>Boost Team Wellness and Productivity</h1>
<p>En Motion's corporate wellness boosts health and productivity with classes for all levels, fostering a vibrant workplace culture.</p>



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
                backgroundImage: `url(/img/girlpushup.jpeg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="hero-slider-text one">
                    <h1>Discover Your Peak Potential</h1>
<p>En Motion offers personalized training to reach your health goals. Our certified trainers craft custom workouts for effective, motivating sessions.</p>


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

        </Swiper>
      
      </div>
    </>
  );
};

export default HeroSlider;