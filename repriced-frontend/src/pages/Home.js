import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import Navbar from '../components/Navbar';
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
    <CategoryBar />
    <div className="max-w-7xl mx-auto px-4 py-10 border-t border-gray-200">
      <h1 className="text-1xl font-bold mb-6">Discover new listings</h1>
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