import React from "react";
import mission from "../assets/mission4.jpg";

const CharityHero = () => {
  return (
    <section className="flex flex-col items-center  lg:flex-row gap-3 bg-yellow-500">
      <div className="w-full h-3/4 pl-6 pr-6 lg:pl-12 lg:pr-6 text-primary-bg">
        <h1 className=" pt-6  text-2xl lg:text-5xl font-bold tracking-tighter lg:leading-[1.2] ">
          Make a Difference with{" "}
          <span>
            <br />
          </span>{" "}
          Every Shopping
        </h1>
        <p className="py-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          ullam quia facere corporis unde earum hic sequi voluptate porro.
          Magni, vel adipisci quisquam beatae officiis soluta in blanditiis
          ducimus voluptatum quis distinctio sapiente similique exercitationem,
          incidunt veritatis et ab. Accusantium.
        </p>
      </div>
      <div className=" w-full">
        <img src={mission} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default CharityHero;
