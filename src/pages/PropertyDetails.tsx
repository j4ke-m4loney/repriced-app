import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Mock property data (replace later with API call)
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

  const [userVoted, setUserVoted] = useState<string | null>(null);

  // Check localStorage for previous votes
  useEffect(() => {
    const storedVote = localStorage.getItem(`vote-${id}`);
    if (storedVote) {
      setUserVoted(storedVote);
    }

    fetchVerificationData();
  }, [id]);

  // Fetch verification data from the backend
  const fetchVerificationData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/verification/${id}`);
      const data = await response.json();
      if (data.message !== "No verification data found") {
        setVerification(data);
      }
    } catch (err) {
      console.error("Error fetching verification data:", err);
    }
  };

  // Handle vote submission
  const handleVote = async (voteType: string) => {
    if (userVoted) return; // Prevent multiple votes

    try {
      await fetch("http://localhost:5000/api/verification/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ propertyId: id, voteType }),
      });

      // Store vote in localStorage to prevent multiple votes
      localStorage.setItem(`vote-${id}`, voteType);
      setUserVoted(voteType);

      // Fetch latest data from backend to update the UI
      fetchVerificationData();
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

      {userVoted ? (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✅ You have already voted: {userVoted.replace("seenBefore", "Confirmed Price Drop").replace("flagged", "Flagged as Duplicate").replace("neutral", "Neutral Vote")}
        </p>
      ) : (
        <>
          <button onClick={() => handleVote("seenBefore")}>
            ✅ I Have Seen This Property Listed Before at a Higher Price ({verification.seenBeforeCount})
          </button>

          <button onClick={() => handleVote("flagged")}>
            ⚠️ I Have Seen This Property Listed Elsewhere for the Same or Lower Price ({verification.flaggedCount})
          </button>

          <button onClick={() => handleVote("neutral")}>
            🆕 I Don’t Know If This Property Was Listed Before ({verification.neutralCount})
          </button>
        </>
      )}

      {verification.flaggedCount >= 5 && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          ⚠️ This property has been flagged multiple times and may be reviewed for rule violations.
        </p>
      )}
    </div>
  );
};

export default PropertyDetails;