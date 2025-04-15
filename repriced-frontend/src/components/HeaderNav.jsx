import React from "react";
import { FaUserCircle } from "react-icons/fa";

const HeaderNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full px-4 pt-4">
      {/* Full-width container with relative positioning */}
      <div className="relative flex items-center justify-between w-full">
        
      <div className="flex items-center pl-2 md:pl-6"> 
        {/* Full Logo */}
        <div className="flex items-center pl-2 md:pl-8">
          <img
            src="/logo/repriced-logo-2.svg"
            alt="Repriced Logo"
            className="hidden xl:block w-[120px] h-auto object-contain"
          />
        </div>

          {/* Symbol Logo - show below xl */}
        <img
          src="/logo/repriced-logo-symbol-2.svg"
          alt="Repriced Symbol Logo"
          className="block xl:hidden w-8 h-8 object-contain"
        />
      </div>

        {/* Center - Buy / Rent Tabs (absolutely centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6 font-medium text-gray-700">
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

        {/* Right - Login */}
        <div className="flex items-center gap-2 text-sm text-gray-600 pr-2 md:pr-8">
          <span className="hidden md:inline">Login</span>
          <FaUserCircle className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;