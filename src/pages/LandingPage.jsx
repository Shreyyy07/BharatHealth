// src/pages/LandingPage.jsx
// import React from "react";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-700">Welcome to Healthcare App</h1>
      </div>
    </div>
  );
};

export default LandingPage;
