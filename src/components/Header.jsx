// src/components/Header.jsx
// import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="text-xl font-bold">Healthcare App</div>
      <button
        className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover:bg-gray-100"
        onClick={() => navigate("/signin")}
      >
        Sign In
      </button>
    </header>
  );
};

export default Header;
