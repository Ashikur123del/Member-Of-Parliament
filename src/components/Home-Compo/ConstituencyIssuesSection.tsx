"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiArrowRight,
  FiMapPin,
  FiFilter,
} from "react-icons/fi";

const CATEGORIES = [
  { id: "all", label: "সব সমস্যা" },
  { id: "drainage", label: "ড্রেনেজ ও জলাবদ্ধতা" },
  { id: "roads", label: "সড়ক ও যানজট" },
  { id: "health", label: "স্বাস্থ্যসেবা" },
  { id: "youth", label: "যুব ও আইটি" },
];

const ISSUES_DATA = [
  {
    id: 1,
    title: "বর্ষাকালে ধামসোনা ও আশুলিয়া এলাকার তীব্র জলাবদ্ধতা",
    category: "drainage",
    location: "ধামসোনা ও ইয়ারপুর ইউনিয়ন",
    severity: "উচ্চ অগ্রাধিকার",
    status: "কাজ চলমান",
    statusType: "in-progress",
    progress: 65,
    action:
      "স্মার্ট ড্রেনেজ মাস্টারপ্ল্যান অনুমোদন এবং বাইপাইল খাল পুনঃখননের কাজ দ্রুতগতিতে চলছে।",
    image:
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "নবীনগর-চন্দ্রা মহাসড়কে তীব্র যানজট ও ফুটপাত দখল",
    category: "roads",
    location: "নবীনগর বাসস্ট্যান্ড ও বাইপাইল মোড়",
    severity: "জরুরি",
    status: "আংশিক সম্পন্ন",
    statusType: "partial",
    progress: 40,
    action:
      "অবৈধ হকার উচ্ছেদ অভিযান সম্পন্ন এবং পথচারীদের জন্য ৩টি নতুন ওভারব্রিজ নির্মাণাধীন।",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "পোশাকশিল্পের শ্রমিকদের সরকারি স্বাস্থ্যসেবার অপ্রতুলতা",
    category: "health",
    location: "আশুলিয়া শিল্পাঞ্চল",
    severity: "উচ্চ অগ্রাধিকার",
    status: "পরিকল্পনাধীন",
    statusType: "planned",
    progress: 20,
    action:
      "আশুলিয়ায় বিশেষায়িত ২০০ শয্যা সরকারি হাসপাতাল নির্মাণের জমি অধিগ্রহণ সম্পন্ন হয়েছে।",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "শিক্ষিত তরুণদের জন্য উপযুক্ত কারিগরি ও আইটি প্রশিক্ষণের অভাব",
    category: "youth",
    location: "সাভার পৌরসভা ও আশুলিয়া",
    severity: "মাঝারি",
    status: "সম্পন্ন",
    statusType: "completed",
    progress: 100,
    action:
      "বিনামূল্যে ফ্রিল্যান্সিং ল্যাব চালু করা হয়েছে এবং ১ম ব্যাচের ৩০০ জনের প্রশিক্ষণ সম্পন্ন।",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ConstituencyIssuesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredIssues =
    activeCategory === "all"
      ? ISSUES_DATA
      : ISSUES_DATA.filter((item) => item.category === activeCategory);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--surface-2)] text-[var(--text)] border-b border-[var(--border)] overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-xs font-semibold border border-rose-500/20">
              <FiAlertCircle />
              <span>বিদ্যমান সমস্যা ও সমাধানের রোডম্যাপ</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              নাগরিকদের চিহ্নিত সমস্যা ও অগ্রগতি
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed">
              সাভার ও আশুলিয়ার স্থানীয় নাগরিকদের প্রধান সমস্যাসমূহ সরাসরি
              চিহ্নিত করে দৃশ্যমান সমাধানে কাজ করা হচ্ছে।
            </p>
          </div>

          <Link
            href="/constituency"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:underline shrink-0"
          >
            <span>সবগুলো সমস্যার ট্র্যাকার দেখুন</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs text-[var(--text-2)] font-medium flex items-center gap-1 shrink-0 pr-2">
            <FiFilter /> ফিল্টার:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "bg-[var(--surface)] text-[var(--text-2)] border border-[var(--border)] hover:border-[var(--primary)]/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredIssues.map((issue) => (
              <motion.div
                key={issue.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[var(--primary)]/40 transition-all shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-medium text-[var(--text-2)] flex items-center gap-1">
                      <FiMapPin className="text-[var(--primary)]" />
                      {issue.location}
                    </span>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        issue.statusType === "completed"
                          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                          : issue.statusType === "in-progress"
                          ? "bg-[var(--primary-light)] text-[var(--primary)] border-[var(--primary)]/20"
                          : issue.statusType === "partial"
                          ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                          : "bg-purple-500/10 text-purple-600 border-purple-500/20"
                      }`}
                    >
                      {issue.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    <div className="sm:col-span-8 space-y-2">
                      <h3 className="text-base sm:text-lg font-bold leading-snug">
                        {issue.title}
                      </h3>
                      <span className="inline-block text-[10px] font-medium px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 border border-rose-500/20">
                        গুরুত্ব: {issue.severity}
                      </span>
                    </div>

                    <div className="sm:col-span-4 relative h-24 rounded-xl overflow-hidden border border-[var(--border)]">
                      <Image
                        src={issue.image}
                        alt={issue.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs text-[var(--text-2)] font-medium">
                      <span>সমাধানের অগ্রগতি</span>
                      <span>{issue.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[var(--surface-2)] overflow-hidden border border-[var(--border)]">
                      <div
                        className="h-full bg-[var(--primary)] rounded-full transition-all duration-500"
                        style={{ width: `${issue.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-xs text-[var(--text-2)] flex items-start gap-2">
                    {issue.statusType === "completed" ? (
                      <FiCheckCircle className="text-emerald-500 shrink-0 mt-0.5 text-sm" />
                    ) : (
                      <FiClock className="text-[var(--primary)] shrink-0 mt-0.5 text-sm" />
                    )}
                    <p>
                      <strong className="text-[var(--text)]">
                        গৃহীত ব্যবস্থা:
                      </strong>{" "}
                      {issue.action}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-10 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold">
              আপনার এলাকার কোনো সমস্যা জানাতে চান?
            </h4>
            <p className="text-xs text-[var(--text-2)]">
              নাগরিক সেবা ডেস্কে সরাসরি আপনার এলাকার কোনো অভিযোগ বা প্রস্তাবনা
              পেশ করুন।
            </p>
          </div>
          <Link
            href="/complain"
            className="btn-primary text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shrink-0"
          >
            অভিযোগ জমা দিন
          </Link>
        </div>
      </div>
    </section>
  );
}