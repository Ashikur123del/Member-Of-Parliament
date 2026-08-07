"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiMapPin,
  FiUsers,
  FiTrendingUp,
  FiAlertCircle,
  FiArrowRight,
  FiBriefcase,
  FiLayers,
  FiBookOpen,
  FiCheckCircle,
  FiGrid,
  FiGlobe,
  FiInfo,
  FiTool,
} from "react-icons/fi";

const keyFacts = [
  {
    id: 1,
    title: "মোট জনসংখ্যা",
    value: "১৫ লক্ষ+",
    subText: "স্থায়ী ও ভাসমান শ্রমিকসহ",
    icon: FiUsers,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  },
  {
    id: 2,
    title: "অন্তর্ভুক্ত এলাকা",
    value: "ঢাকা-১৯ আসন",
    subText: "সাভার পৌরসভা ও আশুলিয়া থানা",
    icon: FiMapPin,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: 3,
    title: "জাতীয় অর্থনৈতিক হাব",
    value: "গার্মেন্টস ও EPZ",
    subText: "দেশের রপ্তানি আয়ের সিংহভাগ",
    icon: FiBriefcase,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
  {
    id: 4,
    title: "চলমান উন্নয়ন প্রকল্প",
    value: "২৪+ টি মেগা প্রজেক্ট",
    subText: "ড্রেনেজ, সড়ক ও হাসপাতাল",
    icon: FiTrendingUp,
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  },
];

const challengesAndActions = [
  {
    id: 1,
    challenge: "বর্ষাকালে তীব্র জলাবদ্ধতা ও ড্রেনেজ অবকাঠামো সমস্যা",
    action: "বাইপাইল ও ধামসোনা খালের স্মার্ট ড্রেনেজ মাস্টারপ্ল্যান এবং ক্যানাল পুনঃখনন কাজ দ্রুতগতিতে বাস্তবায়িত হচ্ছে।",
    status: "কাজ চলমান",
    statusIcon: FiTool,
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    challenge: "পোশাকশিল্প শ্রমিকদের মানসম্মত চিকিৎসাসেবার অপ্রতুলতা",
    action: "জিরাবো-আশুলিয়ায় ২০০ শয্যাবিশিষ্ট আধুনিক ও বিশেষায়িত সরকারি মেডিকেল সেন্টার স্থাপনের প্রস্তাবনা পাস ও জমি চিহ্নিতকরণ।",
    status: "পরিকল্পনাধীন",
    statusIcon: FiCheckCircle,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
  },
];

export default function ConstituencyOverviewSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--surface)] text-[var(--text)] overflow-hidden border-b border-[var(--border)]">
    
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs sm:text-sm font-semibold border border-[var(--primary)]/20 shadow-sm">
            <FiLayers className="text-base" />
            <span>সংসদীয় আসন ১৯২ (ঢাকা-১৯)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            এক নজরে <span className="text-[var(--primary)]">সাভার ও আশুলিয়া</span> নির্বাচনী এলাকা
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed">
            বাংলাদেশের অর্থনীতির চালিকাশক্তি, শিল্পাঞ্চল, শিক্ষানগরী এবং শ্রমজীবী মানুষের আস্থা ও সম্ভাবনাময় ঢাকা-১৯ আসনের সামগ্রিক পরিচিতি ও উন্নয়ন বিবরণী।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {keyFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center gap-4 hover:border-[var(--primary)]/40 transition-all shadow-sm"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border shrink-0 ${fact.color}`}>
                  <Icon />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-2)] font-medium">{fact.title}</p>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text)]">{fact.value}</h3>
                  <p className="text-[11px] text-[var(--text-2)] font-normal">{fact.subText}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 bg-[var(--surface-2)] border border-[var(--border)] p-6 sm:p-8 rounded-2xl sm:rounded-3xl overflow-hidden relative">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary)] uppercase tracking-wider">
                <FiBookOpen className="text-base" />
                <span>ভৌগোলিক ও অর্থনৈতিক গুরুত্ব</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
                শিল্পায়ন, মেধা ও শ্রমের মেলবন্ধনে গঠিত <span className="text-[var(--primary)]">আধুনিক জনপদ</span>
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                ঢাকা-১৯ আসন (সাভার ও আশুলিয়া) কেবল একটি ভৌগোলিক অঞ্চল নয়, বরং এটি বাংলাদেশের পোশাকশিল্প ও রপ্তানি আয়ের প্রধান কেন্দ্রবিন্দু। ঢাকার উপকণ্ঠে অবস্থিত এই আসনে রয়েছে <strong className="text-[var(--text)] font-semibold">সাভার ইপিজেড (DEPZ)</strong>, <strong className="text-[var(--text)] font-semibold">জাহাঙ্গীরনগর বিশ্ববিদ্যালয়</strong>, <strong className="text-[var(--text)] font-semibold">গণ বিশ্ববিদ্যালয়</strong>, <strong className="text-[var(--text)] font-semibold">জাতীয় স্মৃতিসৌধ</strong> এবং শত শত তৈরি পোশাক কারখানা।
              </p>

              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                এখানে লাখ লাখ পোশাক শ্রমিক ও সাধারণ নাগরিক বসবাস করেন। তাদের জীবনযাত্রার মান উন্নয়ন, নির্বিঘ্ন যাতায়াত, উন্নত স্বাস্থ্যসেবা এবং নিরাপদ আধুনিক আবাসন ব্যবস্থা নিশ্চিত করাই আমাদের প্রধান অঙ্গীকার।
              </p>


              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold text-[var(--text)] flex items-center gap-1.5">
                  <FiGrid className="text-[var(--primary)]" />
                  <span>প্রধান প্রশাসনিক আওতাধীন এলাকাসমূহ:</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "সাভার পৌরসভা",
                    "আশুলিয়া থানা",
                    "ধামসোনা ইউনিয়ন",
                    "ইয়ারপুর ইউনিয়ন",
                    "শিমুলিয়া ইউনিয়ন",
                    "বনগাঁও ইউনিয়ন",
                    "পাথালিয়া ইউনিয়ন",
                    "কাউন্দিয়া ইউনিয়ন",
                    "তেঁতুলঝোড়া ইউনিয়ন",
                  ].map((area, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] font-medium shadow-sm flex items-center gap-1">
                      <FiMapPin className="text-[var(--primary)] text-[11px]" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative w-full h-48 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden mt-6 border border-[var(--border)] group">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                alt="সাভার ও আশুলিয়া শিল্পাঞ্চল"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-amber-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-400/30 inline-flex items-center gap-1.5">
                    <FiGlobe />
                    <span>অর্থনৈতিক হাব ও সাভার ইপিজেড এরিয়া</span>
                  </span>
                  <p className="text-[11px] text-gray-200">
                    জাতীয় অর্থনীতিতে প্রতি বছর বিলিয়ন ডলার রপ্তানি আয় যোগ করে এই শিল্পাঞ্চল।
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-start space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                <FiAlertCircle className="text-rose-500 text-xl shrink-0" />
                <span>জরুরি নাগরিক অগ্রাধিকার ও সমস্যার সমাধান</span>
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)]">
                জনগণের সরাসরি ফিডব্যাক ও সরেজমিনে পরিদর্শনের ভিত্তিতে চিহ্নিত দীর্ঘদিনের প্রধান সমস্যাগুলো সমাধানে আমাদের পদক্ষেপ।
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {challengesAndActions.map((item) => {
                const StatusIcon = item.statusIcon;
                return (
                  <div 
                    key={item.id} 
                    className="rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] overflow-hidden flex flex-col hover:border-[var(--primary)]/40 transition-all shadow-sm group"
                  >
                    <div className="relative w-full h-36 shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.challenge}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[var(--surface)]/90 backdrop-blur-md text-[var(--primary)] border border-[var(--primary)]/20 shadow-sm inline-flex items-center gap-1">
                          <StatusIcon className="text-xs" />
                          {item.status}
                        </span>
                      </div>
                    </div>


                    <div className="p-4 flex flex-col gap-3">
                      <h4 className="text-xs sm:text-sm font-extrabold leading-snug text-[var(--text)]">
                        ⚠️ {item.challenge}
                      </h4>

                      <div className="p-2.5 rounded-xl bg-[var(--surface)] border-l-2 border-[var(--primary)] space-y-0.5">
                        <span className="text-[10px] font-bold uppercase text-[var(--primary)] tracking-wider block">
                          গৃহীত পদক্ষেপ / সমাধান:
                        </span>
                        <p className="text-[11px] font-medium text-[var(--text-2)] leading-relaxed">
                          {item.action}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-2)]">
              <span className="flex items-center gap-1.5">
                <FiInfo className="text-[var(--primary)] text-sm shrink-0" />
                <span>প্রতিনিয়ত নতুন উন্নয়ন প্রকল্পের কাজ হালনাগাদ করা হচ্ছে।</span>
              </span>
              <span className="font-bold text-[var(--primary)] shrink-0 ml-2">আপডেট: ২০২৬</span>
            </div>
          </div>

        </div>

        <div className="text-center pt-6">
          <Link
            href="/constituency/overview"
            className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
          >
            <span>সম্পূর্ণ এলাকা, ওয়ার্ড তালিকা ও বিস্তারিত ম্যাপ দেখুন</span>
            <FiArrowRight className="text-lg" />
          </Link>
        </div>

      </div>
    </section>
  );
}