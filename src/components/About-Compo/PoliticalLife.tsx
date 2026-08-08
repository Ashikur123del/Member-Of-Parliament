"use client";

import Image, { type StaticImageData } from "next/image";
import { FiFlag, FiAward, FiCalendar, FiCheckCircle, FiCamera } from "react-icons/fi";

export interface PoliticalRoleItem {
  title: string;
  organization: string;
  period: string;
  desc?: string;
}

export interface PoliticalPhotoItem {
  src: string | StaticImageData;
  caption: string;
}

export interface PoliticalLifeProps {
  title?: string;
  heroImage?: string | StaticImageData;
  paragraphs?: string[];
  roles?: PoliticalRoleItem[];
  achievements?: string[];
  galleryTitle?: string;
  photos?: PoliticalPhotoItem[];
}

export default function PoliticalLife({
  title = "রাজনৈতিক জীবন",
  heroImage,
  paragraphs = [
    "ডা. দেওয়ান মোহাম্মদ সালাউদ্দিন দীর্ঘ সময় ধরে সাভার ও আশুলিয়ার জনগণের সেবায় নিজেকে উৎসর্গ করেছেন। ছাত্রজীবন থেকেই তিনি স্বৈরাচারবিরোধী আন্দোলন ও সাধারণ মানুষের গণতান্ত্রিক অধিকার আদায়ের সংগ্রামে সক্রিয় ভূমিকা পালন করেন।",
    "একজন চিকিৎসক হিসেবে রাজনীতিকে তিনি জনসেবার অন্যতম মাধ্যম হিসেবে গ্রহণ করেন। সংসদ সদস্য হিসেবে দায়িত্ব পালনকালে তিনি এলাকার সড়ক যোগাযোগ, শিক্ষাপ্রতিষ্ঠানের উন্নয়ন, চিকিৎসা ব্যবস্থার আধুনিকায়ন এবং নদী দূষণ প্রতিরোধে নানামুখী পদক্ষেপ গ্রহণ করেন।",
  ],
  roles = [
    {
      title: "সাবেক সংসদ সদস্য",
      organization: "জাতীয় সংসদ (ঢাকা-১৯ আসন)",
      period: "২০০১ - ২০০৬",
      desc: "সাভার ও আশুলিয়া অঞ্চলের অবকাঠামোগত উন্নয়ন এবং জনগণের জীবনযাত্রার মানে ব্যাপক পরিবর্তন আনয়ন।",
    },
    {
      title: "সভাপতি / দায়িত্বপ্রাপ্ত কর্মকর্তা",
      organization: "স্থানীয় রাজনৈতিক দলীয় কমিটি",
      period: "২০০৫ - বর্তমান",
      desc: "তৃণমূল পর্যায়ে সংগঠনকে শক্তিশালী করা এবং সাধারণ মানুষের অধিকার রক্ষায় নেতৃত্ব প্রদান।",
    },
  ],
  achievements = [
    "সাভারের বিভিন্ন গ্রামীণ ও শহর এলাকার প্রধান সড়কসমূহ পাকা ও প্রশস্তকরণ।",
    "স্থানীয় সরকারি ও বেসরকারি হাসপাতালে স্বাস্থ্যসেবা নিশ্চিতকরণে সহায়তা।",
    "শিক্ষা ব্যবস্থার মানোন্নয়নে নতুন স্কুল ও কলেজের অবকাঠামো নির্মাণ।",
    "শিল্পাঞ্চলের শ্রমিক ও মালিকদের মধ্যে সুসম্পর্ক বজায় রাখতে সামাজিক মেলবন্ধন তৈরি।",
  ],
  galleryTitle = "রাজনৈতিক কর্মকাণ্ডের ছবি",
  photos = [],
}: PoliticalLifeProps) {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Main Content Card */}
      <div className="rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] overflow-hidden shadow-sm">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-[var(--border)] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-xl font-bold">
            <FiFlag />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {title}
          </h2>
        </div>

        {/* Hero Banner Image */}
        {heroImage && (
          <div className="relative w-full h-64 sm:h-80 md:h-[380px] bg-[var(--surface)] overflow-hidden">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              priority
              sizes="(max-width: 1200px) 100vw, 800px"
            />
          </div>
        )}

        {/* Description Paragraphs */}
        {paragraphs.length > 0 && (
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
        )}
      </div>

      {/* Political Roles Timeline Grid */}
      {roles.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3">
            <FiAward className="text-[var(--primary)] text-xl" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              রাজনৈতিক পদ ও দায়িত্বাবলী
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roles.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] space-y-2 relative overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)]" />
                <div className="flex justify-between items-center pl-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded bg-[var(--primary-light)] text-[var(--primary)]">
                    <FiCalendar className="text-[10px]" /> {item.period}
                  </span>
                  <span className="text-xs text-[var(--muted)] font-medium">
                    {item.organization}
                  </span>
                </div>
                <h4 className="font-bold text-base pl-2 pt-1">{item.title}</h4>
                {item.desc && (
                  <p className="text-xs text-[var(--text-2)] leading-relaxed pl-2 pt-1 border-t border-[var(--border)]/60">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Major Achievements */}
      {achievements.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] space-y-4 shadow-sm">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <FiCheckCircle className="text-[var(--primary)] text-2xl" /> প্রধান প্রধান উন্নয়ন ও রাজনৈতিক অর্জনসমূহ
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {achievements.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-2)] bg-[var(--surface)] p-3.5 rounded-xl border border-[var(--border)]/50"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Photo Gallery */}
      {photos.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3">
            <FiCamera className="text-[var(--primary)] text-xl" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {galleryTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] overflow-hidden shadow-sm hover:border-[var(--primary)]/40 transition-all duration-300"
              >
                <div className="relative w-full h-40 sm:h-48 bg-[var(--surface)] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <div className="p-3 bg-[var(--surface-2)]">
                  <p className="text-xs font-semibold text-[var(--text-2)] group-hover:text-[var(--primary)] transition-colors line-clamp-1 text-center">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}