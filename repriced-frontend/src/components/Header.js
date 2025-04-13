import React, { useState } from "react";
import HeaderNav from "./HeaderNav";
import DesktopSearchBar from "./DesktopSearchBar";
import MobileSearchBar from "./MobileSearchBar";
import { FaSearch, FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Buy");

  return (
    <header className="w-full shadow-sm bg-white">
      {/* Desktop view */}
      <div className="hidden md:block">
        <HeaderNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <DesktopSearchBar />
      </div>

      {/* Mobile view */}
      <MobileSearchBar />
    </header>
  );
}
