import React from "react";
import { Headphones, Star, Users, Clock, Flame, Check, Zap } from "lucide-react";

export interface WaitInfoItem {
  type: 'friends' | 'wait' | 'trending';
  text: string;
}

export interface BookCardProps {
  image: string;
  title: string;
  author: string;
  duration?: string;
  isAudiobook?: boolean;
  rating?: number;
  reviewCount?: string;
  waitInfos?: WaitInfoItem[];
  topBadge?: { type: 'now', text: string };
  bottomBadge?: { type: 'left', text: string };
  onReviewsClick?: (e: React.MouseEvent) => void;
}

export function BookCard({ 
  image, 
  title, 
  author, 
  duration, 
  isAudiobook,
  rating,
  reviewCount,
  waitInfos,
  topBadge,
  bottomBadge,
  onReviewsClick
}: BookCardProps) {
  return (
    <div className="snap-start shrink-0 w-[140px] flex flex-col gap-3 group cursor-pointer pb-2 h-full">
      <div className="relative aspect-[2/3] w-full rounded-[2px] shadow-lg bg-[#222] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover rounded-[2px] transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Top Badge (NOW) */}
        {topBadge && (
          <div className="absolute top-0 right-0 bg-[#00D6A0] text-black text-[10px] font-bold px-2 py-1 flex items-center gap-1 rounded-bl-[2px] z-10">
            <Check className="w-3 h-3" strokeWidth={3} />
            <span>{topBadge.text}</span>
          </div>
        )}

        {/* Bottom Badge (2 LEFT) */}
        {bottomBadge && (
          <div className="absolute bottom-8 left-0 right-0 bg-[#FFAB00] h-6 flex items-center justify-center gap-1 text-[10px] font-bold text-black z-10">
            <Zap className="w-3 h-3 fill-black" />
            <span>{bottomBadge.text}</span>
          </div>
        )}
        
        {/* Audio bar overlay */}
        {(isAudiobook || duration) && (
          <div className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a] bg-opacity-95 h-8 flex items-center justify-center gap-2 text-[10px] font-bold tracking-wider text-white rounded-b-[2px]">
            <Headphones className="w-3 h-3" />
            <span>{duration || "AUDIO"}</span>
          </div>
        )}
      </div>

      {/* Title & Author */}
      <div className="px-1 flex flex-col gap-0.5">
        <h3 className="text-white text-[13px] font-bold leading-tight line-clamp-2" title={title}>
          {title}
        </h3>
        <p className="text-gray-400 text-[12px] leading-tight line-clamp-1" title={author}>
          {author}
        </p>
      </div>

      {/* Metadata */}
      {(rating || reviewCount || (waitInfos && waitInfos.length > 0)) && (
        <div className="flex flex-col gap-1 px-1">
          {/* Stars */}
          {rating && (
             <div className="flex gap-0.5">
               {[...Array(5)].map((_, i) => (
                 <Star 
                   key={i} 
                   className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'fill-[#00838F] text-[#00838F]' : 'fill-[#333] text-[#333]'}`} 
                 />
               ))}
             </div>
          )}
          
          {/* Reviews Link */}
          {reviewCount && (
            <div 
              onClick={(e) => {
                if (onReviewsClick) {
                  e.stopPropagation();
                  onReviewsClick(e);
                }
              }}
              className="text-[#00838F] text-xs underline decoration-[#00838F]/40 underline-offset-2 hover:decoration-[#00838F] cursor-pointer"
            >
              Read {reviewCount} reviews
            </div>
          )}

          {/* Wait/Social Info */}
          {waitInfos && waitInfos.map((info, idx) => (
            <div key={idx} className={`flex items-center gap-1.5 text-xs ${
                info.type === 'trending' ? 'text-[#FFAB00]' : 
                info.type === 'friends' ? 'text-[#00838F]' : 
                'text-[#00E5FF]'
            }`}>
               {info.type === 'friends' && <Users className="w-3.5 h-3.5" />}
               {info.type === 'wait' && <Clock className="w-3.5 h-3.5 text-white/70" />}
               {info.type === 'trending' && <Flame className="w-3.5 h-3.5 fill-[#FFAB00]" />}
               <span className={info.type === 'wait' ? 'text-white/70' : 'font-medium'}>
                 {info.text}
               </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}