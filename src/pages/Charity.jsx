import React from "react";
import CharityHero from "../components/CharityHero";
import Charitygive from "../components/Charitygive";
import HowToDonate from "../components/HowToDonate";
import KeepWord from "../components/KeepWord";
import JoinUs from "../components/JoinUs";
import RecentProjects from "../components/RecentProjects";

const Charity = () => {
  return (
    <section className="p">
      <CharityHero />
      <Charitygive />
      <HowToDonate />
      <KeepWord />
      <JoinUs />
      <RecentProjects />
    </section>
  );
};

export default Charity;
