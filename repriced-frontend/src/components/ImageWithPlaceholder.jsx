import React, { useState } from "react";

const ImageWithPlaceholder = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-[300px] bg-gray-100 flex items-center justify-center">
      {!loaded && (
        <span className="absolute text-sm text-gray-500">
          Listing image loading...
        </span>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`} // merges parent classes
      />
    </div>
  );
};

export default ImageWithPlaceholder;
