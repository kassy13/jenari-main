import React, { useContext } from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import AuthContext from "./context/AuthContex";
const Hero = () => {
  const { user } = useContext(AuthContext);
  // console.log("user", user);
  const slides = [
    {
      image: hero1,
      title: "Freshes Produce Delivered to Your Doorstep",
      description:
        "Discover the freshest fruits and vegetables sourced directly from farms.",
    },
    {
      image: hero2,
      title: "Organic Food for a Healthy Lifestyle",
      description:
        "Choose from a variety of organic and health-conscious food options.",
    },
    {
      image: hero3,
      title: "Cooking Essentials Made Easy",
      description:
        "All your cooking essentials in one place for quick and easy meal prep.",
    },
  ];

  return (
    <div className="w-full h-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-[78vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-screen object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl max-w-2xl tracking-tight">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
