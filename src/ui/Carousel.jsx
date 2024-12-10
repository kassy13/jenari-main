import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { RiHeartLine, RiShoppingCart2Line } from "react-icons/ri";

const Carousel = ({
  items,
  slidesPerView = 4,
  spaceBetween = 30,
  onSwiperRef, // Callback to pass the swiper instance
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop
      autoplay={{ delay: 6000 }}
      breakpoints={{
        640: { slidesPerView: 1 },
        767: { slidesPerView: 1 },
        1024: { slidesPerView: 4 },
      }}
      onSwiper={onSwiperRef} // Pass the swiper instance to the parent
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div>
            <div
              style={{
                backgroundColor: item.color || "#f0f0f0",
                borderRadius: "10px",
              }}
              className="image-container relative"
            >
              <div className="w-full h-[200px] bg-gray-100 rounded-lg">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full p-2 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-gray-300 inline-block p-1 rounded-full absolute top-3 left-3">
              <RiHeartLine size={20} />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-center mt-2 text-sm font-bold text-text-header">
                {item.text}
              </p>
              <div className="flex items-center mt-2 text-sm font-bold gap-1">
                <span className="text-xs">3</span> <p>options</p>
              </div>
            </div>
            <div>
              <p className="text-text-light text-xs">{item.subtext}</p>
              <span className="font-extrabold text-text-header text-xs">
                £3.00 - £5.00
              </span>
            </div>
            <div className="flex justify-between my-2 text-xs">
              <div className="flex items-center p-1 gap-1 px-3 rounded-lg bg-gray-300">
                <RiShoppingCart2Line size={12} />
                <p className="pt-1">Add to Cart</p>
              </div>
              <p className="text-white p-1 px-3 text-center flex items-center rounded-lg bg-primary-bg">
                In Season
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
