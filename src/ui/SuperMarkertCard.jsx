import React from "react";
import { RiHeartLine, RiShoppingCart2Line } from "react-icons/ri";

const SuperMarkertCard = ({ image, text, subtext, inSeason }) => {
  return (
    <div>
      <div
        // style={{
        //   backgroundColor: color || "#f0f0f0",
        //   borderRadius: "10px",
        // }}
        className="image-container relative"
      >
        <div className="bg-gray-400 inline-block p-1 rounded-full absolute top-3 left-3 z-30">
          <RiHeartLine size={20} color="white" />
        </div>
        <div className="w-full h-[280px] border rounded-lg">
          <img
            src={image}
            alt={text}
            className="w-full h-full  object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-center mt-2 text-sm font-bold text-text-header">
          {text}
        </p>
        <div className="flex items-center mt-2 text-sm font-bold gap-1 bg-[#E7F3E6] text-primary-bg p-1 rounded px-4">
          <span className="text-xs">3</span> <p>options</p>
        </div>
      </div>
      <div>
        <p className="text-text-light text-xs">{subtext}</p>
        <span className="font-extrabold text-text-header text-xs">
          £3.00 - £5.00
        </span>
      </div>
      <div className="flex justify-between my-2 text-xs">
        <div className="flex items-center p-1 gap-1 px-3 rounded-lg bg-gray-300">
          <RiShoppingCart2Line size={12} />
          <p className="pt-1">Add to Cart</p>
        </div>
        <p
          className={`text-white p-1 px-3 text-center flex items-center rounded-lg ${
            inSeason ? " bg-primary-bg" : "bg-secondary-bg"
          }`}
        >
          {inSeason ? "In Season" : " Clearance"}
        </p>
      </div>
    </div>
  );
};

export default SuperMarkertCard;
