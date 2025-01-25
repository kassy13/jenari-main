import { RiCloseLargeLine } from "react-icons/ri";
import useAppStore from "../store";
import { formatAmount } from "../utils";

export const StripeKey =
  "pk_test_51QLnFJDe8RptjC2BVhdx0unweCoD7jviNQiQxvwVazp4lZaNY74uA1CclFRXc3PxS6RDLjvqq90MHaJsDSpX3D8h00VLulWZas";
import PropTypes from "prop-types";
import { TailSpin } from "react-loader-spinner";

const PaymentOffCanvas = ({ onClose, onclick, isLoading }) => {
  const { cartData } = useAppStore();
  // const stripe = loadStripe(StripeKey);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white w-full md:w-2/3 lg:w-1/3 p-6 shadow-lg mt-28 lg:mt-40 overflow-y-scroll scrollbar-hide relative z-[999999]"
        onClick={(e) => e.stopPropagation()} // Prevents closing on inner clicks
      >
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-6">
            Payment
          </h2>

          <button onClick={onClose} className="p-2 bg-gray-300 rounded-full">
            <RiCloseLargeLine />
          </button>
        </div>

        <div className="space-y-4">
          {/* Sub Total */}
          <div className="flex justify-between">
            <span className="text-gray-700">Sub Total:</span>
            <span className="text-gray-800">
              £{formatAmount(cartData?.total_amount)}
            </span>
          </div>

          {/* Weight */}
          <div className="flex justify-between">
            <span className="text-gray-700">Weight:</span>
            <span className="text-gray-800">{cartData?.totalWeight}</span>
          </div>

          {/* Delivery Fee */}
          <div className="flex justify-between">
            <span className="text-gray-700">Delivery fee:</span>
            <span className="text-gray-800">£3.00</span>
          </div>

          {/* Total */}
          <div className="flex justify-between">
            <span className="text-gray-700 font-semibold">Total:</span>
            <span className="text-gray-800 font-semibold">
              £{formatAmount(cartData?.total_amount + 3)}
            </span>
          </div>

          {/* Pay With */}
          <div className="mt-6">
            <p className="text-gray-700">Pay with</p>
            <div
              onClick={onclick}
              className="bg-green-600 text-white cursor-pointer rounded-lg mt-2 flex items-center justify-center p-2"
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
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              ) : (
                `Pay £${formatAmount(cartData?.total_amount + 3)} with Stripe`
              )}
            </div>
          </div>

          {/* Close Button */}
        </div>
      </div>
    </div>
  );
};

PaymentOffCanvas.propTypes = {
  onClose: PropTypes.func.isRequired,
  onclick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default PaymentOffCanvas;
