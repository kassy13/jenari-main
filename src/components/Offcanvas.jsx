import React, { useContext, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./context/AuthContex";

const Offcanvas = ({ options, onClose, authToken }) => {
  console.log("options", options);
  console.log(authToken, "tokennn");
  const { isAuthenticated, handleAddToCart } = useContext(AuthContext);

  const [quantities, setQuantities] = useState(
    options.map(() => ({ quantity: 1, total: 0 }))
  );
  const navigate = useNavigate();
  // console.log("am i auntenticated", isAuthenticated);
  // Handle changes in quantity
  const handleQuantityChange = (index, rawPrice, value) => {
    const newQuantities = [...quantities];
    const numericPrice = parseFloat(rawPrice.replace(/[^0-9.-]+/g, "")); // Extract numeric value
    const quantity = Math.max(1, parseInt(value, 10) || 1); // Ensure at least 1
    newQuantities[index] = {
      quantity,
      total: quantity * numericPrice,
    };
    setQuantities(newQuantities);
  };

  // Handle add to cart
  // const handleAddToCart = async (option, index) => {
  //   const { quantity } = quantities[index];

  //   // Check if user is authenticated
  //   if (!isAuthenticated) {
  //     toast.error("Please log in to add items to the cart.");
  //     navigate("/signIn"); // Redirect to the login page
  //     return;
  //   }

  //   try {
  //     const formdata = {
  //       product_id: option.id, // Assuming `id` is the product ID
  //       product_option_id: option.product_id, // Assuming `option_id` exists
  //       quantity,
  //     };
  //     console.log("Form", formdata);
  //     const response = await fetch("https://api.jenari.co.uk/api/add/to/cart", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${isAuthenticated}`, // Add token to headers
  //       },
  //       body: JSON.stringify(formdata),
  //     });
  //     console.log("response", response);
  //     console.log("HTTP status:", response.status);
  //     if (!response.ok) {
  //       throw new Error("Failed to add item to cart.");
  //     }

  //     const data = await response.json();
  //     console.log("Add to cart response:", data);
  //     // Success notification
  //     toast.success(`${option.name} added to cart successfully!`);

  //     setTimeout(() => {
  //       // Redirect to payment page
  //       navigate("/payment");
  //     }, 3000);
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);

  //     // Error notification
  //     toast.error("Could not add item to cart. Please try again.");
  //   }
  // };

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
            const rawPrice = option.price || "₦ 0"; // Default price to "₦ 0" if not provided
            const numericPrice = parseFloat(rawPrice.replace(/[^0-9.-]+/g, "")); // Extract numeric value
            const { quantity, total } = quantities[index];

            return (
              <div key={index} className="p-4 border rounded-lg space-y-2">
                <p className="font-medium">{option.name || "Unnamed Option"}</p>
                <p className="text-sm text-gray-600">Price: {option.price}</p>
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
                      handleQuantityChange(index, rawPrice, e.target.value)
                    }
                  />
                </div>
                <p className="text-sm text-gray-700">
                  Total:{" "}
                  <span className="font-semibold">₦ {total.toFixed(2)}</span>
                </p>
                <button
                  onClick={() => handleAddToCart(option, quantity)}
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
