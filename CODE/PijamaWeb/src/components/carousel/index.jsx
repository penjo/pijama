import React, { useState } from "react";
import SwipeLeft from "../../assets/images/swipe_left_black.svg";
import SwipeRight from "../../assets/images/swipe_right_black.svg";
import ChevronRight from "../../assets/images/Chevron right white.png";
import Banner from "../../assets/images/banner_Demo.png";
import Slider from "react-slick";
import "./style.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "70px",
      }}
      onClick={onClick}
    >
      <img src={SwipeRight} alt="" style={{ width: "50px", height: "50px" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position: "absolute", left: "45px",zIndex:1 }}
      onClick={onClick}
    >
      <img src={SwipeLeft} alt="" style={{ width: "50px", height: "50px" }} />
    </div>
  );
}

const Carousel = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const src = "https://source.unsplash.com/random/800x800/";

  return (
    <>
      <div className="carousel">
        <Slider {...settings}>
          <div className="carousel-item">
            <img src={Banner} alt="dog" />
          </div>
          <div className="carousel-item">
            <img src={Banner} alt="dog" />
          </div>
          <div className="carousel-item">
            <img src={Banner} alt="dog" />
          </div>
          <div className="carousel-item">
            <img src={Banner} alt="dog" />
          </div>
          <div className="carousel-item">
            <img src={Banner} alt="dog" />
          </div>
        </Slider>
        <div className="content">
          <div className="content-text">
            <div className="text1">SEE THE LASTEST</div>
            <div className="text2">Save 50% Off</div>
          </div>
          <button className="content-button">
            Shop Now <ChevronRightIcon sx={{ fontSize: "40px" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
