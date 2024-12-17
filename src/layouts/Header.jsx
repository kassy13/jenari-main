// import React from "react";
// import logo from "../assets/logo transparent 1.svg";
// import {
//   RiArrowDownLine,
//   RiMapLine,
//   RiSearchLine,
//   RiShoppingBagLine,
// } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import NavbarComponet from "../ui/NavbarComponet";
// const Header = () => {
//   return (
//     <>
//       <nav className="lg:py-4 lg:px-12 bg-header-bg flex items-center justify-between font-sans text-white">
//         {/* Logo Section */}
//         <div className="lg:w-48 lg:h-12">
//           <img src={logo} alt="Logo" className="w-full h-full object-cover" />
//         </div>

//         {/* Search Bar */}
//         <div className="flex items-center gap-3 w-1/2">
//           <form action="" className="relative w-full">
//             <input
//               type="text"
//               placeholder="Browse Supermarket"
//               className="w-full py-2 pl-4 pr-12 bg-gray-white rounded-full text-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-secondary-bg"
//             />
//           </form>
//           <div className="flex items-center gap-4">
//             {/* Search Icon */}
//             <div className="bg-primary-bg p-2 rounded-full flex items-center justify-center h-10 w-10">
//               <RiSearchLine color="white" className="text-lg" />
//             </div>

//             {/* Map Icon */}
//             <div className="bg-primary-bg p-2 rounded-full flex items-center justify-center h-10 w-10">
//               <RiMapLine color="white" className="text-lg" />
//             </div>

//             {/* Cart Details */}
//             <div className="flex items-center gap-2 cursor-pointer text-nowrap">
//               <RiShoppingBagLine className="text-xl" />

//               <div className="flex flex-col items-start leading-tight">
//                 <p className="text-xs">My Cart</p>
//                 <p className="text-xs font-bold text-primary-bg">₦0.00</p>
//               </div>
//               <RiArrowDownLine className="text-sm" />
//             </div>
//           </div>
//         </div>

//         {/* Cart and Actions */}
//         <div className="flex items-center">
//           {/* Cart Section */}

//           {/* Login/Register Section */}
//           <div className="flex gap-4">
//             <Link
//               to="/register"
//               className="px-7 py-2 text-sm font-bold  bg-primary-bg rounded-full  hover:bg-opacity-85 transition-colors"
//             >
//               Register
//             </Link>
//             <Link
//               to="/login"
//               className="px-7 py-2 text-sm font-bold bg-white rounded-full hover:bg-opacity-85 text-primary-bg transition-colors"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Navbar Component */}
//       <NavbarComponet />
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import logo from "../assets/logo transparent 1.svg";
import {
  RiArrowDownLine,
  RiMapLine,
  RiSearchLine,
  RiShoppingBagLine,
  RiMenuLine,
  RiCloseLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import NavbarComponet from "../ui/NavbarComponet";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="bg-header-bg text-white font-sans">
        <div className="flex items-center justify-between p-4 lg:py-4 lg:px-12">
          {/* Logo Section */}
          <div className="w-32 lg:w-48">
            <img src={logo} alt="Logo" className="w-full h-auto object-cover" />
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-2xl focus:outline-none"
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
            {/* Cart Section */}
            <div className="flex items-center gap-2 cursor-pointer text-nowrap">
              <RiShoppingBagLine className="text-xl" />
              <div className="flex flex-col items-start leading-tight">
                <p className="text-xs">My Cart</p>
                <p className="text-xs font-bold text-primary-bg">₦0.00</p>
              </div>
              <RiArrowDownLine className="text-sm" />
            </div>

            {/* Login/Register Section */}
            <div className="flex gap-4">
              <Link
                to="/signUp"
                className="px-7 py-2 text-sm font-bold bg-primary-bg rounded-full hover:bg-opacity-85 transition-colors"
              >
                Register
              </Link>
              <Link
                to="/SignIn"
                className="px-7 py-2 text-sm font-bold bg-white rounded-full hover:bg-opacity-85 text-primary-bg transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-header-bg text-white p-6 space-y-6 md:hidden z-50">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl focus:outline-none"
            >
              <RiCloseLine />
            </button>

            {/* Search Input */}
            <form action="" className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-4 pr-10 bg-gray-white rounded-full text-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-secondary-bg"
              />
              <RiSearchLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg text-white" />
            </form>

            {/* Cart Section */}
            <div className="flex items-center gap-2">
              <RiShoppingBagLine className="text-xl" />
              <div className="flex flex-col items-start leading-tight">
                <p className="text-sm">My Cart</p>
                <p className="text-sm font-bold text-primary-bg">₦0.00</p>
              </div>
            </div>

            {/* Links */}
            <Link
              to="/signUp"
              className="block text-sm font-bold text-white bg-primary-bg rounded-full py-2 px-4 text-center hover:bg-opacity-85 transition-colors"
            >
              Register
            </Link>
            <Link
              to="/signIn"
              className="block text-sm font-bold text-primary-bg bg-white rounded-full py-2 px-4 text-center hover:bg-opacity-85 transition-colors"
            >
              Login
            </Link>
          </div>
        )}
      </nav>

      {/* Navbar Component */}
      <NavbarComponet />
    </>
  );
};

export default Header;
