"use client";

import HeroBio from "@/components/About-Compo/HeroBio";
import { FiMapPin, FiArrowRight, FiPhoneCall } from "react-icons/fi";
import ConstituencyImg from "@/assets/img-6.jpg"; 
import { AreaOverView } from "@/components/Constituency/AreaOverView";

const ConstituencyPage = () => {
  return (
    <main className="min-h-screen space-y-2 sm:space-y-4">
      <HeroBio
        badgeText="সংসদীয় আসন ১৯২ • ঢাকা-১৯"
        badgeIcon={FiMapPin}
        image={ConstituencyImg}
        imageAlt="সাভার ও আশুলিয়ার সাধারণ জনগণের সাথে দেওয়ান মঈনুদ্দিন বিপ্লব"
        name="সাভার ও আশুলিয়া"
        title="স্মার্ট, নিরাপদ ও বাসযোগ্য ঢাকা-১৯ গড়ার অঙ্গীকার"
        description="শিল্পাঞ্চল সাভার ও আশুলিয়ার সাধারণ মানুষ, পোশাক শ্রমিক ও ব্যবসায়ীদের জীবনমান উন্নয়ন, যানজটমুক্ত সড়ক এবং টেকসই অবকাঠামো গঠনে আমরা প্রতিশ্রুতিবদ্ধ।"
        stats={[
          { label: "সংসদীয় আসন", value: "ঢাকা-১৯" },
          { label: "আওতাধীন এলাকা", value: "সাভার ও আশুলিয়া" },
          { label: "প্রধান লক্ষ্য", value: "স্মার্ট সাভার" },
        ]}
        actions={[
          { 
            label: "সমস্যা জানান", 
            href: "#problem-form", 
            variant: "primary", 
            icon: FiArrowRight 
          },
          { 
            label: "জরুরি হেল্পলাইন", 
            href: "#helpline", 
            variant: "outline", 
            icon: FiPhoneCall 
          },
        ]}
      />

   
       <AreaOverView />
     {/* <UnionList />
      <DevelopmentFocus />
      <EmergencyHelpline />
      <AreaProblemForm /> */}
    </main>
  );
};

export default ConstituencyPage;