// import React, { useEffect, useRef, useState } from "react";
// import bread from "../assets/bread.jpg";
// import carrot from "../assets/carrot.png";
// import image1 from "../assets/image.svg";
// import image2 from "../assets/image (2).svg";
// import image3 from "../assets/image (3).svg";
// import { RiDeleteBin5Fill, RiShoppingCart2Fill } from "react-icons/ri";
// import Carousel from "../ui/Carousel";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../components/context/AuthContex";
// const Cart = () => {
//   const [agreeToPolicy, setAgreeToPolicy] = useState(false);
//   const [cartProducts, setCartProducts] = useState([]);
//   const [totalPrices, setTotalPrices] = useState(0);
//   const navigate = useNavigate();
//   const { handleGetCartItems, handleCartItemsDelete } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       const items = await handleGetCartItems(); // Call the function to fetch items
//       setCartProducts(items); // Set the fetched items to state
//     };

//     fetchCartItems();
//   }, [handleGetCartItems]); // Re-run when the context function changes

//   console.log("scartt", cartProducts);

//   // Handle cart item delete and trigger re-fetch by adding handleCartItemsDelete as a dependency
//   useEffect(() => {
//     const refreshCartItems = async () => {
//       const items = await handleGetCartItems();
//       setCartProducts(items);
//     };

//     if (cartProducts.length === 0) {
//       refreshCartItems(); // Re-fetch after cart items have been deleted
//     }
//   }, [handleCartItemsDelete]);
//   // Sample data
//   const items = [
//     { name: "Item 1", price: "£3.00", weight: "0.7kg" },
//     { name: "Item 2", price: "£3.00", weight: "0.7kg" },
//   ];

//   // Calculate total price
//   const totalPrice = items
//     .reduce((total, item) => total + parseFloat(item.price.replace("£", "")), 0)
//     .toFixed(2);

//   // Checkbox toggle handler
//   const handleCheckboxChange = (e) => {
//     setAgreeToPolicy(e.target.checked);
//   };
//   const products = [
//     {
//       id: 1,
//       name: "Onions",
//       image: carrot,
//       unitPrice: "£20.00",
//       total: "£3.00",
//       rating: "4.5 (102)",
//       quantity: 1,
//       painter: "1 Painters",
//     },
//     {
//       id: 2,
//       name: "Painter",
//       image: bread,
//       unitPrice: "£20.00",
//       total: "£3.00",
//       rating: "4.5 (102)",
//       quantity: 1,
//       painter: "1 Painters",
//     },
//     {
//       id: 2,
//       name: "Painter",
//       image: bread,
//       unitPrice: "£20.00",
//       total: "£3.00",
//       rating: "4.5 (102)",
//       quantity: 1,
//       painter: "1 Painters",
//     },
//   ];
//   const swiperRef = useRef(null);

//   const handlePrevClick = () => {
//     if (swiperRef.current) swiperRef.current.slidePrev();
//   };

//   const handleNextClick = () => {
//     if (swiperRef.current) swiperRef.current.slideNext();
//   };

//   const categories = [
//     {
//       image: image1,
//       subtext: "Freshly harvested juicy carrots.",
//       text: "Carrots",
//     },
//     {
//       image: image2,
//       subtext: "Fresh Jos red tomatoes.",
//       text: "Protein Sources",
//     },
//     {
//       image: image3,
//       subtext: "Fresh Jos red tomatoes.",
//       text: "Tubers & Grains",
//     },
//     {
//       image: image1,
//       subtext: "Freshly processed African snail.",
//       text: "Vegetables",
//     },
//     {
//       image: image3,
//       subtext: "Freshly harvested juicy carrots.",
//       text: "Dairy",
//     },
//   ];
//   return (
//     <div className="mt-40 lg:mt-44 lg:py-20 lg:px-20 px-4">
//       <p className="text-dark-blue g:text-2xl font-bold pb-3">
//         Your Cart ({cartProducts.length} items)
//       </p>
//       <div className="flex lg:flex-row flex-col justify-between lg:gap-3">
//         <div className=" bg-gray-100 h-full shadow-lg rounded-xl ">
//           {/* Table Header */}
//           <div className="grid grid-cols-10 gap-4 border-b pb-4 font-semibold text-gray-700 p-3 items-center">
//             <span className="col-span-4">Product</span>
//             <span className="col-span-2">Unit Price</span>
//             <span className="col-span-2">Total</span>
//             <span className="col-span-2">Remove</span>
//           </div>

//           {/* Product Rows */}
//           {cartProducts.map((product) => (
//             <div
//               key={product.id}
//               className="grid grid-cols-10 max-w-4xl gap-4 items-center border-b py-4 px-6 bg-white "
//             >
//               {/* Product Image and Name */}
//               <div className="flex items-center space-x-4 col-span-4">
//                 <div>
//                   <div className="flex gap-5">
//                     <img
//                       src={product.product_info.image}
//                       alt={product.product}
//                       className="w-12 h-12 object-cover rounded-md bg-gray-100 border border-gray-50"
//                     />

//                     <div>
//                       <p className="text-gray-700 font-extrabold">
//                         {product.product}
//                       </p>
//                       <p className=" text-primary-bg text-sm font-bold bg-[#E7F3E633] p-1 px-1.5">
//                         {product.productdata}
//                       </p>
//                     </div>
//                   </div>
//                   {/* Quantity */}
//                   <p className="text-text-light pt-2 pb-2">Quantity</p>
//                   <div className="flex items-center justify-between space-x-2 border rounded-full p-2 px-3 w-44">
//                     <button className="w-7 h-7 border-[0.4px] border-gray-400   bg-gray-200 rounded-full hover:bg-gray-300 ">
//                       -
//                     </button>
//                     <span>{product.quantity}</span>
//                     <button className="w-7 h-7 rounded-full border-[0.4px] border-primary-bg  hover:bg-gray-300">
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Unit Price */}
//               <span className="text-text-light col-span-2">
//                 {product.price}
//               </span>
//               {/* Total */}
//               <span className="text-gray-700 col-span-2 font-bold">
//                 {product.total}
//               </span>

//               {/* Remove Button */}
//               <button
//                 className="text-red-500 w-24 py-1 rounded-full border-[0.1px] bg-[#F5F6F7] text-sm "
//                 onClick={() => handleCartItemsDelete(product)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <div className="bg-white py-5 px-5 flex justify-between">
//             <button className="flex items-center justify-center bg-primary-bg text-white p-2.5  px-7 gap-3 rounded-full">
//               <RiShoppingCart2Fill size={20} className="mb-1" /> Add More Items
//             </button>
//             <button className="flex items-center justify-center bg-[#F5F6F7] text-red-500 p-2.5 px-7 gap-3  border rounded-full">
//               <RiDeleteBin5Fill size={20} className="mb-1" /> Remove All
//             </button>
//           </div>
//         </div>
//         <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-100 self-start">
//           <h2 className="text-xl font-semibold mb-4 text-text-light flex justify-between tracking-tight">
//             Subtotal: <span className="text-black">£{totalPrice}</span>
//           </h2>

//           <h2 className="text-sm text-text-light font-semibold mt-4 flex justify-between">
//             Subtotal: <span className="text-black text-base">0.7 kg</span>
//           </h2>
//           <p className="text-sm  mt-2 text-text-light">
//             Delivery fee and other bills will be calculated at checkout
//           </p>

//           <div className="mt-4 ">
//             <label className="flex  space-x-2 pr-3">
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-5 w-5 text-primary-bg"
//                 checked={agreeToPolicy}
//                 onChange={handleCheckboxChange}
//               />
//               <span className="text-sm text-gray-700">
//                 I have read the instruction above and I agree to
//                 <a href="#" className="text-primary-bg">
//                   {" "}
//                   JENARI’s Return
//                 </a>
//                 Policy
//               </span>
//             </label>
//           </div>

//           <button
//             className={`w-full mt-6 py-2 px-4 text-white font-semibold rounded-full ${
//               agreeToPolicy
//                 ? "bg-primary-bg hover:opacity-80"
//                 : "bg-primary-bg cursor-not-allowed"
//             }`}
//             disabled={!agreeToPolicy}
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//       <div className="mt-12 h-full w-full">
//         <h3 className="text-xl tracking-tighter">Don’t forget to add these</h3>
//         <Carousel items={categories} slidesPerView={3} spaceBetween={20} />
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useEffect, useState, useContext } from "react";
// import { RiDeleteBin5Fill, RiShoppingCart2Fill } from "react-icons/ri";
// import AuthContext from "../components/context/AuthContex";

// const Cart = () => {
//   const [agreeToPolicy, setAgreeToPolicy] = useState(false);
//   const [cartProducts, setCartProducts] = useState([]);
//   const [totalPrices, setTotalPrices] = useState(0);
//   const { handleGetCartItems, handleCartItemsDelete, cart } =
//     useContext(AuthContext);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       const items = await handleGetCartItems();
//       // Set initial total_price based on quantity and price
//       const updatedItems = items.map((item) => {
//         const priceValue = parseFloat(
//           item.product_info.price.replace("₦", "").replace(",", "")
//         );
//         const initialTotalPrice = priceValue * item.quantity;
//         return {
//           ...item,
//           total_price: `₦ ${initialTotalPrice.toFixed(2)}`, // Setting initial total price
//         };
//       });
//       setCartProducts(updatedItems);
//     };
//     fetchCartItems();
//   }, [handleGetCartItems]);

//   // Calculate total price function
//   const calculateTotal = () => {
//     const total = cartProducts.reduce((acc, item) => {
//       let priceValue = 0;
//       if (
//         item.product_info &&
//         item.product_info.price &&
//         typeof item.product_info.price === "string"
//       ) {
//         priceValue = parseFloat(
//           item.product_info.price.replace("₦", "").replace(",", "")
//         );
//       }
//       if (priceValue > 0) {
//         return acc + priceValue * item.quantity; // Multiply by quantity
//       }
//       return acc;
//     }, 0);
//     return total.toFixed(2); // Return total price with two decimals
//   };

//   // Update the total price whenever cart products change
//   useEffect(() => {
//     setTotalPrices(calculateTotal());
//   }, [cartProducts]);

//   const handleQuantityChange = (productId, action) => {
//     setCartProducts((prevProducts) => {
//       return prevProducts.map((product) => {
//         if (product.id === productId) {
//           const priceValue = parseFloat(
//             product.product_info.price.replace("₦", "").replace(",", "")
//           );

//           const newQuantity =
//             action === "increase" ? product.quantity + 1 : product.quantity - 1;

//           // Ensure quantity cannot go below 1
//           if (newQuantity < 1) return product;

//           const newTotal = (priceValue * newQuantity).toFixed(2);

//           return {
//             ...product,
//             quantity: newQuantity,
//             total_price: `₦ ${newTotal}`, // Recalculate total price
//           };
//         }
//         return product;
//       });
//     });
//   };

//   const handleDeleteProduct = (product) => {
//     handleCartItemsDelete(product);
//     setCartProducts(cartProducts.filter((item) => item.id !== product.id));
//   };

//   return (
//     <div className="mt-40 lg:mt-44 lg:py-20 lg:px-20 px-4">
//       <p className="text-dark-blue g:text-2xl font-bold pb-3">
//         Your Cart ({cartProducts.length} items)
//       </p>
//       <div className="flex lg:flex-row flex-col justify-between lg:gap-3">
//         <div className="bg-gray-100 h-full shadow-lg rounded-xl ">
//           <div className="grid grid-cols-10 gap-4 border-b pb-4 font-semibold text-gray-700 p-3 items-center">
//             <span className="col-span-4">Product</span>
//             <span className="col-span-2">Unit Price</span>
//             <span className="col-span-2">Total</span>
//             <span className="col-span-2">Remove</span>
//           </div>

//           {cartProducts.map((product) => (
//             <div
//               key={product.id}
//               className="grid grid-cols-10 max-w-4xl gap-4 items-center border-b py-4 px-6 bg-white "
//             >
//               <div className="flex items-center space-x-4 col-span-4">
//                 <div>
//                   <div className="flex gap-5">
//                     <img
//                       src={product.product_info.image}
//                       alt={product.product}
//                       className="w-12 h-12 object-cover rounded-md bg-gray-100 border border-gray-50"
//                     />
//                     <div>
//                       <p className="text-gray-700 font-extrabold">
//                         {product.product}
//                       </p>
//                       <p className="text-primary-bg text-sm font-bold bg-[#E7F3E633] p-1 px-1.5">
//                         {product.product_info.name}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-text-light pt-2 pb-2">Quantity</p>
//                   <div className="flex items-center justify-between space-x-2 border rounded-full p-2 px-3 w-44">
//                     <button
//                       className="w-7 h-7 border-[0.4px] border-gray-400 bg-gray-200 rounded-full hover:bg-gray-300 "
//                       onClick={() =>
//                         handleQuantityChange(product.id, "decrease")
//                       }
//                     >
//                       -
//                     </button>
//                     <span>{product.quantity}</span>
//                     <button
//                       className="w-7 h-7 rounded-full border-[0.4px] border-primary-bg hover:bg-gray-300"
//                       onClick={() =>
//                         handleQuantityChange(product.id, "increase")
//                       }
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <span className="text-text-light col-span-2">
//                 {product.product_info.price}
//               </span>
//               <span className="text-gray-700 col-span-2 font-bold">
//                 {product.total_price}
//               </span>

//               <button
//                 className="text-red-500 w-24 py-1 rounded-full border-[0.1px] bg-[#F5F6F7] text-sm"
//                 onClick={() => handleDeleteProduct(product)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <div className="bg-white py-5 px-5 flex justify-between">
//             <button className="flex items-center justify-center bg-primary-bg text-white p-2.5  px-7 gap-3 rounded-full">
//               <RiShoppingCart2Fill size={20} className="mb-1" /> Add More Items
//             </button>
//             <button className="flex items-center justify-center bg-[#F5F6F7] text-red-500 p-2.5 px-7 gap-3  border rounded-full">
//               <RiDeleteBin5Fill size={20} className="mb-1" /> Remove All
//             </button>
//           </div>
//         </div>

//         <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-100 self-start">
//           <h2 className="text-xl font-semibold mb-4 text-text-light flex justify-between tracking-tight">
//             Subtotal: <span className="text-black">₦{totalPrices}</span>
//           </h2>

//           <h2 className="text-sm text-text-light font-semibold mt-4 flex justify-between">
//             Subtotal: <span className="text-black text-base">0.7 kg</span>
//           </h2>
//           <p className="text-sm mt-2 text-text-light">
//             Delivery fee and other bills will be calculated at checkout
//           </p>

//           <div className="mt-4 ">
//             <label className="flex space-x-2 pr-3">
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-5 w-5 text-primary-bg"
//                 checked={agreeToPolicy}
//                 onChange={(e) => setAgreeToPolicy(e.target.checked)}
//               />
//               <span className="text-sm text-gray-700">
//                 I have read the instruction above and I agree to
//                 <a href="#" className="text-primary-bg">
//                   {" "}
//                   JENARI’s Return Policy
//                 </a>
//               </span>
//             </label>
//           </div>

//           <button
//             className={`w-full mt-6 py-2 px-4 text-white font-semibold rounded-full ${
//               agreeToPolicy
//                 ? "bg-primary-bg hover:opacity-80"
//                 : "bg-primary-bg cursor-not-allowed"
//             }`}
//             disabled={!agreeToPolicy}
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState, useContext } from "react";
import { RiDeleteBin5Fill, RiShoppingCart2Fill } from "react-icons/ri";
import AuthContext from "../components/context/AuthContex";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [agreeToPolicy, setAgreeToPolicy] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrices, setTotalPrices] = useState(0);
  const {
    handleGetCartItems,
    handleCartItemsDelete,
    cart,
    saveCartForCheckout,
  } = useContext(AuthContext);

  // console.log("neew cart saved", cart);

  const navigate = useNavigate();
  // Fetch cart items on component mount
  // useEffect(() => {
  //   const fetchCartItems = async () => {
  //     const items = await handleGetCartItems();
  //     const updatedItems = items.map((item) => {
  //       const priceValue = parseFloat(
  //         item.product_info.price.replace("₦", "").replace(",", "")
  //       );
  //       const initialTotalPrice = priceValue * item.quantity;
  //       return {
  //         ...item,
  //         total_price: `₦ ${initialTotalPrice.toFixed(2)}`,
  //       };
  //     });
  //     setCartProducts(updatedItems);
  //   };
  //   fetchCartItems();
  // }, [handleGetCartItems]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await handleGetCartItems();
      const updatedItems = items.map((item) => {
        const priceValue = parseFloat(
          item.product_info?.price?.replace("₦", "").replace(",", "")
        );
        const initialTotalPrice = priceValue * item.quantity;
        return {
          ...item,
          total_price: `₦ ${initialTotalPrice.toFixed(2)}`,
        };
      });
      setCartProducts(updatedItems);
    };
    fetchCartItems();
  }, [handleGetCartItems]);

  // Calculate the total price of cart items
  const calculateTotal = () => {
    const total = cartProducts.reduce((acc, item) => {
      let priceValue = 0;
      if (
        item.product_info &&
        item.product_info.price &&
        typeof item.product_info.price === "string"
      ) {
        priceValue = parseFloat(
          item.product_info.price.replace("₦", "").replace(",", "")
        );
      }
      if (priceValue > 0) {
        return acc + priceValue * item.quantity;
      }
      return acc;
    }, 0);
    return total.toFixed(2);
  };

  // Update the total price whenever cart products change
  useEffect(() => {
    setTotalPrices(calculateTotal());
  }, [cartProducts]);

  // Handle quantity change in cart items
  const handleQuantityChange = (productId, action) => {
    setCartProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          const priceValue = parseFloat(
            product.product_info.price.replace("₦", "").replace(",", "")
          );

          const newQuantity =
            action === "increase" ? product.quantity + 1 : product.quantity - 1;

          if (newQuantity < 1) return product;

          const newTotal = (priceValue * newQuantity).toFixed(2);

          return {
            ...product,
            quantity: newQuantity,
            total_price: `₦ ${newTotal}`,
          };
        }
        return product;
      });
    });
  };

  // Handle product deletion from cart
  const handleDeleteProduct = (product) => {
    handleCartItemsDelete(product);
    setCartProducts(cartProducts.filter((item) => item.id !== product.id));
  };

  // Handle Proceed to Checkout
  const handleProceedToCheckout = () => {
    const checkoutItems = cartProducts.map((product) => ({
      id: product.id,
      name: product.product,
      quantity: product.quantity,
      product_code: product?.product_code,
      total_price: product.total_price,
    }));

    // Save the cart items to AuthContext
    saveCartForCheckout(checkoutItems, navigate);
  };

  return (
    <div className="mt-40 lg:mt-44 lg:py-20 lg:px-20 px-4">
      <p className="text-dark-blue g:text-2xl font-bold pb-3">
        Your Cart ({cartProducts.length} items)
      </p>
      <div className="flex lg:flex-row flex-col justify-between lg:gap-3">
        <div className="bg-gray-100 h-full shadow-lg rounded-xl">
          <div className="grid grid-cols-10 gap-4 border-b pb-4 font-semibold text-gray-700 p-3 items-center">
            <span className="col-span-4">Product</span>
            <span className="col-span-2">Unit Price</span>
            <span className="col-span-2">Total</span>
            <span className="col-span-2">Remove</span>
          </div>

          {cartProducts.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-10 max-w-4xl gap-4 items-center border-b py-4 px-6 bg-white"
            >
              <div className="flex items-center space-x-4 col-span-4">
                <div>
                  <div className="flex gap-5">
                    <img
                      src={product?.product_info?.image}
                      alt={product.product}
                      className="w-12 h-12 object-cover rounded-md bg-gray-100 border border-gray-50"
                    />
                    <div>
                      <p className="text-gray-700 font-extrabold">
                        {product.product}
                      </p>
                      <p className="text-primary-bg text-sm font-bold bg-[#E7F3E633] p-1 px-1.5">
                        {product.product_info?.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-text-light pt-2 pb-2">Quantity</p>
                  <div className="flex items-center justify-between space-x-2 border rounded-full p-2 px-3 w-44">
                    <button
                      className="w-7 h-7 border-[0.4px] border-gray-400 bg-gray-200 rounded-full hover:bg-gray-300"
                      onClick={() =>
                        handleQuantityChange(product.id, "decrease")
                      }
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="w-7 h-7 rounded-full border-[0.4px] border-primary-bg hover:bg-gray-300"
                      onClick={() =>
                        handleQuantityChange(product.id, "increase")
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <span className="text-text-light col-span-2">
                {product?.product_info?.price}
              </span>
              <span className="text-gray-700 col-span-2 font-bold">
                {product.total_price}
              </span>

              <button
                className="text-red-500 w-24 py-1 rounded-full border-[0.1px] bg-[#F5F6F7] text-sm"
                onClick={() => handleDeleteProduct(product)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="bg-white py-5 px-5 flex justify-between">
            <button className="flex items-center justify-center bg-primary-bg text-white p-2.5  px-7 gap-3 rounded-full">
              <RiShoppingCart2Fill size={20} className="mb-1" /> Add More Items
            </button>
            <button className="flex items-center justify-center bg-[#F5F6F7] text-red-500 p-2.5 px-7 gap-3  border rounded-full">
              <RiDeleteBin5Fill size={20} className="mb-1" /> Remove All
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-100 self-start">
          <h2 className="text-xl font-semibold mb-4 text-text-light flex justify-between tracking-tight">
            Subtotal: <span className="text-black">₦{totalPrices}</span>
          </h2>

          <h2 className="text-sm text-text-light font-semibold mt-4 flex justify-between">
            Subtotal: <span className="text-black text-base">0.7 kg</span>
          </h2>
          <p className="text-sm mt-2 text-text-light">
            Delivery fee and other bills will be calculated at checkout
          </p>

          <div className="mt-4 ">
            <label className="flex space-x-2 pr-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary-bg"
                checked={agreeToPolicy}
                onChange={(e) => setAgreeToPolicy(e.target.checked)}
              />
              <span className="text-sm text-gray-700">
                I have read the instruction above and I agree to
                <a href="#" className="text-primary-bg">
                  {" "}
                  JENARI’s Return Policy
                </a>
              </span>
            </label>
          </div>

          <button
            className={`w-full mt-6 py-2 px-4 text-white font-semibold rounded-full ${
              agreeToPolicy
                ? "bg-primary-bg hover:opacity-80"
                : "bg-primary-bg cursor-not-allowed"
            }`}
            disabled={!agreeToPolicy}
            onClick={handleProceedToCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
