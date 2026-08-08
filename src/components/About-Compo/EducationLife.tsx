"use client";

import Image, { type StaticImageData } from "next/image";
import { FiBookOpen, FiCalendar, FiMapPin, FiCamera } from "react-icons/fi";

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  desc?: string;
  field?: string;
}

export interface PhotoItem {
  src: string | StaticImageData;
  caption: string;
}

export interface EducationLifeProps {
  title?: string;
  heroImage?: string | StaticImageData;
  paragraphs?: string[];
  education?: EducationItem[];
  galleryTitle?: string;
  photos?: PhotoItem[];
}

export default function EducationLife({
  title = "শিক্ষাজীবন",
  heroImage,
  paragraphs = [
    "ডা. দেওয়ান মোহাম্মদ সালাউদ্দিন তাঁর প্রাথমিক ও মাধ্যমিক শিক্ষা অত্যন্ত সুনামের সাথে সম্পন্ন করেন। ছোটবেলা থেকেই তিনি মেধাবী শিক্ষার্থী হিসেবে পরিচিত ছিলেন।",
    "পরবর্তীতে তিনি চিকিৎসা বিজ্ঞানে উচ্চশিক্ষা অর্জন করেন এবং একজন সফল চিকিৎসক হিসেবে আত্মপ্রকাশ করেন। তাঁর শিক্ষাজীবনের অভিজ্ঞতা ও অর্জিত জ্ঞান পরবর্তীতে মানবসেবা ও সমাজসেবামূলক কাজে গুরুত্বপূর্ণ ভূমিকা পালন করেছে।",
  ],
  education = [],
  galleryTitle = "শিক্ষাজীবনের ছবি",
  photos = [],
}: EducationLifeProps) {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Main Content Card */}
      <div className="rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] overflow-hidden shadow-sm">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-[var(--border)] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-xl font-bold">
            <FiBookOpen />
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

        {/* Paragraphs */}
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

      {/* Education Timeline Grid */}
      {education.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] space-y-2 relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)]" />
              <div className="flex justify-between items-center pl-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded bg-[var(--primary-light)] text-[var(--primary)]">
                  <FiCalendar className="text-[10px]" /> {item.year}
                </span>
                <span className="flex items-center gap-1 text-xs text-[var(--muted)]">
                  <FiMapPin /> {item.institution}
                </span>
              </div>
              <h3 className="font-bold text-base pl-2">{item.degree}</h3>
              {item.desc && (
                <p className="text-xs text-[var(--text-2)] leading-relaxed pl-2 pt-1 border-t border-[var(--border)]/60">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
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