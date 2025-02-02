import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  RiArrowDownSLine,
  RiHeartLine,
  RiShoppingCart2Line,
} from 'react-icons/ri';
import PropTypes from 'prop-types';
import { formatAmount } from '../utils';

const Carousel = ({
  items,
  slidesPerView = 4,
  spaceBetween = 30,
  onSwiperRef, // Callback to pass the swiper instance
  handleOptionClick,
}) => {
  const handleOptionSelection = (selectedOption) => {
    // If options is a single object, wrap it in an array, otherwise use it as it is
    // const optionsToPass = Array.isArray(selectedOption)
    //   ? selectedOption
    //   : [selectedOption];
    // handleOptionClick(optionsToPass); // Pass the options array to the parent
    console.log(selectedOption, 'selectedOption');
    handleOptionClick(selectedOption);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={spaceBetween}
      // slidesPerView={slidesPerView}
      loop
      autoplay={{ delay: 6000 }}
      // spaceBetween={20}
      slidesPerView={slidesPerView} // Default number of slides per view
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
          slidesPerView: 4, // Show 3 slides per view
          spaceBetween: 20, // Adjust space between slides
        },
      }}
      onSwiper={onSwiperRef} // Pass the swiper instance to the parent
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div>
            <div
              style={{
                backgroundColor: item.color || '#f0f0f0',
                borderRadius: '10px',
              }}
              className="image-container relative"
            >
              <div className="w-full h-[200px] bg-gray-100 rounded-lg">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full p-2 object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="bg-gray-300 inline-block p-1 rounded-full absolute top-3 left-3">
              <RiHeartLine size={20} />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-center mt-2 text-sm font-bold text-text-header">
                {item.name}
              </p>
              {item?.product_options?.length > 0 && (
                <div className="relative group">
                  <div className="flex items-center mt-2 text-sm font-bold gap-1 bg-[#E7F3E6] text-primary-bg p-1 rounded px-4">
                    <div className="flex items-center gap-1 text-sm font-medium cursor-pointer bg-[#E7F3E6] text-primary-bg p-1 rounded px-4">
                      <span className="text-xs">
                        {item?.product_options?.length}
                      </span>
                      <p onClick={() => handleOptionClick(item)}>Options</p>
                      <RiArrowDownSLine size={16} />
                    </div>

                    {/* Dropdown Menu */}
                    <ul className="absolute left-0 top-10 z-50 hidden overflow-x-scroll h-20 w-max py-4 bg-white border rounded-lg shadow-lg mt-1 group-hover:block">
                      {item?.product_options.length > 0 ? (
                        item?.product_options.map((option, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionSelection(option)}
                          >
                            {option.name || 'Unnamed Option'}
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-2 text-sm text-gray-500">
                          No options available
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div>
              <p className="text-text-light text-xs">{item.subtext}</p>
              <span className="font-extrabold text-text-header text-xs">
                £{formatAmount(item?.price_range)}
              </span>
            </div>
            <div className="flex justify-between my-2 text-xs">
              <div
                role="button"
                onClick={() => handleOptionClick(item)}
                className="flex items-center p-1 gap-1 px-3 rounded-lg bg-gray-300"
              >
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
Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      subtext: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
  onSwiperRef: PropTypes.func,
  handleOptionClick: PropTypes.func,
};

export default Carousel;
