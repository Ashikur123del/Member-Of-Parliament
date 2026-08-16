"use client";

import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { FiShield, FiTruck, FiDroplet, FiHeart } from "react-icons/fi";
import N1 from "@/assets/n1.jpg";
import N2 from "@/assets/n2.jpg";
import N3 from "@/assets/n3.jpg";
import N4 from "@/assets/n4.jpg";

interface PriorityItem {
  title: string;
  subtitle: string;
  desc: string;
  icon: IconType;
  image: StaticImageData | string;
  points: string[];
}

export function DevelopmentFocus(): React.ReactElement {
  const priorities: PriorityItem[] = [
    {
      title: "যানজট নিরসন ও আধুনিক সড়ক যোগাযোগ",
      subtitle: "সুপরিকল্পিত যাতায়াত ব্যবস্থা",
      desc: "সাভার ও আশুলিয়া অঞ্চলের দীর্ঘদিনের তীব্র যানজট দূর করতে এলিভেটেড এক্সপ্রেসওয়ে, আধুনিক ফ্লাইওভার এবং প্রধান সংযোগ সড়কসমূহ চার লেনে উন্নীতকরণের টেকসই পদক্ষেপ গ্রহণ।",
      icon: FiTruck,
      image: N1,
      points: [
        "স্মার্ট ট্রাফিক ম্যানেজমেন্ট",
        "গুরুত্বপূর্ণ মোড়ে ফ্লাইওভার ও ওভারব্রিজ",
        "পথচারীদের জন্য নিরাপদ পারাপার",
      ],
    },
    {
      title: "জলাবদ্ধতা দূরীকরণ ও নদী পরিবেশ রক্ষা",
      subtitle: "ড্রেনেজ ও পরিবেশ উন্নয়ন",
      desc: "বর্ষাকালে সাভার-আশুলিয়ার প্রধান রাস্তা ও আবাসিক এলাকার জলাবদ্ধতা দূর করতে পরিকল্পিত ড্রেনেজ নেটওয়ার্ক তৈরি এবং বংশাই ও তুরাগ নদীকে দূষণমুক্ত রাখার অগ্রাধিকারমূলক উদ্যোগ।",
      icon: FiDroplet,
      image: N2,
      points: [
        "বংশাই ও তুরাগ নদীর নাব্যতা রক্ষা",
        "বর্জ্য ব্যবস্থাপনা ও শোধনাগার (STP)",
        "খাল পুনঃখনন ও ড্রেনেজ পরিষ্কার",
      ],
    },
    {
      title: "শ্রমিক কল্যাণ, স্বাস্থ্যসেবা ও সামাজিক সুরক্ষা",
      subtitle: "জনকল্যাণ ও স্বাস্থ্যসেবা",
      desc: "আমাদের শিল্পাঞ্চলের মূল চালিকাশক্তি পোশাক শ্রমিক ও সাধারণ জনগণের জন্য সুলভ ও আধুনিক স্বাস্থ্যসেবা, নিরাপদ কর্মপরিবেশ এবং সামাজিক সুরক্ষা নিশ্চিতকরণ।",
      icon: FiHeart,
      image: N3,
      points: [
        "শ্রমিক ও সাধারণ মানুষের স্বাস্থ্য সুরক্ষা",
        "উপজেলা স্বাস্থ্যকেন্দ্রের সুবিধা বৃদ্ধি",
        "জরুরি ফ্রি অ্যাম্বুলেন্স সেবা",
      ],
    },
    {
      title: "নিরাপদ, চাঁদাবাজিমুক্ত ও সুশাসিত সাভার",
      subtitle: "শান্তি ও নিরাপত্তা",
      desc: "শিল্পাঞ্চলে ব্যবসায়ী, শ্রমিক ও সাধারণ নাগরিকদের সার্বিক নিরাপত্তা নিশ্চিত করতে সিসিটিভি নজরদারি, কিশোর গ্যাং দমন এবং মাদকমুক্ত সুস্থ সামাজিক পরিবেশ গড়ে তোলা।",
      icon: FiShield,
      image: N4,
      points: [
        "গুরুত্বপূর্ণ পয়েন্টে সিসিটিভি ক্যামেরা",
        "চাঁদাবাজি ও কিশোর গ্যাং প্রতিরোধ",
        "কমিউনিটি পুলিশিং জোরদার",
      ],
    },
  ];

  return (
    <section className="py-10 sm:py-24 bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-20 space-y-2 md:space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--text)] tracking-tight">
            উন্নয়নের প্রধান অগ্রাধিকারসমূহ
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-2)] font-medium md:font-semibold leading-relaxed">
            সাভার উপজেলা পরিষদের সাবেক ভাইস চেয়ারম্যান দেওয়ান মঈনুদ্দিন বিপ্লব-এর সাভার ও আশুলিয়াবাসীর নাগরিক দুর্ভোগ দূরীকরণের সুনির্দিষ্ট ও বাস্তবমুখী অগ্রাধিকারসমূহ।
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:gap-14">
          {priorities.map((item: PriorityItem, idx: number) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="group rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                <div
                  className={`lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 order-2 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--primary)] flex items-center justify-center text-2xl shadow-sm">
                        <Icon />
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs sm:text-sm font-bold">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-3xl lg:text-3xl font-black text-[var(--text)] leading-snug group-hover:text-[var(--primary)] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base lg:text-lg text-[var(--text-2)] font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-5 border-t border-[var(--border)]/60">
                    <h4 className="text-xs sm:text-sm uppercase tracking-wider font-extrabold text-[var(--text)] mb-3">
                      বিশেষ পদক্ষেপসমূহ:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-semibold text-[var(--text)]">
                      {item.points.map((point: string, pIdx: number) => (
                        <li key={pIdx} className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className={`lg:col-span-6 relative h-80 sm:h-96 lg:h-full lg:min-h-[420px] w-full overflow-hidden order-1 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={idx === 0}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}