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

import {
  RiArrowDownSLine,
  RiHeartLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import PropTypes from "prop-types";
import { formatAmount } from "../utils";

const Carousel = ({
  items,
  slidesPerView = 4,
  spaceBetween = 30,
  onSwiperRef, // Callback to pass the swiper instance
  handleOptionClick,
}) => {
  const handleOptionSelection = (selectedOption) => {
    handleOptionClick(selectedOption);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20} // Default spacing between slides
      slidesPerView={2} // Default for mobile (2 items per view)
      loop
      autoplay={{ delay: 6000 }}
      breakpoints={{
        // For smaller screens (mobile view)
        640: {
          slidesPerView: 2, // Show 2 items per view on mobile
          spaceBetween: 10,
        },
        // For larger screens (laptops & desktops)
        1024: {
          slidesPerView: 3, // Show 3 items per view on laptops
          spaceBetween: 20,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="  min-h-[300px]">
            <div
              style={{
                backgroundColor: item.color || "#f0f0f0",
                borderRadius: "10px",
              }}
              className="image-container relative"
            >
              <div className="w-full lg:h-[350px] h-[150px] bg-gray-100 rounded-lg">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full p-2 object-cover rounded-lg hover:scale-105 transition-all"
                />
              </div>
            </div>
            <div className="">
              <div className="flex flex-col md:flex-row lg:items-center justify-between min-h-10   ">
                <p className="lg:text-center mt-2 text-sm font-bold text-text-header ">
                  {item.name}
                </p>
                {item?.product_options?.length >= 0 && (
                  <div className="relative group">
                    <div className="flex items-center mt-2 text-sm font-bold gap-1 bg-[#E7F3E6] text-primary-bg p-1 rounded px-4 relative">
                      <div className="flex items-center gap-1 text-sm font-medium cursor-pointer bg-[#E7F3E6] text-primary-bg p-1 rounded px-4">
                        <span className="text-xs">
                          {item?.product_options?.length}
                        </span>
                        <p onClick={() => handleOptionClick(item)}>Options</p>
                        <RiArrowDownSLine size={16} />
                      </div>

                      {/* Dropdown Menu */}
                      <ul className="absolute left-0 top-8  !z-[9999999999999] hidden overflow-x-scroll w-full h-20 px-2 py-4 bg-white border rounded-lg shadow-lg mt-1 group-hover:block">
                        {item?.product_options.length > 0 ? (
                          item?.product_options.map((option, index) => (
                            <li
                              key={index}
                              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex"
                              onClick={() => handleOptionSelection(option)}
                            >
                              <img
                                src={option.image}
                                alt=""
                                className="w-6 h-6 "
                              />{" "}
                              {option.name || "Unnamed Option"}
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
              <div className="flex flex-col-reverse gap-3 lg:gap-24 lg:flex-row justify-between my-2 text-xs">
                <div
                  role="button"
                  onClick={() => handleOptionClick(item)}
                  className="flex items-center justify-center p-3 gap-1 px-3 rounded-lg bg-gray-300 text-center md:w-full"
                >
                  <RiShoppingCart2Line size={12} />
                  <p className=" ">Add to Cart</p>
                </div>
                <p className="text-white p-1 px-3 text-center flex items-center justify-center rounded-lg bg-primary-bg w-28  md:w-full ">
                  In Season
                </p>
              </div>
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
