"use client";

import HeroBio from "@/components/About-Compo/HeroBio";
import { ContactInfo } from "@/components/Contact/ContactInfo";
import { ContactForm } from "@/components/Contact/ContactForm"; 

import { FiPhoneCall, FiArrowRight } from "react-icons/fi";
import C1 from '@/assets/C-1.jpg';

export default function ContactPage() {
  return (
    <main className="">
      <HeroBio
        badgeText="সরাসরি যোগাযোগ"
        badgeIcon={FiPhoneCall}
        image={C1}
        name="দেওয়ান মঈনুদ্দিন বিপ্লব"
        title="সাবেক ভাইস চেয়ারম্যান, সাভার উপজেলা পরিষদ"
        description="আপনার যেকোনো জিজ্ঞাসা, পরামর্শ, উন্নয়নমূলক প্রস্তাবনা বা সহায়তার জন্য অফিসে সরাসরি যোগাযোগ করতে পারেন অথবা বার্তা পাঠাতে পারেন।"
        stats={[
          { label: "অফিস সময়", value: "৫ দিন" },
          { label: "জরুরি সেবা", value: "২৪/৭" },
          { label: "গড় উত্তর সময়", value: "২৪ ঘণ্টা" },
        ]}
        actions={[
          { label: "জরুরি কন্টাক্ট", href: "/#emergency-contacts", variant: "primary", icon: FiArrowRight },
          { label: "অভিযোগ জমা", href: "/complain", variant: "outline" },
        ]}
      />

      <div className="max-w-7xl mx-auto my-6 md:my-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          <div className="lg:col-span-6">
            <ContactInfo />
          </div>
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}