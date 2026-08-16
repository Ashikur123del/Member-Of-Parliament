"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiAward,
  FiTarget,
  FiEye,
  FiUsers,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";
import LeaderImg from "@/assets/img-2.jpg";

export default function LeaderMessageSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--surface-2)] border-b border-[var(--border)] overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--text) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[var(--primary)] via-blue-500/30 to-transparent opacity-40 blur-md" />
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-[var(--surface)] shadow-2xl aspect-[4/5] group">
                <Image
                  src={LeaderImg}
                  alt="সাবেক ভাইস চেয়ারম্যান"
                  fill  
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold mb-0.5">
                    সাভার উপজেলা পরিষদ
                  </p>
                  <h3 className="text-lg font-bold">সাবেক ভাইস চেয়ারম্যান</h3>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
                className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-[var(--surface)]/95 backdrop-blur-md border border-[var(--border)] p-4 rounded-2xl shadow-2xl flex items-center gap-3.5 z-20"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-2xl shrink-0 shadow-inner">
                  <FiAward />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-[var(--text)]">
                    জনসেবায় নিবেদিত
                  </h4>
                  <p className="text-xs text-[var(--text-2)] font-medium">
                    স্মার্ট ও স্বনির্ভর সাভার
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[var(--surface)]/80 backdrop-blur-lg border border-[var(--border)] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-60" />

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs sm:text-sm font-semibold border border-[var(--primary)]/20 shadow-sm">
                <FiUsers className="text-base" />
                <span>জনপ্রতিনিধির অঙ্গীকার</span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text)] leading-tight tracking-tight">
                জনগণের অধিকার রক্ষা ও একটি আধুনিক স্মার্ট সাভার গড়াই
                আমার মূল লক্ষ্য
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-[var(--text-2)] leading-relaxed">
                <p>
                  আসসালামু আলাইকুম। সাভার উপজেলার সম্মানিত ও প্রিয় সুধীবৃন্দ,
                  আপনাদের অমূল্য আস্থা ও ভালোবাসায় অর্পিত দায়িত্ব পালন করাই
                  আমার মূল ব্রত। আমাদের এলাকাকে একটি নিরাপদ, বৈষম্যহীন ও আধুনিক
                  মডেল এলাকায় রূপান্তর করতে আমরা নিরবচ্ছিন্ন কাজ করে যাচ্ছি।
                </p>
                <p>
                  রাজনীতি কোনো ক্ষমতার বাহন নয়, বরং এটি নাগরিক সেবা নিশ্চিত
                  করার সবচেয়ে পবিত্র মাধ্যম। ডিজিটাল হেল্পডেস্ক ও সরাসরি
                  তদারকির মাধ্যমে প্রতিটা সমস্যার টেকসই সমাধানে আমরা বদ্ধপরিকর।
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[var(--surface-2)]/80 border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 group">
                  <div className="flex items-center gap-2.5 text-[var(--primary)] font-bold text-base mb-1.5">
                    <div className="p-2 rounded-lg bg-[var(--primary-light)] group-hover:scale-110 transition-transform">
                      <FiTarget className="text-lg" />
                    </div>
                    <span>আমাদের মূল ভিশন</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-2)] leading-normal">
                    সুশাসন, স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করে সাভারকে পুরোপুরি
                    চাঁদাবাজিমুক্ত করা।
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--surface-2)]/80 border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 group">
                  <div className="flex items-center gap-2.5 text-[var(--primary)] font-bold text-base mb-1.5">
                    <div className="p-2 rounded-lg bg-[var(--primary-light)] group-hover:scale-110 transition-transform">
                      <FiEye className="text-lg" />
                    </div>
                    <span>অগ্রাধিকার খাত</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-2)] leading-normal">
                    স্মার্ট অবকাঠামো, আধুনিক ড্রেনেজ এবং তরুণদের কর্মসংস্থান ও
                    আইটি প্রশিক্ষণ।
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-[var(--border)]">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text)] font-medium">
                  <FiCheckCircle className="text-[var(--primary)] text-base shrink-0" />
                  <span>২৪/৭ সরাসরি ডিজিটাল অভিযোগ ডেস্ক</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text)] font-medium">
                  <FiShield className="text-[var(--primary)] text-base shrink-0" />
                  <span>শিক্ষা ও স্বাস্থ্যসেবার আধুনিকীকরণ</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="btn-primary gap-2.5 text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-[var(--primary)]/20 hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all"
                >
                  <span>সম্পূর্ণ পরিচিতি ও পরিকল্পনা দেখুন</span>
                  <FiArrowRight className="text-lg" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}