import PropTypes from 'prop-types';

const TabComponent = ({ activeTab, setActiveTab }) => {
  const tabs = [
    'Confirmed',
    'Delivered',
    'Scheduled',
    'All Orders',
    'Canceled',
  ];

  return (
    <div className="flex bg-gray-100 rounded-lg p-2 space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`flex-1 px-4 py-2 text-center rounded-md 
            ${
              activeTab === tab
                ? 'bg-white text-black font-semibold shadow'
                : 'bg-gray-100 text-gray-500'
            } hover:bg-gray-200 transition`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

TabComponent.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default TabComponent;
