"use client";

import HeroBio from "@/components/About-Compo/HeroBio";
import { FiMapPin, FiArrowRight, FiPhoneCall } from "react-icons/fi";
import ConstituencyImg from "@/assets/img-6.jpg";
import { AreaOverView } from "@/components/Constituency/AreaOverView";
import { UnionList } from "@/components/Constituency/UnionList";
import { DevelopmentFocus } from "@/components/Constituency/DevelopmentFocus";
import { EmergencyHelpline } from "@/components/Constituency/EmergencyHelpline";
import { AreaProblemForm } from "@/components/Constituency/AreaProblemForm";

const ConstituencyPage = () => {
  return (
    <main className="min-h-screen space-y-2 sm:space-y-4">
      <HeroBio
        badgeText="সাবেক ভাইস চেয়ারম্যান • সাভার উপজেলা পরিষদ"
        badgeIcon={FiMapPin}
        image={ConstituencyImg}
        imageAlt="সাভার ও আশুলিয়ার সাধারণ জনগণের সাথে দেওয়ান মঈনুদ্দিন বিপ্লব"
        name="দেওয়ান মঈনুদ্দিন বিপ্লব"
        title="স্মার্ট, নিরাপদ ও বাসযোগ্য ঢাকা-১৯ গড়ার অঙ্গীকার"
        description="সাভার উপজেলা পরিষদের সাবেক ভাইস চেয়ারম্যান হিসেবে দীর্ঘ অভিজ্ঞতা থেকে—শিল্পাঞ্চল সাভার ও আশুলিয়ার সাধারণ মানুষ, পোশাক শ্রমিক ও ব্যবসায়ীদের জীবনমান উন্নয়ন, যানজটমুক্ত সড়ক এবং টেকসই অবকাঠামো গঠনে আমরা প্রতিশ্রুতিবদ্ধ।"
        stats={[
          { label: "সাবেক পদবী", value: "ভাইস চেয়ারম্যান" },
          { label: "কর্মক্ষেত্র", value: "সাভার ও আশুলিয়া" },
          { label: "প্রধান লক্ষ্য", value: "স্মার্ট সাভার" },
        ]}
        actions={[
          {
            label: "সমস্যা জানান",
            href: "#problem-form",
            variant: "primary",
            icon: FiArrowRight,
          },
          {
            label: "জরুরি হেল্পলাইন",
            href: "#helpline",
            variant: "outline",
            icon: FiPhoneCall,
          },
        ]}
      />

      <AreaOverView />
      <UnionList />
      <DevelopmentFocus />
      <EmergencyHelpline />
      <AreaProblemForm />
    </main>
  );
};

export default ConstituencyPage;
