import React from "react";
import icon1 from "../assets/delivery1.svg";
import icon2 from "../assets/wallet.svg";
import icon3 from "../assets/quality.svg.svg";
import Iconstext from "../ui/Iconstext";
import features1 from "../assets/features 1.svg";
import features2 from "../assets/features2.svg";
import features3 from "../assets/features 3.svg";

const Features = () => {
  const content = [
    {
      img: icon1,
      title: "Reorder Function",
      text: "Streamline your shopping routine with our Reorder feature. Effortlessly replicate past orders and save time on every purchase.",
    },
    {
      img: icon2,
      title: "Wallet Integration",
      text: "Fund your wallet with ease and enjoy fast and reliable transactions every time you shop with us.",
    },
    {
      img: icon3,
      title: "Household Carriage",
      text: "Tailored delivery to your doorstep! Choose your preferred floor for delivery with our Custom Floor Selection Feature.",
    },
  ];
  return (
    <div className="mx-14 py-12">
      <h2 className="text-center font-extrabold text-2xl text-secondary-bg pb-4">
        Features
      </h2>
      <p className="text-center text-4xl tracking-tight py-3">
        Cool features to simplify your shopping
        <span>
          <br /> experience
        </span>
      </p>
      <div className="flex justify-between  w-full gap-7 py-5  ">
        <div className="grid grid-cols-3 gap-2 w-full ">
          <div className="col-span-3 w-full h-48 ">
            <img
              src={features1}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 w-full h-48 ">
            <img
              src={features2}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-2 w-full h-48">
            <img
              src={features3}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className=" flex flex-col justify-between  w-full pr-4">
          {content.map((item, index) => {
            return (
              <Iconstext text={item.text} title={item.title} img={item.img} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
