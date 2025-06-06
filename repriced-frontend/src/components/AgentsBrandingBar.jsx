import React from "react";

const AgentBrandBar = ({ brandColor = "#f5f5f5", logoUrl, realtorName }) => {
  return (
    <div
      className="sticky top-[106px] z-30 w-full flex justify-center items-center border-t border-b border-gray-200"
      style={{
        backgroundColor: brandColor,
        height: "48px",
      }}
    >
      <img
        src={logoUrl || "/logo/repriced-logo-symbol-2.svg"}
        alt={`${realtorName} logo`}
        className="h-8 object-contain"
      />
    </div>
  );
};

export default AgentBrandBar;
