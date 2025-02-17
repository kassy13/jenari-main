import { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FiUser, FiMapPin, FiLock, FiLogOut } from "react-icons/fi";
import contact from "../assets/contact-book.svg";
import useAppStore from "../store";
import ProfileUpdate from "../components/ProfileUpdate";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import AddressOffCanvas from "../components/AddressOffcanvas";
import AuthContext from "../components/context/AuthContex";
import { useEffect } from "react";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  // const { user } = useAppStore();
  const { primaryAddress, user } = useAppStore();
  console.log("primary Address", primaryAddress);
  // const [open, setOpen] = useState("");
  const fullName = `${user.firstname} ${user.lastname}`;
  console.log(fullName);
  const [showModal, setShowModal] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const { getAddress, handleAddressDelete } = useContext(AuthContext);
  const [profileAddress, setProfileAddress] = useState([]);
  const [addressToDelete, setAddressToDelete] = useState(null);

  async function AddressProfile() {
    const addrs = await getAddress();
    console.log(addrs);
    setProfileAddress(addrs.addresses);
  }
  useEffect(() => {
    AddressProfile();
  }, []);

  const confirmDeleteAddress = async (addressId) => {
    await handleAddressDelete(addressId);
    // Optionally update the state to remove the deleted address:
    setProfileAddress((prev) =>
      prev.filter((address) => address.id !== addressId)
    );
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
                  Joined {user.created_at}
                </p>
              </div>
            </div>

            {/* Profile Details */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="lg:text-lg font-semibold">Profile Details</h3>
                <button
                  className="flex items-center text-green-600 hover:underline"
                  onClick={() => setShowModal((prev) => !prev)}
                >
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
                  "Account Type": user.user_type,
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
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full relative">
            {/* Flex container for address cards */}
            <div className="grid lg:grid-cols-3 gap-4 w-full">
              {profileAddress.map((profile, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-xl shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-full flex justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <img src={contact} alt="Contact" className="w-6 h-6" />
                      <p className="font-bold text-[20px] text-[#1F3D4F]">
                        {profile?.address_1}
                      </p>
                    </div>
                    <p className="text-sm">
                      {profile?.post_code}, {profile?.county}
                    </p>
                    <p className="text-sm">{profile?.country}</p>
                  </div>
                  <div className=" flex gap-2">
                    <RiEdit2Line className="ext-xl text-gray-600 bg-[#0d8c4230] w-8 h-8 p-1 rounded-full" />
                    <RiDeleteBinLine
                      className="text-xl text-gray-600 bg-gray-300 w-8 h-8 p-1 rounded-full"
                      onClick={() => setAddressToDelete(profile)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              className=" mt-10 w-full flex justify-center"
              onClick={() => setShowComponent(true)}
            >
              <button className="font-medium cursor-pointer text-[18px] text-white bg-primary-bg border-none p-2 px-20 rounded-xl">
                Add Address
              </button>
            </div>

            {showComponent && (
              <div className="absolute z-50 inset-0">
                <AddressOffCanvas onClose={() => setShowComponent(false)} />
              </div>
            )}
            {/* Conditionally render delete confirmation modal */}
            {addressToDelete && (
              <DeleteConfirmationModal
                onCancel={() => setAddressToDelete(null)}
                onConfirm={() => {
                  confirmDeleteAddress(addressToDelete.id);
                  setAddressToDelete(null);
                }}
              />
            )}
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

      {showModal && (
        <ProfileUpdate user={user} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ProfilePage;
