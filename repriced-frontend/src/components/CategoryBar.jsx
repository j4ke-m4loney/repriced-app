import React from 'react';

const categories = [ // Array of category objects
  {
    label: "Just Repriced",
    icon: "/images/icons/just-repriced.webp",
  },
  {
    label: "New Value",
    icon: "/images/icons/new-value.webp",
  },
  {
    label: "Under Market Value",
    icon: "/images/icons/now-under-800.webp",
  },
  {
    label: "Renovators Dream",
    icon: "/images/icons/renovators-dream.png",
  },
  {
    label: "Biggest Drops",
    icon: "/images/icons/Biggest Drops-icon.png",
  },
  {
    label: "Fresh This Week",
    icon: "/images/icons/fresh-this-week.webp",
  },
  {
    label: "Back on Market",
    icon: "/images/icons/back-on-market.webp",
  },
  {
    label: "Motivated Seller",
    icon: "/images/icons/motivated-seller.webp",
  },
];

const CategoryBar = () => {
  return (
  <div className="bg-white py-0 overflow-x-auto whitespace-nowrap custom-scrollbar shadow-sm sticky top-[56px] z-30">
      <div className="flex w-max gap-4 px-4 pb-2 mx-auto sm:justify-center">
      {categories.map(({ label, icon }) => ( 
            <button
              key={label}
              className="group flex flex-col items-center px-4 py-0 text-xs text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <img
                src={icon}
                alt={`${label} icon`}
                className="w-6 h-6 mb-1 object-contain transition-transform duration-200 group-hover:scale-110 group-hover:brightness-110"
              />
              {label}
            </button>
          ))}
      </div>
    </div>
  );
};

export default CategoryBar;