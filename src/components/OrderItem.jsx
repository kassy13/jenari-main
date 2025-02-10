import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OrderSummaryOffcanvas from './OrderSummaryOffcanvas';
import moment from 'moment';
import { formatAmount } from '../utils';
const OrderItem = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="border border-[#F0F4FF] rounded-xl p-4 my-8">
      <div className="text-[#404040]">
        <p className="py-2 ">
          Order reference number:{' '}
          <span className="text-secondary-bg">{order?.order_number}</span>{' '}
        </p>
        <p className="py-2">
          Order Date:{' '}
          <span className="text-secondary-bg">
            {moment(order.created_at).format('dddd, MMM DD, YYYY')}
          </span>{' '}
        </p>
        <p className="py-2">
          Order Time:{' '}
          <span className="text-secondary-bg">
            {moment(order.created_at)?.format('hh:ss A')}
          </span>{' '}
        </p>
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div>
            {order?.products?.map((product) => {
              console.log(product);
              return (
                <div
                  key={product}
                  className="flex items-center gap-3 mt-4 mb-4 md:mb-0"
                >
                  <div>
                    <img
                      className="w-20 h-20 gap-1 object-cover border border-[#F0F4FF]  rounded"
                      src={product?.image}
                      alt="Red Onions"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#6D6D6D]">
                      {product.name}
                    </h2>
                    <p className="text-[#525252] mt-1">{product?.weight}kg</p>
                    <p className="text-lg font-bold text-primary-bg">
                      £{formatAmount(product.price || product?.price_range)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            className="bg-primary-bg text-white hover:bg-opacity-90 p-2 px-4 rounded-full text-center"
            onClick={toggleOffCanvas}
          >
            View Order
          </Link>
        </div>
      </div>
      {toggleOffCanvas && (
        <OrderSummaryOffcanvas
          isOpen={isOpen}
          order={order}
          toggleOffCanvas={toggleOffCanvas}
        />
      )}
    </div>
  );
};
OrderItem.propTypes = {
  order: PropTypes.object,
};

export default OrderItem;
