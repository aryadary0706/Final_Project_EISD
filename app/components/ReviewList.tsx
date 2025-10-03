"use client";

import { useState } from "react";
import { Heart, Star, EllipsisVertical, SendHorizontal  } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from "@/components/ui/button";

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
    rating: 5.0,
    text: "Pelayanan cepat dan terorganisir. Saya tidak perlu menunggu lama di ruang tunggu karena antrian sudah bisa daftar lewat aplikasi. Sangat membantu.",
    date: "17 Agustus | 19:07",
    likes: 0,
  },
  {
    id: 2,
    name: "Melati",
    rating: 4.0,
    text: "IGD buka 24 jam dan respon perawatnya sigap sekali. Hanya saja area parkir agak penuh di jam sibuk.",
    date: "17 Agustus | 18:07",
    likes: 0,
  },
  {
    id: 3,
    name: "Ahmad",
    rating: 4.0,
    text: "Secara keseluruhan puas, apalagi dengan adanya sistem antrian online jadi lebih efisien. Mungkin bisa ditambah mesin pembayaran otomatis agar lebih praktis",
    date: "17 Agustus | 19:07",
    likes: 0,
  },
  {
    id: 4,
    name: "Yanto",
    rating: 4.7,
    text: "nak saya dirawat di ruang anak, suasananya dibuat ceria dan ramah anak. Terima kasih kepada dokter dan perawat yang sangat sabar",
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
      <div className="flex flex-row justify-between items-center mb-6 border-b-2 pb-4">
        <h2 className="text-lg font-semibold">Ulasan Pasien</h2>
        <EllipsisVertical className="w-6 h-6"/>
      </div>

      {/* ✅ ScrollArea dari shadcn */}
      <ScrollArea className="flex-1 h-[300px] pr-2">
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-3">
              <div className="flex flex-row items-start justify-start gap-2">
                <Avatar className="w-10 h-10 border-2 border-blue-300">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="Dummy Avatar" />
                    <AvatarFallback className="bg-green-200 text-xs">AV</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold text-md">{review.name}</span>
                  <span className="flex items-center gap-1 text-gray-500 text-xs">
                    <Star className="w-3 h-3 text-yellow-400" />
                    {Number(review.rating).toFixed(1)}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{review.text}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-gray-400">{review.date}</span>
                <button
                  onClick={() => handleLike(review.id)}
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-500"
                >
                  <Heart size={14} /> {review.likes}
                </button>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      {/* Input Review */}
      <div className="flex flex-row gap-2 mt-3 items-center">
        <input
          type="text"
          placeholder="Tuliskan Ulasanmu!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <Button
        variant="outline"
          onClick={handleAddReview}
          className="px-3 py-5 rounded-md text-md"
        >
          <SendHorizontal/>
        </Button>
      </div>
    </div>
  );
}
