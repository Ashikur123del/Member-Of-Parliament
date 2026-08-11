"use client";

import React from "react";
import Image from "next/image";
import { FiCalendar, FiClock, FiArrowUpRight } from "react-icons/fi";
import { NewsItem } from "@/data/newsData";

interface NewsCardProps {
  item: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col h-full rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)]/40 transition-all duration-300 hover:shadow-lg overflow-hidden group">
      <div className="relative w-full h-52 sm:h-60 bg-[var(--surface-2)] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-[var(--surface)]/90 backdrop-blur-md text-[var(--text)] border border-[var(--border)] text-xs font-bold px-3 py-1 rounded-full">
          {item.category}
        </span>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs text-[var(--muted)]">
            <span className="flex items-center gap-1">
              <FiCalendar className="text-[var(--primary)]" /> {item.date}
            </span>
            <span className="flex items-center gap-1">
              <FiClock /> {item.readTime}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors leading-snug line-clamp-2">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed line-clamp-3">
            {item.summary}
          </p>
        </div>

        <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between">
          <span className="text-xs font-bold text-[var(--primary)] group-hover:underline">
            সম্পূর্ণ খবর
          </span>
          <FiArrowUpRight className="text-[var(--primary)] text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
