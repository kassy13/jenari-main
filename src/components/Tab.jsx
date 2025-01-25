// import PropTypes from "prop-types";

// const TabComponent = ({ activeTab, setActiveTab }) => {
//   const tabs = [
//     "Confirmed",
//     "Delivered",
//     "Scheduled",
//     "All Orders",
//     "Canceled",
//   ];

//   return (
//     <div className="flex bg-gray-100 rounded-lg p-2 space-x-2 overflow-hidden">
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           className={`flex-1 px-4 py-2 text-center rounded-md
//             ${
//               activeTab === tab
//                 ? "bg-white text-black font-semibold shadow"
//                 : "bg-gray-100 text-gray-500"
//             } hover:bg-gray-200 transition`}
//           onClick={() => setActiveTab(tab)}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// };

// TabComponent.propTypes = {
//   activeTab: PropTypes.string.isRequired,
//   setActiveTab: PropTypes.func.isRequired,
// };

// export default TabComponent;

import PropTypes from "prop-types";

const TabComponent = ({ activeTab, setActiveTab }) => {
  const tabs = [
    "Confirmed",
    "Delivered",
    "Scheduled",
    "All Orders",
    "Canceled",
  ];

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Scrollable Tabs Container */}
      <div className="flex justify-between gap-6 bg-gray-100 rounded-lg p-2 space-x-2 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-shrink-0 px-4 py-2 text-center rounded-md
              ${
                activeTab === tab
                  ? "bg-white text-black font-semibold shadow"
                  : "bg-gray-100 text-gray-500"
              } hover:bg-gray-200 transition`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Hint for scrollable content */}
      <div className="absolute top-0 right-0 w-6 h-full bg-gradient-to-l from-gray-100 pointer-events-none" />
    </div>
  );
};

TabComponent.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default TabComponent;
