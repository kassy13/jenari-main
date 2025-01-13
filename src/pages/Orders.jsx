import { useContext, useEffect, useState } from 'react';
import AuthContext from '../components/context/AuthContex';
import TabComponent from '../components/Tab';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('Confirmed');
  const { fetchOrderList } = useContext(AuthContext);

  useEffect(() => {
    fetchOrderList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen mt-40 lg:mt-48 lg:px-16 py-4">
      <p className="text-dark-blue lg:text-3xl font-bold pb-3">Your Cart</p>

      <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Orders;
