import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from '../components/Footer'

// This component fetches and displays the details of a property listing
const Property = () => {
  const { id } = useParams();
  console.log("Property ID:", id);
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
      <div className="pt-[60px] max-w-5xl mx-auto px-4 space-y-6">
        <div className="hidden md:flex gap-2 rounded-xl overflow-hidden">
          {/* Large Image */}
          <div className="w-2/3">
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* 2x2 Grid of Small Images */}
          <div className="w-1/3 grid grid-cols-2 grid-rows-2 gap-2">
            {Array(4) // 4 small images
              .fill(null) // Placeholder for 4 images
              .map((_, i) => ( // Replace with actual image URLs
                <img 
                  key={i} 
                  src={listing.imageUrl} 
                  alt={`Image ${i + 1}`}
                  className="w-full h-[245px] object-cover" 
                />
              ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{listing.title}</h1> 
          <p className="text-gray-600 text-sm">{listing.address}</p>
        </div>
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
        <div
            className=" text-gray-400"
            style={{
              
              transition: "transform 0.2s",
            }}
          >
            [ Map Placeholder ]
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Property;
