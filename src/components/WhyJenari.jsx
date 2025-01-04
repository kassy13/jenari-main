import React from 'react';
import img from '../assets/features 1.svg';

const WhyJenari = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-16 gap-12 lg:mb-28">
      <div className="w-full">
        <h1 className="lg:text-4xl text-gray-600 font-bold text-[30px] py-2">
          Why we’re different
        </h1>
        <ol className="text-text-light py-4 list-decimal">
          <li className="pb-3">
            One-Stop Shopping: Compare prices, explore varieties, and discover
            rare products from multiple sellers—all in one place.
          </li>
          <li className="pb-3">
            No Hidden Costs: We charge only a minimal delivery fee, ensuring you
            save money without sacrificing quality. m, empowering farmers and
            reducing waste.
          </li>
          <li className="pb-3">
            Fast and Reliable Delivery: Your order arrives within 24 hours
            (Monday to Saturday), tailored for your busy lifestyle.
          </li>
          <li className="pb-3">
            Cultural Connection: Whether it’s a staple ingredient or a cherished
            treat, we deliver with care, celebrating the essence of African
            culture.
          </li>
          <li className="pb-3">
            Sustainability and Community: Every purchase supports a better food
            system, empowering farmers and reducing waste.
          </li>
        </ol>
      </div>
      <div className="w-full">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default WhyJenari;
