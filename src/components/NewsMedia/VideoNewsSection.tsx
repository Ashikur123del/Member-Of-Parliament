"use client";

import Image from "next/image";
import { FiPlayCircle, FiClock, FiCalendar, FiX } from "react-icons/fi";
import R2 from "@/assets/r-2.webp";
import { useState } from "react";

interface VideoNews {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  image: string | typeof R2;
  videoUrl: string;
}

export const VideoNewsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoNews | null>(null);

  const videoNewsList: VideoNews[] = [
    {
      id: 1,
      category: "ভিডিও নোটিশ",
      title: "সাভার ফ্লাইওভার প্রকল্পের সর্বশেষ পরিদর্শন ও ড্রোন ব্রিফিং",
      description:
        "সাভার ফ্লাইওভার ও সংযোগ সড়কের ফোর-লেন সম্প্রসারণ কাজের বর্তমান অগ্রগতি সরজমিনে পরিদর্শন করা হয়েছে। নির্ধারিত সময়ের আগেই শেষ হচ্ছে ড্রেনেজ ও লেন আধুনিকায়ন।",
      date: "০৮ আগস্ট, ২০২৬",
      duration: "০৪:১৫ মিনিট",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
      videoUrl:
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F27677864175196861&show_text=false",
    },
    {
      id: 2,
      category: "বিশেষ সাক্ষাৎকার",
      title:
        "আশুলিয়া শিল্পাঞ্চলের শ্রমিক স্বাস্থ্য সুরক্ষা ও মেডিকেল ক্যাম্প নিয়ে বার্তা",
      description:
        "পোশাক শিল্প এলাকার হাজারো শ্রমিকের ফ্রি হেলথ চেকআপ এবং জরুরি স্বাস্থ্য সেবা নিশ্চিতকরণে গৃহীত পদক্ষেপ নিয়ে গুরুত্বপূর্ণ ভিডিও সাক্ষাৎকার।",
      date: "০৬ আগস্ট, ২০২৬",
      duration: "০৬:৩০ মিনিট",
      image:
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop",

      videoUrl:
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2384738655268243&show_text=false",
    },
    {
      id: 3,
      category: "উন্নয়ন রিপোর্ট",
      title:
        "আশুলিয়া নতুন ড্রেনেজ সিস্টেম ও জলাবদ্ধতা নিরসন প্রকল্পের ভিডিও ডকুমেন্টারি",
      description:
        "দীর্ঘদিনের জলাবদ্ধতা দূর করতে নতুন আন্ডারগ্রাউন্ড ক্যানাল ও ড্রেনেজ লাইনের নির্মাণ কাজ কীভাবে সার্বিক চিত্র বদলে দিচ্ছে তার ওপর বিশেষ প্রতিবেদন।",
      date: "০৩ আগস্ট, ২০২৬",
      duration: "০৩:৪৫ মিনিট",
      image: R2,
      videoUrl:
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2240649190104442&show_text=false",
    },
    {
      id: 4,
      category: "নাগরিক ইভেন্ট",
      title:
        "সাভার কেন্দ্রীয় মাঠে আয়োজিত বইমেলা ও সাংস্কৃতিক উৎসবের সরাসরি হাইলাইটস",
      description:
        "স্থানীয় সাহিত্য অনুরাগী ও তরুণ প্রজন্মের পদচারণায় মুখরিত সাভার কেন্দ্রীয় মেলার উদ্বোধনী অনুষ্ঠান এবং চিত্রাঙ্কন প্রতিযোগিতার বিশেষ চিত্র।",
      date: "২৮ জুলাই, ২০২৬",
      duration: "০৫:১০ মিনিট",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
      videoUrl:
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1070192922234617&show_text=false",
    },
  ];

  return (
    <section className="my-12 p-6 sm:p-10 rounded-3xl bg-[var(--surface-2)] border border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--border)] pb-5">
          <div>
            <span className="text-xs sm:text-sm font-bold text-[var(--primary)] uppercase tracking-wider">
              ভিডিও গ্যালারি
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] mt-1">
              প্রেস ব্রিফিং ও ভিডিও রিপোর্ট
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-2)]">
            সর্বশেষ ভিডিও আপডেট এবং মাঠপর্যায়ের চিত্র একনজরে দেখুন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {videoNewsList.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="flex flex-col rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300 hover:shadow-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative w-full h-[280px] sm:h-[340px] bg-black overflow-hidden shrink-0">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={video.id <= 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <span className="bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {video.category}
                  </span>
                  <span className="bg-black/70 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1">
                    <FiClock className="text-amber-400" /> {video.duration}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-10">
                  <div className="p-3.5 rounded-full bg-white/20 backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                    <FiPlayCircle className="text-white text-5xl sm:text-6xl drop-shadow-md" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[var(--muted)] font-medium">
                    <FiCalendar className="text-[var(--primary)]" />
                    <span>{video.date}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors leading-snug">
                    {video.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--primary)] group-hover:underline">
                    ভিডিওটি পপআপে দেখুন
                  </span>
                  <span className="text-xs text-[var(--muted)]">
                    এইচডি রিপোর্ট
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div
              className="absolute inset-0"
              onClick={() => setSelectedVideo(null)}
            />

            <div className="relative w-full max-w-5xl bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col my-auto max-h-[90vh]">
              <div className="p-4 sm:p-5 border-b border-[var(--border)] flex items-center justify-between bg-[var(--surface-2)]">
                <div>
                  <span className="text-xs font-bold text-[var(--primary)]">
                    {selectedVideo.category}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-[var(--text)] line-clamp-1">
                    {selectedVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 rounded-xl bg-[var(--surface)] hover:bg-[var(--primary)] hover:text-white transition-all text-[var(--text)] shrink-0"
                  aria-label="Close modal"
                >
                  <FiX className="text-xl" />
                </button>
              </div>
              <div className="relative w-full h-[65vh] sm:h-[75vh] bg-black flex items-center justify-center">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="p-4 sm:p-6 bg-[var(--surface)] space-y-2 overflow-y-auto">
                <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                  <span>{selectedVideo.date}</span>
                  <span>•</span>
                  <span>{selectedVideo.duration}</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
