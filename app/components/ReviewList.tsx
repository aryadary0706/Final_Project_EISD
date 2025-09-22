"use client";

import { useState } from "react";

type Review = {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
};

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Rina",
    rating: 5,
    text: "Pelayanan cepat dan terorganisir. Sangat membantu.",
    date: "17 Agustus | 19:07",
  },
  {
    id: 2,
    name: "Melati",
    rating: 4,
    text: "IGD buka 24 jam dan respons cepat, tapi parkir penuh saat sibuk.",
    date: "17 Agustus | 18:07",
  },
  {
    id: 3,
    name: "Ahmad",
    rating: 4,
    text: "Secara keseluruhan puas, antrean online lebih efisien.",
    date: "17 Agustus | 19:07",
  },
];

export default function ReviewList() {
  const [reviews, setReviews] = useState(initialReviews);
  const [input, setInput] = useState("");

  const handleAddReview = () => {
    if (!input.trim()) return;
    const newReview: Review = {
      id: reviews.length + 1,
      name: "Anonim",
      rating: 5,
      text: input,
      date: new Date().toLocaleString(),
    };
    setReviews([newReview, ...reviews]);
    setInput("");
  };

  return (
    <div className="border rounded-xl p-4 bg-white flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4">Ulasan Pasien</h2>

      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">{review.name}</span>
              <span className="text-yellow-500 text-xs">⭐ {review.rating}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{review.text}</p>
            <span className="text-xs text-gray-400">{review.date}</span>
          </div>
        ))}
      </div>

      {/* Input Review */}
      <div className="flex flex-row gap-2 pt-3">
        <input
          type="text"
          placeholder="Apa pendapatmu?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          onClick={handleAddReview}
          className="px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
