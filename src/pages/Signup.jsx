import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import log from "../assets/logo transparent 1.svg";

const SignUp = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "First name is required.";
    if (!formData.lastname) newErrors.lastname = "Last name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = "Passwords do not match.";
    }
    if (!formData.location) newErrors.location = "Location is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) return;
    // Convert phone to integer
    const updatedFormData = {
      ...formData,
      phone: parseInt(formData.phone, 10), // Convert phone to an integer
    };
    try {
      const response = await fetch("https://api.jenari.co.uk/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      const data = await response.json();

      if (response.ok) {
        Toastify({
          text: "Account created successfully!",
          duration: 3000,
          style: { background: "#017D03" },
        }).showToast();
        console.log("Form Data Submitted:", data);
        setTimeout(() => {
          navigate("/signIn");
        }, 3000);
      } else {
        Toastify({
          text: data.message || "Something went wrong. Please try again.",
          duration: 3000,
          style: { background: "#d32f2f" },
        }).showToast();
      }
    } catch (error) {
      console.error("Error:", error);
      Toastify({
        text: "Network error. Please try again later.",
        duration: 3000,
        style: { background: "#d32f2f" },
      }).showToast();
    }
  };

  return (
    <main className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br auth-gradient text-white lg:w-1/2">
        <div className="text-center flex flex-col justify-end h-full pb-20">
          <h1 className="text-4xl font-bold mb-4">Refer and Earn</h1>
          <p className="text-lg">
            Get your friends to sign up with your referral code and earn money.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 px-6">
        <div className="text-center flex flex-col justify-center">
          <img src={log} alt="Logo" className="mb-6 w-full" />
          <h2 className="text-2xl font-semibold mb-2">Create an Account</h2>
          <p className="text-sm">
            Already have an account?{" "}
            <Link to={"/signIn"} className="text-primary-bg font-medium">
              Login
            </Link>
          </p>
        </div>

        {/* Form Section */}
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="first_name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your first name"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                {errors.firstname && (
                  <small className="text-red-500">{errors.firstname}</small>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="last_name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your last name"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                {errors.lastname && (
                  <small className="text-red-500">{errors.lastname}</small>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <small className="text-red-500">{errors.email}</small>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <small className="text-red-500">{errors.phone}</small>
                )}
              </div>
              <button
                type="button"
                className="w-full bg-primary-bg text-white py-2 rounded-lg"
                onClick={handleNext}
              >
                Continue
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <button
                type="button"
                className="text-primary-bg mb-4"
                onClick={() => setStep(1)}
              >
                ← Back
              </button>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <small className="text-red-500">{errors.password}</small>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password_confirmation"
                  id="confirmPassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Confirm your password"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                />
                {errors.password_confirmation && (
                  <small className="text-red-500">
                    {errors.password_confirmation}
                  </small>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={handleChange}
                />
                {errors.location && (
                  <small className="text-red-500">{errors.location}</small>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-primary-bg text-white py-2 rounded-lg"
              >
                Create Account
              </button>
            </>
          )}
        </form>
      </div>
    </main>
  );
};

export default SignUp;
