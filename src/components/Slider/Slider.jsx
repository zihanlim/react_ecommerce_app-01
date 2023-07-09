import React, { useState } from "react";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentslide] = useState(0);

  const data = [
    //define an array called 'data' containing the images to be used in the slider
    "https://images.pexels.com/photos/10679176/pexels-photo-10679176.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/10677493/pexels-photo-10677493.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/10679207/pexels-photo-10679207.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/10678362/pexels-photo-10678362.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    switch (currentSlide) {
      case 0:
        setCurrentslide(3);
        break;
      default:
        setCurrentslide(currentSlide - 1);
    }
    console.log(currentSlide);
  };

  const nextSlide = () => {
    switch (currentSlide) {
      case 3:
        setCurrentslide(0);
        break;
      default:
        setCurrentslide(currentSlide + 1);
    }
    console.log(currentSlide);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <KeyboardArrowLeftOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <KeyboardArrowRightOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
