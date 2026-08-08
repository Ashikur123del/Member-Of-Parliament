"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconType } from "react-icons";
import {
  FiExternalLink,
  FiCalendar,
  FiArrowRight,
  FiBriefcase,
  FiActivity,
  FiAward,
  FiRadio,
  FiPlay,
  FiX,
} from "react-icons/fi";

export interface PressRelease {
  id: string;
  title: string;
  source: string;
  date: string;
  snippet: string;
  link: string;
  category: string;
  icon: IconType;
  thumbnail: string;
  videoUrl: string; // YouTube Embed URL অথবা mp4 লিঙ্ক
}

const defaultPressData: PressRelease[] = [
  {
    id: "1",
    title: "সাভার ও আশুলিয়ার টেকসই উন্নয়নে নতুন মাস্টারপ্ল্যান ঘোষণা",
    source: "দৈনিক প্রথম আলো",
    date: "১০ মে, ২০২৬",
    snippet:
      "শিল্পাঞ্চলের ট্রাফিক ব্যবস্থার আধুনিকীকরণ এবং পরিবেশবান্ধব বর্জ্য ব্যবস্থাপনার উপর বিশেষ জোর দেওয়া হয়েছে...",
    link: "/newsupdates",
    category: "উন্নয়ন পরিকল্পনা",
    icon: FiBriefcase,
    thumbnail:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // আপনার ভিডিও লিঙ্ক বসান
  },
  {
    id: "2",
    title: "যুব সমাজ ও শ্রমিকদের কর্মসংস্থান নিয়ে বিশেষ আলোচনা সভা",
    source: "The Daily Star",
    date: "২৮ এপ্রিল, ২০২৬",
    snippet:
      "আইটি প্রশিক্ষণ ও ভোকেশনাল শিক্ষার মাধ্যমে সাভারের তরুণ সমাজকে দক্ষ জনশক্তিতে রূপান্তরের উদ্যোগ...",
    link: "/newsupdates",
    category: "কর্মসংস্থান",
    icon: FiAward,
    thumbnail:
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "স্বাস্থ্যসেবা জনগণের দোরগোড়ায় পৌঁছে দিতে ফ্রী মেডিকেল ক্যাম্প",
    source: "সমকাল",
    date: "১৫ মার্চ, ২০২৬",
    snippet:
      "দিনব্যাপী আয়োজিত স্বাস্থ্যসেবা ক্যাম্পে সাভার ও আশুলিয়ার প্রায় ৫,০০০ সাধারণ মানুষ বিনামূল্যে সেবা পান...",
    link: "/newsupdates",
    category: "জনসেবা",
    icon: FiActivity,
    thumbnail:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function MediaPress() {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Header Section */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-2 text-xs font-bold text-[var(--primary)] uppercase tracking-widest px-4 py-1.5 rounded-full bg-[var(--primary-light)] border border-[var(--primary)]/20 shadow-sm">
          <FiRadio className="text-sm animate-pulse" />
          <span>মিডিয়া ও প্রেস</span>
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text)] tracking-tight">
          সংবাদ ও ভিডিও খবরাখবর
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed">
          বিভিন্ন জাতীয় ও আন্তর্জাতিক গণমাধ্যমে সাভার-আশুলিয়ার উন্নয়ন ও সামাজিক কার্যক্রমের সংবাদ ও ভিডিওসমূহ।
        </p>
      </div>

      {/* 2. Press Releases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {defaultPressData.map((item) => {
          return (
            <article
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail Container with Play Hover Effect */}
              <div
                onClick={() =>
                  setSelectedVideo({ url: item.videoUrl, title: item.title })
                }
                className="relative w-full h-48 bg-slate-900 overflow-hidden cursor-pointer group/thumb"
              >
                {/* Background Image */}
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover/thumb:scale-110 transition-transform duration-500 opacity-90 group-hover/thumb:opacity-75"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/50 transition-colors duration-300" />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 z-10 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                  {item.category}
                </span>

                {/* Video Play Button (Pops up on hover) */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring on hover */}
                    <span className="absolute w-16 h-16 bg-[var(--primary)] rounded-full animate-ping opacity-0 group-hover/thumb:opacity-75 transition-opacity" />
                    
                    <button
                      aria-label="Play Video"
                      className="relative w-14 h-14 bg-[var(--primary)] text-white rounded-full flex items-center justify-center shadow-lg group-hover/thumb:scale-110 transition-transform duration-300"
                    >
                      <FiPlay className="text-xl ml-1 fill-current" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Source & Date Meta */}
                  <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                    <span className="font-bold text-[var(--text-2)]">
                      {item.source}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiCalendar />
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() =>
                      setSelectedVideo({ url: item.videoUrl, title: item.title })
                    }
                    className="text-lg font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors leading-snug cursor-pointer"
                  >
                    {item.title}
                  </h3>

                  {/* Snippet */}
                  <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed line-clamp-3">
                    {item.snippet}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-4 border-t border-[var(--border)]/60 flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors"
                  >
                    <span>মূল সংবাদ দেখুন</span>
                    <FiExternalLink className="text-sm" />
                  </Link>

                  <button
                    onClick={() =>
                      setSelectedVideo({ url: item.videoUrl, title: item.title })
                    }
                    className="text-xs font-bold text-[var(--primary)] flex items-center gap-1 hover:underline"
                  >
                    <FiPlay className="text-xs" />
                    <span>ভিডিও দেখুন</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* 3. Media Kit Callout */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-lg font-bold text-[var(--text)]">
            অফিসিয়াল প্রেস কিট ও মিডিয়া ইনকোয়ারি
          </h4>
          <p className="text-xs sm:text-sm text-[var(--text-2)]">
            সাংবাদিক ও মিডিয়া কর্মীদের জন্য হাই-রেজুলেশন লোগো ও বায়ো ফাইল ডাউনলোডের জন্য প্রস্তুত।
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="btn-primary text-xs sm:text-sm py-2.5 px-4 gap-2 inline-flex items-center rounded-xl bg-[var(--primary)] text-white font-bold"
          >
            <span>যোগাযোগ করুন</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">

          <div
            className="absolute inset-0"
            onClick={() => setSelectedVideo(null)}
          />
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10">
            <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white truncate pr-4">
                {selectedVideo.title}
              </h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`${selectedVideo.url}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}