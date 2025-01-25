// Import Swiper styles for the necessary modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useContext, useState } from 'react';
import AuthContext from './context/AuthContex';
import { useNavigate } from 'react-router-dom';

const categoryColorList = [
  { id: 1, color: '#F0FFE7' },
  { id: 2, color: '#FFFCE5' },
  { id: 3, color: '#FFEDF1' },
  { id: 4, color: '#FFF6FF' },
  { id: 5, color: '#FFF0F6' },
  { id: 6, color: '#F0FFE7' },
  { id: 7, color: '#FFFCE5' },
  { id: 8, color: '#FFEDF1' },
  { id: 9, color: '#FFF6FF' },
  { id: 10, color: '#FFF0F6' },
  { id: 11, color: '#F0FFE7' },
  { id: 12, color: '#FFFCE5' },
  { id: 13, color: '#FFEDF1' },
  { id: 14, color: '#FFF6FF' },
  { id: 15, color: '#FFF0F6' },
  { id: 16, color: '#F0FFE7' },
  { id: 17, color: '#FFFCE5' },
  { id: 18, color: '#FFEDF1' },
  { id: 19, color: '#FFF6FF' },
  { id: 20, color: '#FFF0F6' },
  // Add more categories as needed
];

const Categories = () => {
  const [showMore, setShowMore] = useState(false);
  const { categories } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    localStorage.setItem('selected_category', JSON.stringify(category));
    navigate(`/supermarket?category=${category?.id}`); // Use the id instead of slug
  };

  return (
    <div className="shop-by-category mx-6 lg:mx-12 my-20 md:mt-44 mt-40 lg:mt-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-bold">Shop by Category</span>
      </div>

      {/* Carousel */}

      <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-2  gap-3 rounded-xl flex flex-nowrap overflow-x-auto ">
        {categories
          .slice(0, !showMore ? 5 : categories?.length)
          .map((category, index) => (
            <div
              key={category.id}
              style={{ backgroundColor: categoryColorList?.[index]?.color }} // Use inline styles to apply background color
              className="rounded-xl w-full"
              onClick={() => handleCategoryClick(category)}
            >
              <div className="w-[16rem] md:w-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-[6rem] object-contain rounded-lg"
                />
                <p className="mt-2 text-[20px] font-semibold w-30  text-center lg:text-sm pb-5">
                  {categories?.[index]?.category_name}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-10 items-center  my-3">
        <button
          onClick={() => setShowMore(!showMore)}
          className="p-1 px-3 bg-gray-50 rounded-xl py-3 text-text-light text-sm "
        >
          {showMore ? 'Show Less' : 'Show More'} Categories
        </button>
      </div>
    </div>
  );
};

export default Categories;
