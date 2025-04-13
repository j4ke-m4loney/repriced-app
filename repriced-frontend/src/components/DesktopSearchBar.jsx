// DesktopSearchBar.jsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const DesktopSearchBar = () => {
  return (
    <div className="hidden md:flex justify-center px-8 pb-4">
      <div className="flex w-full max-w-2xl bg-white shadow-lg rounded-full overflow-hidden border border-gray-250">
        <input
          type="text"
          placeholder="Search suburbs, postcode or state..."
          className="search-input flex-grow px-6 py-4 text-sm placeholder-gray-700 outline-none hover:bg-gray-200 rounded-3xl cursor-pointer"
        />

        <div className="group flex items-center hover:bg-gray-200 rounded-3xl transition-all duration-200">
          <select className="property-type-input w-25 px-6 py-2 group-hover:border-transparent text-sm text-gray-700 outline-none appearance-none bg-transparent cursor-pointer">
            <option>Property Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Land</option>
          </select>
        </div>

        <div className="property-sep w-px h-8 bg-gray-200 self-center"></div>

        <div className="group flex items-center hover:bg-gray-200 rounded-3xl transition-all duration-200">
          <select className="w-20 px-6 py-2 text-sm text-gray-700 outline-none appearance-none bg-transparent cursor-pointer">
            <option>Price</option>
            <option>$200k - $400k</option>
            <option>$400k - $600k</option>
            <option>$600k - $800k</option>
            <option>$800k - $1Mil</option>
          </select>
        </div>

        <div className="price-sep w-px h-8 bg-gray-200 self-center"></div>

        <div className="group flex items-center hover:bg-gray-200 rounded-3xl transition-all duration-200">
          <select className="w-30 px-6 py-2 group-hover:border-transparent text-sm text-gray-700 outline-none appearance-none bg-transparent cursor-pointer">
            <option>Bedrooms</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>
        </div>

        <div className="flex justify-center items-center pr-4">
          <button className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
            <FaSearch className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopSearchBar;