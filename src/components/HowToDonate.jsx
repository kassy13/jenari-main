import React from 'react';
import donate from '../assets/how to donate.svg';
const HowToDonate = () => {
  return (
    <div className="px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full ">
        <p className="text-secondary-bg text-2xl tracking-tighter lg:pb-3">
          How to donate
        </p>
        <h3 className="text-2xl lg:text-3xl font-bold lg:pb-2">
          How Can You Help?
        </h3>
        <p className="text-text-light text-base">
          It’s simple: at checkout, select “Donate to Charity” to make an
          impact. Every donation brings us closer to a world of dignity,
          compassion, and possibility.
        </p>
      </div>
      <div className="w-full ">
        <img
          src={donate}
          loading="lazy"
          alt=""
          className="w-full h-[45vh] object-contain scale-x-125 scale-y-[1.15]"
        />
      </div>
    </div>
  );
};

export default HowToDonate;
