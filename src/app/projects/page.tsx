import HeroBio from "@/components/About-Compo/HeroBio";
import { ProjectStats } from "@/components/Project/ProjectStats";
import ProjectCard, { ProjectItem } from "@/components/Project/ProjectCard";
import ProjectHeroImg from "@/assets/n3.jpg";
import { FiBriefcase, FiArrowRight, FiCheckCircle } from "react-icons/fi";

import P1 from "@/assets/wbsite-cover-2.jpg.jpeg";
import P2 from "@/assets/wbsite-cover-3.jpg.jpeg";
import Imagess11 from "@/assets/wbsite-cover-1.jpg.jpeg";
import SuggestProject from "@/components/Project/SuggestProject";
import ProjectFAQ from "@/components/Project/ProjectFAQ";

export const projectsData: ProjectItem[] = [
  {
    id: "1",
    title: "আশুলিয়া বাইপাইল সড়ক ড্রেনেজ ও ফুটপাত নির্মাণ",
    category: "অবকাঠামো",
    status: "ongoing",
    location: "আশুলিয়া বাইপাইল, সাভার",
    date: "২০২৫ - ২০২৬",
    progress: 65,
    description:
      "বাইপাইল ও আশেপাশের অঞ্চলের দীর্ঘদিনের জলাবদ্ধতা নিরসন এবং পথচারীদের নিরাপদ চলাচলের জন্য ড্রেনেজ ব্যবস্থা ও সংযোগ ফুটপাত নির্মাণের উদ্যোগ বাস্তবায়ন করা হচ্ছে।",
    image: P1,
  },
  {
    id: "2",
    title: "স্মার্ট ইউথ ফ্রিল্যান্সিং ও আইটি ট্রেনিং সেন্টার",
    category: "শিক্ষা ও প্রযুক্তি",
    status: "ongoing",
    location: "সাভার পৌরসভা",
    date: "২০২৫ - ২০২৬",
    progress: 80,
    description:
      "স্থানীয় শিক্ষিত বেকার তরুণ-তরুণীদের স্বাবলম্বী করতে বিনামূল্যে ফ্রিল্যান্সিং, প্রোগ্রামিং ও আইটি দক্ষতা উন্নয়নের জন্য বিশেষ আইটি ল্যাব স্থাপন।",
    image: P2,
  },
  {
    id: "3",
    title: "পোশাক শ্রমিক ও সাধারণ ফ্রি হেলথ ক্যাম্পাইন",
    category: "স্বাস্থ্য ও কল্যাণ",
    status: "completed",
    location: "ধামসোনা ইউনিয়ন, আশুলিয়া",
    date: "২০২৪",
    description:
      "গার্মেন্টস কর্মী ও স্থানীয় কম আয়ের মানুষের বিনামূল্যে চিকিৎসা সেবা, ফ্রি ওষুধ বিতরণ ও সচেতনতামূলক স্বাস্থ্য পরীক্ষা সেবা প্রদান।",
    image: Imagess11,
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6 pb-12">
      <HeroBio
        badgeText="উন্নয়ন ও অগ্রগতি"
        badgeIcon={FiBriefcase}
        image={ProjectHeroImg}
        name="আমাদের প্রকল্পসমূহ"
        title="সাভার ও আশুলিয়ার টেকসই উন্নয়নে সাবেক ভাইস চেয়ারম্যানের কর্মপরিকল্পনা"
        description="সাভার উপজেলা পরিষদের সাবেক ভাইস চেয়ারম্যান দেওয়ান মঈনুদ্দিন বিপ্লব-এর উদ্যোগে অবকাঠামো নির্মাণ, স্বাস্থ্যসেবা, শিক্ষার প্রসার ও সাধারণ নাগরিকদের জীবনমান উন্নয়নে বাস্তবায়িত ও প্রস্তাবিত প্রকল্পসমূহ।"
        actions={[
          {
            label: "প্রকল্প তালিকা দেখুন",
            href: "#projects-grid",
            variant: "primary",
            icon: FiCheckCircle,
          },
          {
            label: "নতুন প্রস্তাবনা দিন",
            href: "#suggest-project",
            variant: "outline",
            icon: FiArrowRight,
          },
        ]}
      />
      <ProjectStats />

      <section
        id="projects-grid"
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-6"
      >
        <div className="flex flex-col gap-8 w-full">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <SuggestProject />
      <ProjectFAQ />
    </div>
  );
}