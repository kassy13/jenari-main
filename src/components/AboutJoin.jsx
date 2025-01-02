import React from "react";
import { Link } from "react-router-dom";
import pattern from "../assets/patern.svg";

const AboutJoin = () => {
  return (
    <div className="bg-primary-bg text-white flex justify-between my-16 text-center md:text-left">
      <div className="pt-12 pb-12 pl-6  pr-6 lg:pl-20">
        <div className="flex items-center gap-1 pb-6 ">
          <hr className="w-3 " />
          <h1 className="uppercase text-lg">
            Join us together on this journey
          </h1>
        </div>
        <p className="lg:w-[75%] pb-5">
          Jenari is more than a shopping platform—it’s a movement towards a
          better, more connected community. Say goodbye to long store visits and
          hello to convenience at your fingertips.
        </p>
        <p className="lg:w-[75%] pb-8">
          Welcome to Jenari. Welcome to the future of shopping, where the heart
          of Africa meets your home.
        </p>
        <Link
          to={""}
          className="bg-white text-primary-bg p-3 px-6  rounded-full font-bold "
        >
          Start Shopping now!
        </Link>
      </div>
      <div className="hidden lg:block">
        <img src={pattern} alt="" className="w-full h-full object-contain " />
      </div>
    </div>
  );
};

export default AboutJoin;
