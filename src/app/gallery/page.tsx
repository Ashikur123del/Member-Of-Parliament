import React from "react";

import { FiAward, FiArrowRight } from "react-icons/fi";
import Image5 from "@/assets/img-7.jpg";
import HeroBio from "@/components/About-Compo/HeroBio";
import { VideoNewsSection } from "@/components/NewsMedia/VideoNewsSection";
import { PhotoGallery } from "@/components/Gallery/PhotoGallery";
import { MediaCoverage } from "@/components/Gallery/MediaCoverage";

export default function GalleryPage() {
  return (
    <>
  <HeroBio
  badgeText="চিত্র ও মিডিয়া গ্যালারি"
  badgeIcon={FiAward}
  image={Image5}
  name="দেওয়ান মঈনুদ্দিন বিপ্লব"
  title="সাবেক ভাইস চেয়ারম্যান, সাভার উপজেলা পরিষদ"
  description="সাভার ও আশুলিয়া এলাকার উন্নয়নমূলক কর্মকাণ্ড, রাজনৈতিক ও সামাজিক কর্মসূচি, মাঠপর্যায়ের পরিদর্শন এবং জনসেবামূলক ইভেন্টের সচিত্র ডকুমেন্টেশন।"
  stats={[
    { label: "ছবি", value: "৫০+" },
    { label: "ভিডিও", value: "২০+" },
    { label: "প্রেস রিপোর্ট", value: "১৫+" },
  ]}
  actions={[
    {
      label: "যোগাযোগ করুন",
      href: "/contact",
      variant: "primary",
      icon: FiArrowRight,
    },
    {
      label: "চলমান প্রকল্প",
      href: "/projects",
      variant: "outline",
    },
  ]}
/>

      <PhotoGallery />
      <VideoNewsSection />
      <MediaCoverage />
    </>
  );
}
