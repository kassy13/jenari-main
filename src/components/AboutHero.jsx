import React from "react";
import img from "../assets/about jenari.svg";
const AboutHero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-16 px-6 lg:py-16 lg:gap-12 gap-6 mt-40 lg:mt-36">
      <div className="w-full h-[50vh] lg:h-[100vh]">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full ">
        <h1 className="text-3xl lg:text-7xl tracking-tighter text-dark-blue lg:pb-4">
          About <span className="text-secondary-bg">JANERI</span>
        </h1>
        <p className="text-text-light  pb-4">
          At Jenari, we’re redefining convenience and access to authentic
          African products for communities in the UK. Imagine a world where you
          can compare prices across multiple stores, shop for hard-to-find
          brands, and have everything delivered to your doorstep—quickly,
          affordably, and hassle-free. That’s what we do.
        </p>
        <div className="text-text-light tracking-tight">
          <p className="text-gray-600 font-extrabold pb-2">Our Mission</p>
          <p className="text-text-light">
            Our Mission We’re on a mission to make African food and products
            easily accessible while supporting local stores and farmers. By
            bringing you high-quality, fresh, and authentic items from trusted
            sources, we ensure that every meal and every purchase connects you
            with the heart of African heritage and culture. Our Vision Our
            vision is to create a seamless shopping experience where communities
            can embrace the flavors they love without compromise. Through
            partnerships with diverse stores and producers, we are bridging the
            gap between tradition and modern convenience, offering a platform
            that empowers and unites.
          </p>
        </div>

        <div>
          <p className="text-gray-600 font-extrabold py-2">Our Vision</p>
          <p className="text-text-light">
            Our Mission We’re on a mission to make African food and products
            easily accessible while supporting local stores and farmers. By
            bringing you high-quality, fresh, and authentic items from trusted
            sources, we ensure that every meal and every purchase connects you
            with the heart of African heritage and culture. Our Vision Our
            vision is to create a seamless shopping experience where communities
            can embrace the flavors they love without compromise. Through
            partnerships with diverse stores and producers, we are bridging the
            gap between tradition and modern convenience, offering a platform
            that empowers and unites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
