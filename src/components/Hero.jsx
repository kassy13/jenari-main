
import React, { useContext } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import AuthContext from "./context/AuthContex";

const Hero = () => {
  const { user } = useContext(AuthContext);
  // console.log("user", user);
  const slides = [
    {
      image: hero1,
      title: 'Freshes Produce Delivered to Your Doorstep',
      description:
        'Discover the freshest fruits and vegetables sourced directly from farms.',
    },
    {
      image: hero2,
      title: 'Organic Food for a Healthy Lifestyle',
      description:
        'Choose from a variety of organic and health-conscious food options.',
    },
  ];

  return (
    <div className="w-full h-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: null }}
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
                className="w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
