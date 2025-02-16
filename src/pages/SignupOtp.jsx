import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo transparent 1.svg";
import { RiArrowLeftLine } from "react-icons/ri";

const SignupOtp = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const [signupEmail, setSignupEmail] = useState(null);

  useEffect(() => {
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    checkAllFilled(newCode);
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const checkAllFilled = (newCode) => {
    return newCode.every((digit) => digit !== "");
  };

  // Get signup email from session storage
  useEffect(() => {
    const email = sessionStorage.getItem("signupEmail");
    setSignupEmail(email);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredCode = code.join("");

    if (enteredCode.length !== 6) {
      toast.error("Please enter the full 6-digit code.");
      return;
    }

    if (!signupEmail) {
      toast.error("Email not found. Please sign up again.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.jenari.co.uk/api/verify-otp/${enteredCode}/${signupEmail}`
      );
      console.log("rezz", response);

      if (!response.ok) {
        // Optionally, handle the error response here
        toast.error("Verification failed. Please try again.");
        return;
      }
      toast.success("Code verified successfully!");
      setTimeout(() => navigate("/otp/success"), 3000);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  const resendOTPEmail = { email: signupEmail };
  console.log(resendOTPEmail);
  const handleResendOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.jenari.co.uk/api/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resendOTPEmail),
      });
      console.log("resss", response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br auth-gradient text-white lg:w-1/2"></div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 p-8 relative">
        <div className="text-center flex flex-col justify-center mt-16">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="mb-6 w-full max-w-[150px]" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Verify Code</h2>
          <p className="text-gray-600 mb-4 lg:text-[18px] px-8">
            Please enter the 6-digit code we just sent to your email
            <strong className="block">ichokusomtoo12@gmail.com</strong>
          </p>
        </div>

        {/* Verification Code Input */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center space-x-2">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="w-12 h-12 text-center outline-none text-lg border rounded-md focus:ring focus:ring-primary-bg"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white ${
              checkAllFilled(code)
                ? "bg-primary-bg hover:bg-opacity-85"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!checkAllFilled(code)}
          >
            Verify Code
          </button>
        </form>

        {/* Resend & Support */}
        <div className="mt-4 text-center">
          <p className="text-gray-600" onClick={handleResendOTP}>
            Didn't receive code?{" "}
            <span className="text-primary-bg cursor-pointer">Resend code</span>
          </p>
          <p className="text-gray-600 mt-2">
            Having issues getting your code?{" "}
            <span className="text-primary-bg cursor-pointer">
              Contact Support
            </span>
          </p>
        </div>

        {/* Back to Login */}
        <button
          onClick={() => navigate("/signUp")}
          className="mt-4 text-primary-bg font-medium hover:underline absolute left-10 top-5 lg:top-10 flex items-center gap-2"
        >
          <RiArrowLeftLine /> Back
        </button>
      </div>
    </main>
  );
};

export default SignupOtp;
