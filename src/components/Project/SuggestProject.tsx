"use client";

import React from "react";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const SuggestProject: React.FC = () => {
  return (
    <section
      id="suggest-project"
      className="max-w-7xl mx-auto px-4 sm:px-6 pt-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] p-6 sm:p-10 shadow-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center space-y-3 mb-8"
        >
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
            আপনার মতামত
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)]">
            নতুন প্রকল্পের প্রস্তাবনা দিন
          </h2>
          <p className="text-xs font-bold sm:text-sm text-[var(--text-2)] leading-relaxed">
            আপনার এলাকায় কোনো রাস্তা, ড্রেনেজ বা সামাজিক উন্নয়নের প্রয়োজন
            থাকলে আমাদের জানান। আপনার প্রস্তাবনাটি গুরুত্বসহকারে বিবেচনা করা
            হবে।
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
          className="max-w-2xl mx-auto space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[var(--text)]">
                আপনার নাম
              </label>
              <input
                type="text"
                placeholder="আপনার পুরো নাম লিখুন"
                className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all duration-200"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-[var(--text)]">
                মোবাইল নম্বর
              </label>
              <input
                type="tel"
                placeholder="০১৭xxxxxxxx"
                className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all duration-200"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[var(--text)]">
              এলাকা/লোকেশন
            </label>
            <input
              type="text"
              placeholder="যেমন: বাইপাইন, আশুলিয়া"
              className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all duration-200"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[var(--text)]">
              প্রস্তাবিত প্রকল্পের বিবরণ
            </label>
            <textarea
              rows={4}
              placeholder="সমস্যা এবং আপনার প্রস্তাবটি বিস্তারিত লিখুন..."
              className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all duration-200 resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-[var(--primary)] text-white text-sm font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-md cursor-pointer"
          >
            <FiSend /> প্রস্তাব জমা দিন
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default SuggestProject;
