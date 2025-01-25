import React from "react";
import onion from "../assets/carrot.png";
import basket from "../assets/green basket.svg";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div className="mt-44 md:mt-56">
      <div className="flex justify-center items-start pb-12">
        <Link
          className="inline bg-secondary-bg text-white p-2 px-5 rounded-full "
          to={"/orders"}
        >
          View Order summary{" "}
        </Link>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 px-4 md:px-20 gap-12 mb-12">
        <div className=" ">
          <div className="p-4 flex  justify-between items-center w-full border border-[#F0F4FF] rounded-xl mb-12">
            <div className="flex  items-center  gap-1">
              <div className="flex items-center gap-2">
                <div>
                  <img
                    className="w-20 h-20 gap-1 object-cover border border-[#F0F4FF]  rounded"
                    src={onion}
                    alt="Red Onions"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#6D6D6D]">
                    Onions-Red
                  </h2>
                  <p className="text-[#525252] mt-1">Small, 250g</p>
                </div>
              </div>
            </div>

            <p className="text-lg font-bold text-primary-bg">£50.00</p>
          </div>
          <div className="max-w-full mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4 md:space-y-6">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium text-gray-700">Sub total:</span>
              <span className="text-gray-900">£50.00</span>
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium text-gray-700">Weight:</span>
              <span className="text-gray-900">0.9kg</span>
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium text-gray-700">Delivery fee:</span>
              <span className="text-gray-900">£3.00</span>
            </div>

            <div className="flex justify-between items-center pt-4">
              <span className="font-semibold text-gray-700 text-lg">
                Total:
              </span>
              <span className="text-gray-900 text-lg font-bold">£53.00</span>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-0">
          <img src={basket} alt="" />
          <div className="text-[#404040]">
            <h1 className="text-dark-blue md:text-3xl my-5">
              Thank you for shopping with Jenari!
            </h1>
            <p className="py-2">
              A confirmation detail has been sent to{" "}
              <span className="text-secondary-bg">
                greatchinonso7@gmail.com
              </span>{" "}
            </p>
            <p>Order reference number: 16461AE200</p>
            <p className="py-2">Order Date: Fri, 17th Jan 2025</p>
            <p>Order Time: 02:26</p>
            <p className="py-2">Delivery Date: Mon, 20th Jan 2025</p>
            <p className="py-2">
              Order Status: <span className="text-secondary-bg">Confirmed</span>{" "}
            </p>
            <p className="text-secondary-bg text-sm leading-2 py-2">
              Please note that our delivery partners will wait a maximum of 15
              minutes at a specific location and will move to a different
              location once the waiting time has elapsed, and an additional
              delivery fee will apply. Failure to pay may lead to a refund,
              subject to deduction. Learn more
            </p>
          </div>
          <div className="border border-[#F0F4FF] rounded-xl p-4 my-8">
            <h3 className="text-2xl text-dark-blue pb-3 tracking-tight">
              Delivery Details
            </h3>
            <p className="text-[#404040] font-bold pb-2">Chinonso Ichoku</p>
            <p className="text-[#404040] pb-1">
              Chief labroade No 3, off goshen high school kubwa
            </p>
            <p className="text-[#404040] pb-1">ABUJA - KUBWA 2/1 PHASE 1</p>
            <p className="text-[#404040] pb-1">+2349038654282</p>
          </div>
          <div className="border border-[#F0F4FF] rounded-xl p-4">
            <h3 className="text-2xl text-dark-blue pb-3 tracking-tight">
              Contact Details
            </h3>
            <p className="text-[#404040] font-bold pb-2">Chinonso Ichoku</p>
            <p className="text-[#404040] pb-1">greatchinoso7@gmail.com </p>
            <p className="text-[#404040] ">+2349038654282</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
