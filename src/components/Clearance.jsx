import image1 from "../assets/image.svg";
import image2 from "../assets/image (2).svg";
import image3 from "../assets/image (3).svg";
import Carousel from "../ui/Carousel";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Clearance = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const categories = [
    {
      image: image1,
      subtext: "Freshly harvested juicy carrots.",
      text: "Carrots",
    },
    {
      image: image2,
      subtext: "Fresh Jos red tomatoes.",
      text: "Protein Sources",
    },
    {
      image: image3,
      subtext: "Fresh Jos red tomatoes.",
      text: "Tubers & Grains",
    },
    {
      image: image1,
      subtext: "Freshly processed African snail.",
      text: "Vegetables",
    },
    {
      image: image3,
      subtext: "Freshly harvested juicy carrots.",
      text: "Dairy",
    },
  ];
  return (
    <div className="px-12 py-8">
      <div className="flex items-center justify-between">
        <h2 className="py-4 font-sans text-text-header tracking-tighter font-bold text-xl">
          Clearance Sales
        </h2>
        <div className="flex space-x-2 mb-4">
          <button
            onClick={handlePrevClick}
            className="text-xl bg-gray-200 p-2 rounded"
            aria-label="Previous"
          >
            <RiArrowLeftSFill />
          </button>
          <button
            onClick={handleNextClick}
            className="text-xl bg-gray-200 p-2 rounded"
            aria-label="Next"
          >
            <RiArrowRightSFill />
          </button>
        </div>
      </div>
      <Carousel
        items={categories}
        slidesPerView={4}
        spaceBetween={20}
        onSwiperRef={(swiper) => {
          swiperRef.current = swiper;
        }}
      />
      <div className="flex justify-center items-center  my-3">
        <Link className="p-1 px-3 bg-gray-50 rounded-xl py-3 text-text-light text-sm ">
          Load More Categories
        </Link>
      </div>
    </div>
  );
};

export default Clearance;
