"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiPhoneCall,
  FiAlertTriangle,
  FiShield,
  FiZap,
  FiPlusCircle,
  FiRadio,
} from "react-icons/fi";

interface ContactItem {
  id: number;
  name: string;
  category: string;
  phone: string;
  available: string;
  icon: React.ElementType;
}

const emergencyContacts: ContactItem[] = [
  {
    id: 1,
    name: "সাভার মডেল থানা",
    category: "আইন-শৃঙ্খলা",
    phone: "01320-132717",
    available: "২৪/৭ জরুরি সেবা",
    icon: FiShield,
  },
  {
    id: 2,
    name: "আশুলিয়া থানা",
    category: "আইন-শৃঙ্খলা",
    phone: "01320-132742",
    available: "২৪/৭ জরুরি সেবা",
    icon: FiShield,
  },
  {
    id: 3,
    name: "সাভার ফায়ার সার্ভিস স্টেশন",
    category: "ফায়ার ও উদ্ধার",
    phone: "01730-002241",
    available: "জরুরি অগ্নিসেবা",
    icon: FiAlertTriangle,
  },
  {
    id: 4,
    name: "উপজেলা স্বাস্থ্য কমপ্লেক্স (সাভার)",
    category: "জরুরি চিকিৎসা",
    phone: "01711-123456",
    available: "অ্যাম্বুলেন্স ও ইমার্জেন্সি",
    icon: FiPlusCircle,
  },
  {
    id: 5,
    name: "ঢাকা পল্লী বিদ্যুৎ সমিতি-৩",
    category: "বিদ্যুৎ বিভ্রাট",
    phone: "01769-400000",
    available: "অভিযোগ কেন্দ্র",
    icon: FiZap,
  },
  {
    id: 6,
    name: "জাতীয় জরুরি সেবা (৯৯৯)",
    category: "জাতীয় হটলাইন",
    phone: "999",
    available: "টোল ফ্রি কল",
    icon: FiRadio,
  },
];

export const EmergencyContacts = () => {
  return (
    <section id="emergency-contacts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-10">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-colors duration-300">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--primary-light)] rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-[var(--border)] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-light)] border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-2">
              <FiAlertTriangle className="text-sm" />
              <span>জরুরি কন্টাক্ট নম্বরসমূহ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text)] mt-1">
              সাভার ও আশুলিয়ার জরুরি হেল্পলাইন
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-2)] max-w-md">
            যেকোনো বিপদে বা জরুরি প্রয়োজনে নিচের নম্বরগুলোতে সরাসরি কল করুন।
          </p>
        </div>

        <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] text-white rounded-2xl p-5 sm:p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-black shrink-0">
              ৯৯৯
            </div>
            <div>
              <h3 className="text-lg font-bold">জাতীয় জরুরি সেবা (৯৯৯)</h3>
              <p className="text-xs text-white/90 mt-0.5">
                পুলিশ, ফায়ার সার্ভিস ও অ্যাম্বুলেন্স সেবার জন্য যেকোনো ফোন থেকে বিনামূল্যে কল করুন।
              </p>
            </div>
          </div>
          <a
            href="tel:999"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-[var(--primary-hover)] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shrink-0 shadow-sm"
          >
            <FiPhoneCall className="text-base" />
            <span>এখনই কল করুন (৯৯৯)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {emergencyContacts.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -3 }}
                className="p-5 bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)] rounded-2xl flex items-center justify-between gap-4 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-lg shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-[var(--text)] leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs font-semibold text-[var(--primary)] mt-0.5">
                      {item.phone}
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${item.phone}`}
                  title={`${item.name}-এ কল করুন`}
                  className="p-3 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all shadow-sm shrink-0"
                >
                  <FiPhoneCall className="text-base" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};