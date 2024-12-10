import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import NewStock from "../components/NewStock";
import Clearance from "../components/Clearance";
import ShopHome from "../components/ShopHome";
import Features from "../components/Features";
import Choose from "../components/Choose";

const Index = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <BestSelling />
      <NewStock />
      <Clearance />
      <ShopHome />

      <Features />
      <Choose />
    </div>
  );
};

export default Index;
