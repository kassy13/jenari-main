import React, { useContext, useEffect, useRef, useState } from "react";
import {
  RiHome2Line,
  RiStore2Line,
  RiHeart2Line,
  RiArticleLine,
  RiQuestionLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiPhoneLine,
  RiShoppingBasket2Line,
  RiSmartphoneLine,
  RiTShirt2Line,
  RiHeartPulseLine,
  RiFootballLine,
  RiUserCommunityLine,
  RiContactsBook3Fill,
  RiContactsBook3Line,
} from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import about from "../assets/about.svg";
import AuthContext from "../components/context/AuthContex";

const NavbarComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [categories, setCategories] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { categories, isLoading } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (id) => {
    navigate(`/supermarket?category=${id}`); // Use the id instead of slug
    setIsDropdownOpen(false); // Close dropdown after navigation
  };
  return (
    <nav className="bg-white shadow-md py-3 px-4 sm:px-12 flex items-center justify-between font-sans text-gray-700 sticky ">
      {/* Links */}

      <div className="flex items-center gap-5 w-full">
        {/* Categories Dropdown */}

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 bg-secondary-bg text-white py-2 px-3 sm:py-3 sm:px-4 rounded-full focus:outline-none"
          >
            <RiStore2Line className="text-lg" />
            <span className="hidden sm:inline">Categories</span>
            {isDropdownOpen ? (
              <RiArrowUpSLine className="text-lg" />
            ) : (
              <RiArrowDownSLine className="text-lg" />
            )}
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-10">
              {isLoading ? (
                <li className="py-2 px-4 text-gray-500">Loading...</li>
              ) : categories.length > 0 ? (
                categories.map((category) => (
                  <li
                    key={category.id}
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategoryClick(category.id)} // Pass id here
                  >
                    {category.category_name}
                  </li>
                ))
              ) : (
                <li className="py-2 px-4 text-gray-500">No categories found</li>
              )}
            </ul>
          )}
        </div>

        {/* Other Links */}

        {/* Call Number */}
        <div
          className="lg:flex items-center gap-2 text-dark-gray hidden"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <RiPhoneLine className="text-lg" />
          <span className="text-sm font-medium hidden lg:block">
            +2349160000375
          </span>
        </div>
      </div>
    </nav>
    // <nav className="bg-white shadow-md py-3 px-4 sm:px-12 flex items-center justify-between font-sans text-gray-700">
    //   <div className="relative" ref={dropdownRef}>
    //     <button
    //       onClick={toggleDropdown}
    //       className="flex items-center gap-2 bg-secondary-bg text-white py-2 px-3 sm:py-3 sm:px-4 rounded-full focus:outline-none"
    //     >
    //       <RiStore2Line className="text-lg" />
    //       <span className="hidden sm:inline">Categories</span>
    //       {isDropdownOpen ? (
    //         <RiArrowUpSLine className="text-lg" />
    //       ) : (
    //         <RiArrowDownSLine className="text-lg" />
    //       )}
    //     </button>
    //     {isDropdownOpen && (
    //       <ul className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-10">
    //         {isLoading ? (
    //           <li className="py-2 px-4 text-gray-500">Loading...</li>
    //         ) : categories.length > 0 ? (
    //           categories.map((category) => (
    //             <li
    //               key={category.id}
    //               className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
    //               onClick={() => handleCategoryClick(category.slug)}
    //             >
    //               {category.category_name}
    //             </li>
    //           ))
    //         ) : (
    //           <li className="py-2 px-4 text-gray-500">No categories found</li>
    //         )}
    //       </ul>
    //     )}
    //   </div>
    // </nav>
  );
};

export default NavbarComponent;
