"use client";

import HeroBio from "@/components/About-Compo/HeroBio";
import { HelpFaq } from "@/components/HelpFaq";
import { HelpSearch } from "@/components/HelpSearch";

import { FiHelpCircle, FiMessageSquare, FiPhoneCall } from "react-icons/fi";
import S5 from '@/assets/S-5.jpg'

export default function HelpPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <HeroBio
        badgeText="সাহায্য ও সহযোগিতা কেন্দ্র"
        badgeIcon={FiHelpCircle}
        image={S5}
        name="আমরা আপনাকে কীভাবে সাহায্য করতে পারি?"
        title="ঢাকা-১৯ নাগরিক সহায়তা কেন্দ্র"
        description="আপনার যেকোনো নাগরিক সুবিধা, ফরম পূরণ বা সহায়তার জন্য তথ্য পেতে সাহায্য নিন। জরুরি প্রয়োজনে সরাসরি হটলাইনে যোগাযোগ করার সুযোগ রয়েছে।"
        stats={[
          { label: "সাপ্তাহিক সহায়তা", value: "৭ দিন" },
          { label: "জরুরি সাপোর্ট", value: "২৪/৭ ঘন্টা" },
          { label: "সন্তুষ্টির হার", value: "৯৫%" },
        ]}
        actions={[
          {
            label: "অভিযোগ জমা দিন",
            href: "/complain",
            variant: "primary",
            icon: FiMessageSquare,
          },
          {
            label: "যোগাযোগের ঠিকানা",
            href: "/contact",
            variant: "outline",
            icon: FiPhoneCall,
          },
        ]}
      />

      <div className="mt-10 space-y-8">
        <HelpSearch />
        <HelpFaq />
      </div>
    </main>
  );
}