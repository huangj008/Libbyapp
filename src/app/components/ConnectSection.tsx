import React from "react";
import { ChevronRight, Coffee, UserPlus, Users, RotateCcw, MessageCircle, Clock, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ConnectSectionProps {
  onOpenBookClubs?: () => void;
  onOpenAccounts?: () => void;
  onOpenFriends?: () => void;
  onOpenSharedReads?: () => void;
}

export function ConnectSection({ onOpenBookClubs, onOpenAccounts, onOpenFriends, onOpenSharedReads }: ConnectSectionProps) {
  return (
    <div id="connect-section" className="mt-8 px-4 mb-10 scroll-mt-24">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white">Connect & Discover</h2>
        <p className="text-gray-400 text-sm">See what your friends are reading and join book clubs</p>
      </div>

      <div className="flex flex-col gap-3">
        {/* Libby Book Clubs Card */}
        <div 
            onClick={onOpenBookClubs}
            className="bg-[#2D242B] rounded-xl p-4 cursor-pointer hover:bg-[#362B34] transition-colors group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D64065] flex items-center justify-center text-white">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white">Libby Book Clubs</h3>
                <p className="text-gray-400 text-xs">Your reading communities</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white" />
          </div>

          <div className="bg-[#1F191D] rounded-lg p-3 flex gap-3 items-center">
             <div className="relative w-12 h-16 flex-none shadow-md">
                <div className="absolute -top-1 right-0 bg-[#00D6A0] text-black text-[8px] font-bold px-1.5 py-0.5 flex items-center gap-0.5 rounded-sm z-10">
                   <Check className="w-2 h-2" strokeWidth={4} />
                   <span>NOW</span>
                </div>
                <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1691219973312-92752878d2f8?w=100&q=80" 
                    alt="The Silent Ocean" 
                    className="w-full h-full object-cover rounded-[2px]"
                />
             </div>
             <div>
                <div className="text-[#00E5FF] font-bold text-xs mb-0.5">The Midnight Readers</div>
                <div className="text-white font-bold text-sm">The Silent Ocean</div>
                <div className="flex items-center gap-3 mt-1.5 text-gray-400 text-[10px]">
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Tuesday, 8 PM</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>3 new comments</span>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Accounts You Follow Card */}
        <div 
            onClick={onOpenAccounts}
            className="bg-[#1A2626] rounded-xl p-4 cursor-pointer hover:bg-[#202E2E] transition-colors group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00838F] flex items-center justify-center text-white">
                <UserPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white">Accounts You Follow</h3>
                <p className="text-gray-400 text-xs">Recent activity from readers you follow</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white" />
          </div>

          <div className="flex flex-col gap-3">
            {/* Activity 1 */}
            <div className="bg-[#131C1C] rounded-lg p-3 flex gap-3 items-start">
               <div className="relative w-10 h-14 flex-none shadow-md">
                  <div className="absolute -top-1 right-0 bg-[#00D6A0] text-black text-[7px] font-bold px-1 py-0.5 flex items-center gap-0.5 rounded-sm z-10">
                     <Check className="w-1.5 h-1.5" strokeWidth={4} />
                     <span>NOW</span>
                  </div>
                  <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1678681535880-418e4e873dbb?w=100&q=80" 
                      alt="The Inner Calm" 
                      className="w-full h-full object-cover rounded-[2px]"
                  />
               </div>
               <div className="flex-1">
                  <div className="text-sm text-gray-300">
                     <span className="text-white font-bold">Sarah Jenkins</span> <span className="text-gray-500">@sarahreads</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                     finished reading <span className="text-[#00E5FF]">The Inner Calm</span>
                  </div>
                  <div className="text-[10px] text-gray-600 mt-1">2h ago</div>
               </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-[#131C1C] rounded-lg p-3 flex gap-3 items-start">
               <div className="w-10 h-14 flex-none shadow-md bg-gray-800 rounded-[2px] overflow-hidden">
                  <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1752572515417-8448a893b7ae?w=100&q=80" 
                      alt="Patterns of Thought" 
                      className="w-full h-full object-cover"
                  />
               </div>
               <div className="flex-1">
                  <div className="text-sm text-gray-300">
                     <span className="text-white font-bold">Dr. Robert Chen</span> <span className="text-gray-500">@drchen</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                     started reading <span className="text-[#00E5FF]">Patterns of Thought</span>
                  </div>
                  <div className="text-[10px] text-gray-600 mt-1">5h ago</div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-2 gap-3">
            {/* Friends Card */}
            <div 
                onClick={onOpenFriends}
                className="bg-[#2A2622] rounded-xl p-4 flex flex-col cursor-pointer hover:bg-[#332E29] transition-colors group h-full"
            >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#00838F] flex items-center justify-center text-white flex-none">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Friends</h3>
                    <p className="text-gray-400 text-[10px] leading-tight">Connect with readers</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center mb-4">
                   <div className="flex pl-2">
                      <div className="w-8 h-8 rounded-full border-2 border-[#2A2622] -ml-2 overflow-hidden bg-gray-600 z-30">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-[#2A2622] -ml-2 overflow-hidden bg-gray-600 z-20">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-[#2A2622] -ml-2 overflow-hidden bg-gray-600 z-10">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" className="w-full h-full object-cover" />
                      </div>
                   </div>
                   <div className="text-gray-400 text-xs mt-2">
                     <span className="text-[#00E5FF] font-bold">3 friends</span> are currently reading
                   </div>
                </div>

                <div className="mt-auto border-t border-white/10 pt-3 flex items-center justify-between text-xs text-gray-400 group-hover:text-white">
                    <span>View all</span>
                    <ChevronRight className="w-4 h-4" />
                </div>
            </div>

            {/* Shared Reads Card */}
            <div 
                onClick={onOpenSharedReads}
                className="bg-[#1F2622] rounded-xl p-4 flex flex-col cursor-pointer hover:bg-[#252E29] transition-colors group h-full"
            >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#00838F] flex items-center justify-center text-white flex-none">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Shared Reads</h3>
                    <p className="text-gray-400 text-[10px] leading-tight">Books you've both re...</p>
                  </div>
                </div>

                <div className="flex-1 mb-4">
                   <div className="bg-[#131C1C] p-2 rounded-lg text-center">
                      <div className="w-16 h-24 mx-auto shadow-md mb-2">
                        <ImageWithFallback 
                            src="https://images.unsplash.com/photo-1707948441245-9b64d3d6324b?w=100&q=80" 
                            alt="My Brilliant Friend" 
                            className="w-full h-full object-cover rounded-[2px]"
                        />
                      </div>
                      <div className="text-white font-bold text-[10px] truncate w-full">My Brilliant Friend</div>
                   </div>
                   <div className="text-[#00E5FF] text-[10px] text-center mt-2">
                     3 readers • 7 discussions
                   </div>
                </div>

                <div className="mt-auto border-t border-white/10 pt-3 flex items-center justify-between text-xs text-gray-400 group-hover:text-white">
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
