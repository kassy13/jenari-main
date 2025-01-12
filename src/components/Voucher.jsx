import React, { useState } from "react";

const VoucherCode = () => {
  const [voucher, setVoucher] = useState("");
  const [message, setMessage] = useState("");

  // Dummy valid voucher code for validation
  const validVoucher = "VOUCHER20";

  // Apply Voucher Function
  const applyVoucher = () => {
    if (voucher.trim() === "") {
      setMessage("Please enter a voucher code.");
    } else if (voucher === validVoucher) {
      setMessage("Voucher applied successfully! 🎉");
    } else {
      setMessage("Invalid voucher code. Please try again.");
    }
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-4 py-6 my-7">
      <h2 className="text-2xl font-semibold  text-dark-blue">
        Do you have a voucher code?
      </h2>

      {/* Voucher Input */}
      <div className="mt-4 flex items-center space-x-4">
        <input
          type="text"
          value={voucher}
          onChange={(e) => setVoucher(e.target.value)}
          placeholder="Enter voucher code"
          className="flex-1 p-2 border border-[#F0F4FF] text-[#F8F8F899] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={applyVoucher}
          className="bg-[#F8F8F8] text-dark-blue py-2 px-4 rounded-lg hover:bg-green-700  hover:text-white transition"
        >
          Apply
        </button>
      </div>

      {/* Message */}
      {message && (
        <p
          className={`mt-4 text-sm ${
            message.includes("successfully") ? "text-blue-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default VoucherCode;
