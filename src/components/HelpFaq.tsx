"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqData = [
  {
    id: 1,
    question: "নাগরিক সেবার জন্য অনলাইনে কীভাবে আবেদন করব?",
    answer:
      "আমাদের পোর্টালে ই-সেবা অপশনে গিয়ে নির্দিষ্ট সেবার ফরম ডাউনলোড করে কিংবা ডিজিটাল ফর্মে প্রয়োজনীয় তথ্য দিয়ে সহজেই আবেদন জমা দিতে পারবেন।",
  },
  {
    id: 2,
    question: "অভিযোগ জমা দেওয়ার কতদিনের মধ্যে সমাধান পাব?",
    answer:
      "অভিযোগের ধরণ অনুযায়ী সাধারণ সমস্যাগুলো ৩ থেকে ৭ কর্মদিবসের মধ্যে সমাধান করা হয়। জরুরি ক্ষেত্রে ২৪ ঘণ্টার মধ্যে ব্যবস্থা গ্রহণ করা হয়।",
  },
  {
    id: 3,
    question: "অভিযোগের অগ্রগতি কীভাবে চেক করব?",
    answer:
      "অভিযোগ জমা দেওয়ার পর আপনাকে একটি ট্র্যাকিং আইডি দেওয়া হবে। সেই আইডি আমাদের ট্র্যাকিং পেজে লিখে অনুসন্ধানের মাধ্যমে স্ট্যাটাস দেখতে পারবেন।",
  },
  {
    id: 4,
    question: "সরাসরি অফিসে গিয়ে দেখা করার সময়সূচী কী?",
    answer:
      "রবিবার থেকে বৃহস্পতিবার সকাল ৯:০০ টা থেকে বিকাল ৫:০০ টা পর্যন্ত অফিসে সরাসরি সেবা গ্রহণ বা মতবিনিময় করা সম্ভব। (শুক্রবার ও শনিবার বন্ধ)",
  },
];

export const HelpFaq = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[var(--border)]">
        <FiHelpCircle className="text-xl text-[var(--primary)]" />
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)]">
          সাধারণ জিজ্ঞাসাসমূহ (FAQ)
        </h3>
      </div>

      <div className="space-y-3">
        {faqData.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="border border-[var(--border)] rounded-2xl overflow-hidden transition-all bg-[var(--surface-2)]"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left p-4 sm:p-5 font-bold text-xs sm:text-sm text-[var(--text)] flex items-center justify-between gap-4 hover:text-[var(--primary)] transition-colors"
              >
                <span>{faq.question}</span>
                <FiChevronDown
                  className={`text-base transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 text-[var(--primary)]" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[var(--text-2)] border-t border-[var(--border)]/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};