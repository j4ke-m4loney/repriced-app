import React from "react";

const AgentBrandBar = ({ brandColor = "#f5f5f5", logoUrl, realtorName }) => {
  return (
    <div
      className="sticky top-[60px] z-40 w-full py-4 flex justify-center items-center"
      style={{ backgroundColor: brandColor }}
    >
      <img
        src={logoUrl || "/logo/repriced-logo-symbol-2.svg"}
        alt={`${realtorName} logo`}
        className="h-12 md:h-16 object-contain"
      />
    </div>
  );
};

export default AgentBrandBar;
