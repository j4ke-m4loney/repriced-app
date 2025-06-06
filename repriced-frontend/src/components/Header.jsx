import React, { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import DesktopSearchBar from "./DesktopSearchBar";
import MobileSearchBar from "./MobileSearchBar";
import CategoryBar from "./CategoryBar";
import CondensedSearchBar from "./CondensedSearchBar";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFullSearch, setShowFullSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-white">
      {/* Desktop View */}
      <div className="hidden md:block">
        <HeaderNav activeTab={activeTab} setActiveTab={setActiveTab} />
        {!isScrolled || showFullSearch ? (
          <DesktopSearchBar />
        ) : (
          <CondensedSearchBar
            onOpenFullSearch={() => setShowFullSearch(true)}
          />
        )}
      </div>

      {/* Mobile View */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white md:hidden shadow-sm space-y-4">
        <MobileSearchBar />
        <CategoryBar />
      </div>
    </header>
  );
}
