import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import CategoryBar from '../components/CategoryBar';

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/listings');
        setListings(res.data);
      } catch (err) {
        console.error('Failed to fetch listings:', err);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
    <Header />
    <div className="max-w-7xl mx-auto px-4 py-6 border-t border-gray-200">
    <CategoryBar/>
      <h1 className="pt-6 text-1xl font-bold mb-6 text-center text-gray-500">New Listing Deals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </div>
  </>
  );
};

export default Home;