// src/pages/SignIn.jsx
import  { useState } from "react";
import Header from "../components/Header";

const SignIn = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSendOTP = () => {
    if (mobileNumber.length === 10) {
      // Simulate sending OTP
      alert(`OTP sent to ${mobileNumber}`);
      // Navigate to SignUp (replace with proper OTP verification in real app)
      window.location.href = "/signup";
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>
          <input
            type="text"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="border p-2 w-full rounded-lg mb-4"
          />
          <button
            onClick={handleSendOTP}
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
