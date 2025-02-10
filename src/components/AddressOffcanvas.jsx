import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { RiCloseLargeLine } from 'react-icons/ri';
import AuthContext from './context/AuthContex';
import { TailSpin } from 'react-loader-spinner';
import { Toastify } from 'toastify';
import { cleanData } from '../utils';

const AddressOffCanvas = ({ onClose, sendToSomeone }) => {
  const [city, setCity] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [county, setCounty] = useState('');
  const [postCode, setPostCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryName, setDeliveryName] = useState('');
  const [isPrimaryAddress, setIsPrimaryAddress] = useState(false);

  // Sample areas and countries for dropdown
  const { createNewAddress, isLoading } = useContext(AuthContext);

  // Form submission
  // Construct address object
  const addressData = {
    address_1: address1,
    address_2: address2,
    city,
    county,
    post_code: postCode,
    country: 'United Kingdom',
    phone: phoneNumber,
    delivery_name: deliveryName,
    primary_Address: isPrimaryAddress === false ? '0' : '1',
  };

  // Call the request function from AuthContext (handled outside this component)
  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(cleanData(addressData));

    // Trigger address creation
    createNewAddress(addressData)
      .then((response) => {
        console.log('Response:', response);
        onClose(); // Close the off-canvas
      })
      .catch((error) => {
        console.error('Failed to add address:', error);
        Toastify({
          text: 'Error adding address. Please try again',
          backgroundColor: 'red',
          duration: 3000,
        }).showToast();
      });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-[9]"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white  lg:w-2/4 w-full p-6 shadow-lg lg:mt-40 mt-28 overflow-y-scroll scrollbar-hide relative z-[999999]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-12">
            {sendToSomeone ? 'Recipient delivery address' : 'Add Address'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 mb-6"
          >
            <RiCloseLargeLine />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Label (Home/Office) */}

          {sendToSomeone && (
            <>
              <div>
                <label className="block text-gray-700 lg:mb-2 ">
                  Delivery name
                </label>
                <input
                  type="text"
                  value={deliveryName}
                  required
                  onChange={(e) => setDeliveryName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
                  placeholder="Enter delivery name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
                  placeholder="Enter label (Home/Office)"
                />
              </div>
            </>
          )}
          <div>
            <label className="block text-gray-700 mb-2">Address 1</label>
            <input
              type="text"
              value={address1}
              required
              onChange={(e) => setAddress1(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              placeholder="Enter Address 1"
            />
          </div>

          {/* House/Office Number */}
          <div>
            <label className="block text-gray-700 mb-2">Address 2</label>
            <input
              type="text"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              placeholder="Enter Address 2 (optional)"
            />
          </div>

          {/* Street Name */}
          <div>
            <label className="block text-gray-700 mb-2">City</label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              placeholder="Enter city"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Post code</label>
            <input
              type="text"
              required
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              placeholder="Enter post code"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">County</label>
            <input
              type="text"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              placeholder="Enter county"
            />
          </div>

          {/* Phone Number */}
          {sendToSomeone ? null : (
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <div className="flex">
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
          )}

          {/* Primary Address */}
          {sendToSomeone ? null : (
            <div>
              <label className="block text-gray-700 mb-2">
                Primary Address
              </label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="primaryAddress"
                    value={true}
                    checked={isPrimaryAddress === true}
                    onChange={() => setIsPrimaryAddress(true)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="primaryAddress"
                    value={false}
                    checked={isPrimaryAddress === false}
                    onChange={() => setIsPrimaryAddress(false)}
                  />
                  No
                </label>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading ? true : false}
              className="bg-primary-bg w-full mt-4 text-white py-2 px-4 rounded-full hover:opacity-85 transition"
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
                'Add New Address'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
AddressOffCanvas.propTypes = {
  onClose: PropTypes.func.isRequired,
  sendToSomeone: PropTypes.bool,
};

export default AddressOffCanvas;
