import React from "react";
import mockup from "../assets/mockup.svg";
import play from "../assets/play store.svg";
import apple from "../assets/app store.svg";
import shopWithJenari from "../assets/shop-with-jenari.svg";

const ShopHome = () => {
  return (
    <div className="w-full bg-[#881739] flex flex-col lg:flex-row items-center h-[75vh] lg:h-96 relative gap-6 mt-8">
      <div className="w-full text-white lg:pl-14 my-6 lg:my-0 text-center lg:text-left">
        <h1 className="text-2xl lg:text-6xl font-bold tracking-tight">
          Shop Home,{" "}
          <span>
            <br /> away from Home
          </span>
        </h1>
        <p className="text-xl py-2">
          Shop local groceries that remind you of home,{" "}
          <span>
            <br /> easily and affordably from your home comfort.
          </span>
        </p>
        <div className="flex justify-center lg:justify-start items-center w-full gap-3 pt-4 ">
          <div>
            <a href="">
              {" "}
              <img src={play} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={apple} alt="" />
            </a>
          </div>
          <p>Coming soon</p>
        </div>
      </div>
      <div className="w-full lg:w-[60%] h-[50%] lg:h-full absolute right-0  lg:pl-64 bottom-0 lg:top-[-75px] ">
        <img
          src={mockup}
          alt=""
          className="w-full h-full lg:h-[120%] object-contain"
        />
      </div>
    </div>
    // <div>
    //   <img
    //     src={shopWithJenari}
    //     alt=""
    //     className="w-full h-[120%] object-contain"
    //   />
    // </div>
  );
};

export default ShopHome;
