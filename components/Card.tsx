"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export default function Card({ className = "", children }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(10, 22, 44, 0.16)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card backdrop-blur ${className}`}
    >
      {children}
    </motion.div>
  );
}
