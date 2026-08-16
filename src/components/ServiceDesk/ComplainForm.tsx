"use client";

import { motion, Variants } from "framer-motion";
import {
  FiMapPin,
  FiPhoneCall,
  FiClock,
  FiCheckCircle,
  FiInfo,
  FiMessageSquare,
  FiAlertTriangle,
} from "react-icons/fi";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const ComplainForm = () => {
  return (
    <section id="complain-form"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-10 py-10 md:py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden transition-colors duration-300"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--primary-light)] rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mb-12 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-4">
            <FiInfo className="text-sm" />
            <span>অভিযোগ ও পরামর্শ নির্দেশিকা</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[var(--text)] leading-tight">
            নাগরিক অভিযোগ ও সমস্যা অবহিতকরণ কেন্দ্র
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-2)] mt-3 leading-relaxed">
            সাভার ও আশুলিয়া এলাকার যেকোনো নাগরিক সমস্যা, রাস্তাঘাট, ড্রেনেজ বা
            এলাকার সার্বিক উন্নয়নের জন্য সরাসরি আমাদের সেবাকেন্দ্রে যোগাযোগ
            করুন।
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 relative z-10"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300 shadow-xs hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-2xl mb-4 shadow-inner">
              <FiMapPin />
            </div>
            <h3 className="text-lg font-bold text-[var(--text)] mb-2">
              সরাসরি কার্যালয়ে জমা দিন
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed mb-4">
              আপনার লিখিত অভিযোগ বা পরামর্শ সরাসরি দেওয়ান মঈনুদ্দিন বিপ্লব
              জনসেবা কার্যালয়ে জমা দিতে পারেন।
            </p>
            <div className="text-xs font-semibold text-[var(--primary)] flex items-center gap-1.5">
              <FiMessageSquare />
              <span>জনসেবা কার্যালয়, সাভার ও আশুলিয়া অঞ্চল</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300 shadow-xs hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-2xl mb-4 shadow-inner">
              <FiPhoneCall />
            </div>
            <h3 className="text-lg font-bold text-[var(--text)] mb-2">
              জরুরি ফোন ও বার্তা
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed mb-4">
              জরুরি প্রয়োজনে সরাসরি আমাদের অফিস নম্বরে কল করুন অথবা সরাসরি
              মেসেজ পাঠান।
            </p>
            <div className="text-xs font-bold text-[var(--primary)] space-y-1">
              <div>সহায়তা কেন্দ্র: +৮৮০ ১৭০০-০০০০০</div>
              <div>হোয়াটসঅ্যাপ: +৮৮০ ১৭০০-০০০০০</div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300 shadow-xs hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-2xl mb-4 shadow-inner">
              <FiClock />
            </div>
            <h3 className="text-lg font-bold text-[var(--text)] mb-2">
              সেবার সময়সূচী
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed mb-4">
              অভিযোগ গ্রহণ ও পর্যালোচনা নিয়মিত ভিত্তিতে করা হয়। নির্ধারিত
              সময়ে শুনানি অনুষ্ঠিত হয়।
            </p>
            <div className="text-xs font-semibold text-[var(--muted)]">
              সকাল ১০:০০ টা - বিকাল ৫:০০ টা (রবি থেকে বৃহস্পতিবার)
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.005 }}
          className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-2)] border border-[var(--border-strong)] relative z-10 transition-all duration-300"
        >
          <h4 className="text-base sm:text-lg font-bold text-[var(--text)] mb-4 flex items-center gap-2">
            <FiCheckCircle className="text-[var(--primary)] text-xl" />
            <span>অভিযোগ জমাদানের ক্ষেত্রে প্রয়োজনীয় বিষয়সমূহ:</span>
          </h4>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs sm:text-sm text-[var(--text-2)]">
            <motion.li
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 transition-transform"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0" />
              অভিযোগকারীর পূর্ণ নাম ও এনআইডি (NID) নম্বর।
            </motion.li>
            <motion.li
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 transition-transform"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0" />
              সচল মোবাইল নম্বর (যোগাযোগের জন্য)।
            </motion.li>
            <motion.li
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 transition-transform"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0" />
              সমস্যার সঠিক স্থান ও সংক্ষিপ্ত বিবরণ।
            </motion.li>
            <motion.li
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 transition-transform"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0" />
              প্রযোজ্য ক্ষেত্রে প্রয়োজনীয় প্রমাণক বা ছবি।
            </motion.li>
            <motion.li
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 text-[var(--primary)] font-semibold col-span-1 sm:col-span-2 lg:col-span-1"
            >
              <FiAlertTriangle className="text-base flex-shrink-0 animate-pulse" />
              জরুরি বিপদে সরাসরি ৯৯৯-এ কল করুন।
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};