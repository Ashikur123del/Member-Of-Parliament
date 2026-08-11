"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheckCircle } from "react-icons/fi";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-2">
          সরাসরি বার্তা জানান
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-2)] mb-6">
          আপনার বার্তা, পরামর্শ বা মতামত সরাসরি পাঠাতে নিচের ফর্মটি পূরণ করুন।
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 text-center bg-[var(--surface-2)] border border-[var(--primary)]/30 rounded-2xl my-auto"
          >
            <div className="w-14 h-14 bg-[var(--primary-light)] text-[var(--primary)] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              <FiCheckCircle />
            </div>
            <h4 className="text-lg font-bold text-[var(--text)] mb-2">
              ধন্যবাদ! আপনার বার্তাটি গৃহীত হয়েছে।
            </h4>
            <p className="text-xs text-[var(--text-2)] max-w-md mx-auto mb-6">
              আমাদের দায়িত্বপ্রাপ্ত কর্মকর্তা দ্রুত আপনার সাথে যোগাযোগ করবেন।
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs font-semibold text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
            >
              পুনরায় বার্তা পাঠান
            </button>
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
                    placeholder="যেমন: আব্দুল করিম"
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
                আপনার বার্তা বা বক্তব্য *
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute left-3.5 top-3 text-[var(--muted)] text-sm" />
                <textarea
                  required
                  rows={4}
                  placeholder="এখানে আপনার বিস্তারিত বক্তব্য লিখুন..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-[var(--primary)] hover:opacity-90 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <FiSend className="text-base" />
              <span>বার্তা পাঠান</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};