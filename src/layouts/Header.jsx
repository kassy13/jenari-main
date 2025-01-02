import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../assets/logo transparent 1.svg";
import {
  RiArrowDownLine,
  RiMapLine,
  RiSearchLine,
  RiShoppingBagLine,
  RiMenuLine,
  RiCloseLine,
  RiHome2Line,
  RiStore2Line,
  RiHeart2Line,
  RiArticleLine,
  RiUserCommunityLine,
  RiContactsBook3Line,
  RiQuestionLine,
} from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import NavbarComponet from "../ui/NavbarComponet";
import AuthContext from "../components/context/AuthContex";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, token, logout, categories, isLoading, handleGetCartItems } =
    useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [isCartHovered, setIsCartHovered] = useState(false); // State for hover effect
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false); // State for cart dropdown
  const cartRef = useRef(null); // Ref for the cart dropdown

  console.log("menu", menuOpen);
  console.log("user", user);
  // const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => {
    setMenuOpen(false); // Hide menu when a link is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  // Fetch cart items when the component mounts
  useEffect(() => {
    if (user) {
      // Check if user is authenticated
      const fetchCartItems = async () => {
        try {
          const items = await handleGetCartItems(); // Fetch cart items from the API
          setCartItems(items); // Set the cart items to state
        } catch (error) {
          console.error("Failed to fetch cart items", error);
        }
      };
      fetchCartItems();
    }
  }, [user, handleGetCartItems]);

  // Close the cart dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartDropdownOpen(false); // Close the cart dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCartDropdown = (e) => {
    e.preventDefault();
    setCartDropdownOpen((prev) => !prev);
  };

  return (
    <div className="fixed w-full top-0 z-[99999]">
      <nav className="bg-header-bg text-white font-sans  ">
        <div className="flex items-center justify-between p-4 lg:py-4 lg:px-12">
          {/* Logo Section */}
          <div className="w-32 lg:w-48">
            <img src={logo} alt="Logo" className="w-full h-auto object-cover" />
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-2xl focus:outline-none transition-all duration-300"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center gap-3 w-1/2">
            <form action="" className="relative w-full">
              <input
                type="text"
                placeholder="Browse Supermarket"
                className="w-full py-2 pl-4 pr-12 bg-gray-white rounded-full text-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-secondary-bg"
              />
            </form>
            <div className="flex items-center gap-4">
              {/* Search Icon */}
              <div className="bg-primary-bg p-2 rounded-full flex items-center justify-center h-10 w-10">
                <RiSearchLine color="white" className="text-lg" />
              </div>
              {/* Map Icon */}
              <div className="bg-primary-bg p-2 rounded-full flex items-center justify-center h-10 w-10">
                <RiMapLine color="white" className="text-lg" />
              </div>
            </div>
          </div>

          {/* Desktop Cart and Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Cart Section with Badge */}
            <div
              ref={cartRef} // Attach ref here
              className="flex items-center gap-2 cursor-pointer text-nowrap relative"
              onClick={toggleCartDropdown} // Toggle the cart dropdown on click
            >
              <div className="relative">
                <RiShoppingBagLine className="text-xl" size={26} />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-start leading-tight">
                <p className="text-xs">My Cart</p>
                <p className="text-xs font-bold text-primary-bg">₦0.00</p>
              </div>

              <RiArrowDownLine className="text-sm" />

              {/* Cart Items Dropdown (visible when cart is clicked) */}
              {cartDropdownOpen && cartItems.length > 0 && (
                <div
                  className="absolute top-12 right-0 z-50 mt-2 w-96 bg-white text-black shadow-lg rounded-lg p-4"
                  style={{ minWidth: "480px" }} // Adjust size as needed
                >
                  <h4 className="font-semibold text-lg mb-2">Cart Items</h4>
                  <ul className="space-y-2">
                    {cartItems.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.product}</span>
                        <span>
                          {item.quantity} x ₦{item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-center">
                    <Link
                      to="/cart"
                      className="text-primary-bg hover:underline"
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Login/Register Section */}
            <div className="flex gap-4">
              {!token || !user ? (
                <Link
                  to="/signUp"
                  className="px-7 py-2 text-sm font-bold bg-primary-bg rounded-full hover:bg-opacity-85 transition-colors"
                >
                  Register
                </Link>
              ) : (
                ""
              )}
              {!token ? (
                <Link
                  to="/SignIn"
                  className="px-7 py-2 text-sm font-bold bg-white rounded-full hover:bg-opacity-85 text-primary-bg transition-colors"
                >
                  Login
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/"
                    onClick={logout}
                    className="px-7 py-2 text-sm font-bold bg-white rounded-full hover:bg-opacity-85 text-primary-bg transition-colors"
                  >
                    Log out
                  </Link>
                  <p className="text-primary-bg text-sm font-bold">
                    {user.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* {menuOpen && (
          <div
            className={`absolute top-0 w-full h-screen bg-header-bg text-white p-6 space-y-6 md:hidden z-50  transition-left duration-300 `}
          >
          
            <button
              onClick={toggleMenu}
              className="absolute top-4  right-4 text-2xl focus:outline-none"
            >
              <RiCloseLine />
            </button>

            
            <div className="flex text-nowrap gap-2 pt-4 ">
              <form action="" className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 pl-4 pr-10 bg-gray-white rounded-full text-sm placeholder-gray-400 text-secondary-bg focus:outline-none focus:ring-2 focus:ring-secondary-bg"
                />
                <RiSearchLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg text-black" />
              </form>
              <div className="relative">
                <RiShoppingBagLine className="text-xl" size={26} />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-start leading-tight">
                <p className="text-xs">My Cart</p>
                <p className="text-xs font-bold text-primary-bg">₦0.00</p>
              </div>
            </div>

          
            <ul className="flex flex-col items-start gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide w-full">
              <NavLink
                to="/"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 ${
                    isActive ? "text-secondary-bg font-semibold" : "text-white"
                  } hover:text-secondary-bg`
                }
              >
                <RiHome2Line className="text-lg" />
                Home
              </NavLink>

              <NavLink
                to="/supermarket"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 ${
                    isActive ? "text-secondary-bg font-semibold" : "text-white"
                  } hover:text-secondary-bg`
                }
              >
                <RiStore2Line className="text-lg" />
                Supermarket
              </NavLink>

              <NavLink
                to="/charity"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `flex items-center gap-2  px-2 ${
                    isActive ? "text-secondary-bg font-semibold" : "text-white"
                  } hover:text-secondary-bg`
                }
              >
                <RiHeart2Line className="text-lg" />
                Charity
              </NavLink>

              <NavLink
                to="/blog"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `flex items-center gap-2  px-2 ${
                    isActive ? "text-secondary-bg font-semibold" : "text-white"
                  } hover:text-secondary-bg`
                }
              >
                <RiArticleLine className="text-lg" />
                Blog
              </NavLink>

              <NavLink
                to="/about"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `flex items-center gap-2  px-2 ${
                    isActive ? "text-secondary-bg font-semibold" : "text-white"
                  } hover:text-secondary-bg`
                }
              >
             
                <RiUserCommunityLine className="text-lg" />
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `flex items-center gap-2  px-2 ${
                    isActive ? "text-secondary-bg font-semibold" : "text-white"
                  } hover:text-secondary-bg`
                }
              >
                <RiContactsBook3Line className="text-lg" />
                Contact Us
              </NavLink>

              <NavLink
                to="/faq"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={({ isActive }) =>
                  `flex items-center gap-2  px-2 ${
                    isActive ? "text-secondary-bg font-semibold" : "text-white"
                  } hover:text-secondary-bg`
                }
              >
                <RiQuestionLine className="text-lg" />
                FAQs
              </NavLink>
            </ul>
           
            {user.name ? (
              <Link
                to="/signUp"
                className="block text-sm font-bold text-white bg-primary-bg rounded-full py-2 px-4 text-center hover:bg-opacity-85 transition-colors"
              >
                Register
              </Link>
            ) : (
              "Guest"
            )}

            <Link
              to="/signIn"
              className="block text-sm font-bold text-primary-bg bg-white rounded-full py-2 px-4 text-center hover:bg-opacity-85 transition-colors"
            >
              Login
            </Link>
          </div>
        )} */}
        {/* mobile nav */}
        <div
          className={`absolute top-0 w-full h-screen bg-header-bg text-white p-6 space-y-6 md:hidden z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4  right-4 text-2xl focus:outline-none"
          >
            <RiCloseLine />
          </button>

          <div className="flex text-nowrap gap-2 pt-4 ">
            <form action="" className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-4 pr-10 bg-gray-white rounded-full text-sm placeholder-gray-400 text-secondary-bg focus:outline-none focus:ring-2 focus:ring-secondary-bg"
              />
              <RiSearchLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg text-black" />
            </form>
            <div className="relative">
              <RiShoppingBagLine className="text-xl" size={26} />
              {cartItems.length > 0 && (
                <span className="absolute top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  {cartItems.length}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start leading-tight">
              <p className="text-xs">My Cart</p>
              <p className="text-xs font-bold text-primary-bg">₦0.00</p>
            </div>
          </div>

          <ul className="flex flex-col items-start gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide w-full">
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 ${
                  isActive ? "text-secondary-bg font-semibold" : "text-white"
                } hover:text-secondary-bg`
              }
            >
              <RiHome2Line className="text-lg" />
              Home
            </NavLink>

            <NavLink
              to="/supermarket"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 ${
                  isActive ? "text-secondary-bg font-semibold" : "text-white"
                } hover:text-secondary-bg`
              }
            >
              <RiStore2Line className="text-lg" />
              Supermarket
            </NavLink>

            <NavLink
              to="/charity"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-2  px-2 ${
                  isActive ? "text-secondary-bg font-semibold" : "text-white"
                } hover:text-secondary-bg`
              }
            >
              <RiHeart2Line className="text-lg" />
              Charity
            </NavLink>

            <NavLink
              to="/blog"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-2  px-2 ${
                  isActive ? "text-secondary-bg font-semibold" : "text-white"
                } hover:text-secondary-bg`
              }
            >
              <RiArticleLine className="text-lg" />
              Blog
            </NavLink>

            <NavLink
              to="/about"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-2  px-2 ${
                  isActive ? "text-secondary-bg font-semibold" : "text-white"
                } hover:text-secondary-bg`
              }
            >
              <RiUserCommunityLine className="text-lg" />
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-2  px-2 ${
                  isActive ? "text-secondary-bg font-semibold" : "text-white"
                } hover:text-secondary-bg`
              }
            >
              <RiContactsBook3Line className="text-lg" />
              Contact Us
            </NavLink>

            <NavLink
              to="/faq"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={({ isActive }) =>
                `flex items-center gap-2  px-2 ${
                  isActive ? "text-secondary-bg font-semibold" : "text-white"
                } hover:text-secondary-bg`
              }
            >
              <RiQuestionLine className="text-lg" />
              FAQs
            </NavLink>
          </ul>

          {!user ? (
            <Link
              to="/signUp"
              className="block text-sm font-bold text-white bg-primary-bg rounded-full py-2 px-4 text-center hover:bg-opacity-85 transition-colors"
            >
              Register
            </Link>
          ) : (
            ""
          )}
          {!user ? (
            <Link
              to="/signIn"
              className="block text-sm font-bold text-primary-bg bg-white rounded-full py-2 px-4 text-center hover:bg-opacity-85 transition-colors"
            >
              Login
            </Link>
          ) : (
            <Link
              to="/"
              onClick={logout}
              className="block text-sm font-bold text-primary-bg bg-white rounded-full py-2 px-4 text-center hover:bg-opacity-85 transition-colors"
            >
              Logout
            </Link>
          )}
        </div>
      </nav>

      {/* Navbar Component */}
      <NavbarComponet />
    </div>
  );
};

export default Header;
