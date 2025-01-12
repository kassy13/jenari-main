// import React, { useContext, useState } from "react";
// import { RiCloseFill } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AuthContext from "./context/AuthContex";

// const Offcanvas = ({ options, onClose, authToken }) => {
//   console.log("options", options);
//   console.log(authToken, "tokennn");
//   const { isAuthenticated, handleAddToCart } = useContext(AuthContext);

//   const [quantities, setQuantities] = useState(
//     options.map(() => ({ quantity: 1, total: 0 }))
//   );
//   const navigate = useNavigate();
//   // console.log("am i auntenticated", isAuthenticated);
//   // Handle changes in quantity
//   const handleQuantityChange = (index, rawPrice, value) => {
//     const newQuantities = [...quantities];
//     const numericPrice = parseFloat(rawPrice.replace(/[^0-9.-]+/g, "")); // Extract numeric value
//     const quantity = Math.max(1, parseInt(value, 10) || 1); // Ensure at least 1
//     newQuantities[index] = {
//       quantity,
//       total: quantity * numericPrice,
//     };
//     setQuantities(newQuantities);
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-all transform"
//       onClick={onClose}
//     >
//       <div
//         className="fixed mt-32 lg:mt-40 top-0 right-0 bg-white w-2/3 lg:w-1/3 h-full p-6 overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h2 className="text-lg font-semibold mb-4">Product Options</h2>
//         <div className="space-y-4">
//           {options.map((option, index) => {
//             const rawPrice = option.price || "₦ 0"; // Default price to "₦ 0" if not provided
//             const numericPrice = parseFloat(rawPrice.replace(/[^0-9.-]+/g, "")); // Extract numeric value
//             const { quantity, total } = quantities[index];

//             return (
//               <div key={index} className="p-4 border rounded-lg space-y-2">
//                 <p className="font-medium">{option.name || "Unnamed Option"}</p>
//                 <p className="text-sm text-gray-600">Price: {option.price}</p>
//                 <div className="flex items-center space-x-4">
//                   <label htmlFor={`quantity-${index}`} className="text-sm">
//                     Quantity:
//                   </label>
//                   <input
//                     type="number"
//                     id={`quantity-${index}`}
//                     value={quantity}
//                     min="1"
//                     className="w-16 px-2 py-1 border rounded"
//                     onChange={(e) =>
//                       handleQuantityChange(index, rawPrice, e.target.value)
//                     }
//                   />
//                 </div>
//                 <p className="text-sm text-gray-700">
//                   Total:{" "}
//                   <span className="font-semibold">₦ {total.toFixed(2)}</span>
//                 </p>
//                 <button
//                   onClick={() => handleAddToCart(option, quantity)}
//                   className="bg-primary-bg text-white py-2 px-4 rounded hover:bg-green-600"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//         <button
//           onClick={onClose}
//           className="mt-4 fixed top-0 right-4 bg-secondary-bg text-white p-2 rounded-full"
//         >
//           <RiCloseFill />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Offcanvas;

import React, { useContext, useState, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./context/AuthContex";

const Offcanvas = ({ options, onClose, authToken }) => {
  const navigate = useNavigate();
  console.log("options", options);
  console.log(authToken, "tokennn");
  const { isAuthenticated, handleAddToCart } = useContext(AuthContext);

  // Initialize quantities and totals based on options
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    if (options.length > 0) {
      // Initialize quantities with 1 and total with the option's price
      setQuantities(
        options.map((option) => ({
          quantity: 1,
          total: parseFloat(option.price.replace(/[^0-9.-]+/g, "")), // Set the total as the price on load
        }))
      );
    }
  }, [options]); // Re-run when `options` changes

  // Handle changes in quantity
  const handleQuantityChange = (index, rawPrice, value) => {
    const newQuantities = [...quantities];
    const numericPrice = parseFloat(rawPrice.replace(/[^0-9.-]+/g, "")); // Extract numeric value
    const quantity = Math.max(1, parseInt(value, 10) || 1); // Ensure at least 1
    newQuantities[index] = {
      quantity,
      total: quantity * numericPrice, // Recalculate total when quantity changes
    };
    setQuantities(newQuantities);
  };

  return (
    <div
      className="fixed inset-0 overflow-y-scroll scrollbar-hide bg-black bg-opacity-50 z-50 transition-all transform"
      onClick={onClose}
    >
      <div
        className="fixed mt-32 lg:mt-40 top-0 right-0 bg-white w-2/3 lg:w-1/3 h-full p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4">Product Options</h2>

        {options.length === 0 ? (
          <p className="text-center text-gray-600">No options available</p>
        ) : (
          <div className="space-y-4">
            {options.map((option, index) => {
              const rawPrice = option.price || "₦ 0"; // Default price to "₦ 0" if not provided
              const numericPrice = parseFloat(
                rawPrice.replace(/[^0-9.-]+/g, "")
              ); // Extract numeric value
              const { quantity, total } = quantities[index] || {
                quantity: 1,
                total: numericPrice,
              };

              return (
                <div key={index} className="p-4 border rounded-lg space-y-2">
                  <p className="font-medium">
                    {option.name || "Unnamed Option"}
                  </p>
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
                    onClick={() => handleAddToCart(option, quantity, navigate)}
                    className="bg-primary-bg text-white py-2 px-4 rounded hover:bg-green-600"
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        )}

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
