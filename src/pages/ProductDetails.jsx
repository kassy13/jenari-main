import React, { useState } from "react";
import { useParams } from "react-router-dom";
import img from "../assets/carrot.png";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the route
  const [quantity, setQuantity] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 0));
  };

  const options = [
    { id: 1, label: "1 Tin", price: "£50.00" },
    { id: 2, label: "1 Cup (150g)", price: "£50.00" },
    { id: 3, label: "1 Cup (150g)", price: "£50.00" },
    { id: 4, label: "1 Tin", price: "£50.00" },
    { id: 5, label: "1 Tin", price: "£50.00" },
  ];
  return (
    <div className="px-16 py-8">
      <div className="flex items-center  gap-8">
        {/* <h1>Product Details</h1>
      <p>Product ID: {id}</p> */}
        <div className="w-full rounded-lg shadow-md">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Fetch and display more product details using the ID */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-md max-w-lg w-full h-full">
          <h1 className="text-2xl font-semibold mb-2">Tiger Nuts</h1>
          <p className="text-lg text-gray-700 mb-1">£3.00 - £5.00/kg</p>
          <p className="text-sm text-green-600 font-medium mb-4">In Season</p>

          {/* Pick Buy Option */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Pick buy option (6 options available)
            </label>
            <div className="space-y-2">
              {options.map((option) => (
                <div key={option.id} className="flex items-center">
                  <input
                    type="radio"
                    id={`option-${option.id}`}
                    name="buy-option"
                    className="mr-3 accent-primary-bg"
                    checked={selectedOption === option.label}
                    onChange={() => handleOptionChange(option.label)}
                  />
                  <label
                    htmlFor={`option-${option.id}`}
                    className="text-gray-700"
                  >
                    {option.label} - {option.price}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center space-x-4 mb-4">
            <label className="text-gray-700 font-medium">Quantity</label>
            <button
              onClick={() => handleQuantityChange(-1)}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 focus:ring focus:ring-primary-bg"
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="bg-primary-bg text-white px-3 py-1 rounded-md hover:bg-opacity-85 focus:ring focus:ring-primary-bg"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full bg-primary-bg text-white py-2 rounded-full hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-primary-bg"
            disabled={!selectedOption || quantity === 0}
          >
            Add to Cart
          </button>
        </section>
      </div>
      {/* Description Section */}
      <div className="mt-6 mb-4 text-gray-700 font-bold">
        <h2 className="text-lg font-semibold mb-2 text-secondary-bg">
          Description
        </h2>
        <p className="text-sm leading-relaxed">
          Buy Tiger Nuts online at the best prices. They are sorted, cleaned,
          and repacked for you, to make sure it is supplied under the best
          hygienic conditions. We accept the return of this item if the
          condition does not meet customer expectations and agrees with our
          return and refund policy. Order now and experience the convenience of
          online shopping and have your Tiger Nuts delivered straight to your
          doorstep within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
