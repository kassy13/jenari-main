import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo transparent 1.svg";
import { RiArrowLeftLine } from "react-icons/ri";

const SignupOtp = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const firstInputRef = useRef(null); // Create ref for the first input

  useEffect(() => {
    firstInputRef.current?.focus(); // Auto-focus first input when component mounts
  }, []);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredCode = code.join("");

    if (enteredCode.length !== 6) {
      toast.error("Please enter the full 6-digit code.");
      return;
    }

    toast.success("Code verified successfully!");
    setTimeout(() => navigate("/dashboard"), 2000);
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
                maxLength={1}
                ref={index === 0 ? firstInputRef : null} // Set autofocus on first input
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary-bg text-white py-2 rounded-md hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-primary-bg"
          >
            Verify Code
          </button>
        </form>

        {/* Resend & Support */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
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
