import React from "react";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const CondensedSearchBar = ({ onOpenFullSearch }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 px-4 py-3 hidden md:flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            src="/logo/repriced-logo-2.svg"
            alt="Repriced Logo"
            className="hidden xl:block w-[120px] h-auto object-contain"
          />
        </Link>
        <Link to="/">
          <img
            src="/logo/repriced-logo-symbol-2.svg"
            alt="Repriced Symbol Logo"
            className="block xl:hidden w-8 h-8 object-contain"
          />
        </Link>
      </div>

      {/* Center - Search Condensed UI */}
      <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-inner overflow-hidden">
        <button
          onClick={onOpenFullSearch}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
        >
          Location
        </button>
        <div className="w-px h-6 bg-gray-300"></div>
        <button
          onClick={onOpenFullSearch}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
        >
          Type
        </button>
        <div className="w-px h-6 bg-gray-300"></div>
        <button
          onClick={onOpenFullSearch}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
        >
          Price
        </button>
        <button
          onClick={onOpenFullSearch}
          className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 flex items-center justify-center rounded-full"
        >
          <FaSearch className="text-sm" />
        </button>
      </div>

      {/* Right - Login */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="hidden md:inline">Login</span>
        <FaUserCircle className="text-xl" />
      </div>
    </div>
  );
};

export default CondensedSearchBar;
