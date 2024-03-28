import React from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        {/* This would be where the image goes */}
      </div>
      <div className="dots-container">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default ImageSlider;
