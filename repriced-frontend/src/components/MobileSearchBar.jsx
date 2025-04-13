// MobileSearchBar.jsx
import React, { useState } from 'react';

const MobileSearchBar = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <div className="block md:hidden px-4 pb-4 pt-4">
      <div className="bg-white border rounded-full shadow-md px-4 py-3">
        <button
          className="w-full text-center text-gray-500 text-sm"
          onClick={() => setMobileSearchOpen(true)}
        >
          Start your search
        </button>
      </div>

      {mobileSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-4 space-y-4">
            <h2 className="text-center font-semibold text-gray-800">Search Filters</h2>

            <select className="w-full border px-3 py-2 text-sm text-gray-700">
              <option>Location</option>
              <option>Sydney</option>
              <option>Melbourne</option>
              <option>Brisbane</option>
            </select>

            <select className="w-full border px-3 py-2 text-sm text-gray-700">
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
            </select>

            <select className="w-full border px-3 py-2 text-sm text-gray-700">
              <option>Price</option>
              <option>$200k – $400k</option>
              <option>$400k – $600k</option>
            </select>

            <select className="w-full border px-3 py-2 text-sm text-gray-700">
              <option>Bedrooms</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>

            <div className="flex justify-between pt-2">
              <button
                className="text-sm text-gray-500"
                onClick={() => setMobileSearchOpen(false)}
              >
                Cancel
              </button>
              <button className="bg-green-500 text-white px-4 py-2 text-sm rounded-full">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSearchBar;
