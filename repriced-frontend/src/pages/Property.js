import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeaderProperty from "../components/HeaderProperty";
import Footer from "../components/Footer";
import MobileImageSwiper from "../components/property/MobileImageSwiper";
import DesktopImageGrid from "../components/property/DesktopImageGrid";
import AgentSidebar from "../components/property/AgentSidebar";

const Property = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/listings/${id}`
        );
        setListing(res.data);
      } catch (err) {
        console.error("Failed to fetch property:", err);
      }
    };

    fetchListing();
  }, [id]);

  if (!listing) return <div className="p-6 text-center">Loading...</div>;

  return (
    <>
      <HeaderProperty />

      {/* Image Section – Mobile */}
      <div className="block md:hidden mt-[150px]">
        <MobileImageSwiper imageUrl={listing.imageUrl} title={listing.title} />
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-6">
        {/* Image Section */}
        {/* Image Section – Desktop */}
        <DesktopImageGrid imageUrl={listing.imageUrl} title={listing.title} />

        <div className="block md:hidden h-[150px]"></div>

        {/* Grid Layout: Content + Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-2xl font-bold">{listing.title}</h1>
            <p className="text-gray-600 text-sm">{listing.address}</p>
            <div className="text-xl font-semibold text-green-600">
              ${listing.price.toLocaleString()}
              {listing.originalPrice > listing.price && (
                <span className="text-sm text-gray-400 line-through ml-3">
                  ${listing.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="text-sm text-gray-500">{listing.description}</div>
            <div className="text-xs text-gray-400 uppercase">
              Listed by {listing.realtor}
            </div>
            <div className="text-gray-400">
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg text-gray-500 text-lg">
                Map Placeholder
              </div>
            </div>
          </div>

          {/* Agent Sidebar */}
          <AgentSidebar realtor={listing.realtor} />

          <div className="md:col-span-2 text-sm text-gray-500 ">
            <p>{listing.descriptionLong} Long listing Description</p>
          </div>
        </div>

        <div>{/* Category Icons */}</div>

        {/*
          Create Property Valuation details
          Create Agent Details scrolling feature
          Create Map */}
      </div>
      <Footer />
    </>
  );
};

export default Property;
