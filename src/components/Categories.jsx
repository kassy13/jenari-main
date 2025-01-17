// Import Swiper styles for the necessary modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import image1 from "../assets/image.svg";
import image2 from "../assets/image (2).svg";
import image3 from "../assets/image (3).svg";
import { useContext } from "react";
import AuthContext from "./context/AuthContex";
import { useNavigate } from "react-router-dom";

const category = [
  { id: 1, name: "Fruits", img: image1, color: "#F0FFE7" },
  { id: 2, name: "Protein Sources", img: image2, color: "#FFFCE5" },
  { id: 3, name: "Swallow, Tubers & Grains", img: image3, color: "#FFEDF1" },
  { id: 4, name: "Vegetables", img: image1, color: "#FFF6FF" },
  { id: 5, name: "Dairy", img: image3, color: "#FFF0F6" },
  // Add more categories as needed
];

const Categories = () => {
  const { categories } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="shop-by-category mx-6 lg:mx-12 my-20 md:mt-44 mt-40 lg:mt-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-bold">Shop by Category</span>
      </div>

      {/* Carousel */}

      <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-2  gap-3 rounded-xl flex flex-nowrap overflow-x-auto ">
        {category.map((category, index) => (
          <div
            key={category.id}
            style={{ backgroundColor: category.color }} // Use inline styles to apply background color
            className="rounded-xl w-full"
            onClick={() =>
              navigate(`/supermarket?category=${categories?.[index]?.id}`)
            }
          >
            <div className="w-[16rem] md:w-full">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-60 object-cover rounded-lg"
              />
              <p className="mt-2 text-base font-medium w-30  text-center lg:text-sm pb-5">
                {categories?.[index]?.category_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
