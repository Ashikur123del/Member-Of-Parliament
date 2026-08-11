"use client";

import { motion } from "framer-motion";
import { FiInfo, FiCalendar, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export const EventCalendarNotice = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:my-10 my-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -2 }}
        className="relative overflow-hidden p-6 sm:p-7 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-md hover:border-[var(--primary)]/50 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
      >
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-[var(--primary-light)] rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-start gap-4 relative z-10">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-xl shrink-0 shadow-inner">
              <FiInfo />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--primary)]"></span>
            </span>
          </div>

          <div>
            <h4 className="text-base font-bold text-[var(--text)] tracking-tight">
              ব্যক্তিগত বা বিশেষ মিটিং চান?
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-2)] mt-1 leading-relaxed max-w-xl">
              এমপি সাহেবের সাথে সরাসরি মিটিংয়ের অনুরোধ জানাতে আমাদের সেবা ডেস্কে ডিজিটাল আবেদন জমা দিন।
            </p>
          </div>
        </div>

    
        <Link
          href="/servicedesk"
          className="group relative z-10 w-full sm:w-auto px-5 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)] text-[var(--text)] hover:text-[var(--primary)] font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all duration-300 shrink-0 shadow-xs"
        >
          <FiCalendar className="text-base text-[var(--primary)]" />
          <span>অ্যাপয়েন্টমেন্ট নিন</span>
          <FiArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </motion.div>
    </div>
  );
};