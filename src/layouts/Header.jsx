import { useContext, useEffect, useRef, useState } from 'react';
import logo from '../assets/logo transparent 1.svg';
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
} from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import NavbarComponet from '../ui/NavbarComponet';
import order from '../assets/order.svg';
import AuthContext from '../components/context/AuthContex';
import useAppStore from '../store';
import { formatAmount } from '../utils';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout, handleGetCartItems } = useContext(AuthContext);
  const { authToken, user, cartProducts } = useAppStore();
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false); // State for cart dropdown
  const cartRef = useRef(null); // Ref for the cart dropdown

  // const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => {
    setMenuOpen(false); // Hide menu when a link is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          await handleGetCartItems(); // Fetch cart items from the API
        } catch (error) {
          console.error('Failed to fetch cart items', error);
        }
      };
      fetchCartItems();
    }
  }, [user]);
  // Close the cart dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartDropdownOpen(false); // Close the cart dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleCartDropdown = (e) => {
    e.preventDefault();
    setCartDropdownOpen((prev) => !prev);
  };

  return (
    <div className="fixed w-full top-0 z-[99]">
      <nav className="bg-header-bg text-white font-sans  ">
        <div className="flex items-center justify-between p-4 lg:py-4 lg:px-12">
          {/* Logo Section */}
          <Link className="w-32 lg:w-48" to={'/'}>
            <img src={logo} alt="Logo" className="w-full h-auto object-cover" />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-2xl focus:outline-none transition-all duration-300"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center gap-3 w-1/2"></div>

          {/* Desktop Cart and Actions */}
          <div className="hidden md:flex items-center gap-4 ">
            {user && (
              <Link
                to={'/orders'}
                className="flex items-center gap-2 cursor-pointer text-nowrap relative"
              >
                <img
                  src={order}
                  alt="order"
                  width={24}
                  height={24}
                  className="md:w-10 md:h-10 lg:w-5 lg:h-5"
                />
                <p className="md:hidden lg:block">Orders</p>
              </Link>
            )}

            {/* Cart Section with Badge */}
            <div
              ref={cartRef} // Attach ref here
              className="flex items-center gap-2 cursor-pointer text-nowrap relative"
              onClick={toggleCartDropdown} // Toggle the cart dropdown on click
            >
              <div className="relative">
                <RiShoppingBagLine className="text-xl" size={26} />
                {cartProducts?.length > 0 && (
                  <span className="absolute top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    {cartProducts?.length}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-start leading-tight">
                <p className="text-xs">My Cart</p>
                <p className="text-xs font-bold text-primary-bg">£0.00</p>
              </div>

              <RiArrowDownLine className="text-sm" />

              {/* Cart Items Dropdown (visible when cart is clicked) */}
              {cartDropdownOpen && cartProducts?.length > 0 && (
                <div
                  className="absolute top-12 right-0 z-50 mt-2 w-96 bg-white text-black shadow-lg rounded-lg p-4"
                  style={{ minWidth: '480px' }} // Adjust size as needed
                >
                  <h4 className="font-semibold text-lg mb-2">Cart Items</h4>
                  <ul className="space-y-2">
                    {cartProducts?.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.product}</span>
                        <span>
                          {item.quantity} x £{formatAmount(item.price)}
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
              {!authToken || !user ? (
                <Link
                  to="/signUp"
                  className="px-7 py-2 text-sm font-bold bg-primary-bg rounded-full hover:bg-opacity-85 transition-colors"
                >
                  Register
                </Link>
              ) : (
                ''
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
          className={`absolute top-0 w-full min-h-dvh  lg:h-screen bg-header-bg text-white p-6 space-y-6 md:hidden z-50 transform transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4  right-4 text-2xl focus:outline-none"
          >
            <RiCloseLine />
          </button>

          <div className="flex justify-end text-nowrap gap-2 pt-4 ">
            {/* <form action="" className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-4 pr-10 bg-gray-white rounded-full text-sm placeholder-gray-400 text-secondary-bg focus:outline-none focus:ring-2 focus:ring-secondary-bg"
              />
              <RiSearchLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg text-black" />
            </form> */}

            {user && (
              <Link
                to={'/orders'}
                className="flex items-center gap-2 cursor-pointer text-nowrap relative"
              >
                <img src={order} alt="order" width={24} height={24} />
                <p className="hidden md:block">Orders</p>
              </Link>
            )}
            <div className="relative">
              <RiShoppingBagLine className="text-xl" size={26} />
              {cartProducts?.length > 0 && (
                <span className="absolute top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  {cartProducts?.length}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start leading-tight">
              <p className="text-xs">My Cart</p>
              <p className="text-xs font-bold text-primary-bg">£0.00</p>
            </div>

            <p className="text-primary-bg text-sm font-bold">{user?.name}</p>
          </div>

          <ul className="flex flex-col items-start gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide w-full">
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 ${
                  isActive ? 'text-secondary-bg font-semibold' : 'text-white'
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
                  isActive ? 'text-secondary-bg font-semibold' : 'text-white'
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
                  isActive ? 'text-secondary-bg font-semibold' : 'text-white'
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
                  isActive ? 'text-secondary-bg font-semibold' : 'text-white'
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
                  isActive ? 'text-secondary-bg font-semibold' : 'text-white'
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
                  isActive ? 'text-secondary-bg font-semibold' : 'text-white'
                } hover:text-secondary-bg`
              }
            >
              <RiContactsBook3Line className="text-lg" />
              Contact Us
            </NavLink>

            <NavLink
              to="/faq"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={({ isActive }) =>
                `flex items-center gap-2  px-2 ${
                  isActive ? 'text-secondary-bg font-semibold' : 'text-white'
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
            ''
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
