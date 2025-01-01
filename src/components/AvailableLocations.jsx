import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import availableLocations from "../assets/available-location.svg";
import Press1 from "../assets/press-1.svg";
import Press2 from "../assets/press-2.svg";
import Press3 from "../assets/press-3.svg";
import Press4 from "../assets/press-4.svg";
import Press5 from "../assets/press-5.svg";
import Press6 from "../assets/press-6.svg";

const AvailableLocations = () => {
  const options = [
    { id: 1, image: Press1 },
    { id: 2, image: Press2 },
    { id: 3, image: Press3 },
    { id: 4, image: Press4 },
    { id: 5, image: Press5 },
    { id: 6, image: Press6 },
  ];

  return (
    <div className="mx-14 py-12 pt-16">
      <h2 className="text-center font-extrabold text-2xl lg:text-3xl text-secondary-bg pb-4">
        We are available in these locations
      </h2>

      <div className="flex justify-center items-center">
        <img src={availableLocations} alt="Available Locations" />
      </div>

      <div className="lg:mt-20 lg:mb-10">
        <p className="text-center text-2xl lg:text-[40px] font-semibold tracking-tight py-3">
          Press Features
        </p>
        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 4 }, // Desktop view
            0: { slidesPerView: 3 }, // Mobile view
          }}
          className="mt-10"
        >
          {options.map((option) => (
            <SwiperSlide key={option.id}>
              <div className="flex flex-col items-center gap-2">
                <img src={option.image} alt={`Press ${option.id}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AvailableLocations;
