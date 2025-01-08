import React, { useContext } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import hero1 from "../assets/hero1.svg";
import hero2 from "../assets/hero2.svg";
import heromobile1 from "../assets/heromobile1.svg";
import heromobile2 from "../assets/heromobile2.svg";
import AuthContext from "./context/AuthContex";

const Hero = () => {
  const { user } = useContext(AuthContext);
  // console.log("user", user);
  const slides = [
    {
      image: hero1,
      title: "Explore a variety of food Products",
      description:
        "From Partner stores at competitive prices, no mark-up prices",
    },
    {
      image: hero2,
      title: "Organic Food for a Healthy Lifestyle",
      description:
        "Farm fresh food stuffs & groceries delivered to your door step",
    },
  ];

  return (
    <>
      <div className="w-full h-screen md:h-[80vh] mt-32 lg:mt-40 relative hidden lg:block">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: null }}
          loop
          className=" h-full "
        >
          <SwiperSlide className="hidden lg:block">
            <div className=" h-full w-[60%] tracking-tighter lg:flex flex-col justify-start pt-12 lg:pt-0 lg:justify-center absolute z-40 lg:pl-12  pl-6">
              <p className="text-green-900 w-[250px]  lg:w-[400px] bg-[#e7ad1bd1] inline-flex text-center p-2 rounded-lg lg:text-2xl font-extrabold ">
                Explore a variety of food Product
              </p>
              <p className="lg:text-5xl text-2xl py-5 lg:w-full  w-[280px] text-green-900 font-extrabold">
                From Partner stores at{" "}
                <span>
                  <br />
                </span>
                competitive prices, no mark-up{" "}
                <span>
                  <br className="hidden lg:block" />
                </span>{" "}
                prices
              </p>
            </div>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={hero1}
                alt={"img1"}
                className="w-full h-full object-cover lg:object-cover object-[65%_80%] lg:object-center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="hidden lg:block">
            <div className="h-full lg:w-[60%] tracking-tighter hidden lg:flex flex-col justify-start lg:justify-center absolute z-40 pl-6 lg:pl-16 ">
              {/* <h3>Organic Food for a Healthy Lifestyle</h3> */}
              <p className="text-2xl lg:text-5xl text-white mt-9 lg:mt-0">
                Farm fresh food stuffs & groceries delivered to your{" "}
                <span className="text-[#e7ad1bd1]"> door step</span>
              </p>
            </div>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={hero2}
                alt={"img2"}
                className="w-full h-full object-cover lg:object-center object-right lg:object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* mobile  */}
      <div className="w-full h-screen md:h-[80vh] mt-32 lg:mt-40 relative md:hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: null }}
          loop
          className=" h-full "
        >
          {/* mobile swiper */}
          <SwiperSlide className="lg:hidden block">
            <div className="h-full w-full tracking-tighter flex flex-col justify-start pt-16  lg:justify-center absolute z-40 lg:pl-12  pl-6">
              <p className="text-green-900 w-[250px]  lg:w-[400px] bg-[#e7ad1bd1] inline-flex text-center p-2 rounded-lg lg:text-2xl font-extrabold ">
                Explore a variety of food Product
              </p>
              <p className="lg:text-5xl text-3xl py-5 lg:w-full  w-full text-white font-extrabold ">
                From Partner stores at competitive prices, no mark-up prices
              </p>
            </div>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={heromobile1}
                alt={"img1"}
                className="w-full h-full object-cover  relative bottom-8"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="lg:hidden block">
            <div className="h-full lg:w-[60%] tracking-tighter  flex flex-col justify-start lg:justify-center absolute z-40 pl-6 lg:pl-16 ">
              {/* <h3>Organic Food for a Healthy Lifestyle</h3> */}
              <p className="lg:text-5xl text-3xl py-5 lg:w-full  w-full text-white font-extrabold pt-16 ">
                Farm fresh food stuffs & groceries delivered to your{" "}
                <span className="text-primary-bg"> door step</span>
              </p>
            </div>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={heromobile2}
                alt={"img2"}
                className="w-full h-full object-cover relative bottom-24"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
