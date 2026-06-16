"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FEATURED_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop&q=80";

export default function FeaturedImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-4/5 w-full overflow-hidden rounded-t-3xl bg-orange-100 shadow-[0_20px_50px_rgba(234,88,12,0.12)] sm:aspect-5/6 lg:max-h-130 lg:aspect-auto lg:h-120 xl:h-130"
    >
      <motion.div
        className="relative h-full w-full"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Image
          src={FEATURED_IMAGE}
          alt="Traveler standing on a mountain overlooking a scenic valley"
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
