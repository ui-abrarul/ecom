import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../data";
import React, { useState } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  console.log(slideIndex);
  return (
    <div className="slider-container">
      <div
        className="slider-arrow"
        style={{ left: "10px" }}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            className="slide"
            key={item.id}
            style={{ backgroundColor: `#${item.bg}` }}
          >
            <div className="img-container">
              <img src={item.img} alt="" />
            </div>
            <div className="info-container">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="slider-arrow"
        style={{ right: "10px" }}
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
