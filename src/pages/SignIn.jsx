import React, { useState } from "react";
import { Link } from "react-router-dom";
import log from "../assets/logo transparent 1.svg";

const SignIn = () => {
  const [showModal, setShowModal] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setEmailError(!email);
    setPasswordError(!password);

    if (email && password) {
      console.log("Sign In with", { email, password });
    }
  };

  // Handle forgot password form
  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password email sent to:", forgotEmail);
    setShowModal(false);
  };

  return (
    <main className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br auth-gradient text-white lg:w-1/2">
        <div className="text-center flex flex-col justify-end h-full pb-20">
          <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
          <p className="text-lg">
            Sign in to your account and enjoy exclusive benefits.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 p-8">
        <div className="text-center flex  flex-col  justify-center">
          <img src={log} alt="Logo" className="mb-6 w-full" />
          <h2 className="text-2xl font-semibold mb-2">Sign In</h2>
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to={"/signUp"} className="text-primary-bg font-medium">
              Create an account
            </Link>
          </p>
        </div>

        {/* Sign In Form */}
        <div className="w-full max-w-md mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="logemail" className="block text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="logemail"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-bg"
                placeholder="Enter your email"
              />
              {emailError && (
                <small className="text-red-500">Valid email is required.</small>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="logpassword" className="block text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="logpassword"
                name="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-bg"
                placeholder="Enter your password"
              />
              {passwordError && (
                <small className="text-red-500">Password is required.</small>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-primary-bg text-white py-2 rounded-md hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-primary-bg"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        {/* Forgot Password Link */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 text-primary-bg font-medium hover:underline"
        >
          Forgot password?
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Forgot Password</h2>
            <p className="text-sm text-gray-600 mb-4">
              Enter your email address to reset your password:
            </p>
            <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
              <input
                type="email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-bg"
                placeholder="Enter your email"
                required
              />
              <div className="space-y-2">
                <button
                  type="submit"
                  className="w-full bg-primary-bg text-white py-2 rounded-md hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-primary-bg"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default SignIn;
