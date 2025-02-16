import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import log from "../assets/logo transparent 1.svg";
import AuthContext from "../components/context/AuthContex";
import { TailSpin } from "react-loader-spinner";
import { RiCloseLargeFill } from "react-icons/ri";

const LogIn = () => {
  const { login, isLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    let valid = true;

    // Validation
    if (!email) {
      setEmailError("Valid email is required.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) return; // Exit early if validation fails.

    // Proceed to login after validation
    try {
      await login({ email_or_phone: email, password }, navigate); // Ensure the field names match backend requirements.
    } catch (error) {
      Toastify({
        text: error.message || "Login failed. Please try again.",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#f44336",
      }).showToast();
    }
  };

  console.log("forgot email", forgotEmail);

  // Handle forgot password form
  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();

    if (!forgotEmail) {
      Toastify({
        text: "Please enter a valid email address.",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#f44336",
      }).showToast();
      return;
    }

    // API Call
    fetch("https://api.jenari.co.uk/api/request/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_phone: forgotEmail }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "An error occurred.");
          });
        }
        return response.json();
      })
      .then((data) => {
        Toastify({
          text: data.message || "Password reset email sent successfully!",
          duration: 3000,
          gravity: "top",
          position: "center",
          backgroundColor: "#4caf50",
        }).showToast();

        // Close modal after success
        setShowModal(false);
        setForgotEmail("");
      })
      .catch((error) => {
        Toastify({
          text: error.message || "Failed to send reset email.",
          duration: 3000,
          gravity: "top",
          position: "center",
          backgroundColor: "#f44336",
        }).showToast();
      });
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
        <div className="text-center flex flex-col justify-center">
          <img src={log} alt="Logo" className="mb-6 w-full" />
          <h2 className="text-2xl font-semibold mb-2">Sign In</h2>
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
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
                <small className="text-red-500">{emailError}</small>
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
                <small className="text-red-500">{passwordError}</small>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-primary-bg text-white py-2 rounded-md hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-primary-bg"
              >
                {isLoading ? (
                  <div className="flex flex-row items-center justify-center">
                    <TailSpin
                      visible={true}
                      height="20"
                      width="20"
                      color="#FFFFFF"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                ) : (
                  "Sign In"
                )}
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
        <div className="fixed inset-0 flex  bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold my-6 lg:text-2xl">
                Forgot Password
              </h2>
              <button className="font-bold" onClick={() => setShowModal(false)}>
                <RiCloseLargeFill className="font-bold" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4 font-bold lg:text-xl">
              Enter your email address to reset your password:
            </p>
            <p className="py-6">
              We will send you a reset link which will help you create a new
              password for your account
            </p>
            <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
              <div className="border rounded-2xl p-4 py-9">
                <label htmlFor="emailz" className="">
                  Email or phone number
                </label>
                <input
                  id="emailz"
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full px-4 py-2  bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-primary-bg mt-2"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <button
                  type="submit"
                  className="w-full bg-primary-bg text-white py-2 rounded-md hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-primary-bg mt-56"
                >
                  Submit
                </button>
                {/* <button
                  type="button"
                  className="w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button> */}
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default LogIn;
