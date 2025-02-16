// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Autoplay,
// } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import {
//   RiArrowDownSLine,
//   RiHeartLine,
//   RiShoppingCart2Line,
// } from "react-icons/ri";
// import PropTypes from "prop-types";
// import { formatAmount } from "../utils";

// const Carousel = ({
//   items,
//   slidesPerView = 4,
//   spaceBetween = 30,
//   onSwiperRef, // Callback to pass the swiper instance
//   handleOptionClick,
// }) => {
//   const handleOptionSelection = (selectedOption) => {
//     handleOptionClick(selectedOption);
//   };

//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//       spaceBetween={20} // Default spacing between slides
//       slidesPerView={2} // Default for mobile (2 items per view)
//       loop
//       autoplay={{ delay: 6000 }}
//       breakpoints={{
//         // For smaller screens (mobile view)
//         640: {
//           slidesPerView: 2, // Show 2 items per view on mobile
//           spaceBetween: 10,
//         },
//         // For larger screens (laptops & desktops)
//         1024: {
//           slidesPerView: 3, // Show 3 items per view on laptops
//           spaceBetween: 20,
//         },
//       }}
//     >
//       {items.map((item, index) => (
//         <SwiperSlide key={index}>
//           <div className=" bg-fuchsia-300 ">
//             <div
//               style={{
//                 backgroundColor: item.color || "#f0f0f0",
//                 borderRadius: "10px",
//               }}
//               className="image-container relative "
//             >
//               <div className="w-full  lg:h-[350px] h-[150px] bg-gray-100 rounded-lg">
//                 <img
//                   src={item.image}
//                   alt={item.text}
//                   className="w-full h-full p-2 object-cover rounded-lg hover:scale-105 transition-all"
//                 />
//               </div>
//             </div>
//             <div className="  h-full  relative">
//               <div className="flex flex-col md:flex-row lg:items-center justify-between min-h-10   ">
//                 <p className="lg:text-center mt-2 text-sm font-bold text-text-header ">
//                   {item.name}
//                 </p>
//                 {item?.product_options?.length >= 0 && (
//                   <div className="bg-red-600 group relative ">
//                     <div className="flex items-center mt-2 text-sm font-bold gap-1 bg-[#E7F3E6] text-primary-bg p-1 rounded px-4 relative ">
//                       <div className="flex items-center gap-1 text-sm font-medium cursor-pointer bg-[#E7F3E6] text-primary-bg p-1 rounded px-4">
//                         <span className="text-xs">
//                           {item?.product_options?.length}
//                         </span>
//                         <p onClick={() => handleOptionClick(item)}>Options</p>
//                         <RiArrowDownSLine size={16} />
//                       </div>
//                       <ul className="!absolute right-0 top-full hidden !z-[9999999999999] h-[200px] overflow-y-scroll  w-[350px]   px-2 py-4 bg-white border rounded-lg shadow-lggroup-hover:block ">
//                         {item?.product_options.length > 0 ? (
//                           item?.product_options.map((option, index) => (
//                             <li
//                               key={index}
//                               className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                               onClick={() => handleOptionSelection(option)}
//                             >
//                               <img
//                                 src={option.image}
//                                 alt=""
//                                 className="w-6 h-6"
//                               />
//                               {option.name || "Unnamed Option"}
//                             </li>
//                           ))
//                         ) : (
//                           <li className="px-2 py-2 text-xs fontb text-gray-500">
//                             No options available
//                           </li>
//                         )}
//                       </ul>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <p className="text-text-light text-xs">{item.subtext}</p>
//                 <span className="font-extrabold text-text-header text-xs">
//                   £{formatAmount(item?.price_range)}
//                 </span>
//               </div>
//               <div className="flex flex-col-reverse gap-3 lg:gap-24 lg:flex-row justify-between my-2 text-xs">
//                 <div
//                   role="button"
//                   onClick={() => handleOptionClick(item)}
//                   className="flex items-center justify-center p-3 gap-1 px-3 rounded-lg bg-gray-300 text-center md:w-full"
//                 >
//                   <RiShoppingCart2Line size={12} />
//                   <p className=" ">Add to Cart</p>
//                 </div>
//                 <p className="text-white p-1 px-3 text-center flex items-center justify-center rounded-lg bg-primary-bg w-28  md:w-full ">
//                   In Season
//                 </p>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };
// Carousel.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       subtext: PropTypes.string,
//       color: PropTypes.string,
//     })
//   ).isRequired,
//   slidesPerView: PropTypes.number,
//   spaceBetween: PropTypes.number,
//   onSwiperRef: PropTypes.func,
//   handleOptionClick: PropTypes.func,
// };

// export default Carousel;

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
import { RiArrowDownSLine, RiShoppingCart2Line } from "react-icons/ri";
import PropTypes from "prop-types";
import { formatAmount } from "../utils"; // Assuming you have this utility function
import { Link } from "react-router-dom";

const Carousel = ({ items, handleOptionClick }) => {
  const handleOptionSelection = (selectedOption) => {
    handleOptionClick(selectedOption);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      loop
      autoplay={{ delay: 6000 }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 1, spaceBetween: 10 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
      }}
      className="!overflow-y-visible"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className=" !overflow-x-hidden ">
            <div
              style={{
                backgroundColor: item.color || "#f0f0f0",
                borderRadius: "10px",
              }}
              className="image-container relative"
            >
              <div className="w-full md:h-[300px] lg:h-[350px] h-[150px] bg-gray-100 rounded-lg overflow-hidden">
                {" "}
                {/* added overflow-hidden to image container */}
                <Link to={`/product-details/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all"
                  />
                </Link>
              </div>
            </div>

            <div className="h-full relative">
              <div className="flex flex-col md:flex-row lg:items-center justify-between min-h-10">
                <Link
                  to={`/product-details/${item.id}`}
                  className="lg:text-left mt-2 text-sm font-bold text-text-header text-nowrap w-full md:w-full  overflow-x-hidden text-ellipsis"
                >
                  {" "}
                  {item.name}
                </Link>
                <div className="relative group">
                  {" "}
                  {/* Relative group is CRUCIAL */}
                  <div className="flex items-center mt-2 text-sm font-bold gap-1 bg-[#E7F3E6] text-primary-bg p-1 rounded px-4 cursor-pointer">
                    <span className="text-xs">
                      {item?.product_options?.length || 0}
                    </span>
                    <p onClick={() => handleOptionClick(item)}>Options</p>
                    <RiArrowDownSLine size={16} />
                  </div>
                  <ul className="absolute right-0 top-full z-[999999] lg:w-[250px] max-h-40  px-2 py-4 bg-white border rounded-lg shadow-lg hidden group-hover:block overflow-y-scroll !h-auto ">
                    <div className="overflow-scroll h-auto relative z-50">
                      {item?.product_options?.length > 0 ? (
                        item?.product_options.map((option, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                            onClick={() => handleOptionSelection(option)}
                          >
                            <img
                              src={option.image}
                              alt=""
                              className="w-6 h-6"
                            />
                            {option.name || "Unnamed Option"}
                          </li>
                        ))
                      ) : (
                        <li className="px-2 py-2 text-xs font-medium text-gray-500">
                          No options available
                        </li>
                      )}
                    </div>
                  </ul>
                </div>
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
                  className="flex items-center justify-center p-3 gap-1 px-3 rounded-lg bg-gray-300 text-center md:w-full lg:text-nowrap"
                >
                  <RiShoppingCart2Line size={12} />
                  <p className="">Add to Cart</p>
                </div>
                <p className="text-white p-1 px-3 text-center flex items-center justify-center rounded-lg bg-primary-bg w-28 md:w-full">
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
      product_options: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string,
          name: PropTypes.string,
        })
      ),
      price_range: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  handleOptionClick: PropTypes.func.isRequired,
};

export default Carousel;
