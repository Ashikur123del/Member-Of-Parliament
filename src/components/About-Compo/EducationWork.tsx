"use client";

import { useState, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
import { IconType } from "react-icons";
import {
  FiBookOpen,
  FiCamera,
  FiCalendar,
  FiMapPin,
  FiUser,
  FiFlag,
  FiHeart,
  FiSmile,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

import f1 from "@/assets/f1.jpg";
import f4 from "@/assets/f4.jpg";
import f5 from "@/assets/f5.jpg";

export interface PhotoItem {
  src: string | StaticImageData;
  caption: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  desc?: string;
  field?: string;
}

export interface PoliticalRoleItem {
  title: string;
  organization: string;
  period: string;
  desc?: string;
}

export interface SidebarTabItem {
  id: string;
  label: string;
  icon: IconType;
}

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

export interface EducationLifeProps {
  title?: string;
  heroImage?: string | StaticImageData;
  paragraphs?: string[];
  education?: EducationItem[];
  galleryTitle?: string;
  photos?: PhotoItem[];
}

export interface PoliticalLifeProps {
  title?: string;
  heroImage?: string | StaticImageData;
  paragraphs?: string[];
  roles?: PoliticalRoleItem[];
  achievements?: string[];
  galleryTitle?: string;
  photos?: PhotoItem[];
}

export interface EducationWorkProps {
  heroImage?: string | StaticImageData;
  personalHeroImage?: string | StaticImageData;
  educationHeroImage?: string | StaticImageData;
  politicalHeroImage?: string | StaticImageData;

  personalParagraphs?: string[];
  personalDetails?: PersonalDetailItem[];

  educationTitle?: string;
  educationParagraphs?: string[];
  educationList?: EducationItem[];
  educationGalleryTitle?: string;
  educationPhotos?: PhotoItem[];

  politicalTitle?: string;
  politicalParagraphs?: string[];
  politicalRoles?: PoliticalRoleItem[];
  politicalAchievements?: string[];
  politicalGalleryTitle?: string;
  politicalPhotos?: PhotoItem[];
}

export function PersonalLife({
  title = "ব্যক্তিগত জীবন",
  image = f4,
  paragraphs = [
    "দেওয়ান মঈনুদ্দিন বিপ্লব এক সম্ভ্রান্ত ও ঐতিহ্যবাহী পরিবারে জন্মগ্রহণ করেন। ছোটবেলা থেকেই তিনি সাধারণ মানুষের সুখ-দুঃখ এবং সামাজিক কর্মকাণ্ডে নিবিড়ভাবে যুক্ত ছিলেন। চিকিৎসা সেবার পাশাপাশি সমাজসেবামূলক কাজে তাঁর আত্মনিয়োগ প্রশংসনীয়।",
    "ব্যক্তিগত জীবনে তিনি অত্যন্ত সৎ, বিনয়ী ও সাদাসিধে জীবনযাপনে বিশ্বাসী। পরিবারের পাশাপাশি সাভার ও আশুলিয়া অঞ্চলের সাধারণ মানুষকেই তিনি নিজের পরিবার বলে মনে করেন।",
  ],
  details = [
    { label: "জন্মস্থান", value: "সাভার, ঢাকা", icon: FiMapPin },
    { label: "পেশা", value: "চিকিৎসক ও সমাজসেবক", icon: FiUser },
    { label: "শখ", value: "বই পড়া ও ভ্রমণ", icon: FiSmile },
  ],
}: PersonalLifeProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] overflow-hidden shadow-sm">
        <div className="p-6 pb-4 border-b border-[var(--border)] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-xl font-bold">
            <FiUser />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text)]">
            {title}
          </h2>
        </div>

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

export function EducationLife({
  title = "শিক্ষাজীবন",
  heroImage = f1,
  paragraphs = [],
  education = [],
  galleryTitle = "শিক্ষাজীবনের ছবি",
  photos = [],
}: EducationLifeProps) {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] overflow-hidden shadow-sm">
        <div className="p-6 pb-4 border-b border-[var(--border)] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-xl font-bold">
            <FiBookOpen />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text)]">
            {title}
          </h2>
        </div>

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
              <h3 className="font-bold text-base pl-2 text-[var(--text)]">
                {item.degree}
              </h3>
              {item.desc && (
                <p className="text-xs text-[var(--text-2)] leading-relaxed pl-2 pt-1 border-t border-[var(--border)]/60">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {photos.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3">
            <FiCamera className="text-[var(--primary)] text-xl" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)]">
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

export function PoliticalLife({
  title = "রাজনৈতিক জীবন",
  heroImage = f5,
  paragraphs = [
    "দেওয়ান মঈনুদ্দিন বিপ্লব দীর্ঘ সময় ধরে সাভার ও আশুলিয়ার জনগণের সেবায় নিজেকে উৎসর্গ করেছেন। ছাত্রজীবন থেকেই তিনি স্বৈরাচারবিরোধী আন্দোলন ও সাধারণ মানুষের গণতান্ত্রিক অধিকার আদায়ের সংগ্রামে সক্রিয় ভূমিকা পালন করেন।",
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
      <div className="rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] overflow-hidden shadow-sm">
        <div className="p-6 pb-4 border-b border-[var(--border)] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-xl font-bold">
            <FiFlag />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text)]">
            {title}
          </h2>
        </div>

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

      {roles.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3">
            <FiAward className="text-[var(--primary)] text-xl" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)]">
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
                <h4 className="font-bold text-base pl-2 pt-1 text-[var(--text)]">
                  {item.title}
                </h4>
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

      {achievements.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] space-y-4 shadow-sm">
          <h3 className="text-xl font-bold flex items-center gap-2 text-[var(--text)]">
            <FiCheckCircle className="text-[var(--primary)] text-2xl" /> প্রধান
            প্রধান উন্নয়ন ও রাজনৈতিক অর্জনসমূহ
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

      {photos.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3">
            <FiCamera className="text-[var(--primary)] text-xl" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)]">
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

const tabs: SidebarTabItem[] = [
  { id: "personal-section", label: "ব্যক্তিগত জীবন", icon: FiUser },
  { id: "education-section", label: "শিক্ষাজীবন", icon: FiBookOpen },
  { id: "political-section", label: "রাজনৈতিক জীবন", icon: FiFlag },
];

export default function EducationWork({
  personalHeroImage,
  educationHeroImage,
  politicalHeroImage,
  personalParagraphs,
  personalDetails,
  educationTitle,
  educationParagraphs,
  educationList = [],
  educationGalleryTitle,
  educationPhotos = [],
  politicalTitle,
  politicalParagraphs,
  politicalRoles,
  politicalAchievements,
  politicalGalleryTitle,
  politicalPhotos,
}: EducationWorkProps) {
  const [activeSection, setActiveSection] =
    useState<string>("personal-section");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    );

    tabs.forEach((tab) => {
      const element = document.getElementById(tab.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-1.5 bg-[var(--surface-2)] p-3 rounded-2xl border border-[var(--border)] shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSection === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => scrollToSection(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left ${
                    isActive
                      ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20"
                      : "text-[var(--text-2)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
                  }`}
                >
                  <Icon
                    className={`text-base shrink-0 ${isActive ? "text-white" : ""}`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </aside>

          <main className="lg:col-span-9 space-y-16">
            <section id="personal-section" className="scroll-mt-24">
              <PersonalLife
                image={personalHeroImage || f4}
                paragraphs={personalParagraphs}
                details={personalDetails}
              />
            </section>

            <section id="education-section" className="scroll-mt-24">
              <EducationLife
                title={educationTitle}
                heroImage={educationHeroImage || f1}
                paragraphs={educationParagraphs}
                education={educationList}
                galleryTitle={educationGalleryTitle}
                photos={educationPhotos}
              />
            </section>

            <section id="political-section" className="scroll-mt-24">
              <PoliticalLife
                title={politicalTitle}
                heroImage={politicalHeroImage || f5}
                paragraphs={politicalParagraphs}
                roles={politicalRoles}
                achievements={politicalAchievements}
                galleryTitle={politicalGalleryTitle}
                photos={politicalPhotos}
              />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
