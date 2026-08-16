"use client";

import Link from "next/link";
import React from "react";
import { FiSearch, FiPhone, FiCheckCircle } from "react-icons/fi";

const emergencyHotlines = [
  { label: "জাতীয় জরুরি সেবা", number: "৯৯৯", desc: "পুলিশ, ফায়ার সার্ভিস ও অ্যাম্বুলেন্স" },
  { label: "সরকারি তথ্য ও সেবা", number: "৩৩৩", desc: "সকল সরকারি সেবার তথ্য" },
  { label: "সাভার উপজেলা কন্টাক্ট", number: "০৯৬১১-০০০০০", desc: "নাগরিক সেবা ও পরামর্শ" },
];

export const HelpSearch = ({ onSearch }: { onSearch?: (query: string) => void }) => {
  return (
    <div className="space-y-6">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-2">
          আপনার কী সাহায্য প্রয়োজন?
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-2)] mb-6 max-w-lg mx-auto">
          যেকোনো প্রশ্ন, নাগরিক সেবা বা হেল্পলাইন সংক্রান্ত তথ্য সহজে খুঁজতে নিচে সার্চ করুন।
        </p>

        <div className="relative max-w-2xl mx-auto">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] text-lg sm:text-xl" />
          <input
            type="text"
            onChange={(e) => onSearch && onSearch(e.target.value)}
            placeholder="যেমন: ট্রেড লাইসেন্স, জাতীয় পরিচয়পত্র, ভাতা সংক্রান্ত..."
            className="w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none transition-all shadow-inner"
          />
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {emergencyHotlines.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-2xl flex items-start gap-4 hover:border-[var(--primary)]/50 transition-all shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-lg shrink-0 mt-0.5">
              <FiPhone />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[var(--muted)] block">
                {item.label}
              </span>
              <Link
                href={`tel:${item.number}`}
                className="text-lg font-black text-[var(--primary)] hover:underline block"
              >
                {item.number}
              </Link>
              <p className="text-[11px] text-[var(--text-2)] mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};