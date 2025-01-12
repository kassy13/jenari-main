import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";

const PaymentOffCanvas = ({ onClose, onclick }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white w-1/3 p-6 shadow-lg mt-40 overflow-y-scroll scrollbar-hide relative z-[999999]"
        onClick={(e) => e.stopPropagation()} // Prevents closing on inner clicks
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-6">
          Payment
        </h2>

        <div className="space-y-4">
          {/* Sub Total */}
          <div className="flex justify-between">
            <span className="text-gray-700">Sub Total:</span>
            <span className="text-gray-800">£50.00</span>
          </div>

          {/* Weight */}
          <div className="flex justify-between">
            <span className="text-gray-700">Weight:</span>
            <span className="text-gray-800">0.9kg</span>
          </div>

          {/* Delivery Fee */}
          <div className="flex justify-between">
            <span className="text-gray-700">Delivery fee:</span>
            <span className="text-gray-800">£3.00</span>
          </div>

          {/* Total */}
          <div className="flex justify-between">
            <span className="text-gray-700 font-semibold">Total:</span>
            <span className="text-gray-800 font-semibold">£53.00</span>
          </div>

          {/* Pay With */}
          <div className="mt-6">
            <p className="text-gray-700">Pay with</p>
            <div className="bg-green-600 text-white py-2 px-4 rounded-lg mt-2 flex items-center justify-between">
              <span>Paystack</span>
              <button
                className="bg-white text-green-600 py-1 px-4 rounded-lg hover:bg-gray-200"
                onClick={onclick}
              >
                Pay £53.00 with Paystack
              </button>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 absolute top-8 right-5"
          >
            <RiCloseLargeLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOffCanvas;
