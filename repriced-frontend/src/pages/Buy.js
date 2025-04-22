import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ListingCard from "../components/ListingCard";
import Header from "../components/Header";

const Buy = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/listings`
        );
        setListings(res.data);
      } catch (err) {
        console.error("Failed to fetch listings:", err);
      }
    };

    fetchListings();
  }, []);

  const mapRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleWheel = (e) => {
      if (mapRef.current && mapRef.current.contains(e.target)) {
        e.preventDefault(); // stop page scroll

        setZoomLevel((prevZoom) => {
          const delta = e.deltaY > 0 ? -0.1 : 0.1;
          return Math.max(1, Math.min(prevZoom + delta, 2)); // clamp between 1–2
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row pt-[160px] md:pt-0">
        {/* Mobile Map - Top */}
        <div className="block md:hidden w-full h-48 bg-gray-100 mb-4">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            [ Map Placeholder ]
          </div>
        </div>

        {/* Listings Section */}
        <div className="w-full md:w-[60%] md:h-[calc(100vh-160px)] overflow-y-auto p-4">
          <h2 className="text-xl font-semibold mb-4">Properties for Sale</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {listings.map((listing) => (
              <ListingCard key={listing._id} {...listing} />
            ))}
          </div>
        </div>

        {/* Desktop Map - Right */}
        <div
          ref={mapRef}
          className="hidden md:block w-[40%] fixed right-0 top-[160px] h-[calc(100vh-160px)] bg-gray-100 z-10"
        >
          <div
            className="w-full h-full flex items-center justify-center text-gray-400"
            style={{
              transform: `scale(${zoomLevel})`,
              transition: "transform 0.2s",
            }}
          >
            [ Map Placeholder ]
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;
