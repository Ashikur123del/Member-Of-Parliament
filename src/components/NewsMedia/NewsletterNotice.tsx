"use client";

import React, { useState } from "react";
import { FiBell, FiSend } from "react-icons/fi";

export const NewsletterNotice = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ধন্যবাদ! এলাকার সর্বশেষ আপডেট এখন থেকে ইমেইলে পেয়ে যাবেন।");
    setEmail("");
  };

  return (
    <section className="mt-16 p-6 sm:p-10 rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-3 border-b lg:border-b-0 lg:border-r border-[var(--border)] pb-6 lg:pb-0 lg:pr-8">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
            <FiBell className="text-lg animate-bounce" />
            <span>জরুরি হেল্পলাইন ও নোটিশ</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)]">
            যেকোনো জরুরি প্রয়োজনে নাগরিক সেবা টিম
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
            সাভার ও আশুলিয়া এলাকার যেকোনো অবকাঠামোগত সমস্যা, ডাইভারশন বা জরুরি সহায়তার জন্য সরাসরি আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করতে পারেন।
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--text)]">
            ইমেইলে সরাসরি নোটিফিকেশন পান
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-2)]">
            সপ্তাহের সেরা সংবাদ ও জরুরি নোটিশ আপনার ইনবক্সে পেতে সাবস্ক্রাইব করুন।
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="আপনার ইমেইল লিখুন"
              className="flex-1 px-4 py-3 text-sm rounded-xl bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--primary)] outline-none text-[var(--text)]"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-[var(--primary)] text-white font-bold text-sm hover:bg-[var(--primary)]/90 transition-all flex items-center gap-2 shrink-0"
            >
              <FiSend />
              <span className="hidden sm:inline">সাবস্ক্রাইব</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};