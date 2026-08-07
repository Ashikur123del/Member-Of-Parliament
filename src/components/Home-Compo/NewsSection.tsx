"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiGlobe,
  FiCalendar,
  FiArrowRight,
  FiTag,
  FiShare2,
  FiFilter,
} from "react-icons/fi";

const NEWS_CATEGORIES = [
  { id: "all", label: "সব আপডেট" },
  { id: "press", label: "প্রেস রিলিজ" },
  { id: "event", label: "ইভেন্ট ও কার্যক্রম" },
  { id: "notice", label: "জরুরি নোটিশ" },
];

const NEWS_DATA = [
  {
    id: 1,
    title: "আশুলিয়া ড্রেনেজ মাস্টারপ্ল্যানের কাজ সরজমিনে পরিদর্শন করলেন এমপি",
    category: "event",
    categoryLabel: "ইভেন্ট ও কার্যক্রম",
    date: "০৫ আগস্ট, ২০২৬",
    readTime: "৩ মিনিট পড়া",
    summary: "বর্ষাকালে জলাবদ্ধতা দূরীকরণে বাইপাইল ও ধামসোনা খালের চলমান পুনঃখনন কাজ পরিদর্শন করে দ্রুত বাস্তবায়নের নির্দেশ দেওয়া হয়েছে।",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "সাভারের বেকার তরুণ-তরুণীদের জন্য বিনামূল্যে ফ্রিল্যান্সিং কোর্স শুরু",
    category: "press",
    categoryLabel: "প্রেস রিলিজ",
    date: "০১ আগস্ট, ২০২৬",
    readTime: "২ মিনিট পড়া",
    summary: "স্মার্ট সাভার গড়তে আইটি সেন্টারে ৫০০ জন তরুণ-তরুণীকে নিয়ে ফ্রিল্যান্সিং ও স্কিল ডেভেলপমেন্টের দ্বিতীয় ব্যাচ শুরু হলো।",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "জরুরি নোটিশ: সাভার পৌরসভার নতুন পানির লাইন সংযোগ আবেদন সংক্রান্ত",
    category: "notice",
    categoryLabel: "জরুরি নোটিশ",
    date: "২৮ জুলাই, ২০২৬",
    readTime: "১ মিনিট পড়া",
    summary: "সাভার পৌরসভার ৫ ও ৬ নম্বর ওয়ার্ডের বাসিন্দাদের আগামী ১৫ আগস্টের মধ্যে নতুন সুপেয় পানির লাইনের জন্য আবেদনের অনুরোধ করা হচ্ছে।",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=600",
  },
];

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredNews = activeTab === "all" ? NEWS_DATA : NEWS_DATA.filter((item) => item.category === activeTab);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--surface-2)] text-[var(--text)] border-b border-[var(--border)] overflow-hidden">
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs sm:text-sm font-semibold border border-[var(--primary)]/20 shadow-sm">
              <FiGlobe className="text-base" />
              <span>প্রেস ও মিডিয়া আপডেট</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              সাম্প্রতিক খবর ও অফিশিয়াল নোটিশ
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed">
              নির্বাচনী এলাকার চলমান সামাজিক কার্যক্রম, সরকারি ঘোষণা ও সংবাদ বিজ্ঞপ্তিসমূহ সম্পর্কে আপডেট থাকুন।
            </p>
          </div>
          <Link
            href="/media/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:underline shrink-0"
          >
            <span>সব খবর ও প্রেস রিলিজ দেখুন</span>
            <FiArrowRight />
          </Link>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs text-[var(--text-2)] font-medium flex items-center gap-1 shrink-0 pr-2">
            <FiFilter /> ফিল্টার:
          </span>
          {NEWS_CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "bg-[var(--surface)] text-[var(--text-2)] border border-[var(--border)] hover:border-[var(--primary)]/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((news) => (
              <motion.div
                key={news.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[var(--primary)]/40 transition-all shadow-sm group"
              >
                <div>
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-[var(--surface)]/90 backdrop-blur-md text-[var(--primary)] border border-[var(--primary)]/20 shadow-sm">
                        {news.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[var(--text-2)]">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="text-[var(--primary)]" />
                        {news.date}
                      </span>
                      <span>{news.readTime}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold leading-snug group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                      {news.title}
                    </h3>

                    <p className="text-xs text-[var(--text-2)] line-clamp-3 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[var(--border)]/50 mt-4">
                  <Link
                    href={`/media/news/${news.id}`}
                    className="pt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] group-hover:translate-x-1 transition-transform"
                  >
                    <span>বিস্তারিত পড়ুন</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold">জরুরি আপডেট ও ইশতেহার সরাসরি পান</h4>
            <p className="text-xs sm:text-sm text-[var(--text-2)]">
              ইমেইল অ্যাড্রেস দিয়ে সাবস্ক্রাইব করুন এবং এলাকার প্রতিটি আপডেট পান সরাসরি আপনার ইনবক্সে।
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-2 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="আপনার ইমেইল লিখুন..."
              className="px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[var(--surface-2)] border border-[var(--border)] focus:outline-none focus:border-[var(--primary)] w-full sm:w-64"
            />
            <button
              type="submit"
              className="btn-primary text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shrink-0"
            >
              সাবস্ক্রাইব করুন
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}