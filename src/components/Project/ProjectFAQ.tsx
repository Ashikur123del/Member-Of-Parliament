"use client";

import React, { useState } from "react";
import { FiHelpCircle, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "চলমান প্রকল্পগুলোর অগ্রগতি কীভাবে তদারকি করা হয়?",
    answer: "আমাদের নিজস্ব প্রকৌশলী টিম এবং স্থানীয় নাগরিক কমিটির যৌথ অংশগ্রহণে প্রতি মাসে মাঠপর্যায়ে কাজের অগ্রগতি পরিদর্শন ও মূল্যায়ন করা হয়।",
  },
  {
    question: "নতুন কোনো প্রকল্পের জন্য নাগরিকরা কীভাবে প্রস্তাব পাঠাতে পারেন?",
    answer: "আমাদের ওয়েবসাইটের 'নতুন প্রকল্পের প্রস্তাবনা দিন' ফর্মটির মাধ্যমে যে কেউ তাদের এলাকার প্রয়োজন বা যেকোনো উন্নয়নমূলক কাজের জন্য প্রস্তাব সরাসরি পাঠাতে পারেন।",
  },
  {
    question: "প্রকল্পের বাজেট ও অর্থায়ন উৎস কীভাবে জানা যাবে?",
    answer: "প্রতিটি প্রকল্পের অর্থায়ন স্বচ্ছ রাখার জন্য বার্ষিক উন্নয়ন প্রতিবেদন প্রকাশ করা হয় এবং স্ব-স্ব এলাকার প্রধান কেন্দ্রে তা সর্বসাধারণের জন্য উন্মুক্ত থাকে।",
  },
  {
    question: "প্রকল্প বাস্তবায়নে কোনো সমস্যা বা অনিয়ম দেখলে কীভাবে অভিযোগ করবো?",
    answer: "আমাদের সিটিজেন হেল্পলাইন নম্বর অথবা সরাসরি কন্টাক্ট পেজের মাধ্যমে যেকোনো অনিয়ম বা ধীরগতির অভিযোগ প্রমাণসহ জমা দেওয়া সম্ভব।",
  },
  {
    question: "পরিকল্পিত প্রকল্পগুলোর কাজ কখন শুরু হবে?",
    answer: "বাজেট অনুমোদন এবং প্রাথমিক প্রশাসনিক প্রক্রিয়াকরণ সম্পন্ন হওয়ার সাথে সাথেই প্রস্তাবিত প্রকল্পগুলোর কাজ শুরু করার সঠিক তারিখ বিজ্ঞপ্তির মাধ্যমে জানিয়ে দেওয়া হয়।",
  },
];

const ProjectFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 py-6 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-6 sm:mb-10 text-center space-y-2 sm:space-y-3"
      >
        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 shadow-xs">
          <FiHelpCircle className="text-sm sm:text-base shrink-0" />
          <span>প্রশ্নোত্তর</span>
        </div>
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text)] tracking-tight leading-snug">
          সাধারণ জিজ্ঞাসা (FAQ)
        </h2>
      </motion.div>

      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-xl sm:rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] overflow-hidden transition-all duration-200 hover:border-[var(--primary)]/40 shadow-xs"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                className="w-full px-4 sm:px-6 py-3.5 sm:py-5 flex items-center justify-between text-left font-bold text-sm sm:text-base md:text-lg text-[var(--text)] hover:text-[var(--primary)] transition-colors cursor-pointer gap-3"
              >
                <span className="leading-snug pr-1 select-none">{faq.question}</span>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="shrink-0 p-1 rounded-full bg-[var(--surface)] border border-[var(--border)]"
                >
                  <FiChevronDown
                    className={`text-lg sm:text-xl transition-colors ${
                      isOpen ? "text-[var(--primary)]" : "text-[var(--muted)]"
                    }`}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-xs xs:text-sm sm:text-base font-medium text-[var(--text-2)] leading-relaxed border-t border-[var(--border)]/50 pt-3 sm:pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectFAQ;