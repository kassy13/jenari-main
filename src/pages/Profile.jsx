import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FiUser, FiMapPin, FiLock, FiLogOut } from "react-icons/fi";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const user = {
    name: "Somtoo Nkasiobi",
    email: "ichokusomtoo12@gmail.com",
    username: "ichokusomtoo_966e",
    phone: "+234 814 722 9720",
    location: "Abuja",
    accountType: "Customer",
    joined: "February 2025",
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className=" p-3 lg:p-6 bg-white  shadow-lg rounded-2xl w-full min-h-screen">
            {/* Profile Header */}
            <div className="flex items-center space-x-4 border-b pb-4">
              <div className="w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center bg-primary-bg text-white text-base lg:text-xl font-bold rounded-full">
                {user.name[0]}
                {user.name.split(" ")[1]?.[0]}
              </div>
              <div>
                <h2 className=" text-xl lg:text-2xl font-semibold">
                  {user.name}
                </h2>
                <p className="text-gray-500 text-sm lg:text-base">
                  {user.email}
                </p>
                <p className="text-xs lg:text-sm text-gray-600">
                  Joined {user.joined}
                </p>
              </div>
            </div>

            {/* Profile Details */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="lg:text-lg font-semibold">Profile Details</h3>
                <button className="flex items-center text-green-600 hover:underline">
                  <FaEdit className="mr-1" /> Edit Details
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries({
                  Name: user.name,
                  Email: user.email,
                  Username: user.username,
                  "Phone number": user.phone,
                  "Signup Location": user.location,
                  "Account Type": user.accountType,
                }).map(([label, value]) => (
                  <div key={label}>
                    <p className="text-gray-500 text-sm">{label}</p>
                    <p className="lg:text-lg font-medium flex items-center">
                      {value}{" "}
                      {label === "Account Type" && (
                        <MdVerified className="text-blue-500 ml-1" />
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "address":
        return (
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            Address Details Coming Soon...
          </div>
        );
      case "password":
        return (
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            Change Password Section
          </div>
        );
      case "logout":
        return (
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            Logging Out...
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-2 lg:p-6 pt-40 lg:pt-56">
      {/* Sidebar */}
      <aside className="lg:w-64 bg-white p-2.5 lg:p-6  shadow-lg rounded-2xl ">
        <h3 className="hidden lg:block text-lg font-semibold mb-6">
          My Account
        </h3>
        <nav className="space-y-4">
          {[
            { label: "My Profile", icon: <FiUser />, key: "profile" },
            { label: "Address", icon: <FiMapPin />, key: "address" },
            { label: "Change Password", icon: <FiLock />, key: "password" },
            { label: "Logout", icon: <FiLogOut />, key: "logout" },
          ].map(({ label, icon, key }) => (
            <button
              key={key}
              className={` flex items-center space-x-3 w-full p-3 rounded-md transition-all ${
                activeTab === key
                  ? "bg-primary-bg text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(key)}
            >
              <span>{icon}</span>

              <span
                onClick={() => setActiveTab(key)}
                className="hidden lg:block"
              >
                {label}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1  ml-3 lg:ml-6 ">{renderContent()}</main>
    </div>
  );
};

export default ProfilePage;
