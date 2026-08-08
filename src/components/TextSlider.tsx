"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FiVolume2, FiStar, FiCheckCircle } from "react-icons/fi";

export interface TextSlideItem {
  id?: string | number;
  text: string;
  icon?: IconType;
}

export interface TextSliderProps {
  items?: TextSlideItem[];
  duration?: number; // এক চক্কর সম্পন্ন হতে কত সেকেণ্ড সময় নেবে
  pauseOnHover?: boolean;
  bgVariant?: "primary" | "surface";
}

const defaultItems: TextSlideItem[] = [
  { text: "স্মার্ট সাভার ও আশুলিয়া গড়ার লক্ষ্যে আমরা ঐক্যবদ্ধ।", icon: FiStar },
  { text: "জনসেবায় নিবেদিতপ্রাণ—আপনার যেকোনো প্রয়োজনে পাশে আছি।", icon: FiCheckCircle },
  { text: "শিক্ষা, স্বাস্থ্য ও অবকাঠামোগত উন্নয়নে নিরবচ্ছিন্ন কাজ চলছে।", icon: FiStar },
  { text: "জরুরি প্রয়োজনে আমাদের হটলাইন নম্বরে যোগাযোগ করুন।", icon: FiCheckCircle },
];

export default function TextSlider({
  items = defaultItems,
  duration = 25,
  pauseOnHover = true,
  bgVariant = "primary",
}: TextSliderProps) {
  // অনবরত কোনো ল্যাগ ছাড়া ইনফিনিট স্ক্রোলের জন্য ডুপ্লিকেট আইটেম
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full relative z-40 select-none overflow-hidden">
      <div
        className={`w-full py-2.5 border-y border-[var(--border)] relative flex items-center shadow-sm ${
          bgVariant === "primary"
            ? "bg-[var(--primary)] text-white"
            : "bg-[var(--surface-2)] text-[var(--text)]"
        }`}
      >
        {/* সর্বশেষ আপডেট ফিক্সড ব্যাজ */}
        <div
          className={`shrink-0 z-20 px-3.5 py-1.5 ml-3 rounded-lg text-xs font-bold flex items-center gap-2 shadow-md ${
            bgVariant === "primary"
              ? "bg-white text-[var(--primary)]"
              : "bg-[var(--primary)] text-white"
          }`}
        >
          <FiVolume2 className="text-sm animate-pulse shrink-0" />
          <span className="whitespace-nowrap">সর্বশেষ আপডেট</span>
        </div>

        {/* Framer Motion Marquee Container */}
        <div className="relative w-full overflow-hidden flex items-center ml-3">
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap shrink-0"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: duration,
              repeat: Infinity,
            }}
            whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
          >
            {duplicatedItems.map((item, idx) => {
              const ItemIcon = item.icon || FiStar;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide shrink-0"
                >
                  <ItemIcon className="text-xs opacity-80 shrink-0" />
                  <span>{item.text}</span>
                  <span className="ml-6 text-xs opacity-30 font-normal">|</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}