"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCpu,
  FiGlobe,
  FiZap,
  FiSmartphone,
  FiSliders,
  FiCheckCircle,
  FiArrowRight,
  FiMessageSquare,
  FiTerminal,
} from "react-icons/fi";

const categories = [
  { id: "all", label: "সব উদ্যোগ" },
  { id: "gov", label: "স্মার্ট সার্ভিস" },
  { id: "tech_youth", label: "আইটি প্রশিক্ষণ" },
  { id: "infra", label: "ডিজিটাল অবকাঠামো" },
];

const techPriorities = [
  {
    id: 1,
    category: "tech_youth",
    title: "আইটি হাই-টেক পার্ক ও ফ্রিল্যান্সিং হাব",
    description:
      "তরুণদের ফ্রিল্যান্সিং ও সফ্টওয়্যার ডেভেলপমেন্টে দক্ষ করতে কম্পিউটার ল্যাব ও ফ্রি ইন্টারনেট সুবিধা।",
    icon: FiCpu,
    image: "", 
    badge: "আইটি ট্রেনিং",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    stats: "৫,০০০+ তরুণদের লক্ষ্যমাত্রা",
  },
  {
    id: 2,
    category: "gov",
    title: "ওয়ান-স্টপ ডিজিটাল নাগরিক পোর্টাল",
    description:
      "মোবাইল অ্যাপের মাধ্যমে ঘরে বসেই সনদপত্র, ট্রেড লাইসেন্স ও অন্যান্য নাগরিক আবেদনের সুবিধা।",
    icon: FiSmartphone,
    image: "",
    badge: "স্মার্ট গভর্নেন্স",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    stats: "১০০% অনলাইন সেবা",
  },
  {
    id: 3,
    category: "infra",
    title: "AI-চালিত সিসিটিভি ও স্মার্ট নিরাপত্তা",
    description:
      "অপরাধ দমন ও নিরাপত্তা নিশ্চিত করতে গুরুত্বপূর্ণ পয়েন্টে কৃত্রিম বুদ্ধিমত্তা সম্পন্ন সিসিটিভি।",
    icon: FiZap,
    image: "",
    badge: "স্মার্ট নিরাপত্তা",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    stats: "২৪/৭ ডিজিটাল মনিটরিং",
  },
  {
    id: 4,
    category: "tech_youth",
    title: "স্মার্ট উদ্যোক্তা ও ফান্ডিং সুবিধা",
    description:
      "প্রযুক্তি ভিত্তিক নতুন স্টার্টআপ এবং তরুণ উদ্ভাবকদের বিজ মূলধন (Seed Fund) ও মেন্টরিং।",
    icon: FiTerminal,
    image: "",
    badge: "স্টার্টআপ সাপোর্ট",
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
    stats: "মেন্টরশিপ ও সহায়তা",
  },
  {
    id: 5,
    category: "infra",
    title: "স্মার্ট সোলার গ্রিড ও গ্রীন টেক",
    description:
      "রাস্তার লাইটিং ও সরকারি ভবনে সোলার শক্তি ব্যবহার করে পরিবেশবান্ধব গ্রীন এনার্জি প্রজেক্ট।",
    icon: FiGlobe,
    image: "",
    badge: "গ্রীন এনার্জি",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    stats: "নবায়নযোগ্য বিদ্যুৎ",
  },
  {
    id: 6,
    category: "gov",
    title: "ডিজিটাল কমপ্লেইন ও ট্র্যাকিং অ্যাপ",
    description:
      "রাস্তার সমস্যা বা এলাকার ইস্যুগুলোর ছবি তুলে সরাসরি মোবাইল অ্যাপে সাবমিট ও স্ট্যাটাস আপডেট।",
    icon: FiSliders,
    image: "",
    badge: "সেবা ডেস্ক",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    stats: "৪৮ ঘণ্টার মধ্যে আপডেট",
  },
];

export default function AITechPriorities() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? techPriorities
      : techPriorities.filter((item) => item.category === activeTab);

  return (
    <section className="relative py-10 md:py-24 bg-[var(--surface)] border-b border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-6 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-semibold border border-indigo-500/20 shadow-sm">
            <FiCpu className="text-base" />
            <span>স্মার্ট সিটি ও উদ্যোগ</span>
          </div>

          <h2 className="text-xl sm:text-4xl font-extrabold text-[var(--text)] tracking-tight">
            স্মার্ট সাভার: প্রযুক্তি ও উদ্যোগসমূহ
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed">
            তরুণদের প্রশিক্ষণ এবং সাধারণ মানুষের জন্য ডিজিটাল সেবা সহজীকরণের স্মার্ট প্ল্যান
          </p>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8 md:mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 scale-105"
                  : "bg-[var(--surface)] text-[var(--text-2)] hover:text-[var(--text)] border border-[var(--border)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filtered.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group relative h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-indigo-500/50 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        {item.image ? (
                          <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                          </div>
                        ) : (
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border ${item.color}`}>
                            <Icon />
                          </div>
                        )}
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--surface-2)] text-[var(--text-2)] border border-[var(--border)]">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[var(--text)] mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed mb-6 font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-medium text-indigo-600 dark:text-indigo-400">
                      <span className="flex items-center gap-1.5">
                        <FiCheckCircle />
                        {item.stats}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}