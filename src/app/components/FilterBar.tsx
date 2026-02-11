import { ArrowUpDown, MessageSquare, Star, TrendingUp } from "lucide-react";

interface PillProps {
  label: string;
  icon?: React.ReactNode;
  hasSortIcon?: boolean;
  count?: string | number;
}

export function Pill({ label, icon, hasSortIcon = false, count }: PillProps) {
  return (
    <button className="h-10 px-4 rounded-[8px] bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white flex items-center gap-2 text-[15px] font-medium transition-colors border border-transparent">
      {icon}
      <span>{label}</span>
      {hasSortIcon && <ArrowUpDown className="w-3.5 h-3.5 text-gray-500 ml-1" />}
      {count && <span className="text-gray-500 text-sm ml-1 font-normal">{count}</span>}
    </button>
  );
}

export function FilterBar() {
  return (
    <div className="px-5 py-4 flex flex-wrap gap-3 items-center">
       {/* Teal Filter Button */}
       <button className="h-10 w-12 bg-[#549F9B] rounded-[10px] flex flex-col items-center justify-center gap-[3px] relative shadow-[0_4px_0_0_#3A7270] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#3A7270] active:translate-y-[4px] active:shadow-none transition-all mr-1 group">
          {/* Custom "Text/List" Icon */}
          <div className="w-5 h-[2.5px] bg-black rounded-full group-hover:bg-[#111]"></div>
          <div className="w-5 h-[2.5px] bg-black rounded-full group-hover:bg-[#111]"></div>
          <div className="w-3 h-[2.5px] bg-black rounded-full mr-auto ml-[14px] group-hover:bg-[#111]"></div>
          
          {/* Notification dot */}
          <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#00E5FF] rounded-full border-2 border-black z-10 shadow-sm"></div>
       </button>
       
       <Pill 
        label="most reviews" 
        icon={<MessageSquare className="w-4 h-4 text-gray-400" />} 
        hasSortIcon 
       />
       
       <Pill 
        label="highest rated" 
        icon={<Star className="w-4 h-4 text-gray-400" />} 
        hasSortIcon 
       />

       <Pill 
        label="trending" 
        icon={<TrendingUp className="w-4 h-4 text-gray-400" />} 
        hasSortIcon 
       />
       
       <Pill 
        label="random" 
        hasSortIcon 
       />
       
       <Pill 
        label="available now" 
        count="12" 
       />
    </div>
  );
}
