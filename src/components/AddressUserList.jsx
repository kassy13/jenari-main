import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { RiCloseLargeLine } from "react-icons/ri";
import AuthContext from "./context/AuthContex";
import useAppStore from "../store";
import { AiOutlineDelete } from "react-icons/ai";

const AddressUserList = ({ onClose, onComplete, onDelete }) => {
  const { getAddress } = useContext(AuthContext);
  const { deliveryAddresses, setPrimaryAddress } = useAppStore();

  const handleDeliveryAddresses = (address) => {
    console.log(address);
    setPrimaryAddress(address);
    onClose();
  };

  useEffect(() => {
    getAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Call the request function from AuthContext (handled outside this component)
  // Form submission

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-[9]"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white w-full lg:w-[40%] p-6 shadow-lg flex flex-col justify-between mt-32 lg:mt-40 overflow-y-scroll scrollbar-hide relative z-[999999]"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex flex-row items-center justify-between">
            <h2 className="lg:text-2xl text-xl font-semibold text-gray-800 mb-4 pt-6">
              Select an address
            </h2>

            {/* Submit Button */}
            <button
              onClick={onClose}
              className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
            >
              <RiCloseLargeLine />
            </button>
          </div>

          <div className="mt-2 overflow-y-scroll h-100">
            {deliveryAddresses?.map((address, index) => {
              console.log(address);
              return (
                <div
                  key={index}
                  className="border cursor-pointer flex flex-row items-center justify-between border-[#F0F4FF] mb-4 p-4 rounded-lg"
                >
                  <div
                    role="button"
                    onClick={() => handleDeliveryAddresses(address)}
                  >
                    <p className="font-bold text-[20px] text-[#1F3D4F]">
                      {address.address_1}
                    </p>

                    {address?.address_2 && (
                      <p className="font-bold text-[20px] text-[#1F3D4F]">
                        {address.address_2}
                      </p>
                    )}

                    <p>
                      {address?.post_code}, {address?.county} {address?.street}
                    </p>
                    <p>{address?.country}</p>
                  </div>

                  <div onClick={() => onDelete(address)}>
                    <AiOutlineDelete />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="submit"
          onClick={onComplete}
          className="bg-primary-bg w-full text-white py-2 px-4 cursor-pointer rounded-full hover:opacity-85 transition  bottom-10"
        >
          Add New Address
        </button>
      </div>
    </div>
  );
};
AddressUserList.propTypes = {
  onClose: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AddressUserList;
