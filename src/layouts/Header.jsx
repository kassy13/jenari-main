import { useContext, useEffect, useRef, useState } from "react";
import logo from "../assets/logo transparent 1.svg";
import {
  RiArrowDownLine,
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
  RiSearchLine,
  RiWalletLine,
} from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavbarComponet from "../ui/NavbarComponet";
import order from "../assets/order.svg";
import AuthContext from "../components/context/AuthContex";
import useAppStore from "../store";
import { formatAmount } from "../utils";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout, handleGetCartItems, supermarketItems, subTotal } =
    useContext(AuthContext);
  const { authToken, user, cartProducts } = useAppStore();
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false); // State for cart dropdown
  const cartRef = useRef(null); // Ref for the cart dropdown
  const [searchQuery, setSearchQuery] = useState(""); // For search input
  const [filteredResults, setFilteredResults] = useState([]); // For search results
  const [showResults, setShowResults] = useState(false); // Toggle search modal
  const navigate = useNavigate();

  const cartContainerRef = useRef(null);
  const timeoutRef = useRef(null);

  // Function to open dropdown
  const openDropdown = () => {
    clearTimeout(timeoutRef.current); // Prevent accidental closing
    setCartDropdownOpen(true);
  };

  // Function to close dropdown with a delay
  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setCartDropdownOpen(false);
    }, 200); // Adjust delay time (200ms allows smooth transition)
  };

  // const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => {
    setMenuOpen(false); // Hide menu when a link is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Fetch cart items when the component mounts
  useEffect(() => {
    if (authToken) {
      // Check if user is authenticated
      const fetchCartItems = async () => {
        try {
          await handleGetCartItems(); // Fetch cart items from the API
        } catch (error) {
          console.error("Failed to fetch cart items", error);
        }
      };
      fetchCartItems();
    }
  }, []);
  // Close the cart dropdown if clicked outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (cartRef.current && !cartRef.current.contains(event.target)) {
  //       setCartDropdownOpen(false); // Close the cart dropdown if clicked outside
  //     }
  //   };

  //   // document.addEventListener("mousedown", handleClickOutside);
  //   // return () => {
  //   //   document.removeEventListener("mousedown", handleClickOutside);
  //   // };
  // }, []);

  const toggleCartDropdown = (e) => {
    e.preventDefault();
    setCartDropdownOpen((prev) => !prev);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    console.log("Search Query:", query); // Debugging
    setSearchQuery(query);
    // setMenuOpen(false);

    if (query.trim() === "") {
      setFilteredResults([]);
      setShowResults(false);
      return;
    }

    const results = supermarketItems.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredResults(results);
    setShowResults(results.length > 0); // Show the results modal
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(false); // Close the modal
      // setMenuOpen(false);
      setSearchQuery("");
      navigate(`/supermarket?search=${encodeURIComponent(searchQuery.trim())}`);
    }

    setSearchQuery("");
    setShowResults(false);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      e.preventDefault();
      setShowResults(false);
      setMenuOpen(false);

      navigate(`/supermarket?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  console.log("cart productd from header", cartProducts);
  return (
    <div className="fixed w-full top-0 z-[99]">
      <nav className="bg-header-bg text-white font-sans  ">
        <div className="flex items-center justify-between p-4 lg:py-4 lg:px-12">
          {/* Logo Section */}
          <Link className="w-32 lg:w-48" to={"/"} onClick={handleLinkClick}>
            <img src={logo} alt="Logo" className="w-full h-auto object-cover" />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="block lg:hidden text-2xl focus:outline-none transition-all duration-300"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center gap-3 w-1/3 ">
            <form action="" className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                onKeyDown={handleKeyPress}
                className="w-full py-2 pl-4 pr-10 bg-gray-white rounded-full text-sm placeholder-gray-400 text-secondary-bg focus:outline-none focus:ring-2 focus:ring-secondary-bg"
              />

              {/* Search Icon */}
              <RiSearchLine className="absolute right-0 bg-primary-bg h-full w-9 p-2 rounded-full text-white top-1/2 transform -translate-y-1/2 text-lg " />

              {/* Close (Clear) Button */}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery(""); // Clear the input field
                    setShowResults(false); // Hide search results
                  }}
                  className="absolute right-[2.8rem] top-1/2 transform -translate-y-1/2 text-lg text-gray-500 hover:text-black"
                >
                  ✖
                </button>
              )}

              {/* Results Modal */}
              {showResults && filteredResults.length > 0 && (
                <div className="absolute top-full mt-3 bg-white text-black shadow-lg rounded-lg w-full max-h-96 overflow-y-hidden py-4 z-50">
                  <ul className="overflow-y-scroll h-full">
                    {filteredResults.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          navigate(`/product-details/${item.id}`, {
                            state: { searchQuery, results: [item] },
                          });
                          setSearchQuery(""); // Clear the input field
                          setShowResults(false); // Close the modal
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-9 h-9 bg-gray-200 shadow"
                        />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </form>

            {/* Results Modal */}
            {/* {showResults && filteredResults.length > 0 && (
              <div className="absolute top-full bg-white text-black shadow-lg rounded-lg w-1/3 max-h-96 overflow-y-scroll py-4 z-50">
                <ul className="overflow-y-scroll h-full">
                  {filteredResults?.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        navigate(`/product-details/${item.id}`, {
                          state: { searchQuery, results: [item] },
                        });
                        setSearchQuery(""); // Clear the input field
                        setShowResults(false); // Close the modal
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="w-9 h-9 bg-gray-200 shadow"
                      />{" "}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>

          {/* Desktop Cart and Actions */}
          <div className="hidden lg:flex items-center gap-4 ">
            {authToken && (
              <Link
                to={"/orders"}
                className="flex items-center gap-2 cursor-pointer text-nowrap relative"
              >
                {/* <img
                  src={order}
                  alt="order"
                  width={24}
                  height={24}
                  className="md:w-10 md:h-10 lg:w-5 lg:h-5"
                /> */}
                <RiWalletLine size={22} />
                <p className="md:hidden lg:block">Orders</p>
              </Link>
            )}

            {/* Cart Section with Badge */}
            <div className="relative">
              {/* Cart Section with Badge */}
              <div
                className="flex items-center gap-2 cursor-pointer text-nowrap relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <div className="relative">
                  <RiShoppingBagLine className="text-xl" size={26} />
                  {authToken && cartProducts?.length > 0 && (
                    <span className="absolute top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                      {cartProducts.length}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <p className="text-xs">My Cart</p>
                  <p className="text-xs font-bold text-primary-bg">
                    £{parseFloat(subTotal).toFixed(2)}
                  </p>
                </div>
                <RiArrowDownLine className="text-sm" />
              </div>

              {/* Dropdown with gap & delayed closing */}
              {cartDropdownOpen && cartProducts?.length > 0 && (
                <div
                  className="absolute top-[50px] right-0 z-50 w-80 bg-white text-black shadow-lg rounded-lg p-4 border border-gray-200 min-w-[200px]"
                  onMouseEnter={openDropdown} // Keep open when hovering dropdown
                  onMouseLeave={closeDropdown} // Close when leaving dropdown
                >
                  <div className="flex justify-between items-center p-2">
                    <h4 className="font-semibold text-lg">
                      Your Cart Items ({cartProducts?.length} items)
                    </h4>
                    <RiCloseLine
                      size={24}
                      className="cursor-pointer"
                      onClick={() => setCartDropdownOpen(false)}
                    />
                  </div>
                  <ul className="space-y-2">
                    {cartProducts?.slice(-3).map((item, index) => (
                      <li
                        key={index}
                        className="grid grid-cols-4 gap-4  items-center mb-6 "
                      >
                        <div className="w-15 h-15 col-span-1">
                          <img
                            src={item?.product_info?.image}
                            alt="img"
                            className="w-full h-full  object-contain"
                          />
                        </div>
                        <div className="flex flex-col col-span-3">
                          <span className="text-dark-blue">{item.product}</span>
                          <span className="ttext-dark-blue font-bold">
                            {item.quantity} x £{formatAmount(item.price)}
                          </span>
                        </div>
                      </li>
                    ))}
                    <p className="flex justify-between text-text-light py-5">
                      Total: <span>£{parseFloat(subTotal).toFixed(2)}</span>
                    </p>
                  </ul>
                  <div
                    className="my-4 py-2 rounded-full text-center transition bg-gray-100 hover:bg-primary-bg hover:text-white cursor-pointer"
                    onClick={() => navigate("/cart")}
                  >
                    Expand Cart
                  </div>
                </div>
              )}
            </div>

            {/* Login/Register Section */}
            <div className="flex gap-4">
              {!authToken || !user ? (
                <Link
                  to="/signUp"
                  className="px-7 py-2 text-sm font-bold bg-primary-bg rounded-full hover:bg-opacity-85 transition-colors"
                >
                  Register
                </Link>
              ) : (
                ""
              )}
              {!authToken ? (
                <Link
                  to="/SignIn"
                  className="px-7 py-2 text-sm font-bold bg-white rounded-full hover:bg-opacity-85 text-primary-bg transition-colors md:text-nowrap"
                >
                  Login
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/"
                    onClick={logout}
                    className="px-7 py-2 text-sm font-bold bg-white rounded-full hover:bg-opacity-85 text-primary-bg transition-colors md:text-nowrap"
                  >
                    Log out
                  </Link>
                  <p className="text-primary-bg text-sm font-bold">
                    {user?.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`absolute top-0 w-full min-h-dvh left-0 right-0  lg:h-screen bg-header-bg pt-8  text-white p-6 space-y-6 lg:hidden z-50 transform transition-transform duration-300 md:px-12 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-8  right-4 text-2xl focus:outline-none"
          >
            <RiCloseLine />
          </button>

          <div className="flex items-end justify-between">
            <Link
              className="w-32 lg:w-48 -translate-x-5 translate-y-2"
              to={"/"}
              onClick={handleLinkClick}
            >
              <img
                src={logo}
                alt="Logo"
                className="w-full h-auto object-cover"
              />
            </Link>
            <div className="flex justify-end text-wrap gap-2 pt-4 ">
              {user && (
                <Link
                  to={"/orders"}
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 cursor-pointer text-nowrap relative"
                >
                  {/* <img src={order} alt="order" width={24} height={24} /> */}
                  <RiWalletLine size={22} />
                  <p className="hidden md:block">Orders</p>
                </Link>
              )}
              <div
                ref={cartRef} // Attach ref here
                className="flex items-center gap-2 cursor-pointer text-nowrap relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <Link
                  to={"/cart"}
                  className="relative"
                  onClick={handleLinkClick}
                >
                  <RiShoppingBagLine className="text-xl" size={26} />
                  {cartProducts?.length > 0 && (
                    <span className="absolute top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                      {cartProducts?.length}
                    </span>
                  )}
                </Link>
                <Link
                  to={"/cart"}
                  onClick={handleLinkClick}
                  className="flex flex-col items-start leading-tight"
                >
                  <p className="text-xs">My Cart</p>
                  <p className="text-xs font-bold text-primary-bg">£0.00</p>
                </Link>
              </div>
              <p className="text-primary-bg text-sm font-bold">{user?.name}</p>
              {/* Cart Items Dropdown (visible when cart is clicked) */}
            </div>
          </div>
          <form action="" className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              onKeyDown={handleKeyPress}
              className="w-full py-2 pl-4 pr-10 bg-gray-white rounded-full text-sm placeholder-gray-400 text-secondary-bg focus:outline-none focus:ring-2 focus:ring-secondary-bg"
            />

            {/* Search Icon */}
            <RiSearchLine className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg text-black" />

            {/* Close (Clear) Button */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery(""); // Clear the input field
                  setShowResults(false); // Hide search results
                }}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 text-lg text-gray-500 hover:text-black"
              >
                ✖
              </button>
            )}

            {/* Results Modal */}
            {showResults && filteredResults.length > 0 && (
              <div className="absolute top-full mt-3 bg-white text-black shadow-lg rounded-lg w-full max-h-96 overflow-y-hidden py-4 z-50">
                <ul className="overflow-y-scroll h-full">
                  {filteredResults.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        navigate(`/product-details/${item.id}`, {
                          state: { searchQuery, results: [item] },
                        });
                        setSearchQuery(""); // Clear the input field
                        setShowResults(false); // Close the modal
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="w-9 h-9 bg-gray-200 shadow"
                      />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </form>

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
              Store
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
