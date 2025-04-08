import { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Buy");

  return (
    <header className="w-full shadow-sm bg-white">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center px-4 py-2 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/home/Repriced LogosRepriced-logo-black&green.svg"
            alt="Repriced Logo"
            className="w-16 h-16 object-contain"
          />
          {/* Optional brand text */}
          {/* <span className="text-lg font-semibold text-green-600">Repriced</span> */}
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
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="hidden md:inline">Login</span>
          <FaUserCircle className="text-xl" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center px-4 pb-4">
        <div className="flex w-full max-w-4xl bg-white shadow-md rounded-full overflow-hidden border">
          <input
            type="text"
            placeholder="Search suburbs, postcode or state"
            className="flex-1 px-4 py-2 text-sm outline-none"
          />
          <select className="px-4 py-2 border-l text-sm text-gray-700 outline-none">
            <option>Property Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Land</option>
          </select>
          <select className="px-4 py-2 border-l text-sm text-gray-700 outline-none">
            <option>Price</option>
            <option>$200k - $400k</option>
            <option>$400k - $600k</option>
            <option>$600k - $800k</option>
            <option>$800k - $1Mil</option>
          </select>
          <button className="bg-green-500 hover:bg-green-600 text-white p-3 flex items-center justify-center">
            <FaSearch className="text-sm" />
          </button>
        </div>
      </div>
    </header>
  );
}
