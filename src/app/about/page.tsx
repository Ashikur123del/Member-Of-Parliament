import { FiAward, FiArrowRight } from "react-icons/fi";

import EducationWork from "@/components/About-Compo/EducationWork";
import { VisionMission } from "@/components/About-Compo/VisionMission";
import MediaPress from "@/components/About-Compo/MediaPress";
import QuickContactCTA from "@/components/About-Compo/QuickContactCTA";

import f3 from "@/assets/f2.jpg";
import Image5 from "@/assets/img-5.jpg";
import HeroBio from "@/components/About-Compo/HeroBio";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--text)]">
      <div>
        <HeroBio
          badgeText="জনপ্রতিনিধি পরিচিতি"
          badgeIcon={FiAward}
          image={Image5}
          name="দেওয়ান মঈনুদ্দিন বিপ্লব"
          title="সাবেক ভাইস চেয়ারম্যান, সাভার উপজেলা পরিষদ"
          description="দেওয়ান মঈনুদ্দিন বিপ্লব ঢাকা-১৯ (সাভার ও আশুলিয়া) এলাকার সাধারণ মানুষের অধিকার প্রতিষ্ঠা ও সার্বিক উন্নয়নে দীর্ঘদিন ধরে কাজ করে যাচ্ছেন..."
          stats={[
            { label: "অভিজ্ঞতা", value: "২০+ বছর" },
            { label: "নির্বাচনী এলাকা", value: "ঢাকা-১৯ (১৯২)" },
            { label: "লক্ষ্য", value: "স্মার্ট সাভার" },
          ]}
          actions={[
            {
              label: "যোগাযোগ করুন",
              href: "/contact",
              variant: "primary",
              icon: FiArrowRight,
            },
            { label: "চলমান প্রকল্প", href: "/projects", variant: "outline" },
          ]}
        />

        <VisionMission />

        <EducationWork
          personalHeroImage={f3}
          educationTitle="শিক্ষাজীবন"
          educationParagraphs={[
            "দেওয়ান মঈনুদ্দিন বিপ্লব শিক্ষাজীবন শুরু হয় ময়মনসিংহ ক্যাডেট কলেজে (বর্তমান মির্জাপুর ক্যাডেট কলেজ), যেখানে তিনি ১৯৭৪ সালে সপ্তম শ্রেণীতে ভর্তি হয়ে ১৯৭৮ সালে এসএসসি এবং ১৯৮০ সালে এইচএসসি সম্পন্ন করেন। এরপর ১৯৮১ সালে তিনি ময়মনসিংহ মেডিকেল কলেজে ভর্তি হয়ে ১৯৮৭ সালে সাফল্যের সাথে এমবিবিএস ডিগ্রি অর্জন করেন এবং একই প্রতিষ্ঠানে এক বছরের ইন্টার্নশিপ সম্পন্ন করেন।",
            "পরবর্তীতে ১৯৮৯ থেকে ১৯৯০ সাল পর্যন্ত তিনি বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়ে (সাবেক পিজি হাসপাতাল) কার্ডিওলজি ও নেফ্রোলজি বিভাগে অনারারি ট্রেইনি হিসেবে দায়িত্ব পালন করেন। সরকারি হাসপাতালের পাশাপাশি তিনি দীর্ঘ সময় ধরে বিভিন্ন বেসরকারি ক্লিনিকে দক্ষতার সাথে চিকিৎসক হিসেবে নিয়োজিত ছিলেন, যেখানে তিনি সাধারণ মানুষের স্বাস্থ্যসেবায় নিবেদিতপ্রাণ হয়ে কাজ করে আসছেন।",
          ]}
          educationList={[
            {
              degree: "মেডিকেল ট্রেইনিং (কার্ডিওলজি ও নেফ্রোলজি)",
              institution: "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় (BSMMU)",
              year: "১৯৮৯ - ১৯৯০",
              desc: "অনারারি ট্রেইনি হিসেবে কার্ডিওলজি ও নেফ্রোলজি বিভাগে উচ্চতর প্রশিক্ষণ ও অভিজ্ঞতা অর্জন।",
            },
            {
              degree: "এমবিবিএস (M.B.B.S)",
              institution: "ময়মনসিংহ মেডিকেল কলেজ",
              year: "১৯৮৭",
              desc: "সাফল্যের সাথে এমবিবিএস ডিগ্রি অর্জন এবং এক বছরের ইন্টার্নশিপ সম্পন্ন।",
            },
            {
              degree: "উচ্চ মাধ্যমিক (HSC)",
              institution: "মোমেনশাহী ক্যাডেট কলেজ (মির্জাপুর)",
              year: "১৯৮০",
              desc: "ক্যাডেট কলেজ থেকে কৃতিত্বের সাথে উচ্চ মাধ্যমিক সম্পন্ন।",
            },
            {
              degree: "মাধ্যমিক (SSC)",
              institution: "মোমেনশাহী ক্যাডেট কলেজ (মির্জাপুর)",
              year: "১৯৭৮",
              desc: "ক্যাডেট কলেজ থেকে মাধ্যমিক সম্পন্ন।",
            },
          ]}
          educationGalleryTitle="শিক্ষাজীবনের ছবি"
          educationPhotos={[
            {
              src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600",
              caption: "ক্যাম্পাস জীবনের দিনগুলো",
            },
            {
              src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600",
              caption: "সহপাঠীদের সাথে",
            },
            {
              src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600",
              caption: "শিক্ষা কার্যক্রমে অংশগ্রহণ",
            },
            {
              src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600",
              caption: "স্মরণীয় আয়োজন",
            },
          ]}
        />
      </div>
      <MediaPress />
      <QuickContactCTA />
    </div>
  );
}
