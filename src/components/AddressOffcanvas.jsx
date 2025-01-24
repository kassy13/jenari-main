import { useContext, useState } from 'react';
import { RiCloseLargeLine } from 'react-icons/ri';
import AuthContext from './context/AuthContex';
import { TailSpin } from 'react-loader-spinner';
import { Toastify } from 'toastify';

const AddressOffCanvas = ({ onClose }) => {
  const [label, setLabel] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [landmark, setLandmark] = useState('');
  const [area, setArea] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryName, setDeliveryName] = useState('');
  const [isPrimaryAddress, setIsPrimaryAddress] = useState(false);

  // Sample areas and countries for dropdown
  const areas = ['Downtown', 'Uptown', 'Suburb', 'Industrial Area'];
  const countries = ['United Kingdom', 'United States', 'Canada', 'Nigeria'];
  const states = ['Lagos', 'Abuja', 'New York', 'California'];
  const { createNewAddress, isLoading } = useContext(AuthContext);

  // Form submission
  // Construct address object
  const addressData = {
    label,
    address_number: houseNumber,
    street: streetName,
    landmark,
    area,
    state,
    country,
    phone: phoneNumber,
    delivery_name: deliveryName,
    primary_Address: String(isPrimaryAddress),
  };

  // Call the request function from AuthContext (handled outside this component)
  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

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
        className="bg-white  lg:w-2/4 p-6 shadow-lg mt-40 overflow-y-scroll scrollbar-hide relative z-[999999]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-6">
            Add a New Address
          </h2>
          <button
            onClick={onClose}
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            <RiCloseLargeLine />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Label (Home/Office) */}
          <div>
            <label className="block text-gray-700 mb-2">
              Label (Home, Office)
            </label>
            <select
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
            >
              <option value="">Select Label</option>
              <option value="Home">Home</option>
              <option value="Office">Office</option>
            </select>
          </div>

          {/* House/Office Number */}
          <div>
            <label className="block text-gray-700 mb-2">
              House/Office Number
            </label>
            <input
              type="text"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              placeholder="Enter house/office number"
            />
          </div>

          {/* Street Name */}
          <div>
            <label className="block text-gray-700 mb-2">Street Name</label>
            <input
              type="text"
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              placeholder="Enter street name"
            />
          </div>

          {/* Landmark */}
          <div>
            <label className="block text-gray-700 mb-2">Landmark</label>
            <input
              type="text"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              placeholder="E.g., Standard Chartered Bank, Barclays Bank"
            />
          </div>

          {/* Area Dropdown */}
          <div>
            <label className="block text-gray-700 mb-2">Area</label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
            >
              <option value="">Select an area</option>
              {areas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          {/* State Dropdown */}
          <div>
            <label className="block text-gray-700 mb-2">State</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
            >
              <option value="">Select a state</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Country Dropdown */}
          <div>
            <label className="block text-gray-700 mb-2">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <div className="flex">
              <span className="bg-gray-100 border border-gray-300 rounded-l-lg p-2">
                +44
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          {/* Delivery Name */}
          <div>
            <label className="block text-gray-700 mb-2">Delivery Name</label>
            <input
              type="text"
              value={deliveryName}
              onChange={(e) => setDeliveryName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              placeholder="Enter delivery name"
            />
          </div>

          {/* Primary Address */}
          <div>
            <label className="block text-gray-700 mb-2">Primary Address</label>
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

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading ? true : false}
              className="bg-primary-bg w-full text-white py-2 px-4 rounded-full hover:opacity-85 transition"
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

export default AddressOffCanvas;
