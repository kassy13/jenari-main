import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo transparent 1.svg";
import { Link } from "react-router-dom";
import thankYou from "../assets/thankyou.gif";
const OtpSUccess = () => {
  return (
    <main className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br lock-gradient text-white lg:w-1/2">
        <div className="text-center flex flex-col justify-end h-full pb-20">
          {/* <h1 className="text-5xl font-bold mb-4">Reset Password</h1> */}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 p-8 relative">
        <div className="text-center flex flex-col justify-center mt-16">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="mb-6 w-full max-w-[150px]" />
          </div>
          <div className="flex justify-center">
            <img src={thankYou} alt="" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            Thank you for joining Jenari Stores
          </h2>
          <p className="text-gray-600 mb-4 lg:text-[18px] px-8">
            We hope you enjoy your time with us and that your experience is a
            smooth one.
          </p>
          <Link
            to={"/"}
            className="bg-primary-bg text-white rounded-xl w-full py-4 hover:bg-opacity-85"
          >
            Continue
          </Link>
        </div>
      </div>
    </main>
  );
};

export default OtpSUccess;
