import { useEffect, useState } from "react";

type FlaggedProperty = {
  _id: string;
  propertyId: string;
  seenBeforeCount: number;
  flaggedCount: number;
  neutralCount: number;
  status: string;
};

const Moderation = () => {
  const [flaggedListings, setFlaggedListings] = useState<FlaggedProperty[]>([]);

  // Fetch flagged properties
  useEffect(() => {
    fetch("http://localhost:5000/api/reports")
      .then((res) => res.json())
      .then((data) => setFlaggedListings(data))
      .catch((err) => console.error("Error fetching flagged listings:", err));
  }, []);

  // Mark listing as verified
  const markAsVerified = async (propertyId: string) => {
    await fetch(`http://localhost:5000/api/reports/verify/${propertyId}`, { method: "PUT" });
    setFlaggedListings((prev) => prev.filter((prop) => prop.propertyId !== propertyId));
  };

  // Remove flagged listing
  const removeListing = async (propertyId: string) => {
    await fetch(`http://localhost:5000/api/reports/remove/${propertyId}`, { method: "DELETE" });
    setFlaggedListings((prev) => prev.filter((prop) => prop.propertyId !== propertyId));
  };

  return (
    <div>
      <h1>Moderation Panel</h1>
      {flaggedListings.length === 0 ? (
        <p>No flagged listings pending review.</p>
      ) : (
        <ul>
          {flaggedListings.map((property) => (
            <li key={property._id}>
              <h3>Property ID: {property.propertyId}</h3>
              <p>✅ Confirmed: {property.seenBeforeCount} | ⚠️ Flagged: {property.flaggedCount} | 🆕 Neutral: {property.neutralCount}</p>
              <button onClick={() => markAsVerified(property.propertyId)}>✅ Mark as Verified</button>
              <button onClick={() => removeListing(property.propertyId)}>❌ Remove Listing</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Moderation;