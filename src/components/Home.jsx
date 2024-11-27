import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-green-800 mb-4 text-center">
        Welcome to Our Medical Certificate Generator
      </h1>
      <Link to="/form">
        <button className="px-6 py-3 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition">
          Open Form
        </button>
      </Link>
    </div>
  );
};

export default Home;