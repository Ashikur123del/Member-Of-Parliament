"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMaximize2,
  FiX,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiTag,
} from "react-icons/fi";

import G1 from "@/assets/G-1.jpg";
import G2 from "@/assets/G-2.jpg";
import G3 from "@/assets/G-3.jpg";
import G4 from "@/assets/G-4.jpg";
import G5 from "@/assets/img-6.jpg";
import G6 from "@/assets/img-7.jpg";

interface PhotoItem {
  id: number;
  title: string;
  category: "development" | "events" | "inspection" | "relief";
  date: string;
  image: StaticImageData | string;
}

const photoData: PhotoItem[] = [
  {
    id: 1,
    title: "সাভার ৪-লেন মহাসড়ক উন্নয়ন কাজ পরিদর্শন",
    category: "inspection",
    date: "০৫ আগস্ট, ২০২৬",
    image: G1,
  },
  {
    id: 2,
    title: "আশুলিয়া হাইস্কুল মাঠে বার্ষিক ক্রীড়া প্রতিযোগিতা ও পুরস্কার বিতরণ",
    category: "events",
    date: "০১ আগস্ট, ২০২৬",
    image: G2,
  },
  {
    id: 3,
    title: "নতুন মডেল হাইস্কুল ভবন উদ্বোধন অনুষ্ঠান",
    category: "development",
    date: "২৮ জুলাই, ২০২৬",
    image: G3,
  },
  {
    id: 4,
    title: "বন্যায় ক্ষতিগ্রস্ত পরিবারের মাঝে জরুরি ত্রাণ সামগ্রী বিতরণ",
    category: "relief",
    date: "২০ জুলাই, ২০২৬",
    image: G4,
  },
  {
    id: 5,
    title: "উপজেলা ডিজিটাল উদ্ভাবনী মেলা ২০২৬-এর শুভ উদ্বোধন",
    category: "events",
    date: "১৫ জুলাই, ২০২৬",
    image: G5,
  },
  {
    id: 6,
    title: "আশুলিয়া কেন্দ্রীয় ড্রেনেজ ব্যবস্থা পুনর্নির্মাণ প্রকল্প পরিদর্শন",
    category: "inspection",
    date: "১০ জুলাই, ২০২৬",
    image: G6,
  },
];

export const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = [
    { key: "all", label: "সব ছবি" },
    { key: "development", label: "উন্নয়ন কাজ" },
    { key: "inspection", label: "মাঠপর্যায় পরিদর্শন" },
    { key: "events", label: "সামাজিক ও সাংস্কৃতিক ইভেন্ট" },
    { key: "relief", label: "ত্রাণ ও সাহায্য" },
  ];

  const categoryLabels: Record<string, string> = {
    development: "উন্নয়ন কাজ",
    inspection: "মাঠপর্যায় পরিদর্শন",
    events: "সামাজিক ইভেন্ট",
    relief: "ত্রাণ ও সাহায্য",
  };

  const filteredPhotos =
    activeCategory === "all"
      ? photoData
      : photoData.filter((photo) => photo.category === activeCategory);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1
    );
  }, [selectedIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0
    );
  }, [selectedIndex, filteredPhotos.length]);

  useEffect(() => { 
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  const getCategoryCount = (key: string) => {
    if (key === "all") return photoData.length;
    return photoData.filter((item) => item.category === key).length;
  };

  const currentPhoto =
    selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

  return (
    <section className="my-12 p-4  md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-4 border-b border-[var(--border)]">
          <div>
            <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">
              ছবি সংকলন
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] mt-1">
              ফটো গ্যালারি
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-2)] mt-1">
              এলাকার সার্বিক উন্নয়ন কর্মকাণ্ড ও বিশেষ মুহূর্তের চিত্র
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full lg:w-auto scrollbar-none">
            <FiFilter className="text-[var(--primary)] text-lg shrink-0 hidden sm:block" />
            {categories.map((cat) => {
              const count = getCategoryCount(cat.key);
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setSelectedIndex(null);
                  }}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
                    isActive
                      ? "text-white"
                      : "bg-[var(--surface-2)] text-[var(--text-2)] hover:bg-[var(--surface)] border border-[var(--border)]"
                  }`}
                >

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[var(--primary)] rounded-xl shadow-lg shadow-[var(--primary)]/20 z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                  <span
                    className={`relative z-10 px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[var(--border)] text-[var(--text-2)]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                key={photo.id}
                onClick={() => setSelectedIndex(index)}
                className="group relative rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-72 sm:h-80 w-full bg-black/20 overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
                      <FiTag className="text-[var(--primary)]" />
                      {categoryLabels[photo.category] || photo.category}
                    </span>

                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <FiMaximize2 className="text-sm" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 inset-x-4 space-y-2 z-10">
                    <div className="flex items-center gap-1 text-[11px] font-medium text-amber-300">
                      <FiCalendar />
                      <span>{photo.date}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div> 

        <AnimatePresence>
          {currentPhoto && selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-xl"
            >
              <div
                className="absolute inset-0"
                onClick={() => setSelectedIndex(null)}
              />

              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl sm:text-2xl transition-all z-30 backdrop-blur-md"
                aria-label="Close"
              >
                <FiX />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[var(--primary)] text-white text-xl sm:text-2xl transition-all z-30 backdrop-blur-md"
                aria-label="Previous Image"
              >
                <FiChevronLeft />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[var(--primary)] text-white text-xl sm:text-2xl transition-all z-30 backdrop-blur-md"
                aria-label="Next Image"
              >
                <FiChevronRight />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center z-20"
              >
                <div className="relative w-full h-[55vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPhoto.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={currentPhoto.image}
                        alt={currentPhoto.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="text-center mt-4 space-y-1.5 px-4 max-w-2xl">
                  <div className="flex items-center justify-center gap-3 text-xs text-gray-300">
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--primary)] text-white font-bold">
                      {selectedIndex + 1} / {filteredPhotos.length}
                    </span>
                    <span>•  </span>
                    <span>{currentPhoto.date}</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white leading-relaxed">
                    {currentPhoto.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};