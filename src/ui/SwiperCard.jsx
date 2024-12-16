import React from "react";
import avatar from "../assets/avatar.svg";

const SwiperCard = ({ title, testimonial, img, name, position }) => {
  return (
    <div className="w-full  p-5 rounded-3xl  border-2 border-solid border-gray-200 ">
      <p className="lg:text-base text-apexgreen_secondary font-grotesque tracking-tight font-extrabold text-[#170F49] min-h-10">
        {title}
      </p>
      <p className="text-base text-apexlight_text font-inter py-4 text-[#6F6C90] min-h-36">
        {testimonial}
      </p>
      <div className="border-t-[0.1px] border-gray-300 flex  items-center gap-2 py-2">
        <div className="w-16 h-16  rounded-full">
          <img src={avatar} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-inter text-base text-apexgreen_secondary font-bold">
            {name}
          </p>
          <p className="font-inter text-base text-[#6F6C90]">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
