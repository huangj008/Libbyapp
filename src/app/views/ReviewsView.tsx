import React from "react";
import { ChevronLeft, Star, ThumbsUp, MessageCircle, Flag, Filter, ChevronDown } from "lucide-react";

interface Review {
  id: string;
  author: string;
  avatar?: string; // URL or initial
  date: string;
  format: string; // Ebook, Audiobook
  isVerified: boolean;
  rating: number;
  title?: string;
  content: string;
  helpfulCount: number;
  commentCount: number;
}

const REVIEWS_DATA: Review[] = [
  {
    id: "1",
    author: "Jennifer R.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    date: "Dec 20, 2025",
    format: "Ebook",
    isVerified: true,
    rating: 5,
    title: "Finally, a self-help book that delivers",
    content: "I've read dozens of self-help books and most leave me feeling inspired but without practical tools. This one is different. The step-by-step approach to working with your inner parts is something I can...",
    helpfulCount: 312,
    commentCount: 24
  },
  {
    id: "2",
    author: "Emma L.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "Jan 10, 2026",
    format: "Audiobook",
    isVerified: true,
    rating: 5,
    content: "Listened to the audiobook and Gabby's narration adds so much warmth to the material. She really practices what she preaches. The meditation exercises are particularly powerful when heard rather than r...",
    helpfulCount: 234,
    commentCount: 18
  },
  {
    id: "3",
    author: "Sarah M.",
    date: "Jan 28, 2026",
    format: "Ebook",
    isVerified: true,
    rating: 5,
    title: "Life-changing perspective on self-healing",
    content: "This book completely transformed how I approach my inner work. Gabby's integration of IFS therapy with her spiritual teachings creates a powerful framework for healing. I found myself highlighting alm...",
    helpfulCount: 147,
    commentCount: 12
  },
  {
    id: "4",
    author: "Michael T.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    date: "Jan 15, 2026",
    format: "Audiobook",
    isVerified: true,
    rating: 4,
    title: "Great concepts, some repetition",
    content: "The core ideas in this book are excellent and the IFS approach is explained clearly for beginners. I took off one star because some concepts are repeated across chapters. Still, this is a valuable add...",
    helpfulCount: 89,
    commentCount: 5
  },
  {
    id: "5",
    author: "Alex P.",
    date: "Dec 15, 2025",
    format: "Ebook",
    isVerified: true,
    rating: 4,
    content: "Solid book with practical exercises. The chapters on dealing with protective parts were especially helpful for me. Would recommend to anyone starting their healing journey.",
    helpfulCount: 67,
    commentCount: 2
  },
  {
    id: "6",
    author: "David K.",
    date: "Dec 28, 2025",
    format: "",
    isVerified: false,
    rating: 3,
    title: "Good but not groundbreaking",
    content: "If you're already familiar with IFS therapy, you might not find much new here. However, for newcomers to this approach, it's a gentle and accessible introduction. The writing is clear and the examples...",
    helpfulCount: 45,
    commentCount: 3
  }
];

interface ReviewsViewProps {
  onBack: () => void;
  bookTitle?: string;
  bookAuthor?: string;
  rating?: number;
  reviewCount?: string;
}

export function ReviewsView({ onBack, bookTitle = "The Inner Calm", bookAuthor = "Sarah Jenkins", rating = 4.5, reviewCount = "2.8k" }: ReviewsViewProps) {
  return (
    <div className="absolute inset-0 z-50 bg-[#121212] text-white flex flex-col h-full w-full">
      {/* Top Fixed Section */}
      <div className="flex-none bg-[#121212] z-20 pb-4">
        {/* Header */}
        <div className="flex items-center p-4 gap-3">
          <button onClick={onBack} className="p-1 -ml-2 text-white">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div>
            <h1 className="text-xl font-bold">Reviews</h1>
            <p className="text-gray-400 text-xs">{bookTitle} by {bookAuthor}</p>
          </div>
        </div>

        {/* Rating Summary Card */}
        <div className="mx-4 bg-[#1E1E1E] rounded-xl p-4 flex gap-6 items-center shadow-lg border border-[#333]">
          {/* Big Number */}
          <div className="flex flex-col items-center justify-center pl-2">
             <span className="text-5xl font-bold text-white tracking-tight">{rating}</span>
             <div className="flex gap-0.5 mt-1 mb-1">
                {[1,2,3,4,5].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'fill-[#00838F] text-[#00838F]' : 'fill-[#00838F] text-[#00838F] opacity-30'}`} />
                ))}
             </div>
             <span className="text-gray-400 text-[10px]">{reviewCount} reviews</span>
          </div>

          {/* Bars */}
          <div className="flex-1 flex flex-col gap-1.5 justify-center pr-2">
            {[
                { s: 5, p: 68 },
                { s: 4, p: 22 },
                { s: 3, p: 7 },
                { s: 2, p: 2 },
                { s: 1, p: 1 }
            ].map(row => (
                <div key={row.s} className="flex items-center gap-3 text-[10px] text-gray-400 font-medium">
                    <span className="w-2">{row.s}</span>
                    <Star className="w-2.5 h-2.5 fill-gray-600 text-gray-600" />
                    <div className="flex-1 h-1.5 bg-[#333] rounded-full overflow-hidden">
                        <div className="h-full bg-[#00838F] rounded-full" style={{ width: `${row.p}%` }}></div>
                    </div>
                    <span className="w-5 text-right">{row.p}%</span>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Reviews List */}
      <div className="flex-1 overflow-y-auto px-4">
        <div className="flex justify-between items-center py-4 border-b border-[#333] mb-2 sticky top-0 bg-[#121212] z-10">
            <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Filter className="w-4 h-4" />
                <span>All reviews</span>
            </div>
            <div className="flex items-center gap-1 text-[#00838F] text-sm font-medium">
                <span>Sort:</span>
                <span className="flex items-center gap-0.5">Most Helpful <ChevronDown className="w-4 h-4" /></span>
            </div>
        </div>

        {/* Reviews */}
        <div className="flex flex-col gap-6 pb-20">
            {REVIEWS_DATA.map(review => (
                <div key={review.id} className="border-b border-[#333] pb-6 last:border-0">
                    {/* Review Header */}
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-gray-400 font-bold overflow-hidden">
                                {review.avatar ? (
                                    <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                                ) : (
                                    <span>{review.author.charAt(0)}</span>
                                )}
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-white text-[15px]">{review.author}</span>
                                    {review.isVerified && (
                                        <span className="text-[10px] bg-[#004D40] text-[#00838F] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Verified</span>
                                    )}
                                </div>
                                <div className="text-gray-500 text-xs mt-0.5 flex items-center gap-1.5">
                                    <span>{review.date}</span>
                                    {review.format && (
                                        <>
                                            <span>•</span>
                                            <span>{review.format}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-0.5">
                             {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    className={`w-3 h-3 ${i < review.rating ? 'fill-[#00838F] text-[#00838F]' : 'fill-[#333] text-[#333]'}`} 
                                />
                             ))}
                        </div>
                    </div>

                    {/* Review Content */}
                    <div className="mt-3">
                        {review.title && <h3 className="font-bold text-white mb-2 text-[15px]">{review.title}</h3>}
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {review.content} <span className="text-[#00838F] cursor-pointer hover:underline">Read more</span>
                        </p>
                    </div>

                    {/* Review Actions */}
                    <div className="flex items-center justify-between mt-4 text-gray-500">
                        <div className="flex gap-6">
                            <button className="flex items-center gap-1.5 hover:text-white transition-colors text-xs font-medium">
                                <ThumbsUp className="w-4 h-4" />
                                <span>Helpful ({review.helpfulCount})</span>
                            </button>
                            <button className="flex items-center gap-1.5 hover:text-white transition-colors text-xs font-medium">
                                <MessageCircle className="w-4 h-4" />
                                <span>{review.commentCount} comments</span>
                            </button>
                        </div>
                        <button className="hover:text-white transition-colors">
                            <Flag className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}