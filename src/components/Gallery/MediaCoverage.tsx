"use client";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
interface MediaItem {
  id: number;
  paperName: string;
  headline: string;
  date: string;
  image: string;
  link: string;
}

const mediaList: MediaItem[] = [
  {
    id: 1,
    paperName: "দৈনিক প্রথম আলো",
    headline:
      "সাভার ফ্লাইওভার প্রকল্পের কাজের দ্রুত অগ্রগতিতে সন্তুষ্টি প্রকাশ এমপি সাহেবের",
    date: "০৭ আগস্ট, ২০২৬",
    image:
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800",
    link: "#",
  },
  {
    id: 2,
    paperName: "দি ডেইলি স্টার",
    headline: "আশুলিয়ায় তৈরি পোশাক শ্রমিকদের জন্য ফ্রি হেলথ ক্যাম্প উদ্বোধন",
    date: "০৫ আগস্ট, ২০২৬",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800",
    link: "#",
  },
  {
    id: 3,
    paperName: "বাংলাদেশ প্রতিদিন",
    headline: "জলাবদ্ধতা নিরসনে আশুলিয়ায় মেগা ড্রেনেজ প্রকল্পের কাজ শুরু",
    date: "০২ আগস্ট, ২০২৬",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=800",
    link: "#",
  },
];

export const MediaCoverage = () => {
  return (
    <section className="my-12 p-6 sm:p-10 rounded-3xl bg-[var(--surface-2)] border border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">
            পত্রিকায় এমপি
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] mt-1">
            প্রেস ও মিডিয়া কভারেজ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaList.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden group hover:border-[var(--primary)] transition-all"
            >
              <div className="relative h-48 w-full bg-black/10">
                <Image
                  src={item.image}
                  alt={item.headline}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                    <span className="font-bold text-[var(--primary)]">
                      {item.paperName}
                    </span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                    {item.headline}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-[var(--primary)] pt-2 border-t border-[var(--border)]">
                  <span>বিস্তারিত পড়ুন</span>
                  <FiExternalLink />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
