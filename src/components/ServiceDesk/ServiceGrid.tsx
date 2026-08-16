"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiMessageSquare,
  FiUserCheck,
  FiHeart,
  FiArrowRight,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import Link from "next/link";

interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  responseTime: string;
  icon: React.ElementType;
  actionText: string;
  badge?: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "অনলাইন সুপারিশপত্র",
    subtitle: "অফিশিয়াল রিকমেন্ডেশন লেটার",
    desc: "চাকরি, শিক্ষা বা অন্যান্য প্রাতিষ্ঠানিক কাজের জন্য নাগরিক ডিজিটাল সুপারিশপত্রের আবেদন।",
    features: ["স্মার্ট ভেরিফিকেশন", "পিডিএফ ডাউনলোড"],
    responseTime: "২৪-৪৮ ঘণ্টার মধ্যে",
    icon: FiFileText,
    actionText: "আবেদন জমা দিন",
    badge: "জনপ্রিয়",
  },
  {
    id: 2,
    title: "অভিযোগ ও নাগরিক পরামর্শ",
    subtitle: "সরাসরি পর্যবেক্ষণ কেন্দ্র",
    desc: "রাস্তাঘাট, ড্রেনেজ, বিদ্যুৎ বা এলাকার যেকোনো নাগরিক সমস্যা নিয়ে সরাসরি আপনার মতামত ও অভিযোগ পাঠান।",
    features: ["গোপনীয়তা রক্ষা", "লাইভ ট্র্যাকিং"],
    responseTime: "২৪ ঘণ্টার মধ্যে পর্যালোচিত",
    icon: FiMessageSquare,
    actionText: "অভিযোগ পেশ করুন",
  },
  {
    id: 3,
    title: "সাক্ষাৎকারের সময়সূচী",
    subtitle: "সরাসরি বৈঠক ও আলোচনা",
    desc: "ব্যক্তিগত, সামাজিক বা এলাকাভিত্তিক গুরুত্বপূর্ণ বিষয় নিয়ে সরাসরি মিটিংয়ের জন্য অ্যাপয়েন্টমেন্ট নিন।",
    features: ["তারিখ নির্বাচনের সুবিধা", "এসএমএস নিশ্চিতকরণ"],
    responseTime: "৩-৫ কার্যদিবস",
    icon: FiUserCheck,
    actionText: "সময় নির্ধারণ করুন",
  },
  {
    id: 4,
    title: "জরুরি মানবিক সহায়তা",
    subtitle: "দুস্থ ও চিকিৎসা সহায়তা",
    desc: "জরুরি চিকিৎসা, দুস্থ পরিবার সহায়তা বা বিশেষ মানবিক অনুদানের জন্য কল্যাণ তহবিলের আওতায় আবেদন।",
    features: ["জরুরি প্রসেসিং", "সহজ শর্তাবলী"],
    responseTime: "জরুরি ভিত্তিতে অগ্রাধিকার",
    icon: FiHeart,
    actionText: "সহায়তার আবেদন",
  },
];

export const ServiceGrid = () => {
  return (
    <section className="bg-[var(--surface)] px-4 py-10 md:py-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-[var(--border)] pb-6">
          <div>
            <span className="text-sm font-bold text-[var(--primary)] uppercase tracking-wider">
              ডিজিটাল সেবা তালিকা
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[var(--text)] mt-1">
              আপনি কীভাবে সেবা নিতে চান?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-2)] max-w-md leading-relaxed">
            আপনার কাঙ্ক্ষিত সেবাটি নির্বাচন করুন এবং সহজ কয়েকটি ধাপে ফর্ম পূরণ
            করে জমা দিন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative group flex flex-col justify-between bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)]/50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -right-12 -top-12 w-28 h-28 bg-[var(--primary)]/5 rounded-full blur-2xl group-hover:bg-[var(--primary)]/15 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-3xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon />
                    </div>
                    {item.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[var(--border)]/60 mb-6">
                    {item.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-semibold text-[var(--text-2)]"
                      >
                        <FiCheckCircle className="text-[var(--primary)] text-sm flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-2 pt-4 border-t border-[var(--border)]/40 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--muted)]">
                    <FiClock className="text-sm text-[var(--primary)]" />
                    <span>গড় সময়: {item.responseTime}</span>
                  </div>

                  <Link
                    href="#complain-form"
                    className="w-full py-3 px-4 text-sm font-bold rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:bg-[var(--primary)] hover:text-white"
                  >
                    <span>{item.actionText}</span>
                    <FiArrowRight className="text-base transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};