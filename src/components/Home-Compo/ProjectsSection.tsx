"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiTrendingUp,
  FiArrowRight,
  FiMapPin,
  FiDollarSign,
  FiCalendar,
  FiFilter,
} from "react-icons/fi";


const PROJECT_FILTERS = [
  { id: "all", label: "সব প্রকল্প" },
  { id: "running", label: "চলমান" },
  { id: "upcoming", label: "পরিকল্পনাধীন" },
  { id: "completed", label: "সম্পন্ন" },
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "বাইপাইল-আশুলিয়া স্মার্ট ড্রেনেজ ও খাল উদ্ধার প্রকল্প",
    category: "running",
    categoryLabel: "চলমান",
    location: "আশুলিয়া ও ধামসোনা",
    budget: "৪৫ কোটি টাকা",
    duration: "২০২৪ - ২০২৫",
    progress: 70,
    description: "বর্ষাকালে আশুলিয়া ও বাইপাইল এলাকার জলাবদ্ধতা দূরীকরণে আধুনিক ড্রেনেজ নির্মাণ এবং প্রধান খালগুলো খনন কাজ চলমান।",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "আশুলিয়া ২০০ শয্যাবিশিষ্ট বিশেষায়িত সরকারি হাসপাতাল",
    category: "upcoming",
    categoryLabel: "পরিকল্পনাধীন",
    location: "জিরাবো, আশুলিয়া",
    budget: "১২০ কোটি টাকা",
    duration: "২০২৫ - ২০২৭",
    progress: 25,
    description: "পোশাকশিল্পের লাখ লাখ শ্রমিক ও সাধারণ নাগরিকদের বিনামূল্যে আধুনিক চিকিৎসা সেবায় বিশেষায়িত হাসপাতাল স্থাপন।",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "স্মার্ট সাভার আইটি ও ফ্রিল্যান্সিং ট্রেনিং হাব",
    category: "completed",
    categoryLabel: "সম্পন্ন",
    location: "সাভার পৌরসভা",
    budget: "১২ কোটি টাকা",
    duration: "২০২৩ - ২০২৪",
    progress: 100,
    description: "তরুণদের আত্মকর্মসংস্থান সৃষ্টিতে আধুনিক কম্পিউটার ল্যাব ও হাই-স্পিড ইন্টারনেট সমৃদ্ধ হাই-টেক ট্রেনিং সেন্টার।",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "নবীনগর-বাইপাইল ফুটওভার ব্রিজ ও পথচারী নিরাপত্তা",
    category: "running",
    categoryLabel: "চলমান",
    location: "নবীনগর মোড়",
    budget: "১৫ কোটি টাকা",
    duration: "২০২৪ - ২০২৫",
    progress: 55,
    description: "মহাসড়কে সড়ক দুর্ঘটনা হ্রাস এবং পথচারীদের নিরাপদে রাস্তা পারাপারের জন্য ৩টি আধুনিক ফুটওভার ব্রিজ নির্মাণ।",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all" ? PROJECTS_DATA : PROJECTS_DATA.filter((item) => item.category === activeFilter);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--surface)] text-[var(--text)] border-b border-[var(--border)] overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs sm:text-sm font-semibold border border-[var(--primary)]/20 shadow-sm">
              <FiTrendingUp className="text-base" />
              <span>উন্নয়নমূলক কর্মকাণ্ড</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              সাভার ও আশুলিয়ার মেগা উন্নয়ন প্রকল্পসমূহ
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed">
              পরিকল্পিত ও আধুনিক নির্বাচনী এলাকা গঠনে আমাদের চলমান, পরিকল্পনাধীন ও সম্পন্ন হওয়া উল্লেখযোগ্য প্রকল্পসমূহ।
            </p>
          </div>
          <Link
            href="/work/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:underline shrink-0"
          >
            <span>সকল প্রকল্পের তালিকা দেখুন</span>
            <FiArrowRight />
          </Link>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs text-[var(--text-2)] font-medium flex items-center gap-1 shrink-0 pr-2">
            <FiFilter /> ফিল্টার:
          </span>
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "bg-[var(--surface-2)] text-[var(--text-2)] border border-[var(--border)] hover:border-[var(--primary)]/40"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[var(--primary)]/40 transition-all shadow-sm group"
              >
                <div>
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border shadow-sm backdrop-blur-md ${
                          project.category === "completed"
                            ? "bg-emerald-500/90 text-white border-emerald-400"
                            : project.category === "running"
                            ? "bg-[var(--primary)]/90 text-white border-[var(--primary)]/50"
                            : "bg-purple-600/90 text-white border-purple-400"
                        }`}
                      >
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-2)]">
                      <span className="flex items-center gap-1 font-medium">
                        <FiMapPin className="text-[var(--primary)]" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <FiCalendar className="text-[var(--primary)]" />
                        {project.duration}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-2)] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-2 pt-2 border-t border-[var(--border)]">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[var(--text-2)] font-medium flex items-center gap-1">
                          <FiDollarSign className="text-amber-500" />
                          বাজেট: <strong className="text-[var(--text)]">{project.budget}</strong>
                        </span>
                        <span className="font-bold text-[var(--primary)]">
                          {project.progress}% কাজের অগ্রগতি
                        </span>
                      </div>

                      <div className="w-full h-2 rounded-full bg-[var(--surface)] overflow-hidden border border-[var(--border)]">
                        <div
                          className="h-full bg-[var(--primary)] rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <Link
                    href={`/work/projects/${project.id}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[var(--primary)] hover:text-white transition-all"
                  >
                    <span>বিস্তারিত তথ্য ও ছবি দেখুন</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}