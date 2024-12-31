import React from 'react';
import mockup from '../assets/mockup.svg';
import play from '../assets/play store.svg';
import apple from '../assets/app store.svg';
import shopWithJenari from '../assets/shop-with-jenari.svg';

const ShopHome = () => {
  return (
    // <div className="w-full bg-primary-bg flex flex-col lg:flex-row items-center h-96 relative gap-6 mt-8">
    //   <div className="w-full text-white pl-14">
    //     <h1 className="text-6xl font-bold tracking-tight">
    //       Shop Home,{' '}
    //       <span>
    //         <br /> away from Home
    //       </span>
    //     </h1>
    //     <p className="text-xl py-2">
    //       Shop local groceries that remind you of home,{' '}
    //       <span>
    //         <br /> easily and affordably from your home comfort.
    //       </span>
    //     </p>
    //     <div className="flex items-center gap-3 pt-4">
    //       <div>
    //         <img src={play} alt="" />
    //       </div>
    //       <div>
    //         <img src={apple} alt="" />
    //       </div>
    //       <p>Coming soon</p>
    //     </div>
    //   </div>
    //   <div className="w-[60%] h-full absolute right-0 pl-64 top-[-75px]">
    //     <img src={mockup} alt="" className="w-full h-[120%] object-contain" />
    //   </div>
    // </div>
    <div>
      <img
        src={shopWithJenari}
        alt=""
        className="w-full h-[120%] object-contain"
      />
    </div>
  );
};

export default ShopHome;
