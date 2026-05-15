"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={cn("mx-auto w-full max-w-7xl px-4 py-10 lg:px-8", className)}
    >
      {children}
    </motion.section>
  );
}
