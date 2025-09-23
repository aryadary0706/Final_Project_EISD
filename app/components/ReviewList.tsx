"use client";

import { useState } from "react";
import { ThumbsUp } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"; // ✅ pakai shadcn

type Review = {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  likes: number;
};

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Rina",
    rating: 5,
    text: "Pelayanan cepat dan terorganisir. Sangat membantu.",
    date: "17 Agustus | 19:07",
    likes: 0,
  },
  {
    id: 2,
    name: "Melati",
    rating: 4,
    text: "IGD buka 24 jam dan respons cepat, tapi parkir penuh saat sibuk.",
    date: "17 Agustus | 18:07",
    likes: 0,
  },
  {
    id: 3,
    name: "Ahmad",
    rating: 4,
    text: "Secara keseluruhan puas, antrean online lebih efisien.",
    date: "17 Agustus | 19:07",
    likes: 0,
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
      likes: 0,
    };
    setReviews([newReview, ...reviews]);
    setInput("");
  };

  const handleLike = (id: number) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, likes: review.likes + 1 } : review
      )
    );
  };

  return (
    <div className="border px-6 py-6 bg-white flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4">Ulasan Pasien</h2>

      {/* ✅ ScrollArea dari shadcn */}
      <ScrollArea className="flex-1 h-[300px] pr-2">
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{review.name}</span>
                <span className="text-yellow-500 text-xs">⭐ {review.rating}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{review.text}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-gray-400">{review.date}</span>
                <button
                  onClick={() => handleLike(review.id)}
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-500"
                >
                  <ThumbsUp size={14} /> {review.likes}
                </button>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      {/* Input Review */}
      <div className="flex flex-row gap-2 mt-3">
        <input
          type="text"
          placeholder="Tuliskan Ulasanmu!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          onClick={handleAddReview}
          className="px-3 py-2 bg-gray-400 text-white rounded-lg text-sm hover:bg-blue-300"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
