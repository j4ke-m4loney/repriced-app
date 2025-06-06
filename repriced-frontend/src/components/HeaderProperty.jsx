import React from "react";
import HeaderNav from "./HeaderNav";
import DesktopSearchBar from "./DesktopSearchBar";
import MobileSearchBar from "./MobileSearchBar";
import CategoryBar from "./CategoryBar";
import AgentBrandBar from "./AgentsBrandingBar";

export default function HeaderProperty({ brandColor, logoUrl, realtorName }) {
  return (
    <header className="w-full bg-white z-10">
      {/* Desktop View */}
      <div className="hidden md:block">
        <HeaderNav activeTab="Buy" setActiveTab={() => {}} />
        <DesktopSearchBar />
        <AgentBrandBar
          brandColor={brandColor}
          logoUrl={logoUrl}
          realtorName={realtorName}
        />
      </div>

      {/* Mobile View */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white md:hidden shadow-sm space-y-4">
        <MobileSearchBar />
        <CategoryBar />
      </div>
    </header>
  );
}
