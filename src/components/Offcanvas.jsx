import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

const Offcanvas = ({ options, onClose }) => {
  // State to track quantities and total amounts for each option
  const [quantities, setQuantities] = useState(
    options.map(() => ({ quantity: 1, total: 0 }))
  );
  console.log("options", options);
  // Handle changes in quantity
  const handleQuantityChange = (index, price, value) => {
    const newQuantities = [...quantities];
    const quantity = Math.max(1, parseInt(value, 10) || 1); // Ensure at least 1
    newQuantities[index] = {
      quantity,
      total: quantity * price,
    };
    setQuantities(newQuantities);
  };

  // Handle add to cart
  const handleAddToCart = (option, index) => {
    const { quantity, total } = quantities[index];
    console.log(`Adding to cart:`, { ...option, quantity, total });
    alert(
      `${option.name} added to cart with quantity: ${quantity} and total: $${total}`
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-all transform"
      onClick={onClose}
    >
      <div
        className="fixed top-0 right-0 bg-white w-1/3 h-full p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4">Product Options</h2>
        <div className="space-y-4">
          {options.map((option, index) => {
            const price = option.price || 0; // Default price to 0 if not provided
            const { quantity, total } = quantities[index];
            return (
              <div key={index} className="p-4 border rounded-lg space-y-2">
                <p className="font-medium">{option.name || "Unnamed Option"}</p>
                <p className="text-sm text-gray-600">Price: ${option?.price}</p>
                <div className="flex items-center space-x-4">
                  <label htmlFor={`quantity-${index}`} className="text-sm">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id={`quantity-${index}`}
                    value={quantity}
                    min="1"
                    className="w-16 px-2 py-1 border rounded"
                    onChange={(e) =>
                      handleQuantityChange(index, price, e.target.value)
                    }
                  />
                </div>
                <p className="text-sm text-gray-700">
                  Total:{" "}
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </p>
                <button
                  onClick={() => handleAddToCart(option, index)}
                  className="bg-primary-bg text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
        <button
          onClick={onClose}
          className="mt-4 fixed top-0 right-4 bg-secondary-bg text-white p-2 rounded-full"
        >
          <RiCloseFill />
        </button>
      </div>
    </div>
  );
};

export default Offcanvas;
