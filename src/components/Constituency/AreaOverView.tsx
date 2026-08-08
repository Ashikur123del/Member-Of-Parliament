"use client";

import Image from "next/image";
import { FiBriefcase, FiBookOpen, FiNavigation } from "react-icons/fi";

export function AreaOverView() {
  const highlights = [
    {
      title: "শিল্প ও অর্থনৈতিক কেন্দ্র",
      desc: "ঢাকা-১৯ (সাভার ও আশুলিয়া) অঞ্চলটি ঢাকা রপ্তানি প্রক্রিয়াকরণ এলাকা (DEPZ) এবং শত শত তৈরি পোশাক শিল্প কারখানার সমন্বয়ে গঠিত, যা জাতীয় অর্থনীতির অন্যতম প্রধান চালিকাশক্তি। প্রতিদিন লাখ লাখ পোশাক শ্রমিক ও শ্রমজীবী মানুষের কর্মসংস্থানের সুযোগ সৃষ্টি করার পাশাপাশি, দেশের বৈদেশিক মুদ্রা অর্জনে এবং শিল্পায়নে এই এলাকা অগ্রণী ভূমিকা পালন করে আসছে।",
      icon: FiBriefcase,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
      tag: "অর্থনীতি ও শিল্প",
    },
    {
      title: "শিক্ষা ও গবেষণা হাব",
      desc: "দেশের অন্যতম শীর্ষ সাময়িক ও আবাসন বিশ্ববিদ্যালয় জাহাঙ্গীরনগর বিশ্ববিদ্যালয়, গণ বিশ্ববিদ্যালয়, ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি সহ বেশ কিছু আন্তর্জাতিক মানের শিক্ষাপ্রতিষ্ঠান ও গবেষণা কেন্দ্র সাভারে অবস্থিত। উচ্চশিক্ষা, যুগোপযোগী প্রযুক্তিগত গবেষণা এবং নতুন প্রজন্মের দক্ষ মানবসম্পদ তৈরিতে এই অঞ্চলটি কেন্দ্রবিন্দু হিসেবে স্বীকৃত।",
      icon: FiBookOpen,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
      tag: "শিক্ষা ও জ্ঞান",
    },
    {
      title: "জাতীয় ঐতিহ্য ও মহাসড়ক সংযোগ",
      desc: "আমাদের মহান মুক্তিযুদ্ধের শ্রেষ্ঠ স্মারক 'জাতীয় স্মৃতিসৌধ' সাভারে অবস্থিত, যা প্রতিটি বাঙালির কাছে এক পরম গর্বের প্রতীক। এছাড়া, সাভার-আশুলিয়া মহাসড়কটি রাজধানী ঢাকার সাথে উত্তরবঙ্গ ও উত্তর-পশ্চিমাঞ্চলের বিশাল নেটওয়ার্ককে সংযুক্ত করেছে। যাতায়াত, সরবরাহ চেইন ও জাতীয় যোগাযোগের ক্ষেত্রে এটি এক অতীব গুরুত্বপূর্ণ প্রবেশদ্বার।",
      icon: FiNavigation,
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1000&auto=format&fit=crop",
      tag: "ঐতিহ্য ও যাতায়াত",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold text-[var(--primary)] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[var(--primary-light)] border border-[var(--primary)]/20">
            এলাকার পরিচিতি
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text)] tracking-tight">
            ভৌগোলিক ও সামাজিক গুরুত্ব
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[var(--text-2)] leading-relaxed">
            শিল্পভিত্তিক অর্থনীতি, উচ্চশিক্ষা প্রতিষ্ঠান ও ঐতিহাসিক অবকাঠামোর সমন্বয়ে ঢাকা-১৯ (সাভার ও আশুলিয়া) আসনের বিশেষত্ব ও সম্ভাবনার বিস্তৃত রূপরেখা।
          </p>
        </div>

        <div className="space-y-10 sm:space-y-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center p-6 sm:p-8 md:p-10 rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)]/40 transition-all duration-300 shadow-sm"
              >
                <div
                  className={`lg:col-span-5 relative group ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 text-[11px] font-semibold bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/10">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 space-y-3 sm:space-y-4 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-2xl">
                    <Icon />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)]">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed">
                    {item.desc}
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