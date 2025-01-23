import { useEffect, useState, useContext } from "react";
import { RiDeleteBin5Fill, RiShoppingCart2Fill } from "react-icons/ri";
import AuthContext from "../components/context/AuthContex";
import { useNavigate } from "react-router-dom";
import { formatAmount } from "../utils";
import checkbox from "../assets/checkbox.svg";
import useAppStore from "../store";
import { TailSpin } from "react-loader-spinner";

const Cart = () => {
  const [agreeToPolicy, setAgreeToPolicy] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrices, setTotalPrices] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { handleGetCartItems, handleCartItemsDelete } = useContext(AuthContext);

  const navigate = useNavigate();
  const { saveToCart } = useAppStore();

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await handleGetCartItems();
      const updatedItems = items.map((item) => {
        console.log(item.product_info?.price);
        const priceValue = parseFloat(
          item.product_info?.price?.replace("₦", "").replace(",", "")
        );
        const initialTotalPrice = priceValue * item.quantity;
        return {
          ...item,
          total_price: `₦ ${formatAmount(initialTotalPrice)}`,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            total_price: `£ ${formatAmount(newTotal)}`,
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
    setIsLoading(true);
    const checkoutItems = cartProducts.map((product) => ({
      id: product.id,
      name: product.product,
      quantity: product.quantity,
      product_code: product?.product_code,
      total_price: product.total_price,
    }));

    const data = {
      checkoutItems,
      totalWeight: "7kg",
      total_amount: totalPrices,
    };
    saveToCart(data);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/checkout"); // Redirect to home or dashboard
    }, 3000);

    // Save the cart items to AuthContext
    // saveCartForCheckout(checkoutItems, navigate);
  };

  return (
    <div className="mt-40 lg:mt-44 lg:py-20 lg:px-20 px-4">
      <p className="text-dark-blue lg:text-3xl text-xl font-bold pb-3">
        Your Cart ({cartProducts?.length} items)
      </p>

      <div className="flex lg:flex-row flex-col justify-between lg:gap-3">
        <div className="bg-gray-100 h-full shadow-lg rounded-xl">
          <div className="grid grid-cols-10 lg:gap-4 gap-2 border-b pb-4 font-semibold text-gray-700 p-3 items-center text-sm lg:text-base">
            <span className="col-span-4">Product</span>
            <span className="hidden lg:block col-span-2">Unit Price</span>
            <span className="hidden lg:block col-span-2">Total</span>
            <span className="col-span-2 text-center">Remove</span>
          </div>

          {cartProducts &&
            cartProducts.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-10 gap-2 lg:gap-4 items-center border-b py-4 px-4 bg-white text-sm lg:text-base"
              >
                {/* Product Details */}
                <div className="flex flex-col lg:items-start items-center space-x-4 col-span-10 lg:col-span-4 ">
                  <img
                    src={product?.product_info?.image}
                    alt={product?.product}
                    className="w-12 h-12 object-cover rounded-md bg-gray-100 border border-gray-50 ml-5"
                  />
                  <div className="py-2">
                    <p className="text-gray-700 font-extrabold text-xs lg:text-sm ">
                      {product?.product}
                    </p>
                    <p className="text-primary-bg text-center md:text-left text-xs lg:text-sm font-bold bg-[#E7F3E633] p-1 px-1.5">
                      {product?.product_info?.name}
                    </p>
                  </div>
                  <div className="col-span-8 lg:col-span-2 flex items-center justify-between border rounded-full p-2 px-3 w-full lg:w-44">
                    <button
                      className="w-7 h-7 border-[0.4px] border-gray-400 bg-gray-200 rounded-full hover:bg-gray-300"
                      onClick={() =>
                        handleQuantityChange(product?.id, "decrease")
                      }
                    >
                      -
                    </button>
                    <span>{product?.quantity}</span>
                    <button
                      className="w-7 h-7 rounded-full border-[0.4px] border-primary-bg hover:bg-gray-300"
                      onClick={() =>
                        handleQuantityChange(product?.id, "increase")
                      }
                    >
                      +
                    </button>
                    <button
                      className="col-span-2 text-red-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 lg:hidden"
                      onClick={() => handleDeleteProduct(product)}
                    >
                      <RiDeleteBin5Fill size={20} />
                    </button>
                  </div>
                </div>

                {/* Unit Price */}
                <span className="hidden lg:block text-text-light col-span-2">
                  {product?.product_info?.price}
                </span>

                {/* Total Price */}
                <span className="hidden lg:block text-gray-700 col-span-2 font-bold">
                  {product?.total_price}
                </span>

                {/* Delete Button */}
                <button
                  className="col-span-2 text-red-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 hidden lg:hidden"
                  onClick={() => handleDeleteProduct(product)}
                >
                  <RiDeleteBin5Fill size={20} />
                </button>

                {/* Remove Button for Desktop */}
                <button
                  className="hidden lg:block text-red-500 w-24 py-1 rounded-full border-[0.1px] bg-[#F5F6F7] text-sm"
                  onClick={() => handleDeleteProduct(product)}
                >
                  Remove
                </button>
              </div>
            ))}

          <div className="bg-white py-5 px-5 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between">
            <button
              className="flex items-center justify-center bg-primary-bg text-white p-2.5 px-7 gap-3 rounded-full"
              onClick={() => navigate("/supermarket")}
            >
              <RiShoppingCart2Fill size={20} className="mb-1" /> Add More Items
            </button>
            <button className="flex items-center justify-center bg-[#F5F6F7] text-red-500 p-2.5 px-7 gap-3 border rounded-full">
              <RiDeleteBin5Fill size={20} className="mb-1" /> Remove All
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-100 self-start">
          <h2 className="text-xl font-semibold mb-4 text-text-light flex justify-between tracking-tight">
            Subtotal:{" "}
            <span className="text-black">£{formatAmount(totalPrices)}</span>
          </h2>

          <h2 className="text-sm text-text-light font-semibold mt-4 flex justify-between">
            Total weight: <span className="text-black text-base">0.7 kg</span>
          </h2>
          <p className="text-sm mt-2 text-text-light">
            Delivery fee and other bills will be calculated at checkout
          </p>

          <div className="mt-4">
            <label className="flex space-x-2 pr-3" htmlFor="check">
              <div
                className="cursor-pointer w-8 h-8"
                id="check"
                onClick={() => setAgreeToPolicy(!agreeToPolicy)}
              >
                {agreeToPolicy ? (
                  <img src={checkbox} alt="Checkbox" width={40} height={40} />
                ) : (
                  <div className="w-[24px] h-[24px] border rounded-sm" />
                )}
              </div>
              <span className="text-sm text-gray-700" id="check">
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
                : "bg-[#F6F6F6] text-gray-500 cursor-not-allowed"
            }`}
            disabled={!agreeToPolicy}
            onClick={handleProceedToCheckout}
          >
            {isLoading ? (
              <div className="flex flex-row items-center justify-center">
                <TailSpin
                  visible={true}
                  height="20"
                  width="20"
                  color="#FFFFFF"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                />
              </div>
            ) : (
              "Proceed to Checkout"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
