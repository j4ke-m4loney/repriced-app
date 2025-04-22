import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import ListingCard from "../components/ListingCard";
import CategoryBar from "../components/CategoryBar";
import { Link } from "react-router-dom";

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/listings?type=rent`
        );

        setListings(res.data);
        console.log("DATA RECEIVED:", res.data);
      } catch (err) {
        console.error("Failed to fetch listings:", err);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
      <Header />
      <div className="mx-auto px-2 sm:px-4 lg:px-6 sxl:px-12 xl:px-6 xlx:px-16 xxl:px-20 py-6 border-t-0 md:border-t md:border-gray-200 pt-[160px] md:pt-6">
        <div className="hidden md:block">
          <CategoryBar />
        </div>
        <h1 className="pt-6 text-1x1 font-bold mb-6 text-center text-gray-500">
          Discover the best deals in real estate
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xlx:grid-cols-5 xxl:grid-cols-6 gap-4">
          {listings.map((listing) => (
            <Link to={`/property/${listing._id}`} key={listing._id}>
              <ListingCard {...listing} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
