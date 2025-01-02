import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import avatar from "../assets/avatar.svg";
import avatar2 from "../assets/Facebook.svg";
import avatar3 from "../assets/instagram.svg";
import avatar4 from "../assets/carrot.png";
import avatar5 from "../assets/instagram.svg";
import avatar6 from "../assets/about.svg";
// Import Swiper styles
import "swiper/css";
import SwiperCard from "../ui/SwiperCard";

// Import Swiper core and modules
import SwiperCore from "swiper";

// Register Swiper modules
SwiperCore.use([Autoplay]);

const SwiperCards = () => {
  return (
    <div className="mx-6 my-6 lg:my-12 lg:px-16">
      <p className="text-[24px] lg:text-3xl text-secondary-bg font-extrabold tracking-wide text-center lg:pt-6">
        What Our Customers Say
      </p>
      <h1 className="text-3xl lg:text-5xl font-semibold tracking-tighter py-4  lg:py-8 text-center">
        Customer Testimonials
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2000, // Adjust the delay time (milliseconds)
          disableOnInteraction: false, // Keep autoplay running even after user interaction
        }}
      >
        <SwiperSlide>
          <SwiperCard
            title={"“This a game changer”"}
            testimonial={
              "Finally bought from @JANERI and I gotta say, best decision made ever, not going back again ooo"
            }
            name={"John King"}
            position={"Shareholder, Liverpool"}
            img={avatar}
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
            img={avatar2}
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
            img={avatar3}
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
            img={avatar4}
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
            img={avatar5}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCards;
