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
      subtitle: "ফ্লাইওভার ও চার লেন সড়ক",
      desc: "আশুলিয়া, বাইপাইল এবং নবীনগর অঞ্চলের দীর্ঘদিনের তীব্র যানজট চিরতরে দূর করতে এলিভেটেড এক্সপ্রেসওয়ে, আধুনিক ফ্লাইওভার এবং সংযোগ সড়কসমূহ চার লেনে উন্নীতকরণের কাজ দ্রুত বাস্তবায়ন করা হবে।",
      icon: FiTruck,
      image: N1,
      points: [
        "স্মার্ট ট্রাফিক কন্ট্রোল সিস্টেম",
        "বাইপাইল মোড়ে আধুনিক ফ্লাইওভার",
        "পথচারীদের জন্য নিরাপদ ওভারব্রিজ",
      ],
    },
    {
      title: "জলাবদ্ধতা দূরীকরণ ও নদী পরিবেশ রক্ষা",
      subtitle: "ড্রেনেজ ও নদী পুনরুদ্ধার",
      desc: "বর্ষাকালে সাভার-আশুলিয়ার প্রধান রাস্তা ও আবাসিক এলাকার জলাবদ্ধতা দূর করতে মাস্টারপ্ল্যানের মাধ্যমে পরিকল্পিত ড্রেনেজ নেটওয়ার্ক তৈরি এবং বংশাই ও তুরাগ নদীকে দূষণ মুক্ত করার বিশেষ পদক্ষেপ গ্রহণ।",
      icon: FiDroplet,
      image: N2,
      points: [
        "বংশাই ও তুরাগ নদীর সীমানা নির্ধারণ",
        "আধুনিক বর্জ্য শোধনাগার (STP)",
        "খাল পুনঃখনন ও ড্রেন পরিষ্কার",
      ],
    },
    {
      title: "শ্রমিক কল্যাণ, স্বাস্থ্য সেবা ও জীবনমান",
      subtitle: "স্বাস্থ্য সুরক্ষা ও ন্যায়বিচার",
      desc: "আমাদের শিল্পাঞ্চলের মূল চালিকাশক্তি তৈরি পোশাক শ্রমিকদের জন্য বিনামূল্যে স্বাস্থ্যসেবা, বিশেষায়িত বার্ন ইউনিট স্থাপন, কাজের নিরাপদ পরিবেশ এবং দ্রুত আইনি সহায়তা নিশ্চিতকরণ।",
      icon: FiHeart,
      image: N3,
      points: [
        "শ্রমিকদের জন্য বিশেষায়িত হেলথ কার্ড",
        "উপজেলা হাসপাতালে শয্যা সংখ্যা বৃদ্ধি",
        "২৪/৭ ফ্রি অ্যাম্বুলেন্স সেবা",
      ],
    },
    {
      title: "নিরাপত্তা ব্যবস্থা, চাঁদাবাজিমুক্ত ও মাদকমুক্ত উপশহর",
      subtitle: "জিরো টলারেন্স নীতি",
      desc: "শিল্পাঞ্চলে ব্যবসায়ী, শ্রমিক ও সাধারণ নাগরিকদের পূর্ণ নিরাপত্তা নিশ্চিত করতে সিসিটিভি সার্ভেইল্যান্সের মাধ্যমে কিশোর গ্যাং কালচার, ঝুট ব্যবসা কেন্দ্রিক চাঁদাবাজি এবং মাদকের ব্যবসা পুরোপুরি নির্মূল করা।",
      icon: FiShield,
      image: N4,
      points: [
        "পুরো এলাকা স্মার্ট সিসিটিভির আওতায়",
        "চাঁদাবাজ ও কিশোর গ্যাংদের বিরুদ্ধে কঠোর ব্যবস্থা",
        "কমিউনিটি পুলিশিং জোরদার",
      ],
    },
  ];

  return (
    <section className="py-10 sm:py-24 bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-20 space-y-2  md:space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--text)] tracking-tight">
            উন্নয়নের প্রধান অগ্রাধিকারসমূহ
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-2)] font-medium  md:font-semibold leading-relaxed">
            সাভার ও আশুলিয়াবাসীর দীর্ঘদিনের নাগরিক দুর্ভোগ দূরীকরণ এবং আধুনিক
            উপশহর গড়ে তুলতে আমাদের সুনির্দিষ্ট ও বাস্তবমুখী পরিকল্পনা।
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
