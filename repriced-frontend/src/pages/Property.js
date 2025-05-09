import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <Header />
      <div className="pt-[60px] max-w-7xl mx-auto px-4 space-y-6">
        {/* Image Section */}
        <div className="hidden md:flex gap-2 rounded-xl overflow-hidden">
          <div className="w-2/3">
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="w-1/3 grid grid-cols-2 grid-rows-2 gap-2">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <img
                  key={i}
                  src={listing.imageUrl}
                  alt={`Image ${i + 1}`}
                  className="w-full h-[245px] object-cover"
                />
              ))}
          </div>
        </div>

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
            <div className="text-gray-400">[ Map Placeholder ]</div>
          </div>

          {/* Agent Sidebar */}
          <div className="hidden md:block sticky top-[100px] self-start bg-gray-50 p-4 rounded-xl shadow-sm h-fit">
            <h3 className="text-lg font-semibold mb-2">Agent Information</h3>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Company:</strong> {listing.realtor}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Phone:</strong> 0412 345 678
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Email:</strong>{" "}
              agent@{listing.realtor?.toLowerCase().replace(/\s/g, "")}.com
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-sm w-full">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Property;
