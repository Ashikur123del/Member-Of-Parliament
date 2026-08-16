"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiMessageSquare,
  FiBriefcase,
  FiCheckCircle,
  FiUsers,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import Image2 from "@/assets/img-2.jpg";
import Image3 from "@/assets/img-3.jpg";
import Image1 from "@/assets/img-4.jpg";

const SLIDES = [
  {
    id: 1,
    image: Image1,
    caption: "সাবেক ভাইস চেয়ারম্যান — সাভার উপজেলা পরিষদ",
  },
  {
    id: 2,
    image: Image2,
    caption: "জনসভা ও সাভারের সাধারণ মানুষের মতামত গ্রহণ",
  },
  {
    id: 3,
    image: Image3,
    caption: "সাভার উপজেলার বিভিন্ন উন্নয়নমূলক কাজ পরিদর্শন",
  },
];

const STATS = [
  { icon: FiCheckCircle, label: "বাস্তবায়িত প্রকল্প", value: "১২০+" },
  { icon: FiUsers, label: "উপকারভোগী নাগরিক", value: "৫০,০০০+" },
  { icon: FiTrendingUp, label: "চলমান উন্নয়ন", value: "১৫টি" },
];

export default function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-[var(--surface-2)] to-[var(--bg)] border-b border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-sm font-semibold border border-blue-100"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
              সাভার উপজেলা পরিষদ | সাবেক ভাইস চেয়ারম্যান
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text)] leading-tight"
            >
              জনগণের ক্ষমতায়ন ও সাভারের উন্নয়নে <br />
              <span className="text-[var(--primary)]">আপনার পাশে সর্বদা</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-[var(--text-2)] leading-relaxed max-w-2xl"
            >
              স্বচ্ছতা, জবাবদিহিতা এবং সুশাসনের মাধ্যমে সাভার উপজেলাকে
              একটি সমৃদ্ধশালী, নিরাপদ ও আধুনিক স্মার্ট জনপদ হিসেবে গড়ে তোলাই
              আমাদের প্রধান অঙ্গীকার।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="flex items-center gap-2 text-sm text-[var(--text)] font-medium bg-[var(--surface)] p-2.5 rounded-lg border border-[var(--border)]">
                <FiZap className="text-[var(--primary)] text-base shrink-0" />
                <span>দ্রুত ডিজিটাল সেবা</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text)] font-medium bg-[var(--surface)] p-2.5 rounded-lg border border-[var(--border)]">
                <FiZap className="text-[var(--primary)] text-base shrink-0" />
                <span>স্মার্ট পরিকাঠামো</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text)] font-medium bg-[var(--surface)] p-2.5 rounded-lg border border-[var(--border)]">
                <FiZap className="text-[var(--primary)] text-base shrink-0" />
                <span>যুব উন্নয়ন ও কর্মসংস্থান</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                href="/complain"
                className="btn-primary gap-2 shadow-md hover:scale-[1.02] transition-transform"
              >
                <FiMessageSquare className="text-lg" />
                <span>অভিযোগ বা আবেদন দিন</span>
              </Link>
              <Link
                href="/projects"
                className="btn-outline gap-2 hover:scale-[1.02] transition-transform"
              >
                <FiBriefcase className="text-lg" />
                <span>উন্নয়ন প্রকল্পসমূহ</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-6 border-t border-[var(--border)] grid grid-cols-3 gap-4"
            >
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[var(--primary)] font-bold text-xl sm:text-2xl">
                      <Icon className="text-lg hidden sm:block" />
                      <span>{stat.value}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-2)] font-medium">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex justify-center relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [0.99, 1.02, 0.99],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[var(--primary)] via-blue-400 to-[var(--primary)] blur-md opacity-70"
            />
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--primary)]/30 bg-[var(--surface-2)] z-10">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect={"fade"}
                fadeEffect={{ crossFade: true }}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                className="w-full h-full hero-swiper"
              >
                {SLIDES.map((slide) => (
                  <SwiperSlide
                    key={slide.id}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.caption}
                      fill
                      priority={slide.id === 1}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                      <p className="text-white text-xs sm:text-sm font-medium bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                        {slide.caption}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}