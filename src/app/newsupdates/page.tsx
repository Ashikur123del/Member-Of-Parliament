"use client";

import { FeaturedNews } from "@/components/NewsMedia/FeaturedNews";
import { NewsCard } from "@/components/NewsMedia/NewsCard";
import { NewsHero } from "@/components/NewsMedia/NewsHero";
import { NewsletterNotice } from "@/components/NewsMedia/NewsletterNotice";
import { VideoNewsSection } from "@/components/NewsMedia/VideoNewsSection";
import { sampleNews } from "@/data/newsData";
import { useState } from "react";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("সব");

  const [searchQuery, setSearchQuery] = useState("");

  const featured = sampleNews.find((n) => n.isFeatured) || sampleNews[0];

  const filteredNews = sampleNews.filter((item) => {
    const matchesCategory = selectedCategory === "সব" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
 
  return (
    <main className="min-h-screen bg-[var(--surface)]">
      <NewsHero
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {selectedCategory === "সব" && !searchQuery && (
          <FeaturedNews news={featured} />
        )}

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text)]">
            {selectedCategory === "সব" ? "সকল সংবাদ" : `${selectedCategory} সংক্রান্ত খবর`}
          </h2>
          <span className="text-xs sm:text-sm text-[var(--muted)] font-medium">
            মোট পাওয়া গেছে: {filteredNews.length} টি
          </span>
        </div>

        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[var(--surface-2)] rounded-2xl border border-[var(--border)]">
            <p className="text-base text-[var(--text-2)]">
              কোনো সংবাদ পাওয়া যায়নি। অন্য কিছু দিয়ে সার্চ করুন।
            </p>
          </div>
        )}

        <VideoNewsSection />
        <NewsletterNotice />
      </div>
    </main>
  );
}