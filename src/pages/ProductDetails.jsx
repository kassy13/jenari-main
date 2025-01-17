// import React, { useContext, useState } from "react";
// import { useParams } from "react-router-dom";
// import img from "../assets/carrot.png";
// import AuthContext from "../components/context/AuthContex";

// const ProductDetails = () => {
//   const { id } = useParams(); // Get the product ID from the route
//   const [quantity, setQuantity] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("");
//   const { getCategoryFromParams, supermarketItems, fetchProducts, isLoading } =
//     useContext(AuthContext);
//   console.log("super", supermarketItems);
//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//   };

//   const handleQuantityChange = (amount) => {
//     setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 0));
//   };

//   const options = [
//     { id: 1, label: "1 Tin", price: "£50.00" },
//     { id: 2, label: "1 Cup (150g)", price: "£50.00" },
//     { id: 3, label: "1 Cup (150g)", price: "£50.00" },
//     { id: 4, label: "1 Tin", price: "£50.00" },
//     { id: 5, label: "1 Tin", price: "£50.00" },
//   ];
//   return (
//     <div className="px-6 lg:px-16 py-8 mt-40 ">
//       <div className="flex items-center  gap-8">
//         {/* <h1>Product Details</h1>
//       <p>Product ID: {id}</p> */}
//         <div className="w-full rounded-lg shadow-md">
//           <img
//             src={img}
//             alt=""
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//         {/* Fetch and display more product details using the ID */}
//         <section className="p-6 bg-gray-50 rounded-lg shadow-md max-w-lg w-full h-full">
//           <h1 className="text-2xl font-semibold mb-2">Tiger Nuts</h1>
//           <p className="text-lg text-gray-700 mb-1">£3.00 - £5.00/kg</p>
//           <p className="text-sm text-green-600 font-medium mb-4">In Season</p>

//           {/* Pick Buy Option */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">
//               Pick buy option (6 options available)
//             </label>
//             <div className="space-y-2">
//               {options.map((option) => (
//                 <div key={option.id} className="flex items-center">
//                   <input
//                     type="radio"
//                     id={`option-${option.id}`}
//                     name="buy-option"
//                     className="mr-3 accent-primary-bg"
//                     checked={selectedOption === option.label}
//                     onChange={() => handleOptionChange(option.label)}
//                   />
//                   <label
//                     htmlFor={`option-${option.id}`}
//                     className="text-gray-700"
//                   >
//                     {option.label} - {option.price}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Quantity */}
//           <div className="flex items-center space-x-4 mb-4">
//             <label className="text-gray-700 font-medium">Quantity</label>
//             <button
//               onClick={() => handleQuantityChange(-1)}
//               className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 focus:ring focus:ring-primary-bg"
//             >
//               -
//             </button>
//             <span className="text-lg font-medium">{quantity}</span>
//             <button
//               onClick={() => handleQuantityChange(1)}
//               className="bg-primary-bg text-white px-3 py-1 rounded-md hover:bg-opacity-85 focus:ring focus:ring-primary-bg"
//             >
//               +
//             </button>
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             className="w-full bg-primary-bg text-white py-2 rounded-full hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-primary-bg"
//             disabled={!selectedOption || quantity === 0}
//           >
//             Add to Cart
//           </button>
//         </section>
//       </div>
//       {/* Description Section */}
//       <div className="mt-6 mb-4 text-gray-700 font-bold">
//         <h2 className="text-lg font-semibold mb-2 text-secondary-bg">
//           Description
//         </h2>
//         <p className="text-sm leading-relaxed">
//           Buy Tiger Nuts online at the best prices. They are sorted, cleaned,
//           and repacked for you, to make sure it is supplied under the best
//           hygienic conditions. We accept the return of this item if the
//           condition does not meet customer expectations and agrees with our
//           return and refund policy. Order now and experience the convenience of
//           online shopping and have your Tiger Nuts delivered straight to your
//           doorstep within 24 hours.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../components/context/AuthContex";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the route
  const { supermarketItems, fetchProducts, handleAddToCart } =
    useContext(AuthContext); // Use context to access products
  const [product, setProduct] = useState(null); // State to store the current product
  const [quantity, setQuantity] = useState(1); // Default quantity set to 1
  const [selectedOption, setSelectedOption] = useState(null); // Store the selected product option
  console.log("selected", selectedOption);
  console.log("prod", product);
  // Fetch products on component mount (if not already loaded)
  const navigate = useNavigate();
  useEffect(() => {
    if (!supermarketItems.length) {
      fetchProducts();
    }
  }, [supermarketItems, fetchProducts]);

  // Find the product by ID once products are loaded
  useEffect(() => {
    const foundProduct = supermarketItems.find(
      (item) => item.id === parseInt(id, 10)
    );
    setProduct(foundProduct);
  }, [id, supermarketItems]);

  const handleOptionChange = (option) => {
    setSelectedOption(option); // Store the selected option
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1)); // Ensure quantity is at least 1
  };

  const handleAddToCartClick = () => {
    if (selectedOption && quantity > 0) {
      // Pass option ID, product ID, and quantity to the addToCart function
      // handleAddToCart(selectedOption.id, selectedOption.product_id, quantity);
      handleAddToCart(selectedOption, quantity, navigate);
    }
  };
  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="px-6 lg:px-16 py-8 mt-40 lg:mt-56">
      <div className="flex items-center flex-col lg:flex-row gap-8">
        <div className="w-full h-80 rounded-lg shadow-md">
          <img
            src={product.image} // Display the product image
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <section className="p-6 bg-gray-50 rounded-lg shadow-md max-w-lg md:max-w-full w-full h-full ">
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-1">{product.price_range}</p>
          <p className="text-sm text-green-600 font-medium mb-4">
            {product.status}
          </p>

          {/* Pick Buy Option */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Pick buy option
            </label>
            <div className="space-y-2">
              {product.product_options.length > 0 ? (
                product.product_options.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="radio"
                      id={`option-${option.id}`}
                      name="buy-option"
                      className="mr-3 accent-primary-bg"
                      checked={selectedOption?.id === option.id} // Check if the selected option matches the current option
                      onChange={() => handleOptionChange(option)} // Update the selected option
                    />
                    <label
                      htmlFor={`option-${option.id}`}
                      className="text-gray-700"
                    >
                      {option.name} - {option.price}
                    </label>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No buy options available</p>
              )}
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
            onClick={handleAddToCartClick} // Trigger the add-to-cart function
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
        <p className="text-sm leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import img from "../assets/carrot.png";
// import AuthContext from "../components/context/AuthContex";

// const ProductDetails = () => {
//   const { id } = useParams(); // Get the product ID from the route
//   const { supermarketItems, fetchProducts, handleAddToCart } =
//     useContext(AuthContext); // Use context to access products
//   const [product, setProduct] = useState(null); // State to store the current product
//   const [quantity, setQuantity] = useState(1); // Start with quantity 1
//   const [selectedOption, setSelectedOption] = useState(null);
// console.log(object)
//   // Fetch products on component mount (if not already loaded)
//   useEffect(() => {
//     if (!supermarketItems.length) {
//       fetchProducts();
//     }
//   }, [supermarketItems, fetchProducts]);

//   // Find the product by ID once products are loaded
//   useEffect(() => {
//     const foundProduct = supermarketItems.find(
//       (item) => item.id === parseInt(id, 10)
//     );
//     setProduct(foundProduct);
//   }, [id, supermarketItems]);

//   const handleOptionChange = (option) => {
//     setSelectedOption(option); // Set the whole option object
//   };

//   const handleQuantityChange = (amount) => {
//     setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1)); // Ensure quantity is at least 1
//   };
//   console.log(product);
//   const handleAddToCartClick = () => {
//     if (selectedOption && quantity > 0) {
//       handleAddToCart(product.id, selectedOption.id, quantity); // Pass product_id, option_id, and quantity
//     }
//   };
//   console.log(product, selectedOption.id, quantity);
//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   return (
//     <div className="px-6 lg:px-16 py-8 mt-40">
//       <div className="flex items-center flex-col lg:flex-row gap-8">
//         <div className="w-full rounded-lg shadow-md">
//           <img
//             src={product.image || img} // Use fallback image if no image URL is provided
//             alt={product.name}
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>

//         <section className="p-6 bg-gray-50 rounded-lg shadow-md max-w-lg w-full h-full">
//           <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
//           <p className="text-lg text-gray-700 mb-1">${product.price_range}</p>
//           <p className="text-sm text-green-600 font-medium mb-4">
//             {product.status}
//           </p>

//           {/* Pick Buy Option */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">
//               Pick buy option
//             </label>
//             <div className="space-y-2">
//               {product.product_options.length > 0 ? (
//                 product.product_options.map((option) => (
//                   <div key={option.id} className="flex items-center">
//                     <input
//                       type="radio"
//                       id={`option-${option.id}`}
//                       name="buy-option"
//                       className="mr-3 accent-primary-bg"
//                       checked={selectedOption?.id === option.id} // Check if this option is selected
//                       onChange={() => handleOptionChange(option)} // Pass the entire option object
//                     />
//                     <label
//                       htmlFor={`option-${option.id}`}
//                       className="text-gray-700"
//                     >
//                       {option.name} - {option.price}
//                     </label>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-500">No buy options available</p>
//               )}
//             </div>
//           </div>

//           {/* Quantity */}
//           <div className="flex items-center space-x-4 mb-4">
//             <label className="text-gray-700 font-medium">Quantity</label>
//             <button
//               onClick={() => handleQuantityChange(-1)}
//               className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 focus:ring focus:ring-primary-bg"
//             >
//               -
//             </button>
//             <span className="text-lg font-medium">{quantity}</span>
//             <button
//               onClick={() => handleQuantityChange(1)}
//               className="bg-primary-bg text-white px-3 py-1 rounded-md hover:bg-opacity-85 focus:ring focus:ring-primary-bg"
//             >
//               +
//             </button>
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             onClick={handleAddToCartClick} // Trigger the add-to-cart function
//             className="w-full bg-primary-bg text-white py-2 rounded-full hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-primary-bg"
//             disabled={!selectedOption || quantity === 0}
//           >
//             Add to Cart
//           </button>
//         </section>
//       </div>

//       {/* Description Section */}
//       <div className="mt-6 mb-4 text-gray-700 font-bold">
//         <h2 className="text-lg font-semibold mb-2 text-secondary-bg">
//           Description
//         </h2>
//         <p className="text-sm leading-relaxed">{product.description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
