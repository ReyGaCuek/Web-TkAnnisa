import React from 'react'
import { useState, useEffect } from 'react';
import image1 from '/public/1.png';
import image2 from '/public/2.png';
import image3 from '/public/3.png';
import image4 from '/public/4.png';
import image5 from '/public/5.png';
import image6 from '/public/6.png';
import image7 from '/public/7.png';
import image8 from '/public/8.png';

const ImageSlider = () => {
const images = [
    {
      url: image1,
      alt: "Image 1",
      title: "",
      description: ""
    },
    {
      url: image5,
      alt: "Image 5",
      title: "",
      description: ""
    },
    {
      url: image3,
      alt: "Image 3",
      title: "",
      description: ""
    },
    {
      url: image4,
      alt: "Image 4",
      title: "",
      description: ""
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Auto slide effect
  useEffect(() => {
    let interval;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change slide every 3 seconds
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, images.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full my-8">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        {/* Main Image */}
        <div className="relative h-60 lg:h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-xl font-bold">{image.title}</h3>
                <p className="text-sm">{image.description}</p>
              </div> */}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {/* <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          &#10095;
        </button> */}

        {/* Play/Pause Button */}
        {/* <button
          onClick={togglePlay}
          className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button> */}

        {/* Indicators */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 p-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageSlider