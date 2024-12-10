import React from "react";
import why from "../assets/why give.svg";
import heart from "../assets/heart icon.svg";
import encourage from "../assets/encourage icon.svg";
import Iconstext from "../ui/Iconstext";

const Charitygive = () => {
  const charitygive = [
    {
      img: heart,
      title: "To Feed the Body and Soul",
      text: "Your donations provide nourishment, care, and hope for African children, ensuring they feel seen and valued every day.",
    },
    {
      img: encourage,
      title: "To Empower Through Education",
      text: "Help transform lives. Your contributions support education, opening doors to brighter futures for African children.",
    },
  ];
  return (
    <div className="px-20 py-20">
      <p className="text-center font-bold text-3xl text-secondary-bg pb-7">
        Why Give?
      </p>
      <p className="text-center text-3xl tracking-tighter">
        Make a difference by donating foodstuffs to charity
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-4 pt-7  ">
        <div className="w-full h-[50vh] ">
          <img
            src={why}
            alt=""
            className="w-full h-full object-cover object-right-top rounded-2xl"
          />
        </div>
        <div className="w-full">
          {charitygive.map((item) => {
            return (
              <Iconstext
                text={item.text}
                img={item.img}
                title={item.title}
                titleClassName="text-xl"
                textClassName="pb-9 !font-xl"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Charitygive;
