import React, { useState } from "react";
import { FaHeart, FaEllipsisH } from "react-icons/fa";
import ImageWithPlaceholder from "./ImageWithPlaceholder";

const ListingCard = ({
  title,
  address,
  price,
  imageUrl,
  tag,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  realtor,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image Section */}
      <div className="relative">
        <ImageWithPlaceholder
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />

        {/* Tag */}
        {tag && (
          <span className="absolute top-2 left-2 bg-white text-gray-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {tag}
          </span>
        )}

        {/* Favorite Icon */}
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Add to favorites"
        >
          <FaHeart className="text-gray-500 stroke-white stroke-[40] text-lg" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-1">
        <div className="flex items-center">
          {/* Price */}
          {price !== undefined && (
            <p className="text-md font-bold text-gray-900">
              ${price.toLocaleString()}
            </p>
          )}

          {/* 3-dot menu */}
          <div className="relative ml-auto">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="More options"
            >
              <FaEllipsisH className="text-md text-repricedGreen" />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 z-10 bg-white border rounded shadow-md text-xs text-gray-700 w-36">
                <button
                  className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setShowMenu(false);
                  }}
                >
                  Copy Share Link
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Repriced Label */}
        <p className="text-xs text-gray-400">Repriced 3 days ago</p>

        {/* Address */}
        <p className="text-sm font-medium text-gray-700">
          {address}144 Mount Lot Rd, Bowen
        </p>

        {/* Property Details */}
        <p className="text-xs text-gray-500">
          {/* {bedrooms} bd | {bathrooms} ba | {carSpaces} car | {landSize}m² */}
          3 bd | 3 ba | 3 car | 800m²
        </p>

        {/* Realtor */}
        <p className="text-xs text-gray-400 uppercase">{realtor}CLR Realtor</p>
      </div>
    </div>
  );
};

export default ListingCard;
