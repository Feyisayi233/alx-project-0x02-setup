import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const initialCards = [
  { title: "Card 1", content: "This is the content of Card 1." },
  { title: "Card 2", content: "This is the content of Card 2." },
  { title: "Card 3", content: "This is the content of Card 3." },
];

const HomePage = () => {
  const [cards, setCards] = useState(initialCards);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (data: { title: string; content: string }) => {
    setCards((prev) => [...prev, data]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add New Card
      </button>
      {cards.map((card, idx) => (
        <Card key={idx} title={card.title} content={card.content} />
      ))}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
      />
    </div>
  );
};

export default HomePage;
