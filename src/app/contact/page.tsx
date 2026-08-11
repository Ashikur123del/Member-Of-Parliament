"use client";

import HeroBio from "@/components/About-Compo/HeroBio";
// import { ContactInfo } from "@/components/Contact/ContactInfo";
// import { ContactForm } from "@/components/Contact/ContactForm"; 

import { FiPhoneCall, FiArrowRight } from "react-icons/fi";
import C1 from '@/assets/C-1.jpg'

export default function ContactPage() {
  return (
    <main className="">
      <HeroBio
        badgeText="সরাসরি যোগাযোগ"
        badgeIcon={FiPhoneCall}
        image={C1}
        name="আমাদের সাথে যোগসূত্র স্থাপন করুন"
        title="ঢাকা-১৯ (সাভার ও আশুলিয়া) নাগরিক সেবা ডেস্ক"
        description="আপনার যেকোনো জিজ্ঞাসা, পরামর্শ বা সহায়তার জন্য সরাসরি অফিসে যোগাযোগ করতে পারেন অথবা ডিজিটালি বার্তা পাঠাতে পারেন।"
        stats={[
          { label: "সাপ্তাহিক সেবা", value: "৫ দিন" },
          { label: "কল সেন্টার", value: "২৪/৭ খোলা" },
          { label: "গড় উত্তর সময়", value: "২৪ ঘণ্টা" },
        ]}
        actions={[
          { label: "জরুরি কন্টাক্ট", href: "/#emergency-contacts", variant: "primary", icon: FiArrowRight },
          { label: "অভিযোগ জমা", href: "/complain", variant: "outline" },
        ]}
      />
{/* 
      <div className="max-w-7xl mx-auto my-5 md:my-15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
        <div className="lg:col-span-6">
          <ContactInfo />
        </div>
        <div className="lg:col-span-6">
          <ContactForm />
        </div>
      </div>
      </div> */}
    </main>
  );
}