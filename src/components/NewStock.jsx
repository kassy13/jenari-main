import { useContext, useEffect, useRef, useState } from 'react';
import Carousel from '../ui/Carousel';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import AuthContext from './context/AuthContex';
import { useNavigate } from 'react-router-dom';
import Offcanvas from './Offcanvas';

const NewStock = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const { supermarketItems, fetchLatestProducts, handleAddToCartOption } =
    useContext(AuthContext);
  const [currentProduct, setCurrentProduct] = useState(null); // current product state
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false); // Control modal visibility

  useEffect(() => {
    // Fetch products based on the extracted category
    fetchLatestProducts();
  }, [location]);

  const handlePrevClick = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handleCategoryClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    localStorage.clear('selected_category');
    navigate('/supermarket'); // Use the id instead of slug
  };

  const handleOptionClick = (options) => {
    // Always pass options as an array (even if it contains just one option)
    if (options?.product_options?.length > 0) {
      setCurrentProduct(options?.product_options);
      setIsOffCanvasOpen(true);
    } else {
      if (options?.product_id) {
        const data = {
          product_id: options.product_id,
          quantity: 1,
          option: '1',
          product_code: options.product_code,
          name: options.name,
        };
        handleAddToCartOption(data, navigate);
      } else {
        const data = {
          product_id: options.id,
          quantity: 1,
          option: '0',
          product_code: options.product_code,
          name: options.name,
        };
        handleAddToCartOption(data, navigate);
      }
    }
  };

  return (
    <>
      <div className="px-6 lg:px-12 py-8">
        <div className="flex items-center justify-between">
          <h2 className="py-4 font-sans text-text-header tracking-tighter font-bold text-xl">
            New In Stocks
          </h2>
          <div className="flex space-x-7 lg:space-x-2 mb-4">
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
        <Carousel
          items={supermarketItems}
          slidesPerView={1}
          spaceBetween={20}
          onSwiperRef={(swiper) => {
            swiperRef.current = swiper;
          }}
          handleOptionClick={handleOptionClick}
        />
        <div className="flex justify-center items-center my-10">
          <div
            className="p-4 px-12 bg-gray-50 rounded-xl text-bold text-base text-gray-600"
            onClick={handleCategoryClick}
            role="button"
          >
            See all
          </div>
        </div>
      </div>

      {isOffCanvasOpen && (
        <Offcanvas
          options={currentProduct}
          onClose={() => setIsOffCanvasOpen(false)}
          navigate={navigate}
        />
      )}
    </>
  );
};

export default NewStock;
