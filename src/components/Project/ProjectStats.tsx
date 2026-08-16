"use client";

import React from "react";
import { FiCheckSquare, FiClock, FiLayers, FiUsers } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

interface StatItem {
  label: string;
  value: string;
  icon: React.ElementType;
}

export function ProjectStats(): React.ReactElement {
  const stats: StatItem[] = [
    { label: "সম্পন্ন উন্নয়ন কাজ", value: "৩৫টি", icon: FiCheckSquare },
    { label: "চলমান অবকাঠামো", value: "১২টি", icon: FiClock },
    { label: "পরিকল্পিত জনসেবা", value: "৮টি", icon: FiLayers },
    { label: "উপকৃত সাধারণ পরিবার", value: "১.৫ লক্ষ+", icon: FiUsers },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-10 bg-[var(--surface-2)] border-y border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm font-bold text-[var(--primary)] uppercase tracking-wider">
            সাভার উপজেলা পরিষদের সাবেক ভাইস চেয়ারম্যানের উন্নয়ন চিত্র
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((item: StatItem, idx: number) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-xl sm:text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon />
                </div>

                <div>
                  <span className="text-lg sm:text-2xl font-black text-[var(--text)] block leading-none mb-1">
                    {item.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[var(--muted)] truncate block">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}