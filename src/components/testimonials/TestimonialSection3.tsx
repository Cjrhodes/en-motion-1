'use client'
import { testimonialData3 } from "@/data/Data";
import React from "react";
import Slider from "react-slick";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";

const TestimonialSection3 = () => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
        }
      },
    ]
  };
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -50, // Initial position off-screen
    },
    visible: {
      opacity: 1,
      x: 0, // Final position on-screen
      transition: {
        duration: 3,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <section>
      <div className="testimonial-8 testimonial-10" style={{ padding: '50px 10px', minHeight: '800px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
             
            </div>
          </div>
          <div className="testimonial-8-slider-wrap" >
            <Slider {...sliderSettings} className="testimonial-8-slider">
              {testimonialData3.map((item) => (
                <div className="single-testimonial" key={item.id} style={{ minHeight: '60px' }}>
                  <div className={`row ${item.id % 2 === 0 }`}>
                    <div className="col-lg-8">
                      <div className="row align-items-center">
                        <div className={`col-4 ${item.id % 2 === 0 ? '' : 'order-2'}`}>
                          <div className="part-img">
                            <motion.img 
                            src={item.img} 
                            alt="Image" 
                            initial={{
                                scale: 1.2
                            }}
                            whileInView={{
                                scale: 1
                            }}
                            viewport={{once: true}}
                            transition={{
                                duration: 1.2
                            }}
                            />
                          </div>
                        </div>
                        <div className="col-8"  style={{ height: '400px'}}>
                          <div className="part-txt">
                            <span className="part-icon">
                              <i className="fa-solid fa-quote-right"></i>
                            </span>

                            <motion.p initial="hidden" whileInView="visible" variants={textVariants} viewport={{once: true}}>
                            {item.text} 
                            </motion.p>
                            <motion.div 
                            className="client-area"
                            initial={{
                              x: 80,
                              opacity: 0
                            }}
                            whileInView={{
                              x: 0,
                              opacity: 1
                            }}
                            viewport={{once: true}}
                            transition={{duration: 1.2}}
                            >
                              <h3 className="client-name">
                                <CustomGsapTextSplit children={item.name}/>
                              </h3>
                          
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection3;
