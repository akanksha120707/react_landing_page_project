import React, { useState } from "react";
import "./css/ImageSlider.css";

const SliderData = [
  "/assets/banner1.jpg",
  "/assets/banner2.jpg",
  "/assets/banner3.jpg",
  "/assets/banner4.jpg",
  "/assets/banner5.webp",
  "/assets/banner8.webp",
  "/assets/banner7.webp"
];

function ImageSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onLeftShift = () => {
    let nextIndex =
      currentIndex === 0 ? SliderData.length - 1 : currentIndex - 1;
    console.log(nextIndex);
    setCurrentIndex(nextIndex);
  };
  const onRightShift = () => {
    let nextIndex =
      currentIndex + 1 === SliderData.length ? 0 : currentIndex + 1;
    console.log(nextIndex);
    setCurrentIndex(nextIndex);
  };
  if (!SliderData.length) return null;
  return (
    <div>
      <div className="sliderWrapper">
        <div className="iconLeftAndRight">
          <div onClick={event => onLeftShift(event)} className="prev">
            ❮
          </div>

          <div onClick={event => onRightShift(event)} className="next">
            ❯
          </div>
        </div>
        {SliderData.length && (
          <img
            src={SliderData[currentIndex]}
            alt={"image_slides"}
            className="imageWrapper"
          />
        )}
      </div>
    </div>
  );
}
export default ImageSlider;
