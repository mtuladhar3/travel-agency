"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const avatars = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    alt: "Happy traveler portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    alt: "Client review portrait",
  },
];

export default function ClientReviews() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center -space-x-3">
        {avatars.map((avatar, index) => (
          <div
            key={avatar.src}
            className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-blue-50 shadow-sm sm:h-12 sm:w-12"
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        ))}
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-blue-50 bg-sky-700 text-base font-semibold text-white shadow-sm sm:h-12 sm:w-12">
          +
        </div>
      </div>

      <p className="max-w-47.5 text-sm font-medium leading-snug text-blue-950/75">
        More than{" "}
        <span className="font-bold text-sky-700">25K clients</span> Reviews
      </p>
    </motion.div>
  );
}
