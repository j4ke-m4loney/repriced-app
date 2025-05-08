import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return [
    <footer className="bg-gray-100 text-gray-600 mt-12 border-t">
      <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Logo + tagline */}
        <div>
          <img
            src="/logo/repriced-logo-2.svg"
            alt="Repriced"
            className="w-24 mb-3"
          />
          <p className="text-sm">
            Helping you discover repriced property deals across Australia and New Zealand.
          </p>
        </div>

        {/* Middle: Navigation links */}
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/buy" className="hover:text-black transition">
            Buy
          </Link>
          <Link to="/rent" className="hover:text-black transition">
            Rent
          </Link>
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <Link to="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </div>

        {/* Right: Social or copyright */}
        <div className="text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Repriced</p>
          <p>All rights reserved.</p>
        </div>
        <div className="flex text-xs">
          <p>
          © {new Date().getFullYear()} Repriced
          </p>
        </div>
      </div>
    </footer>,
  ];
};

export default Footer;
