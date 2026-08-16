"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhoneCall,
  FiMail,
  FiClock,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiGlobe,
} from "react-icons/fi";
import Link from "next/link";

const contactDetails = [
  {
    id: 1,
    icon: FiMapPin,
    title: "প্রধান কার্যালয়",
    details: "দেওয়ান মঈনুদ্দিন বিপ্লব জনসেবা কার্যালয়, সাভার, ঢাকা।",
    subText: "সাভার ও আশুলিয়া অঞ্চল",
  },
  {
    id: 2,
    icon: FiPhoneCall,
    title: "ফোন ও হেল্পলাইন",
    details: "+৮৮০ ১৭০০-০০০০০",
    subText: "সহায়তা কেন্দ্র: সকাল ৯টা - বিকাল ৫টা",
  },
  {
    id: 3,
    icon: FiMail,
    title: "ইমেইল করুন",
    details: "contact@dewanbiplob.com",
    subText: "যেকোনো জিজ্ঞাসা ও প্রস্তাবনার জন্য",
  },
  {
    id: 4,
    icon: FiClock,
    title: "অফিস সময়সূচী",
    details: "রবিবার - বৃহস্পতিবার",
    subText: "সকাল ০৯:০০ টা থেকে বিকাল ০৫:০০ টা (শুক্রবার ও শনিবার বন্ধ)",
  },
];

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-6 pb-4 border-b border-[var(--border)]">
          যোগাযোগের বিবরণ
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -3 }}
                className="p-5 bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)]/50 rounded-2xl transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-xl mb-3 shrink-0">
                  <Icon />
                </div>
                <h4 className="text-base font-bold text-[var(--text)] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-[var(--primary)]">
                  {item.details}
                </p>
                <p className="text-[11px] text-[var(--muted)] mt-1 leading-snug">
                  {item.subText}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-between flex-wrap gap-4">
          <span className="text-xs font-bold text-[var(--text-2)] uppercase tracking-wider">
            সোশ্যাল মিডিয়ায় যুক্ত থাকুন:
          </span>
          <div className="flex items-center gap-3">
            {[
              { icon: FiFacebook, href: "#", label: "Facebook" },
              { icon: FiYoutube, href: "#", label: "YouTube" },
              { icon: FiTwitter, href: "#", label: "Twitter" },
              { icon: FiGlobe, href: "#", label: "Website" },
            ].map((social, i) => {
              const SocialIcon = social.icon;
              return (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-2)] hover:text-[var(--primary)] hover:border-[var(--primary)] flex items-center justify-center transition-all shadow-xs"
                >
                  <SocialIcon className="text-lg" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};