"use client";
import { motion } from "framer-motion";

export default function BlogRowItem({ post, index }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.2), ease: "easeOut" }}
      className="group w-full border-t border-blue-950/10 pt-8 pb-10 flex flex-col-reverse sm:flex-row items-start justify-between gap-6 md:gap-10 first:border-t-0 first:pt-0"
    >
      {/* Content Meta Info Wrapper */}
      <div className="flex flex-col flex-1 gap-4">
        {/* Clickable Article Title */}
        <h3 className="font-serif text-xl sm:text-xl lg:text-2xl font-normal tracking-wide text-blue-950  leading-snug transition-colors group-hover:text-sky-700 cursor-pointer">
          {post.title}
        </h3>

        {/* Read Meta Tag Row */}
        <div className="flex items-center gap-3 text-xs font-bold tracking-wider text-blue-950/50 uppercase">
          <span>{post.date}</span>
          <span className="text-blue-400">|</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Interactive Article Featured Image */}
      <div className="w-full sm:w-[200px] md:w-[240px] aspect-[16/10] overflow-hidden rounded-2xl bg-blue-50 flex-shrink-0 shadow-sm cursor-pointer">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transform"
        />
      </div>
    </motion.article>
  );
}