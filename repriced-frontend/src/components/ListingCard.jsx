import React from "react";

const ListingCard = ({ title, address, price, originalPrice, imageUrl, tag }) => {
  const hasDiscount = originalPrice && originalPrice > price;

  console.log(ListingCard)

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      
      {/* Image with zoom */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Tag Badge */}
        {tag && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {tag}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-1">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <p className="text-xs text-gray-500">{address}</p>

        {/* Price Display */}
        <div className="mt-2 flex items-baseline space-x-2">
            {price !== undefined && (
              <p className="text-md font-bold text-gray-900">
                ${price.toLocaleString()}
              </p>
            )}
            {originalPrice !== undefined && originalPrice > price && (
              <p className="text-sm text-gray-400 line-through">
                ${originalPrice.toLocaleString()}
              </p>
            )}
          </div>
      </div>
    </div>
  );
};

export default ListingCard;