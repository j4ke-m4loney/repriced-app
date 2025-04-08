import React from 'react';

const categories = [
  "Just Repriced",
  "Now Under $800K",
  "Biggest Drops",
  "Fresh This Week",
  "New Value",
];

const CategoryBar = () => {
  return (
    <div className="bg-white py-0 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div className="flex justify-center gap-4 px-4 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 text-sm bg-gray-100 rounded-full hover:bg-gray-200 whitespace-nowrap"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;