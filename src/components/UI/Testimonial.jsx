import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p
          className="section__description"
          style={{
            textAlign: "center",
            height: "200px",
            overflowY: "hidden",
          }}
        >
          I am extremely thankful for the quick medication delivery service.
          When I needed my prescription urgently, the delivery was prompt and
          hassle-free. The process was smooth, from placing the order online to
          receiving my medications at my doorstep. Thank you for your
          exceptional service and reliability!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jane D</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p
          className="section__description"
          style={{
            textAlign: "center",
            height: "200px",
            overflowY: "hidden",
          }}
        >
          I am incredibly grateful for the fast and efficient ambulance service
          . When I called for help during a medical emergency, the response was
          immediate.Quickly and were extremely professional and compassionate.
          Thank you for being there when we needed you the most!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">John S.</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p
          className="section__description"
          style={{
            textAlign: "center",
            height: "200px",
            overflowY: "hidden",
          }}
        >
          I want to express my gratitude for the exceptional medical consultancy
          service. The online consultation was convenient and thorough They took
          the time to understand my concerns and provided clear, personalized
          advice that greatly helped me manage my condition.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Mary A.</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p
          className="section__description"
          style={{
            textAlign: "center",
            height: "200px",
            overflowY: "hidden",
          }}
        >
          I am incredibly thankful for the medical consultancy service.
          Scheduling an appointment was easy, and I was able to speak with a
          doctor from the comfort of my home. The consultation was thorough, and
          the doctor was attentive and understanding. Thank you for your
          excellent care and support!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
