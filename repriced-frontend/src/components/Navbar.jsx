import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="p-4 bg-blue-500 text-center"></div>

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Repriced
        </h1>
        <div className="flex space-x-4 text-sm font-medium text-gray-600">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <a href="/agent" className="hover:text-black">
            For Agents
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
