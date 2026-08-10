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
        badgeText="মিডিয়া ও চিত্র গ্যালারি"
        badgeIcon={FiAward}
        image={Image5}
        name="দেওয়ান মঈনুদ্দিন বিপ্লব"
        title="সংসদীয় আসন ১৯২ (ঢাকা-১৯ - সাভার ও আশুলিয়া)"
        description="সাভার ও আশুলিয়ার উন্নয়ন মূলক কর্মকাণ্ড, প্রেস ব্রিফিং, মাঠপর্যায়ের পরিদর্শন ও জনসেবামূলক ইভেন্টের সার্বিক চিত্রপট।"
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
