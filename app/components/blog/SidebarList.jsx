import React from 'react';
import { motion } from 'framer-motion';
import PostBadge from './PostBadge';

const sidebarPosts = [
  {
    id: 1,
    category: 'Agency News',
    title: 'New Adventures Await: 8 Fresh Tours Just Launched',
    date: 'Jun 10, 2025',
    author: 'Z.David',
  },
  {
    id: 2,
    category: 'Luxury',
    title: "Wellness Retreats That'll Reboot Your Soul",
    date: 'May 28, 2025',
    author: 'Admin',
  },
  {
    id: 3,
    category: 'Travel Tips',
    title: 'Travel Budgeting 101: Save Without Missing Out',
    date: 'May 14, 2025',
    author: 'Admin',
  },
  {
    id: 4,
    category: 'Destinations',
    title: 'Hidden Gems: Discover Off-the-Beaten-Path Locations',
    date: 'Apr 30, 2025',
    author: 'Sarah Chen',
  },
];

export default function SidebarList() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-gray-100/50 flex flex-col gap-2 h-full justify-between"
    >
      {sidebarPosts.map((post, index) => (
        <div 
          key={post.id} 
          className={`flex flex-col items-start w-full pb-6 ${
            index !== sidebarPosts.length - 1 ? 'border-b border-gray-100' : ''
          }`}
        >
          <div className="mb-3">
            <PostBadge>{post.category}</PostBadge>
          </div>

          <h4 className="text-base sm:text-lg font-bold text-[#0B3558] leading-snug hover:text-orange-500 transition-colors cursor-pointer mb-3 sm:mb-4 line-clamp-2">
            {post.title}
          </h4>

          {/* Bottom Metabar + Arrow Action */}
          <div className="flex items-center justify-between w-full">
            <div className="inline-flex gap-3 items-center bg-[#F0F4F8] text-gray-500 text-xs px-3 py-1.5 rounded-full">
              <span>📅 {post.date}</span>
              <span>✍️ {post.author}</span>
            </div>
            
            <button type="button" className="w-8 h-8 rounded-full bg-[#EBF2F7] hover:bg-orange-500 text-[#0B3558] hover:text-white flex items-center justify-center transition-colors group" aria-label="View post">
              <span className="text-xs transform transition-transform group-hover:translate-x-0.5">➔</span>
            </button>
          </div>
        </div>
      ))}
    </motion.div>
  );
}