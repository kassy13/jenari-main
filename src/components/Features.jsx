import React from 'react';
import icon1 from '../assets/delivery1.svg';
import icon2 from '../assets/wallet.svg';
import icon3 from '../assets/quality.svg.svg';
import Iconstext from '../ui/Iconstext';
import feature from '../assets/feature.svg';

const Features = () => {
  const content = [
    {
      img: icon1,
      title: 'Reorder Function',
      text: 'Streamline your shopping routine with our Reorder feature. Effortlessly replicate past orders and save time on every purchase.',
    },
    {
      img: icon2,
      title: 'Wallet Integration',
      text: 'Fund your wallet with ease and enjoy fast and reliable transactions every time you shop with us.',
    },
    {
      img: icon3,
      title: 'Household Carriage',
      text: 'Tailored delivery to your doorstep! Choose your preferred floor for delivery with our Custom Floor Selection Feature.',
    },
  ];
  return (
    <div className="mx-14 py-12">
      <h2 className="text-center font-extrabold text-2xl text-secondary-bg pb-4">
        Features
      </h2>
      <p className="text-center text-4xl tracking-tight py-3">
        Cool features to simplify your shopping
        <span>
          <br /> experience
        </span>
      </p>
      <div className="flex justify-between mt-10 w-full gap-7 py-5  ">
        <div className="w-full relative">
          <img
            src={feature}
            alt=""
            className="w-full h-full object-cover absolute"
          />
        </div>
        <div className=" flex flex-col justify-between  w-full pr-4">
          {content.map((item, index) => {
            return (
              <Iconstext
                text={item.text}
                title={item.title}
                key={index}
                containerClassName={'mb-8 w-3/4'}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
