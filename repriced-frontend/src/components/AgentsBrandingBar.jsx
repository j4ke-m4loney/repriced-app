import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const AgentsBrandBar = ({ brandColor = "#f5f5f5", logoUrl, realtorName }) => {
  const barRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const bar = barRef.current; // Cache the ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px",
      }
    );

    if (bar) {
      observer.observe(bar);
    }

    return () => {
      if (bar) {
        observer.unobserve(bar);
      }
    };
  }, []);

  return (
    <>
      {/* Element to track scroll position */}
      <div ref={barRef} className="h-0"></div>

      <div
        className={`w-full flex justify-center items-center border-t border-b border-gray-200 transition-all duration-200 z-40 ${
          isSticky ? "md:fixed md:top-0" : "relative"
        }`}
        style={{ backgroundColor: brandColor, height: "48px" }}
      >
        {/* Back button (only on mobile) */}
        <button
          onClick={() => window.history.back()}
          className="block md:hidden ml-4"
          aria-label="Go back"
        >
          {/* Simple left arrow SVG */}
          <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex-1 flex justify-center pr-10 md:pr-0">
          <img
            src={logoUrl || "/logo/repriced-logo-symbol-2.svg"}
            alt={`${realtorName} logo`}
            className="h-8 object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default AgentsBrandBar;
