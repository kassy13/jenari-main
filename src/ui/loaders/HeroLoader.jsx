import React from "react";
import {
  RiStore2Line,
  RiHome2Line,
  RiHeart2Line,
  RiArticleLine,
  RiUserCommunityLine,
  RiContactsBook3Line,
  RiQuestionLine,
  RiPhoneLine,
} from "react-icons/ri";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroLoader = () => {
  //   return <div>hero Loader...</div>;
  return (
    <>
      <div className="fixed w-full top-0 z-[99] bg-header-bg">
        <div className="flex items-center justify-between p-4 lg:py-4 lg:px-12 animate-pulse">
          {/* Logo Section */}
          <div className="w-32 lg:w-48 bg-gray-300 h-8 rounded-full" />

          {/* Hamburger Menu */}
          <div className="block md:hidden bg-gray-300 h-8 w-8 rounded-full" />

          {/* Search Bar (Desktop) */}
          <div className="hidden md:block bg-gray-300 h-10 w-1/2 rounded-full" />

          {/* Cart and Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="bg-gray-300 h-10 w-10 rounded-full" />
            <div className="bg-gray-300 h-6 w-24 rounded" />
          </div>
        </div>

        {/* Mobile Menu (Skeleton) */}
        {/* <div className="absolute top-0 w-full bg-header-bg text-white p-6 space-y-6 md:hidden z-50 transform transition-transform duration-300 animate-pulse">
          <div className="bg-gray-300 h-8 w-full rounded-full mb-4" />
          <div className="bg-gray-300 h-8 w-full rounded-full mb-4" />
          <div className="bg-gray-300 h-8 w-full rounded-full mb-4" />
        </div> */}
      </div>
      <div className="bg-white shadow py-4 lg:px-9  w-full  flex items-center fixed top-16 animate-pulse">
        <div className="lg:w-40 w-9 h-9 lg:h-10 rounded-3xl lg:rounded-full lg:mr-36 bg-gray-400 ml-4"></div>
        <ul className="h-9 lg:flex gap-12 items-center  hidden">
          <li className="w-24 h-4 bg-gray-300"></li>
          <li className="w-24 h-4 bg-gray-300"></li>
          <li className="w-24 h-4 bg-gray-300"></li>
          <li className="w-24 h-4 bg-gray-300"></li>
          <li className="w-24 h-4 bg-gray-300"></li>
        </ul>
        <div className="ml-24 w-24 h-4 bg-gray-300 hidden lg:block"></div>
      </div>
      <div className="w-full h-screen md:h-[80vh] mt-32 lg:mt-40 relative md:hidden animate-pulse">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: null }}
          loop
          className=" h-full "
        >
          <SwiperSlide className="">
            <div className="relative w-full h-full bg-gray-300">
              {/* Background Image */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="relative w-full h-full bg-gray-300">
              {/* Background Image */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HeroLoader;
