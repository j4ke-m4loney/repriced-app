import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Mock data for property listings (Replace with API call later)
const mockProperties = [
  { id: "1", title: "3-Bedroom House in Sydney", price: "$850,000", description: "A spacious home in a great neighborhood." },
  { id: "2", title: "Luxury Apartment in Melbourne", price: "$620,000", description: "Modern apartment with amazing city views." },
  { id: "3", title: "Townhouse in Brisbane", price: "$480,000", description: "Affordable townhouse in a quiet area." },
];

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = mockProperties.find((prop) => prop.id === id);

  const [verification, setVerification] = useState({
    seenBeforeCount: 0,
    flaggedCount: 0,
    neutralCount: 0,
  });

  // Fetch verification data from the backend
  useEffect(() => {
    fetch(`http://localhost:5000/api/verification/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message !== "No verification data found") {
          setVerification(data);
        }
      })
      .catch((err) => console.error("Error fetching verification data:", err));
  }, [id]);

  // Handle vote submission to backend
  const handleVote = async (voteType: string) => {
    try {
      await fetch("http://localhost:5000/api/verification/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ propertyId: id, voteType }),
      });

      // Update state immediately to reflect the vote
      setVerification((prev) => ({
        ...prev,
        [voteType === "seenBefore"
          ? "seenBeforeCount"
          : voteType === "flagged"
            ? "flaggedCount"
            : "neutralCount"]: prev[
            voteType === "seenBefore"
              ? "seenBeforeCount"
              : voteType === "flagged"
                ? "flaggedCount"
                : "neutralCount"
            ] + 1,
      }));
    } catch (error) {
      console.error("Error submitting vote:", error);
    }
  };

  // Handle case where property ID is invalid
  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div>
      <h1>{property.title}</h1>
      <p>Price: {property.price}</p>
      <p>{property.description}</p>

      <h3>Community Verification</h3>
      <p>Help ensure this listing meets Repriced.com.au's requirements.</p>

      <button onClick={() => handleVote("seenBefore")}>
        ✅ I Have Seen This Property Listed Before at a Higher Price ({verification.seenBeforeCount})
      </button>

      <button onClick={() => handleVote("flagged")}>
        ⚠️ I Have Seen This Property Listed Elsewhere for the Same or Lower Price ({verification.flaggedCount})
      </button>

      <button onClick={() => handleVote("neutral")}>
        🆕 I Don’t Know If This Property Was Listed Before ({verification.neutralCount})
      </button>

      {verification.flaggedCount >= 5 && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          ⚠️ This property has been flagged multiple times and may be reviewed for rule violations.
        </p>
      )}
    </div>
  );
};

export default PropertyDetails;