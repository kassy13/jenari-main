import React from 'react';
import choice1 from '../assets/basket.svg';
import choice2 from '../assets/wide product.svg.svg';
import choice3 from '../assets/quality.svg.svg';
import choice4 from '../assets/money.svg';
import choice5 from '../assets/time.svg';
import choice6 from '../assets/truck.svg';
import frame from '../assets/Frame 10.svg';
import Iconstext from '../ui/Iconstext';

const Choose = () => {
  const choice = [
    {
      img: choice1,
      title: 'Convenience',
      text: 'We allow you to shop from the comfort of your home or workplace, saving you the time and stress of visiting physical stores or markets.',
    },
    {
      img: choice2,
      title: 'Wide Product Range',
      text: 'We provide a wide range of farm fresh food items, food products, groceries, and household essentials, providing you with an extensive choice to meet your culinary and home needs.',
    },
    {
      img: choice3,
      title: 'Quality Assurance',
      text: 'We are committed to providing high-quality products with every order. We offer a return or refund within 6 hours of delivering your order. Terms and conditions apply.',
    },
    {
      img: choice4,
      title: 'Cost Savings',
      text: 'We offer competitive prices and deals, helping you save money on your grocery bills.',
    },
    {
      img: choice5,
      title: 'Time Efficiency',
      text: 'Shopping on JENARI is a time-efficient process. You can quickly browse products, add them to your cart, schedule an order, reorder a previous order, and complete your purchase in just a few clicks.',
    },
    {
      img: choice6,
      title: 'Delivery Options',
      text: 'We have various delivery options, including same-day and next-day delivery, allowing you to choose the most convenient time for your groceries to arrive.',
    },
  ];
  return (
    <div className="mx-14 py-12">
      <h2 className="text-center font-extrabold text-2xl text-secondary-bg pb-4">
        Why Choose JENARI?
      </h2>
      <p className="text-center text-4xl tracking-tight py-3">
        Discover why we are your ultimate online
        <span>
          <br /> fresh food and grocery destination
        </span>
      </p>
      <div className="flex justify-between w-full mt-10 gap-7 py-5">
        <div className="w-full relative">
          <img
            src={frame}
            alt=""
            className="w-full h-full object-cover absolute"
          />
        </div>
        <div className="flex flex-col justify-between  w-full pr-4 h-full my-4">
          {choice.map((item, index) => {
            return (
              <Iconstext
                text={item.text}
                title={item.title}
                img={item.img}
                key={index}
                containerClassName={'w-3/4 mb-14'}
                className={'py-2'}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Choose;
