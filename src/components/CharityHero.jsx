import React from 'react';
import mission from '../assets/mission4.jpg';

const CharityHero = () => {
  return (
    <section className="flex flex-col items-center  lg:flex-row gap-3 bg-[#F5B91E]">
      <div className="w-full h-3/4 pl-6 pr-6 lg:pl-12 lg:pr-6 text-primary-bg">
        <h1 className=" pt-6  text-2xl lg:text-5xl font-bold tracking-tighter lg:leading-[1.2] ">
          Make a Difference with{' '}
          <span>
            <br />
          </span>{' '}
          Every Shopping
        </h1>
        <p className="py-6">
          At Jenari, we&apos;re committed to giving back. Support our Motherless
          Feeding Initiative by partnering with us to bring smiles to those in
          need. Your online shopping helps provide meals to orphanages and
          foundations, making it a lasting impact in their lives.
        </p>
      </div>
      <div className=" w-full">
        <img src={mission} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default CharityHero;
