// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import SwiperCard from '../ui/SwiperCard';

// Import Swiper core and modules
import SwiperCore from 'swiper';

const SwiperCards = () => {
  // Register Swiper modules
  SwiperCore.use([Autoplay]);
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
            title={'⁠Exceptional Quality and Authenticity'}
            testimonial={
              '“Jenari has been a lifesaver! The quality of the products is unmatched, and I can finally get authentic African food items delivered straight to my door. Even the hard-to-find brands are available here. Highly recommend!”'
            }
            name={'Chinwe Okafor'}
            position={'Salford'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            title={'Convenient and Reliable Service'}
            testimonial={
              '“I was blown away by how easy it was to shop on Jenari. The website is user-friendly, and the doorstep delivery makes everything so convenient. My order arrived on time and in perfect condition!”'
            }
            name={'Adewale Olatunji'}
            position={'Bolton'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            title={'Freshness You Can Trust'}
            testimonial={
              '“The freshness of the food I received from Jenari is incredible. I’ve shopped elsewhere before, but nothing compares to the quality and care they provide. It’s a must-try for anyone craving authentic African cuisine.”'
            }
            name={'Fatima Abubakar'}
            position={'Oldham'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            title={'Affordable and Free Delivery Perks'}
            testimonial={
              '“Jenari is my go-to marketplace! The prices are super competitive, and I love the free delivery on orders over £100. It’s such a great deal for families like mine who order in bulk.”'
            }
            name={'Ngozi Chukwu'}
            position={'Rochdale'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            title={'⁠Excellent Customer Service'}
            testimonial={
              '“I had a question about my order, and the customer service team was so helpful and polite. They resolved my query quickly, and I felt truly valued as a customer. Jenari is a marketplace I trust and will continue to shop with!”'
            }
            name={'Ibrahim Musa'}
            position={'Wigan'}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCards;
