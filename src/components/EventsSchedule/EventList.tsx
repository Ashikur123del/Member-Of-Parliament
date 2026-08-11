"use client";

import React from "react";
import { FiCheckCircle, FiClock, FiMapPin } from "react-icons/fi";

const allSchedule = [
  {
    id: 1,
    title: "আশুলিয়া ইন্ডাস্ট্রিয়াল জোনের মালিক ও শ্রমিক সংগঠনের সাথে বৈঠক",
    date: "১০ আগস্ট",
    time: "বিকাল ০৪:০০ টা",
    location: "সাভার ডাকবাংলো",
    status: "completed",
  },
  {
    id: 2,
    title: "উপজেলা স্বাস্থ্য কমপ্লেক্সের নতুন অ্যাম্বুলেন্স সার্ভিস উদ্বোধন",
    date: "০৫ আগস্ট",
    time: "সকাল ১১:৩০ টা",
    location: "উপজেলা স্বাস্থ্য কমপ্লেক্স",
    status: "completed",
  },
  {
    id: 3,
    title: "বৃক্ষরোপণ কর্মসূচি ও পরিবেশ সচেতনতা র‌্যালি",
    date: "০১ আগস্ট",
    time: "সকাল ০৯:০০ টা",
    location: "সাভার কলেজ মাঠ",
    status: "completed",
  },
];

export const EventList = () => {
  return (
    <div className="mb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-6">
        সাম্প্রতিক সম্পন্ন হওয়া ইভেন্টসমূহ
      </h2>

      <div className="space-y-3">
        {allSchedule.map((item) => (
          <div
            key={item.id}
            className="p-4 sm:p-5 bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-lg shrink-0 mt-0.5">
                <FiCheckCircle />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text)] leading-snug">
                  {item.title}
                </h4>
                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-[var(--muted)]">
                  <span className="font-semibold text-[var(--primary)]">{item.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FiClock className="text-xs" /> {item.time}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FiMapPin className="text-xs" /> {item.location}
                  </span>
                </div>
              </div>
            </div>

            <span className="self-start sm:self-center px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 shrink-0">
              সম্পন্ন
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};