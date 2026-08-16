"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";

interface NewsHeroProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const categories = ["সব", "উন্নয়ন", "জরুরি নোটিশ", "জনকল্যাণ", "ইভেন্ট"];

export const NewsHero: React.FC<NewsHeroProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="bg-[var(--surface-2)] border-b border-[var(--border)] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-bold text-[var(--primary)] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[var(--primary-light)]">
            সাম্প্রতিক হালনাগাদ
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text)] leading-tight">
            সংবাদ ও গণসংযোগ
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed">
            সাভার উপজেলা পরিষদের সাবেক ভাইস চেয়ারম্যান দেওয়ান মঈনুদ্দিন বিপ্লব-এর সার্বিক উন্নয়নমূলক কার্যক্রম, সামাজিক উদ্যোগ, গণসংযোগ ও গুরুত্বপূর্ণ নোটিশ একনজরে জেনে নিন।
          </p>

          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative flex items-center">
              <FiSearch className="absolute left-4 text-[var(--muted)] text-lg" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="সংবাদ বা বিষয়ের নাম লিখে সার্চ করুন..."
                className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--primary)] text-sm sm:text-base outline-none text-[var(--text)] shadow-sm transition-all"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[var(--primary)] text-white shadow-md"
                    : "bg-[var(--surface)] text-[var(--text-2)] border border-[var(--border)] hover:bg-[var(--surface-2)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};