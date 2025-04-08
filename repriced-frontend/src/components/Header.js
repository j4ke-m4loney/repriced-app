import { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Buy");

  return (
    <header className="w-full shadow-sm bg-white">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center px-4 py-2 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6">
          <img
            src="/images/home/Repriced LogosRepriced-logo-black&green.svg"
            alt="Repriced Logo"
            className="w-10 h-10 object-contain"
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
        <div className="flex items-center gap-2 text-sm text-gray-600 px-6">
          <span className="hidden md:inline">Login</span>
          <FaUserCircle className="text-xl" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center px-8 pb-4">
        <div className="flex w-full max-w-2xl bg-white shadow-lg rounded-full overflow-hidden border border-gray-250">
          
          {/* Input Field */}
          <input
            type="text"
            placeholder="Search suburbs, postcode or state..."
            className="flex-grow px-6 py-4 text-sm placeholder-gray-700 outline-none hover:bg-gray-200 cursor-pointer"
          />

          {/* Property Type */}
          <div className="group flex items-center hover:bg-gray-200 rounded-3xl transition-all duration-200">
          <select className="w-25 px-6 py-2 border-l group-hover:border-transparent text-sm text-gray-700 outline-none appearance-none bg-transparent cursor-pointer">
            <option>Property Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Land</option>
          </select>
          </div>

          {/* Price */}
          <div className="group flex items-center hover:bg-gray-200 rounded-3xl transition-all duration-200">
          <select className="w-20 px-6 py-2 border-l group-hover:border-transparent text-sm text-gray-700 outline-none appearance-none bg-transparent cursor-pointer">
            <option>Price</option>
            <option>$200k - $400k</option>
            <option>$400k - $600k</option>
            <option>$600k - $800k</option>
            <option>$800k - $1Mil</option>
          </select>
          </div>
          

          {/* Bedrooms */}
          <div className="group flex items-center hover:bg-gray-200 rounded-3xl transition-all duration-200">
          <select className="w-30 px-6 py-2 border-l group-hover:border-transparent text-sm text-gray-700 outline-none appearance-none bg-transparent cursor-pointer">
            <option>Bedrooms</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>
          </div>

          {/* Search Button */}
          <div className="flex justify-center items-center pr-4">
          <button className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
            <FaSearch className="text-sm" />
          </button>
          </div>
        </div>
      </div>
    </header>
  );
}
