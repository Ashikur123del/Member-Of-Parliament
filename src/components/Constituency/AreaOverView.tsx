"use client";

import Image from "next/image";
import { FiBriefcase, FiBookOpen, FiNavigation, FiHeart } from "react-icons/fi";
import S1 from "@/assets/S-1.jpg";
import F3 from "@/assets/f3.jpg";
import S2 from "@/assets/S-2.jpg";

export function AreaOverView() {
  const highlights = [
    {
      title: "শিল্প ও অর্থনৈতিক কেন্দ্র",
      desc: "সাভার ও আশুলিয়া অঞ্চলটি ঢাকা রপ্তানি প্রক্রিয়াকরণ এলাকা (DEPZ) এবং শত শত তৈরি পোশাক শিল্প কারখানার সমন্বয়ে গঠিত। সাবেক ভাইস চেয়ারম্যান হিসেবে সাভার উপজেলা পরিষদে দায়িত্ব পালনকালে স্থানীয় শিল্প ও শ্রমিকদের অধিকার সুরক্ষায় নানামুখী উদ্যোগ নেওয়া হয়েছিল।",
      icon: FiBriefcase,
      image: S2,
      tag: "অর্থনীতি ও শিল্প",
    },
    {
      title: "শিক্ষা ও গবেষণা হাব",
      desc: "দেশের অন্যতম শীর্ষ আবাসন বিশ্ববিদ্যালয় জাহাঙ্গীরনগর বিশ্ববিদ্যালয়, গণ বিশ্ববিদ্যালয়, ড্যাফোডিল আন্তর্জাতিক বিশ্ববিদ্যালয়সহ বহু স্বনামধন্য শিক্ষাপ্রতিষ্ঠান সাভারে অবস্থিত। সাবেক ভাইস চেয়ারম্যানের নেতৃত্বে স্থানীয় শিক্ষা পরিবেশ ও প্রতিষ্ঠানের সার্বিক উন্নয়নে কাজ করা হয়েছে।",
      icon: FiBookOpen,
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
      tag: "শিক্ষা ও জ্ঞান",
    },
    {
      title: "জাতীয় ঐতিহ্য ও সংযোগ",
      desc: "আমাদের মহান মুক্তিযুদ্ধের শ্রেষ্ঠ স্মারক 'জাতীয় স্মৃতিসৌধ' সাভারে অবস্থিত। সাভার-আশুলিয়া মহাসড়কটি রাজধানীর সাথে উত্তরবঙ্গের বিশাল পরিবহন নেটওয়ার্ককে যুক্ত করেছে। উপজেলা পরিষদের মেয়াদে স্থানীয় সড়ক ও অবকাঠামোগত মান উন্নয়নে অগ্রাধিকার দেওয়া হয়েছিল।",
      icon: FiNavigation,
      image: S1,
      tag: "ঐতিহ্য ও যাতায়াত",
    },
    {
      title: "সামাজিক নিরাপত্তা ও জনসেবা",
      desc: "সাভার উপজেলার সাধারণ মানুষের স্বাস্থ্যসেবা, পরিচ্ছন্ন পরিবেশ এবং নাগরিক সুবিধা নিশ্চিত করতে সাবেক ভাইস চেয়ারম্যান হিসেবে দেওয়ান মঈনুদ্দিন বিপ্লব দীর্ঘ সময় মাঠপর্যায়ে জনগণের পাশে থেকে সেবা প্রদান করেছেন।",
      icon: FiHeart,
      image: F3,
      tag: "জীবনমান ও সেবা",
    },
  ];

  return (
    <section className="py-8 sm:py-16 md:py-20 bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold text-[var(--primary)] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[var(--primary-light)] border border-[var(--primary)]/20">
            এলাকার পরিচিতি
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text)] tracking-tight">
            ভৌগোলিক ও সামাজিক গুরুত্ব
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[var(--muted)] font-medium leading-relaxed">
            সাভার উপজেলা পরিষদের সাবেক ভাইস চেয়ারম্যান দেওয়ান মঈনুদ্দিন বিপ্লব-এর কর্মক্ষেত্র—সাভার ও আশুলিয়ার বিশেষত্ব এবং জনসেবামূলক প্রধান ক্ষেত্রসমূহ।
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row rounded-xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)]/40 transition-all duration-300 shadow-sm overflow-hidden group"
              >
                <div className="relative w-full sm:w-2/5 shrink-0 min-h-[200px] sm:min-h-full bg-[var(--surface)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, 30vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/50 via-transparent to-transparent opacity-70" />

                  <span className="absolute top-3 left-3 text-[10px] font-semibold bg-black/60 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full border border-white/10">
                    {item.tag}
                  </span>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-lg shrink-0">
                      <Icon />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text)] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium sm:text-sm text-[var(--text-2)] leading-relaxed line-clamp-5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}