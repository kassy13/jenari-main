import React from "react";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  return (
    <div className="lg:my-20 mb-10 mx-6 flex flex-col justify-center items-center">
      <h1 className="text-2xl lg:text-4xl tracking-tighter pb-3">
        Our recent projects
      </h1>
      <p className="text[#626C7A] lg:py-4 pb-4 text-center">
        Follow up and stay updated on our “Donate to charity” projects
      </p>
      <Link to={"/"} className="bg-primary-bg text-white p-3 rounded-full">
        Read our articles
      </Link>
    </div>
  );
};

export default RecentProjects;
