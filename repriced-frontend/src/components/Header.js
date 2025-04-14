import React, { useState } from "react";
import HeaderNav from "./HeaderNav";
import DesktopSearchBar from "./DesktopSearchBar";
import MobileSearchBar from "./MobileSearchBar";
import CategoryBar from "./CategoryBar";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Buy");

  return (
    <header className="w-full bg-white">
      {/* Desktop view */}
      <div className="hidden md:block">
        <HeaderNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <DesktopSearchBar />
      </div>

      {/* Mobile view */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white md:hidden shadow-sm space-y-4">
          <MobileSearchBar />
          <CategoryBar />
      </div>
    </header>
  );
}
