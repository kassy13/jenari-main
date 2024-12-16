import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import SwiperCard from "../ui/SwiperCard";

const SwiperCards = () => {
  return (
    <div className=" lg:my-12 lg:px-16">
      <p className="text-3xl text-secondary-bg font-extrabold tracking-wide text-center lg:pt-6">
        What Our Customers Say
      </p>
      <h1 className="text-5xl font-semibold tracking-tighter lg:py-8 text-center">
        Customer Testimonials
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={1} // Default number of slides per view
        breakpoints={{
          // When the viewport width is <= 640px (mobile view)
          640: {
            slidesPerView: 3, // Show 1 slide per view
            spaceBetween: 20, // Adjust space between slides
          },
          // For tablets and small desktops (between 641px and 1024px)
          768: {
            slidesPerView: 2, // Show 2 slides per view
            spaceBetween: 30, // Adjust space between slides
          },
          // For larger screens (1025px and above)
          1024: {
            slidesPerView: 3, // Show 3 slides per view
            spaceBetween: 50, // Adjust space between slides
          },
        }}
        autoplay={{ delay: 1000 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SwiperCard
            title={"“This a game changer”"}
            testimonial={
              "Finally bought from @JANERI and I gotta say, best decision made ever, not going back again ooo"
            }
            name={"John King"}
            position={"Shareholder, Liverpool"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            title={"“I love JANERI and everything about them”"}
            testimonial={
              "I Love everything about this app, I can literally shop while scrolling through content...damn!! big ups to the team, this is a product i can confidently share to my friends and family. "
            }
            name={"John King"}
            position={"Shareholder, Liverpool"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            title={"“Top 3 Platform I’ve used this year”"}
            testimonial={
              "Love everything about this app, I can literally shop while scrolling through content...damn!! big ups to the team, this is a product i can confidently share to my friends and family. "
            }
            name={"John King"}
            position={"Shareholder, Liverpool"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            title={
              "“diversify my portfolio with stable, high-return investments”."
            }
            testimonial={
              "Appex Assets helped me diversify my portfolio with stable, high-return real estate investment. Talk about having your money work for you. A 10 in my book if you ask me."
            }
            name={"John King"}
            position={"Shareholder, Liverpool"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCards;
