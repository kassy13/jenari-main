import React from "react";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  return (
    <div className="my-20 flex flex-col justify-center items-center">
      <h1 className="text-4xl tracking-tighter pb-3">Our recent projects</h1>
      <p className="text[#626C7A] py-4">
        Follow up and stay updated on our “Donate to charity” projects
      </p>
      <Link to={"/"} className="bg-primary-bg text-white p-3 rounded-full">
        Read our articles
      </Link>
    </div>
  );
};

export default RecentProjects;
