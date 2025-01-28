import { useContext, useEffect, useState } from 'react';
import AuthContext from '../components/context/AuthContex';
import TabComponent from '../components/Tab';
import PaginationFooter from '../ui/PaginationFooter';
import onion from '../assets/carrot.png';
import { Link, useSearchParams } from 'react-router-dom';
import OrderSummaryOffcanvas from '../components/OrderSummaryOffcanvas';
import useAppStore from '../store';
import { useQueryParams } from '../hooks';
import OrderItem from '../components/OrderItem';
import EmptyOrderList from '../components/EmptyOrderList';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('Confirmed');
  const { fetchOrderList, updateOrderList } = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const queryParams = useQueryParams();
  const session_id = queryParams.get('session_id'); // Get 'name' query param

  const { orderInfo, userOrders } = useAppStore();

  const confirmedOrders = userOrders?.filter(
    (orders) => orders.status === 'confirmed'
  );
  const deliveredOrders = userOrders?.filter(
    (orders) => orders.status === 'delivered'
  );

  const cancelledOrders = userOrders?.filter(
    (orders) => orders.status === 'cancelled'
  );
  console.log(confirmedOrders);

  useEffect(() => {
    const updateOrder = async () => {
      if (session_id) {
        const data = {
          session_id,
          order_id: orderInfo?.order?.id,
          status: 'confirmed',
        };

        const res = await updateOrderList(data);
        if (res) {
          const removeErrorParam = () => {
            if (searchParams.has('session_id')) {
              searchParams.delete('session_id');
              setSearchParams(searchParams);
            }
          };
          removeErrorParam();
          fetchOrderList();
        }
      }
    };
    updateOrder();
  }, [session_id]);

  useEffect(() => {
    fetchOrderList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen mt-40 lg:mt-48 lg:px-16 py-4 px-4">
      <p className="text-dark-blue lg:text-3xl font-bold pb-3">My Orders</p>

      <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
      <p className="p-2 bg-secondary-bg text-white text-sm my-3 truncate px-4 rounded-full">
        🔊 Please note that our delivery partners will stay at least 15 minutes
        at a specific location. If the waiting time elapses, they will proceed
        to the next location, and an additional delivery fee will apply, failure
        to pay may lead to a refund, subject to deactivation
      </p>

      {activeTab === 'Confirmed' && (
        <div>
          {confirmedOrders?.map((order, index) => {
            return <OrderItem order={order} key={index} />;
          })}
          {confirmedOrders?.length === 0 && <EmptyOrderList />}
        </div>
      )}

      {activeTab === 'Delivered' && (
        <div>
          {deliveredOrders?.map((order, index) => {
            return <OrderItem order={order} key={index} />;
          })}
          {deliveredOrders?.length === 0 && <EmptyOrderList />}
        </div>
      )}

      {activeTab === 'All Orders' && (
        <div>
          {userOrders?.map((order, index) => {
            return <OrderItem order={order} key={index} />;
          })}
          {userOrders?.length === 0 && <EmptyOrderList />}
        </div>
      )}

      {activeTab === 'Canceled' && (
        <div>
          {cancelledOrders?.map((order, index) => {
            return <OrderItem order={order} key={index} />;
          })}

          {cancelledOrders?.length === 0 && <EmptyOrderList />}
        </div>
      )}
      <PaginationFooter currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default Orders;
