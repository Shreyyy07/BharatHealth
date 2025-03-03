
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaClipboardList, FaNotesMedical, FaRobot, FaCalculator } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  // Fetch user details from localStorage or Context API
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest", profilePic: "" };

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    navigate("/"); // Redirect to Landing Page
  };

   // Sidebar State
   const [sidebarOpen, setSidebarOpen] = useState(false);

  // State for BMI Calculator
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  // BMI Calculation
  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert cm to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      // Determine BMI Category
      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setCategory("Normal weight");
      else if (bmiValue >= 25 && bmiValue < 29.9) setCategory("Overweight");
      else setCategory("Obese");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-100 p-4 transition-all duration-900 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
        onMouseEnter={() => setSidebarOpen(true)}
        onMouseLeave={() => setSidebarOpen(false)}
      >
        <div className="flex items-center mb-6">
          
          {sidebarOpen && <h2 className="text-lg font-semibold">{user.name}</h2>}
        </div>

        <nav>
          <button
            className="flex items-center w-full p-2 mb-2 text-gray-700 hover:bg-gray-200 rounded"
            onClick={() => navigate("./index.jsx")}
          >
            <FaHome className="mr-2" /> {sidebarOpen && "Home"}
          </button>
          <button
            className="flex items-center w-full p-2 mb-2 text-gray-700 hover:bg-gray-200 rounded"
            onClick={() => navigate("/healthrecord")}
          >
            <FaClipboardList className="mr-2" /> {sidebarOpen && "Health Data"}
          </button>
          <button
            className="flex items-center w-full p-2 mb-2 text-gray-700 hover:bg-gray-200 rounded"
            onClick={() => navigate("/reports")}
          >
            <FaNotesMedical className="mr-2" /> {sidebarOpen && "Reports"}
          </button>
          <button
            className="flex items-center w-full p-2 mb-2 text-gray-700 hover:bg-gray-200 rounded"
            onClick={() => navigate("/askai")}
          >
            <FaRobot className="mr-2" /> {sidebarOpen && "Ask AI Assistance"}
          </button>
          <button
            className="flex items-center w-full p-2 mb-2 text-gray-700 hover:bg-gray-200 rounded"
            onClick={() => navigate("/profile")}
          >
            <FaUser className="mr-2" /> {sidebarOpen && "Profile Info"}
          </button>
          <button
            className="flex items-center w-full p-2 mt-10 text-red-500 hover:bg-gray-200 rounded"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-2" /> {sidebarOpen && "Logout"}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6">
        <div className="flex justify-end">
        </div>
        <h1 className="text-2xl font-semibold mt-4">Welcome, {user.name}!</h1>
     
        {/* BMI Calculator Section */}
        <div className="mt-8 bg-white shadow-md rounded p-6 w-96">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaCalculator className="mr-2" /> BMI Calculator
          </h2>
          <label className="block mb-2">Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter weight in kg"
          />

          <label className="block mb-2">Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter height in cm"
          />

          <button
            onClick={calculateBMI}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Calculate BMI
          </button>

          {/* BMI Result */}
          {bmi && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Your BMI: {bmi}</h3>
              <p className="text-gray-700">Category: {category}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
