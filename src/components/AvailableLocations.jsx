import React from 'react';
import availableLocations from '../assets/available-location.svg';
import Press1 from '../assets/press-1.svg';
import Press2 from '../assets/press-2.svg';
import Press3 from '../assets/press-3.svg';
import Press4 from '../assets/press-4.svg';
import Press5 from '../assets/press-5.svg';
import Press6 from '../assets/press-6.svg';

const AvailableLocations = () => {
  const options = [
    {
      id: 1,
      image: Press1,
    },
    {
      id: 2,
      image: Press2,
    },
    {
      id: 3,
      image: Press3,
    },
    {
      id: 4,
      image: Press4,
    },
    {
      id: 5,
      image: Press5,
    },
    {
      id: 6,
      image: Press6,
    },
  ];
  return (
    <div className="mx-14 py-12 pt-16">
      <h2 className="text-center font-extrabold text-3xl text-secondary-bg pb-4">
        We are available in these locations
      </h2>

      <div className="flex justify-center items-center">
        <img src={availableLocations} alt="" />
      </div>

      <div className="mt-20 mb-10">
        <p className="text-center text-[48px] font-semibold tracking-tight py-3">
          Press Features
        </p>
        <div className="flex flex-row items-center justify-between mt-10">
          {options.map((option) => {
            return (
              <div
                key={option.id}
                className="flex flex-col items-center gap-2 w-1/2 sm:w-1/4"
              >
                <img src={option.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AvailableLocations;
