import React, { useState } from 'react';


const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="image-slider">
      <img src={images[activeIndex].url} alt={`Slide ${activeIndex + 1}`} className="slider-image" />

      <div className="slider-controls">
        <button onClick={goToPrevious} className="btn btn-primary">Previous</button>
        <button onClick={goToNext} className="btn btn-primary">Next</button>
      </div>

      <div className="slider-options-row">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`option-circle ${activeIndex === index ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
