"use client";


import { motion } from "framer-motion";
import {  FiClock, FiMapPin } from "react-icons/fi";

interface EventItem {
  id: number;
  title: string;
  date: string;
  month: string;
  time: string;
  location: string;
  category: string;
  status: "upcoming" | "completed";
}

const featuredEvents: EventItem[] = [
  {
    id: 1,
    title: "জনগণের মুখোমুখি: সাধারণ নাগরিক গণশুনানি",
    date: "১৮",
    month: "আগস্ট",
    time: "সকাল ১০:০০ টা",
    location: "সাভার পৌর মিলনায়তন",
    category: "গণশুনানি",
    status: "upcoming",
  },
  {
    id: 2,
    title: "নতুন ড্রেনেজ ও রাস্তা সংস্কার প্রকল্পের উদ্বোধন",
    date: "২২",
    month: "আগস্ট",
    time: "বিকাল ০৩:৩০ টা",
    location: "বাইপাইল মোড়, আশুলিয়া",
    category: "উন্নয়ন কাজ",
    status: "upcoming",
  },
  {
    id: 3,
    title: "যুব প্রশিক্ষণ ও কর্মসংস্থান বিষয়ক মতবিনিময়",
    date: "২৫",
    month: "আগস্ট",
    time: "সকাল ১১:০০ টা",
    location: "উপজেলা পরিষদ অডিটোরিয়াম",
    category: "প্রশিক্ষণ",
    status: "upcoming",
  },
];

export const EventGrid = () => {
  return (
    <div className="  p-4 py-10 md:py-20">
        <div className="mb-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text)]">
          আসন্ন বিশেষ ইভেন্টসমূহ
        </h2>
        <span className="text-xs font-semibold text-[var(--primary)] bg-[var(--primary-light)] px-3 py-1 rounded-full">
          হাইলাইটেড
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="p-5 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)] rounded-2xl shadow-sm flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 bg-[var(--surface-2)] border border-[var(--border)] px-3.5 py-1.5 rounded-xl">
                  <span className="text-lg font-black text-[var(--primary)] leading-none">
                    {event.date}
                  </span>
                  <span className="text-xs font-bold text-[var(--text-2)] uppercase border-l border-[var(--border)] pl-2 leading-none">
                    {event.month}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[var(--primary)] bg-[var(--primary-light)] px-2.5 py-1 rounded-lg border border-[var(--primary)]/20">
                  {event.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-[var(--text)] mb-3 leading-snug">
                {event.title}
              </h3>
            </div>

            <div className="space-y-2 pt-4 border-t border-[var(--border)]/60 text-xs text-[var(--text-2)] mt-2">
              <div className="flex items-center gap-2">
                <FiClock className="text-[var(--primary)]  shrink-0" />
                <span className="text-xs font-bold">{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-[var(--primary)] text-sm shrink-0" />
                <span className="truncate text-xs font-bold">{event.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};