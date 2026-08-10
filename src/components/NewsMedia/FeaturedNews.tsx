"use client";

import React from "react";
import Image from "next/image";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import { NewsItem } from "@/data/newsData";


interface FeaturedNewsProps {
  news: NewsItem;
}

export const FeaturedNews: React.FC<FeaturedNewsProps> = ({ news }) => {
  return (
    <section className="mb-12">
      <div className="w-full flex flex-col lg:flex-row rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)]/40 transition-all duration-300 shadow-sm overflow-hidden group">
        <div className="relative w-full lg:w-3/5 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] bg-[var(--surface-2)] overflow-hidden">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
          <span className="absolute top-4 left-4 bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            বিশেষ সংবাদ
          </span>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 w-full lg:w-2/5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--muted)] font-medium">
              <span className="flex items-center gap-1.5">
                <FiCalendar className="text-[var(--primary)]" /> {news.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FiClock /> {news.readTime}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors leading-snug">
              {news.title}
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed">
              {news.summary}
            </p>

            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
              {news.content}
            </p>
          </div>

          <button className="pt-2 flex items-center gap-2 text-sm sm:text-base font-bold text-[var(--primary)] group-hover:gap-3 transition-all">
            <span>বিস্তারিত পড়ুন</span>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};