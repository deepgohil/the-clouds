import React, { useState } from 'react';

export default function Component() {
  const [isViewingCard, setIsViewingCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  
  const cards = [
    {
      name: 'Deep',
      imageSrc: 'https://audiodeepfile.s3.ap-south-1.amazonaws.com/exploring.jpg',
      username: 'deepUser',
      phoneNumber: '123-456-7890',
      location: 'New York, NY',
      owner: 'Deep Owner',
    },
    // Add other cards as necessary...
  ];

  const handleViewClick = (card) => {
    setSelectedCard(card);
    setIsViewingCard(true);
  };

  return (
    <div>
      {isViewingCard && selectedCard && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
          <div className="bg-[#0F0F0F] border border-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto">
            <img
              alt={selectedCard.name}
              src={selectedCard.imageSrc}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h2 className="text-3xl font-bold text-white">{selectedCard.name}</h2>
              <p className="text-white">Username: {selectedCard.username}</p>
              <p className="text-white">Phone: {selectedCard.phoneNumber}</p>
              <p className="text-white">Location: {selectedCard.location}</p>
              <p className="text-white">Owner: {selectedCard.owner}</p>
              <button
                onClick={() => setIsViewingCard(false)}
                className="mt-4 px-4 py-2 text-lg font-medium text-black bg-white border border-black rounded hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {cards.map((card, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md bg-[#0F0F0F] border border-white">
            <div className="p-4">
              <img
                alt={card.name}
                src={card.imageSrc}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold leading-none text-white">{card.name}</h3>
            </div>
            <div className="p-4 flex justify-end">
              <button
                onClick={() => handleViewClick(card)}
                className="px-4 py-2 text-sm font-medium text-black bg-white border border-black rounded hover:bg-gray-200 focus:outline-none"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
