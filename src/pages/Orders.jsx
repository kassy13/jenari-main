import { useContext, useEffect, useState } from "react";
import AuthContext from "../components/context/AuthContex";
import TabComponent from "../components/Tab";
import PaginationFooter from "../ui/PaginationFooter";
import onion from "../assets/carrot.png";
import { Link } from "react-router-dom";
import OrderSummaryOffcanvas from "../components/OrderSummaryOffcanvas";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("Confirmed");
  const { fetchOrderList } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    console.log("cldn");
  };

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
      <div className="border border-[#F0F4FF] rounded-xl p-4 my-8">
        <div className="text-[#404040]">
          <p className="py-2 ">
            Order reference number:{" "}
            <span className="text-secondary-bg">16461AE200</span>{" "}
          </p>
          <p className="py-2">
            Order Date:{" "}
            <span className="text-secondary-bg">Fri, 17th Jan 2025</span>{" "}
          </p>
          <p className="py-2">
            Order Time: <span className="text-secondary-bg">02:26 am</span>{" "}
          </p>
          <div className=" flex flex-col md:flex-row justify-between md:items-center">
            <div className="flex items-center gap-3 mt-4 mb-4 md:mb-0">
              <div>
                <img
                  className="w-20 h-20 gap-1 object-cover border border-[#F0F4FF]  rounded"
                  src={onion}
                  alt="Red Onions"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#6D6D6D]">
                  Onions-Red
                </h2>
                <p className="text-[#525252] mt-1">Small, 250g</p>
                <p className="text-lg font-bold text-primary-bg">£50.00</p>
              </div>
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
            toggleOffCanvas={toggleOffCanvas}
          />
        )}
      </div>
      <PaginationFooter currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default Orders;
