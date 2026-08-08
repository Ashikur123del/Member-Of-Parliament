"use client";

import { FiTarget, FiEye, FiHeart } from "react-icons/fi";

export function VisionMission() {
  const cards = [
    {
      icon: FiTarget,
      title: "আমাদের ভিশন",
      subtitle: "স্মার্ট সাভার ও আশুলিয়া গঠন",
      desc: "সাভার ও আশুলিয়া অঞ্চলকে একটি আধুনিক, নিরাপদ এবং প্রযুক্তিনির্ভর আধুনিক শিল্প ও আবাসিক নগরী হিসেবে গড়ে তোলা।",
    },
    {
      icon: FiEye,
      title: "আমাদের মিশন",
      subtitle: "জনগণের ক্ষমতায়ন ও সুশাসন",
      desc: "শিক্ষা, স্বাস্থ্যসেবা ও যোগাযোগ ব্যবস্থার আমূল পরিবর্তন এনে সাধারণ মানুষের দোরগোড়ায় সরকারি সেবা পৌঁছে দেওয়া।",
    },
    {
      icon: FiHeart,
      title: "মূল মূল্যবোধ",
      subtitle: "স্বচ্ছতা ও জনসেবা",
      desc: "দুর্নীতিমুক্ত সমাজ গঠন, শ্রমিক ও ব্যবসায়ীদের অধিকার রক্ষা এবং সর্বস্তরের মানুষের ন্যায়বিচার নিশ্চিত করা।",
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 bg-[var(--surface)] border-y border-[var(--border)] overflow-hidden">
      {/* Background Decorative Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-24 left-10 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-10 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="inline-block text-xs font-bold text-[var(--primary)] uppercase tracking-widest px-4 py-1.5 rounded-full bg-[var(--primary-light)] border border-[var(--primary)]/20 shadow-sm">
            লক্ষ্য ও উদ্দেশ্য
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text)] tracking-tight leading-tight">
            ভবিষ্যৎ রূপরেখা ও ভিশন
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[var(--text-2)] leading-relaxed">
            একটি সমৃদ্ধ ও আত্মনির্ভরশীল সমাজ গঠনে আমাদের সুনির্দিষ্ট লক্ষ্য এবং মূল্যবোধ।
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between overflow-hidden"
              >
                {/* Glowing Corner Circle */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-2xl group-hover:bg-[var(--primary)]/20 transition-all duration-500 pointer-events-none" />

                <div className="space-y-4">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[var(--primary-light)] border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center text-2xl sm:text-3xl group-hover:bg-[var(--primary)] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm">
                    <Icon />
                  </div>

                  {/* Titles */}
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-[var(--primary)] tracking-wide">
                      {card.subtitle}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}