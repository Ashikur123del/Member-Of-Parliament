"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiShieldOff,
  FiWind,
  FiHeart,
  FiNavigation,
  FiUserCheck,
  FiTarget,
  FiTrello,
} from "react-icons/fi";

const mainPriorities = [
  {
    id: 1,
    title: "গ্রীন সাভার ও পরিবেশ রক্ষা",
    description:
      "সাভারকে সবুজ ও পরিবেশবান্ধব করতে বৃক্ষরোপণ, শিল্পবর্জ্য নিয়ন্ত্রণ ও নদী-খাল রক্ষার কার্যকর উদ্যোগ।",
    icon: FiTrello,
    image: "", 
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    id: 2,
    title: "মাদকের বিরুদ্ধে জিরো টলারেন্স",
    description:
      "মাদকমুক্ত সাভার গড়ার লক্ষ্যে যুবসমাজকে সচেতন করা এবং জিরো টলারেন্স নীতিতে আইনি ব্যবস্থা গ্রহণ।",
    icon: FiShieldOff,
    image: "",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  },
  {
    id: 3,
    title: "ক্লিন সাভার ও ড্রেনেজ উন্নয়ন",
    description:
      "আধুনিক বর্জ্য ব্যবস্থাপনা ও পয়ঃনিষ্কাশনের মাধ্যমে জলাবদ্ধতা নিরসন ও পরিচ্ছন্ন নগর গঠন।",
    icon: FiWind,
    image: "",
    color: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
  },
  {
    id: 4,
    title: "গার্মেন্টস শ্রমিকদের সরকারি হাসপাতাল",
    description:
      "মেহনতি গার্মেন্টস শ্রমিকদের স্বাস্থ্যসেবা নিশ্চিত করতে বিশেষায়িত সরকারি হাসপাতাল ও ফ্রি ডায়াগনস্টিক।",
    icon: FiHeart,
    image: "",
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
  },
  {
    id: 5,
    title: "ফুটপাত দখলমুক্ত ও সুশৃঙ্খল যাতায়াত",
    description:
      "জনসাধারণের নিরাপদ চলাচলের জন্য ফুটপাত দখলমুক্ত করা এবং আধুনিক ফুটওভার ব্রিজ নির্মাণ।",
    icon: FiNavigation,
    image: "",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  {
    id: 6,
    title: "যুব উন্নয়ন ও কারিগরি শিক্ষা",
    description:
      "তরুণদের কর্মসংস্থানমুখী কারিগরি শিক্ষায় দক্ষ করে গড়ে তোলা এবং স্থানীয় শিল্পে চাকরির সুযোগ।",
    icon: FiUserCheck,
    image: "",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
];

export default function TopPriorities() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[var(--surface-2)] via-[var(--surface)] to-[var(--surface-2)] border-b border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs sm:text-sm font-semibold border border-[var(--primary)]/20 shadow-sm">
            <FiTarget className="text-base" />
            <span>আমাদের মূল ভিশন ও রোডম্যাপ</span>
          </div>

          <h2 className="text-xl sm:text-4xl font-extrabold text-[var(--text)] tracking-tight">
            প্রধান সামাজিক ও নাগরিক অগ্রাধিকারসমূহ
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed">
            একটি আধুনিক, উন্নত ও নিরাপদ মডেল নির্বাচনী এলাকা গড়ে তোলার ৬টি সামাজিক ফোকাস এরিয়া
          </p>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mainPriorities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="group relative h-full flex flex-col p-6 sm:p-8 rounded-3xl bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--border)] hover:border-[var(--primary)]/50 hover:shadow-2xl transition-all duration-300 text-center">
                  
                  <div className="mx-auto mb-6">
                    {item.image ? (
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[var(--border)] shadow-md group-hover:scale-110 transition-transform">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                    ) : (
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border shadow-inner transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                        <Icon />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}