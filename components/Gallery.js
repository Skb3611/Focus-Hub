"use client"
import React from "react";
import image1 from "@/assets/gallery/img.jpg";
import image2 from "@/assets/gallery/img2.jpg";
import image3 from "@/assets/gallery/img3.jpg";
import image4 from "@/assets/gallery/img4.jpg";
import image5 from "@/assets/gallery/img5.jpg";
import image6 from "@/assets/gallery/img6.jpg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Gallery = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mt-3 md:mt-0 w-full lg:w-[85%] m-auto">
        <h1 className="text-xl md:text-3xl text-center text-black font-medium ">
        <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'A Glimpse of Focus Hub',
                                        1000, 
                                        '',
                                        500

                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            
        </h1>
        <div className="container md:px-5 px-2 pt-5 mb-10 md:mb-20 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={image3}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={image2}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={image6}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={image5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={image4}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={image1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
