import React from "react";
import { RiEqualizer2Line } from "react-icons/ri";
import ugu from "../assets/ugu.svg";
import carrot from "../assets/carrot.png";
import abacha from "../assets/abacha.svg";
import SuperMarkertCard from "../ui/SuperMarkertCard";
import cray from "../assets/crayfish.svg";
import potato from "../assets/potato.svg";
import tomato from "../assets/tomato.png";
import shombo from "../assets/pepper.svg";
import PaginationFooter from "../ui/PaginationFooter";

const Supermarket = () => {
  const supermarketItems = [
    {
      text: "Ugu",
      subtext: "Freshly harvested ugu leaves. ",
      image: ugu,
      inSeason: true,
    },
    {
      text: "Red Crayfish",
      subtext: "Finely processed crayfish ",
      image: cray,
      inSeason: true,
    },
    {
      text: "Shombo",
      subtext: "Fresh hot shombo shombo ",
      image: shombo,
      inSeason: true,
    },

    {
      text: "Sweet Carrots",
      subtext: "Freshly harvested juicy carrots.  ",
      image: carrot,
      inSeason: true,
    },
    {
      text: "Abacha",
      subtext: "Freshly harvested juicy carrots.  ",
      image: abacha,
      inSeason: false,
    },
    {
      text: "Sweet Potatoes",
      subtext: "Freshly harvested juicy potatoes.  ",
      image: potato,
      inSeason: false,
    },
    {
      text: "Fresh Tomatoes",
      subtext: "Freshly harvested juicy Tomatoes  ",
      image: tomato,
      inSeason: true,
    },
    {
      text: "Abacha",
      subtext: "Freshly harvested juicy carrots.  ",
      image: abacha,
      inSeason: true,
    },
  ];
  return (
    <div className="lg:px-16 py-16">
      <h1 className="text-[#1F3D4F] text-3xl tracking-tighter font-semibold">
        All Products
      </h1>
      <div className="inline-flex items-center gap-1 border  p-2 rounded-xl text-text-light mt-4">
        <RiEqualizer2Line />

        <select name="" id="" className="border-none outline-none">
          <option value="" selected disabled>
            Filter
          </option>
          <option value="">Categories</option>
          <option value="">Price</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-9 mb-6">
        {supermarketItems.map((items, index) => (
          <SuperMarkertCard
            key={index}
            image={items.image}
            text={items.text}
            subtext={items.subtext}
            inSeason={items.inSeason}
          />
        ))}
      </div>
      <PaginationFooter />
    </div>
  );
};

export default Supermarket;
