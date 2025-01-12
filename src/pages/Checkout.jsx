import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddressOffCanvas from "../components/AddressOffcanvas";
import address from "../assets/address.svg";
import contact from "../assets/contact-book.svg";
import { RiArrowRightLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import onion from "../assets/potato.svg";
import VoucherCode from "../components/Voucher";
import PayWallet from "../components/PayWallet";
import PaymentOffCanvas from "../components/PaymentOffcanvas";
import AuthContext from "../components/context/AuthContex";

const Checkout = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  // Toggle state
  const [isToggled, setIsToggled] = useState(false);

  const [isCarriageEnabled, setIsCarriageEnabled] = useState(false);
  const [floor, setFloor] = useState("");

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const { getAddress, handleCheckout } = useContext(AuthContext);
  const [savedAddress, setSavedAddress] = useState([]);
  const { checkoutItems } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  console.log("saved cart for checkout in checkout", checkoutItems);
  // Function to open the payment modal
  const openPaymentModal = () => {
    setIsPaymentOpen(true);
  };

  // Function to close the payment modal
  const closePaymentModal = () => {
    setIsPaymentOpen(false);
  };

  // Toggle function
  const handleToggle2 = () => setIsCarriageEnabled(!isCarriageEnabled);

  // Floor options
  const floors = [
    "Ground Floor",
    "1st Floor",
    "2nd Floor",
    "3rd Floor",
    "4th Floor",
  ];

  // Toggle function
  const handleToggle = () => setIsToggled(!isToggled);

  const [coupon, setCoupon] = useState("");

  // Dummy valid coupon code for validation
  const validCoupon = "DISCOUNT10";

  // Apply Coupon Function
  const applyCoupon = () => {
    if (coupon.trim() === "") {
      setMessage("Please enter a coupon code.");
    } else if (coupon === validCoupon) {
      setMessage("Coupon applied successfully! 🎉");
    } else {
      setMessage("Invalid coupon code. Please try again.");
    }
  };
  useEffect(() => {
    const handleGotAddress = async () => {
      try {
        const main = await getAddress();
        if (main && main.addresses) {
          setSavedAddress(main.addresses);
        } else {
          console.log("No addresses found");
        }
      } catch (err) {
        console.error("Error fetching addresses:", err);
      }
    };

    handleGotAddress();
  }, []);
  // Prepare the checkout data
  // const prepareCheckoutData = () => {
  //   const items = checkoutItems.map((item) => ({
  //     product_code: item?.product_code, // Replace with the actual field for product ID
  //     currency: "gbp",
  //   }));

  //   const totalAmount = checkoutItems.reduce(
  //     (acc, item) => acc + item?.total_price,
  //     0
  //   );

  //   const address_id = savedAddress[0].id;

  //   return {
  //     items,
  //     totalAmount,
  //     address_id,
  //   };
  // };
  const prepareCheckoutData = () => {
    // Extract the product_codes directly from checkoutItems
    const productCodes = checkoutItems.map((item) => item?.product_code);

    // Calculate the total amount after removing currency symbols
    const totalAmount = checkoutItems.reduce((acc, item) => {
      const cleanedPrice = parseFloat(
        item?.total_price.replace(/[^\d.-]/g, "")
      );
      return acc + (isNaN(cleanedPrice) ? 0 : cleanedPrice);
    }, 0);

    // Ensure the address_id is correctly passed
    const address_id = savedAddress[0].id;

    // Return the checkout data in the correct format
    return {
      product_codes: productCodes, // Array of product codes
      total_amount: Number(totalAmount.toFixed(2)), // Ensure total_amount is a string
      address_id: address_id, // Use address_id as required by the API
      currency: "gbp", // Currency set to GBP
    };
  };

  const handleCheckoutClick = () => {
    // Get the checkout data
    const checkoutData = prepareCheckoutData();

    // Call the handleCheckout function with the prepared data
    handleCheckout(checkoutData);
  };

  console.log("savved", savedAddress);
  return (
    <div className="min-h-screen mt-40 lg:mt-48 lg:px-16 py-4">
      <Link
        to={"/cart"}
        className="text-secondary-bg p-1 bg-[#F5F6F7] px-4 rounded-full text-sm"
      >
        Return to Cart
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <div className="border border-[#F5F6F7] my-7  p-4 rounded-lg flex flex-col  gap-2">
            <p className="font-bold text-dark-blue">Contact:</p>
            <p className="text-text-light font-bold text-sm">
              {savedAddress[0]?.delivery_name || "Guest"}
            </p>
            <p className="text-text-light  text-sm">
              {savedAddress[0]?.phone || "Guest"}
            </p>
            <p className="text-text-light  text-sm">+2349038654282</p>
          </div>
          <div className="border border-[#F5F6F7] p-4 rounded-lg">
            <h3 className="text-gray-700 font-medium">Delivery Address</h3>
            <button
              onClick={() => setShowOffCanvas(true)}
              className="text-[#3BB77E] hover:underline flex justify-between items-center gap-1 border w-full rounded-full px-3 py-2 my-4"
            >
              <div className="flex gap-1">
                <img src={contact} alt="" className="w-6 h-6" />
                Select an address
              </div>
              <RiArrowRightLine color="#3BB77E]" />
            </button>
            <button className="bg-[#F6F6F6] text-dark-blue rounded-full px-3 py-2 text-center w-full">
              Send to somebody else
            </button>
            {/* Conditionally Render Off-Canvas */}
            {showOffCanvas && (
              <AddressOffCanvas onClose={() => setShowOffCanvas(false)} />
            )}
          </div>
          <div className="my-7">
            <img src={address} alt="" className="w-9 h-9" />
            <p className="text-[#404040] pt-2">
              Send in your order before 10:00am to ensure same-day delivery. You
              can also schedule your order for next-day delivery.
            </p>
          </div>
        </div>
        <div>
          <div className=" bg-white border border-gray-200 rounded-lg overflow-hidden flex self-start my-7 ">
            {/* Product Info */}
            <div className="p-4 flex  justify-between items-center w-full">
              <div className="flex  items-center  gap-1">
                {checkoutItems?.map((items, index) => (
                  <>
                    <div>
                      <img
                        className="w-20 h-20 gap-1 object-cover"
                        src={onion}
                        alt="Red Onions"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-[#6D6D6D]">
                        {items?.name}
                      </h2>
                      <p className="text-[#525252] mt-1">Small, 250g</p>
                      <p className="text-[#525252] mt-1">
                        Quantity:{items?.quantity}
                      </p>
                      <p className="text-[#525252] mt-1">
                        Quantity:{items?.total_price}
                      </p>
                    </div>
                  </>
                ))}
              </div>

              {/* <div className="flex  items-center  gap-1">
                Product Image
                <div>
                  <img
                    className="w-20 h-20 gap-1 object-cover"
                    src={onion}
                    alt="Red Onions"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#6D6D6D]">
                    Onions - Red
                  </h2>
                  <p className="text-[#525252] mt-1">Small, 250g</p>
                </div>
              </div> */}
              <p className="text-lg font-bold text-primary-bg">£50.00</p>
            </div>

            {/* next section */}
          </div>
          <div className="w-full bg-white border border-gray-200 rounded-lg p-4  flex items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
                Donate to Charity
              </h2>
              <p className="text-[#737373] mt-2">
                Your token goes a long way when you donate to our charity
                program.
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-block mt-4 text-[#737373] hover:underline"
              >
                Learn more
              </a>
            </div>
            {/* Toggle Switch */}
            <div className="flex items-center mt-6  ">
              {/* <span className="text-gray-700">Enable Donation</span> */}
              <div
                className={`ml-4 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                  isToggled ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={handleToggle}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform relative z-0 ${
                    isToggled ? "translate-x-6" : ""
                  } transition-transform`}
                ></div>
              </div>
            </div>

            {/* Toggle Status */}
            {/* <p className="mt-4 text-sm text-gray-500">
              {isToggled ? "Donation enabled" : "Donation disabled"}
            </p> */}
          </div>

          {/* next section */}

          <div className="w-full bg-white border border-gray-200 rounded-lg p-4 my-7 ">
            <h2 className="text-2xl font-semibold text-gray-800">
              Household Carriage
            </h2>
            <p className="text-[#DA7656] p-1.5 rounded-2xl px-3 mt-2 bg-[#FDF8F2]">
              Recommended for people living upstairs.
            </p>
            <p className="text-[#737373] mt-1">
              Elevate your convenience by letting our household carriage service
              deliver right to your door step.
            </p>

            {/* Toggle Switch */}
            <div className="flex items-center mt-6">
              <span className="text-gray-700">Enable Carriage Service</span>
              <div
                className={`ml-4 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                  isCarriageEnabled ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={handleToggle2}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                    isCarriageEnabled ? "translate-x-6" : ""
                  } transition-transform`}
                ></div>
              </div>
            </div>

            {/* Floor Dropdown */}
            {isCarriageEnabled && (
              <div className="mt-4">
                <label
                  htmlFor="floor"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Choose your floor:
                </label>
                <select
                  id="floor"
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Floor</option>
                  {floors.map((floorOption, index) => (
                    <option key={index} value={floorOption}>
                      {floorOption}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Toggle Status */}
            <p className="mt-4 text-sm text-gray-500">
              {isCarriageEnabled
                ? floor
                  ? `Carriage service enabled for ${floor}`
                  : "Carriage service enabled. Please choose your floor."
                : "Carriage service disabled."}
            </p>
          </div>

          {/* next section */}
          <div className="w-full bg-white border border-gray-200 rounded-lg p-4 py-6 ">
            <h2 className="text-2xl font-semibold  text-dark-blue">
              Do you have a coupon code?
            </h2>

            {/* Coupon Input */}
            <div className="mt-4 flex items-center space-x-4">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-1 p-2 border border-[#F0F4FF] text-[#F8F8F899] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={applyCoupon}
                className="bg-[#F8F8F8] text-dark-blue py-2 px-4 rounded-lg hover:bg-green-700  hover:text-white transition"
              >
                Apply
              </button>
            </div>

            {/* Message */}
            {message && (
              <p
                className={`mt-4 text-sm ${
                  message.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </div>
          {/* next section */}
          <VoucherCode />
          <PayWallet />
          <div>
            <button onClick={openPaymentModal}>Continue to Payment</button>
          </div>
          {/* Payment Off-Canvas Modal */}
          {isPaymentOpen && (
            <PaymentOffCanvas
              onClose={closePaymentModal}
              onclick={handleCheckoutClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
