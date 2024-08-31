import React from 'react';

function Offers() {
  const offers = [
    {
      id: 1,
      title: "Summer Special Discount",
      description: "Get 20% off on all movies this summer. Use code SUMMER20 at checkout.",
      validity: "Valid until September 30, 2024",
      terms: "Terms and conditions apply. Offer valid on selected movies only."
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free",
      description: "Buy one ticket and get the second ticket free on weekdays.",
      validity: "Valid until December 31, 2024",
      terms: "Offer applicable on Monday to Thursday only. Subject to availability."
    },
    {
      id: 3,
      title: "Student Discount",
      description: "Students enjoy a 15% discount on tickets. Present your student ID at the counter.",
      validity: "Valid all year round",
      terms: "Valid student ID required. Cannot be combined with other offers."
    },
  ];

  return (
    <div className="offers-page">
      <h1>Special Offers</h1>
      <p>Take advantage of our special offers and save on your next movie experience!</p>

      <div className="offers-list">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <h2>{offer.title}</h2>
            <p>{offer.description}</p>
            <p><strong>Validity:</strong> {offer.validity}</p>
            <p><strong>Terms & Conditions:</strong> {offer.terms}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Offers;
