"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const TestimonialsCaed: React.FC = () => {
  return (
    <>
      <div className="testimonial-page-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-text">
                <Image 
                  src="/img/clients/client1.jpg" 
                  alt="Image" 
                  width={75}
                  height={75}
                />
                <i className="flaticon-quotation"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>

                <h3>Kara Goldberg</h3>
                <span>Director of Festwork</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial-text">
                <Image 
                  src="/img/clients/client2.jpg" 
                  alt="Image" 
                  width={75}
                  height={75}
                />
                <i className="flaticon-quotation"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>

                <h3>Richard Romero</h3>
                <span>Director</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial-text">
                <Image 
                  src="/img/clients/client3.jpg" 
                  alt="Image" 
                  width={75}
                  height={75}
                />
                <i className="flaticon-quotation"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>

                <h3>Kilva Romero</h3>
                <span>Director</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial-text">
                <Image 
                  src="/img/clients/client4.jpg" 
                  alt="Image" 
                  width={75}
                  height={75}
                />
                <i className="flaticon-quotation"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>

                <h3>Juhin Dew</h3>
                <span>Director</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial-text">
                <Image 
                  src="/img/clients/client5.jpg" 
                  alt="Image" 
                  width={75}
                  height={75}
                />
                <i className="flaticon-quotation"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>

                <h3>Anna Smith</h3>
                <span>Director</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial-text">
                <Image 
                  src="/img/clients/client6.jpg" 
                  alt="Image" 
                  width={75}
                  height={75}
                />
                <i className="flaticon-quotation"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>

                <h3>Lika Romero</h3>
                <span>Director</span>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area text-center">
                <Link href="#" className="prev page-numbers">
                  <i className="bx bx-chevron-left"></i>
                </Link>
                <span className="page-numbers current">1</span>
                <Link href="#" className="page-numbers">
                  2
                </Link>
                <Link href="#" className="page-numbers">
                  3
                </Link>
                <Link href="#" className="page-numbers">
                  4
                </Link>
                <Link href="#" className="next page-numbers">
                  <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCaed;
