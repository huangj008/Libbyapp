import React, { useState } from 'react';
import { ChevronLeft, MessageCircle, Star, Users, Phone, Search, Library, Menu, Bookmark, Plus } from 'lucide-react';

interface SharedBook {
    id: string;
    title: string;
    author: string;
    cover: string;
    rating: number;
    readers: string[];
    discussionCount: number;
    highlightCount: number;
    snippet?: {
        text: string;
        author: string;
        timeAgo: string;
    };
    friendColors: string[];
}

const SHARED_BOOKS: SharedBook[] = [
    {
        id: '1',
        title: 'My Brilliant Friend',
        author: 'Elena Ferrante',
        cover: 'https://images.unsplash.com/photo-1602820099517-c89150aff264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeSUyMEJyaWxsaWFudCUyMEZyaWVuZCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NzA0MDQ2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.3,
        readers: ['you', 'Jessica R.', 'Emma L.'],
        discussionCount: 7,
        highlightCount: 2,
        snippet: {
            text: "The portrayal of friendship is stunning",
            author: "Jessica R.",
            timeAgo: "2h ago"
        },
        friendColors: ['text-[#00E5FF]', 'text-[#00E5FF]']
    },
    {
        id: '2',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        cover: 'https://images.unsplash.com/photo-1755541608494-5c02cf56e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaGUlMjBIb2JiaXQlMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzcwNDA0NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        readers: ['you', 'Michael T.', 'Sarah J.'],
        discussionCount: 12,
        highlightCount: 2,
        snippet: {
            text: "Perfect adventure story",
            author: "Michael T.",
            timeAgo: "5h ago"
        },
        friendColors: ['text-[#00E5FF]', 'text-[#00E5FF]']
    },
    {
        id: '3',
        title: 'Dune',
        author: 'Frank Herbert',
        cover: 'https://images.unsplash.com/photo-1645394183074-9b334d15a605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdW5lJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc3MDQwNDYzNHww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        readers: ['you', 'Emma L.', 'David K.'],
        discussionCount: 15,
        highlightCount: 2,
        snippet: {
            text: "Complex political intrigue",
            author: "Emma L.",
            timeAgo: "1d ago"
        },
        friendColors: ['text-[#00E5FF]', 'text-[#00E5FF]']
    },
    {
        id: '4',
        title: 'Pride & Prejudice',
        author: 'Jane Austen',
        cover: 'https://images.unsplash.com/photo-1763768861268-cb6b54173dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQcmlkZSUyMGFuZCUyMFByZWp1ZGljZSUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NzA0MDQ2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        readers: ['you', 'Jessica R.', 'Emma L.', '+1 more'],
        discussionCount: 23,
        highlightCount: 2,
        snippet: {
            text: "Darcy's character arc is perfect",
            author: "Jessica R.",
            timeAgo: "2d ago"
        },
        friendColors: ['text-[#00E5FF]', 'text-[#00E5FF]', 'text-[#00E5FF]']
    },
    {
        id: '5',
        title: 'The Silent Ocean',
        author: 'Marion D.',
        cover: 'https://images.unsplash.com/photo-1544736779-08492534e887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NzA0MDQ2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        readers: ['you', 'Marcus T.'],
        discussionCount: 4,
        highlightCount: 1,
        snippet: {
            text: "Underwater scenes are magical",
            author: "Marcus T.",
            timeAgo: "3d ago"
        },
        friendColors: ['text-[#00E5FF]']
    }
];

export function SharedReadsView({ onBack }: { onBack: () => void }) {
    const [filter, setFilter] = useState<'all' | 'discussed' | 'recent'>('all');

    return (
        <div className="bg-black min-h-full pb-20 animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="bg-[#0D2626] px-4 py-4 flex items-center gap-4 border-b border-[#1A3A3A] sticky top-0 z-30">
                <button onClick={onBack} className="text-[#00E5FF] p-2 -ml-2 hover:bg-white/5 rounded-full">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <h2 className="text-white text-xl font-bold">Shared Reading History</h2>
            </div>

            <div className="p-5">
                {/* Info Card */}
                <div className="bg-[#1A1A1A] rounded-xl p-5 mb-6 border border-[#333]">
                    <p className="text-gray-300 leading-relaxed">
                        Discover books you've read with friends and see their thoughts and highlights. Join the conversation and share your own insights!
                    </p>
                </div>

                {/* Filters */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-2">
                    <button 
                        onClick={() => setFilter('all')}
                        className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                            filter === 'all' ? 'bg-[#00838F] text-white' : 'bg-[#1A1A1A] text-gray-300 hover:bg-[#222]'
                        }`}
                    >
                        All Books
                    </button>
                    <button 
                         onClick={() => setFilter('discussed')}
                         className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                            filter === 'discussed' ? 'bg-[#00838F] text-white' : 'bg-[#1A1A1A] text-gray-300 hover:bg-[#222]'
                        }`}
                    >
                        Most Discussed
                    </button>
                    <button 
                         onClick={() => setFilter('recent')}
                         className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                            filter === 'recent' ? 'bg-[#00838F] text-white' : 'bg-[#1A1A1A] text-gray-300 hover:bg-[#222]'
                        }`}
                    >
                        Recent Activity
                    </button>
                </div>

                {/* Books List */}
                <div className="flex flex-col gap-4">
                    {SHARED_BOOKS.map((book) => (
                        <div key={book.id} className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#333]">
                            <div className="p-4 flex gap-4">
                                {/* Cover */}
                                <div className="w-20 h-28 bg-gray-800 shrink-0 shadow-lg rounded-[2px] overflow-hidden">
                                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-white font-bold text-lg leading-tight mb-0.5">{book.title}</h3>
                                            <p className="text-gray-400 text-sm mb-1.5">by {book.author}</p>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i} 
                                                className={`w-3.5 h-3.5 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                                            />
                                        ))}
                                        <span className="text-gray-400 text-xs ml-1">{book.rating}</span>
                                    </div>

                                    {/* Readers */}
                                    <div className="text-sm text-gray-300 mb-2 leading-tight">
                                        <Users className="w-3.5 h-3.5 inline mr-1.5 text-[#00E5FF]" />
                                        Read by <span className="text-[#00E5FF] font-medium">you</span> &{' '}
                                        {book.readers.slice(1).map((reader, i) => (
                                            <span key={i}>
                                                <span className="text-[#00E5FF] font-medium">{reader}</span>
                                                {i < book.readers.slice(1).length - 1 ? ', ' : ''}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Stats */}
                                    <div className="flex gap-4 text-xs text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <MessageCircle className="w-3 h-3" />
                                            <span>{book.discussionCount} discussions</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Bookmark className="w-3 h-3" />
                                            <span>{book.highlightCount} highlights</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Snippet */}
                            {book.snippet && (
                                <div className="px-4 py-3 bg-[#1F1F1F] border-t border-[#2A2A2A]">
                                    <p className="text-white italic text-sm mb-1.5">"{book.snippet.text}"</p>
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <span>— Highlighted by {book.snippet.author}</span>
                                        <span>{book.snippet.timeAgo}</span>
                                    </div>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="px-4 py-3 flex items-center justify-between border-t border-[#2A2A2A]">
                                <button className="flex items-center gap-2 text-[#00E5FF] font-medium text-sm hover:text-white transition-colors">
                                    <MessageCircle className="w-4 h-4" />
                                    View Discussion
                                </button>
                                <button className="flex items-center gap-1 text-gray-400 font-medium text-sm hover:text-white transition-colors">
                                    <Plus className="w-4 h-4" />
                                    Re-borrow
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="mt-12 mb-8 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#333]">
                        <BookIcon className="w-6 h-6 text-gray-500" />
                    </div>
                    <p className="text-gray-400 text-sm">Looking for more shared reads?</p>
                    <button className="text-[#00E5FF] font-bold text-sm hover:underline">
                        Invite friends to join Libby
                    </button>
                </div>
            </div>
        </div>
    );
}

function BookIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    );
}
