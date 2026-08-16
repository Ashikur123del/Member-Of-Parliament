"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend,
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiMapPin,
  FiPaperclip,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const complainCategories = [
  "রাস্তাঘাট ও অবকাঠামো",
  "ড্রেনেজ ও বর্জ্য ব্যবস্থাপনা",
  "বিদ্যুৎ ও গ্যাস সরবরাহ",
  "পানি ও পয়ঃনিষ্কাশন",
  "আইন-শৃঙ্খলা ও নিরাপত্তা",
  "অন্যান্য সেবা সংক্রান্ত",
];

export const ComplainForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = "CMP-" + Math.floor(100000 + Math.random() * 900000);
    setTrackingId(randomId);
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6 pb-4 border-b border-[var(--border)]">
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)]">
          অভিযোগ বা নাগরিক সমস্যা দাখিল করুন
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-2)] mt-1">
          আপনার সমস্যা বা অভিযোগের সত্যতা যাচাই করে প্রয়োজনীয় ব্যবস্থা নেওয়া হবে।
        </p>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 text-center bg-[var(--surface-2)] border border-[var(--primary)]/30 rounded-2xl"
        >
          <div className="w-16 h-16 bg-[var(--primary-light)] text-[var(--primary)] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            <FiCheckCircle />
          </div>
          <h4 className="text-xl font-bold text-[var(--text)] mb-2">
            আপনার অভিযোগটি সফলভাবে গৃহীত হয়েছে!
          </h4>
          <p className="text-sm text-[var(--text-2)] max-w-md mx-auto mb-4">
            অভিযোগ অনুসন্ধানের জন্য আপনার ট্র্যাকিং নম্বরটি সংরক্ষণ করুন:
          </p>
          <div className="inline-block bg-[var(--surface)] border border-[var(--primary)] px-6 py-2.5 rounded-xl font-mono text-lg font-extrabold text-[var(--primary)] tracking-wider mb-6 shadow-xs">
            {trackingId}
          </div>
          <div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFileName("");
              }}
              className="px-6 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs sm:text-sm font-bold hover:opacity-90 transition-all"
            >
              নতুন অভিযোগ জমা দিন
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[var(--text)] mb-1.5">
                আপনার নাম *
              </label>
              <div className="relative">
                <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)] text-sm" />
                <input
                  type="text"
                  required
                  placeholder="যেমন: মোঃ রফিকুল ইসলাম"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-[var(--text)] mb-1.5">
                মোবাইল নম্বর *
              </label>
              <div className="relative">
                <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)] text-sm" />
                <input
                  type="tel"
                  required
                  placeholder="01700-000000"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[var(--text)] mb-1.5">
                ইমেইল (ঐচ্ছিক)
              </label>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)] text-sm" />
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-[var(--text)] mb-1.5">
                অভিযোগের ধরণ *
              </label>
              <select
                required
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none transition-colors"
              >
                <option value="">ক্যাটাগরি নির্বাচন করুন</option>
                {complainCategories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-[var(--text)] mb-1.5">
              ঘটনা/সমস্যার স্থান *
            </label>
            <div className="relative">
              <FiMapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)] text-sm" />
              <input
                type="text"
                required
                placeholder="যেমন: জামগড়া চৌরাস্তা, আশুলিয়া, সাভার"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[var(--text)] mb-1.5">
              অভিযোগের বিস্তারিত বিবরণ *
            </label>
            <div className="relative">
              <FiMessageSquare className="absolute left-3.5 top-3 text-[var(--muted)] text-sm" />
              <textarea
                required
                rows={5}
                placeholder="আপনার সমস্যার কথা বিস্তারিতভাবে লিখুন..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[var(--text)] mb-1.5">
              প্রমাণ/ছবি সংযুক্তি (ঐচ্ছিক)
            </label>
            <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface-2)] hover:border-[var(--primary)] cursor-pointer transition-colors text-xs text-[var(--text-2)]">
              <FiPaperclip className="text-base text-[var(--primary)]" />
              <span>{fileName ? fileName : "ছবি বা ডকুমেন্ট আপলোড করুন (সর্বোচ্চ ৫MB)"}</span>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          <div className="flex items-start gap-2 p-3 bg-[var(--primary-light)]/40 rounded-xl text-[11px] text-[var(--text-2)]">
            <FiAlertCircle className="text-base text-[var(--primary)] shrink-0 mt-0.5" />
            <span>
              মিথ্যা বা ভিত্তিহীন অভিযোগ দাখিল করা আইনত দণ্ডনীয়। আপনার প্রদানকৃত তথ্য গোপন রাখা হবে।
            </span>
          </div>
          
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-[var(--primary)] hover:opacity-90 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <FiSend className="text-base" />
            <span>অভিযোগ জমা দিন</span>
          </button>
        </form>
      )}
    </div>
  );
};