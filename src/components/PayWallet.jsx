import React, { useState } from "react";

const PayWallet = () => {
  const [payWallet, setPayWallet] = useState("");

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-4 py-6 my-7">
      <h2 className="text-2xl font-semibold  text-dark-blue">Pay wallet</h2>
      <p className="text-[#737373] py-2">
        Please enter the amount you want to pay from your JENARI wallet
      </p>
      <p className="text-[#0D8C42]">Your wallet balance: £0.00</p>

      {/* Voucher Input */}
      <div className="mt-4 flex items-center space-x-4">
        <input
          type="text"
          value={payWallet}
          onChange={(e) => setPayWallet(e.target.value)}
          placeholder="Enter amount to spend"
          className="flex-1 p-2 border border-[#F0F4FF] text-[#F8F8F899] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="bg-[#F8F8F8] text-dark-blue py-2 px-4 rounded-lg hover:bg-green-700  hover:text-white transition">
          Apply
        </button>
      </div>
    </div>
  );
};

export default PayWallet;
