import React, { useState } from "react";
import { Header } from "../components/Header";
import { FilterBar } from "../components/FilterBar";
import { Section } from "../components/Section";
import { HorizontalScroll } from "../components/HorizontalScroll";
import { BookCard } from "../components/BookCard";
import { MagazineGrid } from "../components/MagazineGrid";
import { GuideSection } from "../components/GuideSection";
import { ExtrasSection } from "../components/ExtrasSection";
import { SurveyModal } from "../components/SurveyModal";
import { ConnectSection } from "../components/ConnectSection";
import { ReviewsView } from "./ReviewsView";

// Mock Data
const BOOKS_JUST_FOR_YOU: any[] = [
  { 
      id: 101,
      image: "https://images.unsplash.com/photo-1557752281-d4b2e550aba9?w=400&q=80", 
      title: "The Inner Calm", 
      author: "Sarah Jenkins", 
      duration: "5 HOURS", 
      isAudiobook: true,
      topBadge: { type: 'now', text: 'NOW' },
      rating: 5,
      reviewCount: "2.8k",
      waitInfos: [{ type: 'friends', text: '4 friends reading' }]
  },
  { 
      id: 102,
      image: "https://images.unsplash.com/photo-1759494080879-2990a4f0fe7c?w=400&q=80", 
      title: "Finding Balance", 
      author: "Dr. Robert Chen",
      rating: 4,
      reviewCount: "1.9k",
      waitInfos: [
        { type: 'wait', text: '~3 days wait • 2 friends' },
      ]
  },
  { 
      id: 103,
      image: "https://images.unsplash.com/photo-1758201553379-b88559e7bfb0?w=400&q=80", 
      title: "Mindful Moments", 
      author: "Elena Rodriguez", 
      duration: "3 HOURS", 
      isAudiobook: true,
      bottomBadge: { type: 'left', text: '2 LEFT' },
      rating: 5,
      reviewCount: "3.3k",
      waitInfos: [{ type: 'trending', text: 'Trending • 12 friends' }]
  },
  { 
      id: 104, 
      title: "Patterns of Thought", 
      author: "James Wilson", 
      image: "https://images.unsplash.com/photo-1687093777245-bc60c636ddf0?w=400&q=80",
      rating: 4.5,
      reviewCount: "1.2k",
      waitInfos: [{ type: 'wait', text: '~2 weeks wait' }]
  },
];

const BOOKS_1 = [
  { 
    id: 1, 
    title: "The Fire Next Time", 
    author: "James Baldwin", 
    image: "https://images.unsplash.com/photo-1769963121626-7f1885db412c?w=400&q=80", 
    duration: "2 HOURS", 
    isAudiobook: true,
    rating: 5,
    reviewCount: "5.2k"
  },
  { 
    id: 2, 
    title: "Cicely Tyson", 
    author: "Cicely Tyson", 
    image: "https://images.unsplash.com/photo-1640270712121-ae4a538a8ffc?w=400&q=80", 
    duration: "16 HOURS", 
    isAudiobook: true,
    rating: 4.5,
    reviewCount: "1.8k"
  },
  { 
    id: 3, 
    title: "Adversity For Sale", 
    author: "Jay Jenkins", 
    image: "https://images.unsplash.com/photo-1641064464128-81cfd55d5c8a?w=400&q=80", 
    duration: "8 HOURS", 
    isAudiobook: true,
    rating: 4,
    reviewCount: "942"
  },
  { 
    id: 4, 
    title: "Music Is History", 
    author: "Questlove", 
    image: "https://images.unsplash.com/photo-1732714403349-05fc43b67042?w=400&q=80", 
    duration: "12 HOURS", 
    isAudiobook: true,
    rating: 4.5,
    reviewCount: "2.1k"
  },
];

const BOOKS_2 = [
  { 
    id: 5, 
    title: "Black Dahlia", 
    author: "William J. Mann", 
    image: "https://images.unsplash.com/photo-1722706731912-dde6e451e59f?w=400&q=80",
    topBadge: { type: 'now', text: 'NOW' },
    rating: 4.5,
    reviewCount: "824",
    waitInfos: [{ type: 'friends', text: '5 friends reading' }]
  },
  { 
    id: 6, 
    title: "Tender Cruelty", 
    author: "Katee Robert", 
    image: "https://images.unsplash.com/photo-1752243731865-c2fa851af7ec?w=400&q=80",
    topBadge: { type: 'now', text: 'NOW' },
    rating: 3.8,
    reviewCount: "1.2k"
  },
  { 
    id: 7, 
    title: "Fallen Stars", 
    author: "Imani Erriu", 
    image: "https://images.unsplash.com/photo-1769963121626-7f1885db412c?w=400&q=80",
    topBadge: { type: 'now', text: 'NOW' },
    rating: 4.2,
    reviewCount: "532"
  },
  { 
    id: 8, 
    title: "Death and Dinuguan", 
    author: "Mia P. Manansala", 
    image: "https://images.unsplash.com/photo-1710976483763-25290f0212ed?w=400&q=80",
    topBadge: { type: 'now', text: 'NOW' },
    rating: 4.0,
    reviewCount: "2.1k"
  },
];

const BOOKS_3 = [
    { 
      id: 9, 
      title: "Pride & Prejudice", 
      author: "Jane Austen", 
      image: "https://images.unsplash.com/photo-1769963121626-7f1885db412c?w=400&q=80",
      rating: 5,
      reviewCount: "12.5k"
    },
    { 
      id: 10, 
      title: "Little Women", 
      author: "Louisa May Alcott", 
      image: "https://images.unsplash.com/photo-1722706731912-dde6e451e59f?w=400&q=80",
      rating: 4.8,
      reviewCount: "8.3k"
    },
    { 
      id: 11, 
      title: "My Brilliant Friend", 
      author: "Elena Ferrante", 
      image: "https://images.unsplash.com/photo-1641064464128-81cfd55d5c8a?w=400&q=80",
      rating: 4.5,
      reviewCount: "3.1k"
    },
];

interface LibraryViewProps {
    onSyncGoodreads?: () => void;
    onOpenBookClubs?: () => void;
    onOpenAccounts?: () => void;
    onOpenFriends?: () => void;
    onOpenSharedReads?: () => void;
    scrollToConnect?: boolean;
}

export function LibraryView({ onSyncGoodreads, onOpenBookClubs, onOpenAccounts, onOpenFriends, onOpenSharedReads, scrollToConnect }: LibraryViewProps) {
  const [showSurvey, setShowSurvey] = useState(false);
  const [selectedBookForReviews, setSelectedBookForReviews] = useState<any | null>(null);

  React.useEffect(() => {
    if (scrollToConnect) {
      const element = document.getElementById('connect-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [scrollToConnect]);

  if (selectedBookForReviews) {
    return (
      <ReviewsView 
        onBack={() => setSelectedBookForReviews(null)} 
        bookTitle={selectedBookForReviews.title}
        bookAuthor={selectedBookForReviews.author}
        rating={selectedBookForReviews.rating}
        reviewCount={selectedBookForReviews.reviewCount}
      />
    );
  }

  return (
    <>
        {showSurvey && <SurveyModal onClose={() => setShowSurvey(false)} />}
        <Header />
        <FilterBar />

        <Section 
          title="Just For You" 
          subtitle="These were picked based on your past reading history and searches."
          className="mt-2"
        >
           <HorizontalScroll>
             {BOOKS_JUST_FOR_YOU.map(book => (
               <BookCard 
                  key={book.id} 
                  {...book} 
                  onReviewsClick={() => setSelectedBookForReviews(book)}
               />
             ))}
           </HorizontalScroll>
        </Section>

        <Section
            title="Want More Personalized Recommendations?"
            subtitle="Take a short survey letting us know your preferences or sync your Goodreads account."
            className="mt-2"
            hasArrow={false}
        >
            <div className="flex gap-4 mt-2 mb-4">
                <button 
                  onClick={() => setShowSurvey(true)}
                  className="bg-[#00838F] hover:bg-[#0097A7] text-black font-bold py-3 px-6 rounded-full flex-1 transition-colors text-sm uppercase tracking-wide"
                >
                    Take Survey
                </button>
                <button 
                    onClick={onSyncGoodreads}
                    className="bg-[#2a2a2a] hover:bg-[#333] border border-[#444] text-white font-bold py-3 px-6 rounded-full flex-1 transition-colors text-sm uppercase tracking-wide"
                >
                    Sync Goodreads
                </button>
            </div>
        </Section>

        <ConnectSection 
            onOpenBookClubs={onOpenBookClubs} 
            onOpenAccounts={onOpenAccounts} 
            onOpenFriends={onOpenFriends}
            onOpenSharedReads={onOpenSharedReads}
        />

        <Section 
          title="African American History Month..."    
          subtitle="Over 260 titles chosen by our librarians"
        >
           <HorizontalScroll>
             {BOOKS_1.map(book => (
               <BookCard 
                  key={book.id} 
                  {...book} 
                  onReviewsClick={() => setSelectedBookForReviews(book)}
                />
             ))}
           </HorizontalScroll>
        </Section>

        <Section
          title="Guides"
          textColor="text-[#00838F]"
          className="mt-2"
        >
             <div className="text-gray-300 mb-4 text-[15px] leading-snug">
                Our librarians curate these guides to help you explore our catalog.
             </div>
             <GuideSection />
        </Section>

        <Section
          title="Extras"
          textColor="text-[#00838F]"
          className="mt-2"
        >
             <div className="text-gray-300 mb-4 text-[15px] leading-snug">
                Use your library card to access additional resources across the web.
             </div>
             <div className="mb-4 text-white font-bold flex items-center gap-1 cursor-pointer">
                See all extras <span className="text-xl">›</span>
            </div>
             <ExtrasSection />
        </Section>

        <Section 
            title="New and Now" 
            subtitle="It's your lucky day! No waiting required—these popular titles are available now!"
            className="mt-6"
            hasArrow={false}
        >
            <div className="-mt-2 mb-4 text-white font-bold flex items-center gap-1 cursor-pointer text-sm">
                See over 200 titles <span className="text-xl">›</span>
            </div>
            <HorizontalScroll>
                {BOOKS_2.map(book => (
                    <BookCard 
                        key={book.id} 
                        {...book} 
                        onReviewsClick={() => setSelectedBookForReviews(book)}
                    />
                ))}
            </HorizontalScroll>
        </Section>

        <Section 
            title="Favorite Magazines" 
            subtitle="Over 100 titles chosen by our librarians"
            className="mt-2"
        >
            <MagazineGrid />
        </Section>
        
        <Section 
            title="Galentine's Day" 
            subtitle="Over 190 titles chosen by our librarians"
            className="mt-2"
        >
             <HorizontalScroll>
                {BOOKS_3.map(book => (
                    <BookCard 
                        key={book.id} 
                        {...book} 
                        onReviewsClick={() => setSelectedBookForReviews(book)}
                    />
                ))}
            </HorizontalScroll>
        </Section>
        
         <Section 
            title="Just Added Books" 
            subtitle="A list of over 1,000 titles"
            className="mt-2"
        >
             <HorizontalScroll>
                {[...BOOKS_2, ...BOOKS_1].map((book, i) => (
                    <BookCard 
                        key={i} 
                        {...book} 
                        isAudiobook={false} 
                        duration=""
                        onReviewsClick={() => setSelectedBookForReviews(book)} 
                    />
                ))}
            </HorizontalScroll>
        </Section>
    </>
  );
}