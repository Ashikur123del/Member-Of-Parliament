"use client";

import HeroBio from "@/components/About-Compo/HeroBio";
import { ComplainForm } from "@/components/ComplainForm";

import { FiMessageSquare, FiPhoneCall } from "react-icons/fi";
import C1 from '@/assets/C-1.jpg'

export default function ComplainPage() {
  return (
    <main className="">
      
      <HeroBio
        badgeText="নাগরিক সেবা পোর্টাল"
        badgeIcon={FiMessageSquare}
        image={C1}
        name="অভিযোগ ও পরামর্শ সেল"
        title="ঢাকা-১৯ (সাভার ও আশুলিয়া)"
        description="আপনার এলাকার যেকোনো নাগরিক সমস্যা, দুর্নীতি বা সেবা সংক্রান্ত অভিযোগ আমাদের জানান। আমরা দ্রুততম সময়ে সমাধান নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।"
        stats={[
          { label: "সমাধানের হার", value: "৯২%" },
          { label: "গড় সমাধান সময়", value: "৩-৭ দিন" },
          { label: "অভিযোগ জমা", value: "২৪/৭ খোলা" },
        ]}
        actions={[
          {
            label: "জরুরি হেল্পলাইন",
            href: "tel:+8801700000000",
            variant: "primary",
            icon: FiPhoneCall,
          },
        ]}
      />

     
      <div className=" my-10 md:my-20 max-w-4xl mx-auto">
        <ComplainForm />
      </div>
    </main>
  );
}