import React, { useRef } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles for the necessary modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import image1 from "../assets/image.svg";
import image2 from "../assets/image (2).svg";
import image3 from "../assets/image (3).svg";

import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const categories = [
  { id: 1, name: "Fruits", img: image1, color: "#F0FFE7" },
  { id: 2, name: "Protein Sources", img: image2, color: "#FFFCE5" },
  { id: 3, name: "Swallow, Tubers & Grains", img: image3, color: "#FFEDF1" },
  { id: 4, name: "Vegetables", img: image1, color: "#FFF6FF" },
  { id: 5, name: "Dairy", img: image3, color: "#FFF0F6" },
  // Add more categories as needed
];

const Categories = () => {
  const swiperRef = useRef(null); // Reference to the Swiper instance

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev(); // Go to previous slide
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext(); // Go to next slide
  };

  return (
    <div className="shop-by-category mx-6 lg:mx-12 my-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-bold">Shop by Category</span>
        <div className="flex space-x-7 lg:space-x-2">
          {/* Custom Navigation Buttons */}
          <button
            onClick={handlePrevClick}
            className="text-xl bg-gray-200 p-2 rounded"
            aria-label="Previous"
          >
            <RiArrowLeftLine />
          </button>
          <button
            onClick={handleNextClick}
            className="text-xl bg-gray-200 p-2 rounded"
            aria-label="Next"
          >
            <RiArrowRightLine />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <Swiper
        ref={swiperRef} // Attach the swiperRef to the Swiper component
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Use modules for additional functionality
        // slidesPerView={4} // Default 4 items per slide on desktop
        spaceBetween={50}
        loop
        autoplay
        slidesPerView={1} // Default number of slides per view
        breakpoints={{
          // When the viewport width is <= 640px (mobile view)
          640: {
            slidesPerView: 1, // Show 1 slide per view
            spaceBetween: 20, // Adjust space between slides
          },
          // For tablets and small desktops (between 641px and 1024px)
          768: {
            slidesPerView: 2, // Show 2 slides per view
            spaceBetween: 30, // Adjust space between slides
          },
          // For larger screens (1025px and above)
          1024: {
            slidesPerView: 4, // Show 3 slides per view
            spaceBetween: 20, // Adjust space between slides
          },
        }}
        className="swiper-container"
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.id}
            style={{ backgroundColor: category.color }} // Use inline styles to apply background color
            className="rounded-lg"
          >
            <div className="flex flex-col items-center rounded-lg py-4">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-60 object-cover rounded-lg"
              />
              <p className="mt-2 text-sm">{category.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
