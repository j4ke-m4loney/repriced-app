import React from "react";
import { FaUserCircle } from "react-icons/fa";

const HeaderNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 max-w-screen-xl mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6">
        <img
          src="/images/home/Repriced LogosRepriced-logo-black&green.svg"
          alt="Repriced Logo"
          className="w-24 h-12 object-contain"
        />
      </div>

      {/* Buy / Rent Tabs */}
      <div className="hidden md:flex gap-6 font-medium text-gray-700">
        <button
          onClick={() => setActiveTab("Buy")}
          className={activeTab === "Buy" ? "text-black font-bold" : ""}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab("Rent")}
          className={activeTab === "Rent" ? "text-black font-bold" : ""}
        >
          Rent
        </button>
      </div>

      {/* Login / User Icon */}
      <div className="flex items-center gap-2 text-sm text-gray-600 px-6">
        <span className="hidden md:inline">Login</span>
        <FaUserCircle className="text-xl" />
      </div>
    </div>
  );
};

export default HeaderNav;