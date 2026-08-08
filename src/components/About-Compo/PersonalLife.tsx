"use client";

import Image, { type StaticImageData } from "next/image";
import { type IconType } from "react-icons";
import { FiUser, FiHeart, FiMapPin, FiCalendar, FiSmile } from "react-icons/fi";

export interface PersonalDetailItem {
  label: string;
  value: string;
  icon?: IconType;
}

export interface PersonalLifeProps {
  title?: string;
  image?: string | StaticImageData;
  paragraphs?: string[];
  details?: PersonalDetailItem[];
}

export default function PersonalLife({
  title = "ব্যক্তিগত জীবন",
  image,
  paragraphs = [
    "ডা. দেওয়ান মোহাম্মদ সালাউদ্দিন এক সম্ভ্রান্ত ও ঐতিহ্যবাহী পরিবারে জন্মগ্রহণ করেন। ছোটবেলা থেকেই তিনি সাধারণ মানুষের সুখ-দুঃখ এবং সামাজিক কর্মকাণ্ডে নিবিড়ভাবে যুক্ত ছিলেন। চিকিৎসা সেবার পাশাপাশি সমাজসেবামূলক কাজে তাঁর আত্মনিয়োগ প্রশংসনীয়।",
    "ব্যক্তিগত জীবনে তিনি অত্যন্ত সৎ, বিনয়ী ও সাদাসিধে জীবনযাপনে বিশ্বাসী। পরিবারের পাশাপাশি সাভার ও আশুলিয়া অঞ্চলের সাধারণ মানুষকেই তিনি নিজের পরিবার বলে মনে করেন।",
  ],
  details = [
    { label: "জন্মস্থান", value: "সাভার, ঢাকা", icon: FiMapPin },
    { label: "পেশা", value: "চিকিৎসক ও সমাজসেবক", icon: FiUser },
    { label: "শখ", value: "বই পড়া ও ভ্রমণ", icon: FiSmile },
  ],
}: PersonalLifeProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Main Content Card */}
      <div className="rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] overflow-hidden shadow-sm">
        
        {/* Header */}
        <div className="p-6 pb-4 border-b border-[var(--border)] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-xl font-bold">
            <FiUser />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {title}
          </h1>
        </div>

        {/* Hero Image (Optional) */}
        {image && (
          <div className="relative w-full h-64 sm:h-80 md:h-[380px] bg-[var(--surface)] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              priority
              sizes="(max-width: 1200px) 100vw, 800px"
            />
          </div>
        )}

        {/* Description Paragraphs */}
        <div className="p-6 sm:p-8 space-y-4">
          {paragraphs.map((text, idx) => (
            <p
              key={idx}
              className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed text-justify"
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Quick Details Cards */}
      {details.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {details.map((item, idx) => {
            const Icon = item.icon || FiHeart;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center gap-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-2xl shrink-0">
                  <Icon />
                </div>
                <div>
                  <p className="text-xs text-[var(--muted)] font-medium">
                    {item.label}
                  </p>
                  <p className="font-bold text-sm text-[var(--text)] mt-0.5">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}