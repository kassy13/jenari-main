import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo transparent 1.svg";
import { RiArrowLeftLine } from "react-icons/ri";
import useAppStore from "../store";

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { authToken } = useAppStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    const formData = {
      password,
      password_confirm: passwordConfirm,
      token: authToken,
    };

    try {
      const response = await fetch(
        "https://api.jenari.co.uk/api/reset/password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password.");
      }

      toast.success("Password updated successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br lock-gradient text-white lg:w-1/2">
        <div className="text-center flex flex-col justify-end h-full pb-20">
          <h1 className="text-5xl font-bold mb-4">Reset Password</h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 p-8 relative">
        <div className="text-center flex flex-col justify-center mt-16">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="mb-6 w-full max-w-[150px]" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Reset Password</h2>
          <p className="text-gray-600 mb-4 lg:text-[18px] px-8">
            Please enter a new secure password to regain access to your
            PricePally account.
          </p>
        </div>

        {/* Password Reset Form */}
        <div className="w-full lg:max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* New Password */}
            <div className="p-5 py-7 border rounded-xl ">
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-gray-700 mb-1"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-bg"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="pt-5">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-bg"
                  placeholder="Confirm new password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="">
              <button
                type="submit"
                className="w-full bg-primary-bg text-white py-2 rounded-md hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-primary-bg"
                disabled={isLoading}
              >
                {isLoading ? "Updating..." : "Update Password"}
              </button>
            </div>
          </form>
        </div>

        {/* Back to Login */}
        <button
          onClick={() => navigate("/login")}
          className="mt-4 text-primary-bg font-medium hover:underline absolute left-10 top-5 lg:top-10 flex items-center gap-2"
        >
          <RiArrowLeftLine /> Back to login
        </button>
      </div>
    </main>
  );
};

export default PasswordReset;
