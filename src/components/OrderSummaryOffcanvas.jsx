import PropTypes from 'prop-types';
import useAppStore from '../store';
import { formatAmount } from '../utils';
import moment from 'moment';

const OrderSummaryOffcanvas = ({ isOpen, toggleOffCanvas, order }) => {
  const { primaryAddress, user } = useAppStore();
  console.log(user);
  return (
    <div className="relative">
      {/* Overlay (visible when the offcanvas is open) */}
      <div
        className={`fixed inset-0  bg-black bg-opacity-50 z-[99]  transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleOffCanvas} // Close the offcanvas when clicking outside
      ></div>

      {/* Offcanvas Panel */}
      <div
        className={`fixed top-[75px] md:top-[100px] right-0 max-h-[calc(100vh)] w-full bg-white z-[999] md:w-[40%] shadow-lg transform transition-transform duration-300 overflow-y-scroll  ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Offcanvas Content */}
        <div className="p-4 space-y-4">
          <div className="mt-3 ">
            <h2 className="text-2xl font-bold text-dark-blue text-center bg-white ">
              Order Summary
            </h2>
            {/* Close Button */}
            <button
              className="absolute top-8 right-4 text-black bg-gray-200 p-1 text-sm px-2 rounded-full"
              onClick={toggleOffCanvas}
            >
              ✕
            </button>
          </div>
          <ul className="space-y-2 text-gray-600 flex items-center justify-between h-full">
            <li className=" flex flex-col items-center justify-between h-full  b">
              <p className="bg-secondary-bg text-white rounded-full text-center p-3 px-5">
                1
              </p>
              <p className=" font-semibold text-sm mt-3 text-secondary-bg text-nowrap">
                Order Confirmed
              </p>
            </li>
            <li className="border-t-2 border-gray-300 my-4 w-full -translate-y-5">
              {' '}
            </li>
            <li className=" flex flex-col items-center justify-between h-full  b">
              <p className="bg-gray-200 rounded-full text-center p-3 px-5">2</p>
              <p className=" font-semibold text-sm mt-2 text-nowrap">
                Order Processing
              </p>
            </li>
            <li className="border-t-2 border-gray-300 my-4 w-full -translate-y-5">
              {' '}
            </li>
            <li className=" flex flex-col items-center justify-between h-full  b">
              <p className="bg-gray-200 rounded-full text-center p-3 px-5">3</p>
              <p className=" font-semibold text-sm mt-2 text-nowrap">
                Order Delivered
              </p>
            </li>
          </ul>

          <div className="border border-[#F0F4FF] p-4 rounded-xl">
            <h3 className=" font-semibold text-2xl text-[#1F3D4F]">
              Delivery Information
            </h3>
            <p className="text-sm text-gray-500 pb-4 pt-2">
              {primaryAddress?.address_1} {primaryAddress?.county},{' '}
              {primaryAddress?.country}
            </p>
            <p className="font-bold text-[#404040] pb-2 text-base">
              {user?.name}
            </p>
            <p className="text-[#A3A3A3] py-1">{user?.email}</p>
            <p className="text-[#A3A3A3] py-1">{user?.phone}</p>
            <p className="text-[#A3A3A3] bg-[#F5F5F5] p-2 px-4 rounded-lg text-sm">
              Delivery Date:{' '}
              <span className="text-secondary-bg">
                {moment(order?.created_at)
                  .add('days', 4)
                  .format('dddd, MMM DD YYYY')}
              </span>
            </p>
          </div>
          <div className="p-2 flex justify-between items-center w-full border border-[#F0F4FF] rounded-xl mb-12">
            <div>
              {order?.products?.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 mt-4 mb-4 md:mb-0"
                  >
                    <div className="flex items-center justify-center">
                      <img
                        className="w-20 h-20 object-cover border border-[#F0F4FF] rounded"
                        src={product?.image}
                        alt="Red Onions"
                      />
                      <div className="mb-8 ml-3">
                        <h2 className="text-lg font-semibold text-[#6D6D6D]">
                          {product?.name}
                        </h2>
                        <p className="text-[#525252]">
                          £
                          {formatAmount(product?.price || product?.price_range)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p
            className={`${
              order?.status === 'confirmed'
                ? 'bg-[#90EE9018] text-primary-bg'
                : 'bg-[#FFF8F2] text-[#DA7656]'
            } p-2 text-center rounded-3xl`}
          >
            {order?.status}
          </p>

          {/* <button className="bg-[#F6F6F6] text-secondary-bg p-2 rounded-full hover:bg-secondary-bg hover:text-white w-full transition">
            Cancel Order
          </button> */}

          <div className=" ">
            <div className="max-w-full mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4 md:space-y-6">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-gray-700">Sub total:</span>
                <span className="text-gray-900">
                  £{formatAmount(order?.total_amount / 100)}
                </span>
              </div>

              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-gray-700">Weight:</span>
                <span className="text-gray-900">0.9kg</span>
              </div>

              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-gray-700">Delivery fee:</span>
                <div>
                  <span className="text-gray-900 line-through pr-2">£4.00</span>
                  <span className="text-gray-900">£0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <span className="font-semibold text-gray-700 text-lg">
                  Total:
                </span>
                <span className="text-gray-900 text-lg font-bold">
                  £{formatAmount(order?.total_amount / 100)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
OrderSummaryOffcanvas.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOffCanvas: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};

export default OrderSummaryOffcanvas;
