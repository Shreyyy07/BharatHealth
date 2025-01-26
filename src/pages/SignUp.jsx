// src/pages/SignUp.jsx
import { useState } from "react";
import Header from "../components/Header";

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = () => {
    console.log("User Details:", userDetails);
    alert("SignUp Successful!");
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            className="border p-2 w-full rounded-lg mb-4"
          />
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            onChange={handleChange}
            className="border p-2 w-full rounded-lg mb-4"
          />
          <select
            name="gender"
            onChange={handleChange}
            className="border p-2 w-full rounded-lg mb-4"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="bloodGroup"
            placeholder="Enter your blood group"
            onChange={handleChange}
            className="border p-2 w-full rounded-lg mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            className="border p-2 w-full rounded-lg mb-4"
          />
          <button
            onClick={handleSignUp}
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
