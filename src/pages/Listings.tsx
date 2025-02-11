import { Link } from "react-router-dom";

const mockProperties = [
  { id: "1", title: "3-Bedroom House in Sydney", price: "$850,000" },
  { id: "2", title: "Luxury Apartment in Melbourne", price: "$620,000" },
  { id: "3", title: "Townhouse in Brisbane", price: "$480,000" },
];

const Listings = () => {
  return (
    <div>
      <h1>Property Listings</h1>
      <ul>
        {mockProperties.map((property) => (
          <li key={property.id}>
            <Link to={`/property/${property.id}`}>
              <h3>{property.title}</h3>
              <p>Price: {property.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;