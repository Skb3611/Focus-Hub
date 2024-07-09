"use client"
import slider1 from "@/assets/slider.png"
import slider2 from "@/assets/slider2.png"
import slider3 from "@/assets/slider3.png"
import slider4 from "@/assets/slider4.png"
import Image from "next/image";
import React, { useState,useEffect } from 'react';


const Slider = () => {
  const images = [
    slider1,slider2,slider3,slider4
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);


  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="App">
      <header className="App-header">
               <div className="relative  w-full lg:w-[85%] mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full">
                <Image src={image} alt={`Slide ${index}`} className="w-full h-auto" />
              </div>
            ))}
       
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
          >
            &#9664;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
          >
            &#9654;
          </button>
        </div>
      </header>
    </div>
  );
};

export default Slider;
