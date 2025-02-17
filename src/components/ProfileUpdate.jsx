import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import useAppStore from "../store";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const ProfileUpdate = ({ user, onClose, onSave }) => {
  // Initialize local state with the current user data
  const [firstname, setfirstName] = useState(user.firstname);
  const [name, setName] = useState(user.name);
  const [lastName, setlastName] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [location, setLocation] = useState(user.location);
  const { authToken } = useAppStore();

  const handleSave = () => {
    // Prepare updated data (you can extend this with more fields)
    const updatedData = { name, email };
    onSave(updatedData);
    onClose();
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const phoneNum = parseInt(phone);

    const formData = {
      name,
      firstname,
      lastname: lastName,
      phone: phoneNum,
      location,
    };
    console.log(formData, authToken);
    try {
      const response = await fetch(
        "https://api.jenari.co.uk/api/update/info/user",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log("response", data);

      if (response.ok) {
        toast.success("Profile updated successfully!");
        onSave(formData);
        onClose();
      } else {
        toast.error(response.message || "Failed to update profile");
      }
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="fixed inset-0 flex justify-end bg-black bg-opacity-50 z-[999999]">
      {/* Modal container that slides in from the right */}
      <div className="bg-white w-full md:w-1/3 h-full p-6 overflow-y-auto pt-10">
        <div className=" flex justify-between pl-20 mb-4 ">
          <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
          <RiCloseLine size={24} onClick={onClose} />
        </div>
        <div className="border p-3 rounded-2xl py-5 ">
          <div className="w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center bg-primary-bg text-white text-base lg:text-xl font-bold rounded-full mb-3">
            {user.name[0]}
            {user.name.split(" ")[1]?.[0]}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              className="border p-2 w-full rounded-lgw-full px-4 py-2  bg-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-bg  focus:border-primary-bg text-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* <div className="mb-4">
            <label className="block mb-1">Firstname</label>
            <input
              type="text"
              className="border p-2 w-full rounded-lgw-full px-4 py-2  bg-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-bg  focus:border-primary-bg text-gray-600"
              value={firstname}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              className="border p-2 w-full rounded-lgw-full px-4 py-2  bg-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-bg  focus:border-primary-bg text-gray-600"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div> */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="border p-2 w-full rounded-lgw-full px-4 py-2  bg-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-bg  focus:border-primary-bg cursor-not-allowed text-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Phone</label>
            <input
              type="text"
              className="border p-2 w-full rounded-lgw-full px-4 py-2  bg-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-bg  focus:border-primary-bg cursor-not-allowed text-gray-600"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Location</label>
            <input
              type="text"
              className="border p-2 w-full rounded-lgw-full px-4 py-2  bg-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-bg  focus:border-primary-bg text-gray-600"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-primary-bg hover:bg-opacity-85 text-white rounded-lg w-full"
              onClick={handleUpdateProfile}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
