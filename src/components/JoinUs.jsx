import React from "react";
import join from "../assets/join mission.svg";

const JoinUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-8 px-6 lg:px-14 py-12">
      <div className="w-full ">
        <img src={join} alt="" className="w-full h-[50vh] object-cover " />
      </div>
      <div className="w-full lg:text-right">
        <h3 className=" text-2xl lg:text-3xl font-bold">
          {" "}
          Join Us in This Mission
        </h3>
        <p className="pt-4 pb-3 text-text-light tracking-tight text-lg">
          Your support, no matter the size, helps us bring warmth to the weary,
          light to the overlooked, and hope to every corner of our African
          community. Stand with us. Together, we’re a force for good.
        </p>

        <p className="pt-4 pb-3 text-text-light tracking-tight text-lg">
          Thank you for being part of this journey.
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
