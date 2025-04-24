import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';


// This component fetches and displays the details of a property listing
const Property = () => {
  const { id } = useParams();
  console.log("Property ID:", id);
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/listings/${id}`);
        setListing(res.data);
      } catch (err) {
        console.error('Failed to fetch property:', err);
      }
    };

    fetchListing();
  }, [id]);

  if (!listing) return <div className="p-6 text-center">Loading...</div>;

  return (
    <>
      <Header />
      <div className="pt-[60px] max-w-5xl mx-auto px-4 space-y-6">
        <div className='grid grid-cols-2 gap-1'>
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="w-full h-70 object-cover rounded-xl"
        />
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="w-full h-70 object-cover rounded-xl"
        />
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
      </div>
    </>
  );
};

export default Property;