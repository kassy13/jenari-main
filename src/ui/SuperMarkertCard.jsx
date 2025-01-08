import React, { useState } from "react";
import {
  RiArrowDownSLine,
  RiHeartLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import Offcanvas from "../components/Offcanvas";
import { Link } from "react-router-dom";

const SuperMarkertCard = ({
  id,
  image,
  text,
  subtext,
  inSeason,
  options,
  optionNum,
  price,
  onOptionClick, // This is the handler function to trigger off-canvas
}) => {
  const handleOptionSelection = (selectedOption) => {
    // If options is a single object, wrap it in an array, otherwise use it as it is
    const optionsToPass = Array.isArray(selectedOption)
      ? selectedOption
      : [selectedOption];
    onOptionClick(optionsToPass); // Pass the options array to the parent
  };

  console.log("options", options);
  return (
    <div>
      <div className="image-container relative">
        <div className="bg-gray-400 inline-block p-1 rounded-full absolute top-3 left-3 z-30">
          <RiHeartLine size={20} color="white" />
        </div>
        <Link to={`/product-details/${id}`} className="w-full  rounded-lg ">
          <img
            src={image}
            alt={text}
            className="w-full h-[250px]  object-cover rounded-lg"
          />
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <Link
          to={`/product-details/${id}`}
          className="text-left text-sm font-bold text-text-header cursor-pointer"
        >
          {text}
        </Link>
        <div className="relative group">
          <div className="flex items-center mt-2 text-sm font-bold gap-1 bg-[#E7F3E6] text-primary-bg p-1 rounded px-4">
            <div
              className="flex items-center gap-1 text-sm font-medium cursor-pointer bg-[#E7F3E6] text-primary-bg p-1 rounded px-4"
              // Call the passed function when clicked
            >
              <span className="text-xs">{optionNum}</span>
              <p onClick={() => onOptionClick(options)}>Options</p>
              <RiArrowDownSLine size={16} />
            </div>

            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-10 z-50 hidden w-max bg-white border rounded-lg shadow-lg mt-1 group-hover:block">
              {options.length > 0 ? (
                options.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionSelection(option)}
                  >
                    {option.name || "Unnamed Option"}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-sm text-gray-500">
                  No options available
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="text-text-light text-xs">{subtext}</p>
        <span className="font-extrabold text-text-header text-xs">{price}</span>
      </div>
      <div className="flex justify-between my-2 text-xs">
        <div className="flex items-center p-1 gap-1 px-3 rounded-lg bg-gray-300">
          <RiShoppingCart2Line size={12} />
          <p className="pt-1">Add to Cart</p>
        </div>
        <p
          className={`text-white p-1 px-3 text-center flex items-center rounded-lg ${
            inSeason === "In Season" ? " bg-primary-bg" : "bg-secondary-bg"
          }`}
        >
          {inSeason}
        </p>
      </div>

      {/* Off-Canvas to Select Product Options
      {isOffCanvasOpen && <Offcanvas />} */}
    </div>
  );
};

export default SuperMarkertCard;
