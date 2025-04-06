import React from 'react';

const ListingCard = ({ listing }) => {
  const { title, address, price, originalPrice, imageUrl, tag } = listing;

  const priceFormatted = `$${price.toLocaleString()}`;
  const originalPriceFormatted = `$${originalPrice.toLocaleString()}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{address}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold text-black">{priceFormatted}</span>
          {originalPrice > price && (
            <span className="line-through text-gray-400 text-sm">{originalPriceFormatted}</span>
          )}
        </div>
        {tag && (
          <span className="inline-block mt-3 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>
    </div>
  );
};

export default ListingCard;