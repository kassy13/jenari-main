import React from "react";
import jenari from "../assets/jenari banner.svg";

const KeepWord = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center  px-14 py-12">
      <div className="w-full">
        <h3 className="text-3xl font-bold"> We keep our word</h3>
        <p className="pt-4 pb-3 text-text-light tracking-tight text-lg">
          We have carefully selected an orphanage that have a proven track
          record of making a lasting impact in the lives of children.
        </p>
        <p className="text-dark-blue underline pb-3">Dream Catchers Academy</p>
        <p className="pt-4 pb-3 text-text-light tracking-tight text-lg">
          Your donations will be used to provide foodstuffs. We are committed to
          transparency and accountability. Rest assured, we will provide regular
          updates on the progress and impact of our partnership, so you can see
          first-hand the difference you're making
        </p>
      </div>
      <div className="w-full">
        <img src={jenari} alt="" className="w-full h-[50vh] object-contain " />
      </div>
    </div>
  );
};

export default KeepWord;
