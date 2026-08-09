

import HeroBio from "@/components/About-Compo/HeroBio";
import { ProjectStats } from "@/components/Project/ProjectStats";
import ProjectCard, { ProjectItem } from "@/components/Project/ProjectCard";
import ProjectHeroImg from "@/assets/n3.jpg";
import { FiBriefcase, FiArrowRight, FiCheckCircle } from "react-icons/fi";

import P1 from "@/assets/P-1.jpg";
import P2 from "@/assets/p-2.jpg";
import Imagess11 from "@/assets/img-6.jpg";
import SuggestProject from "@/components/Project/SuggestProject";
import ProjectFAQ from "@/components/Project/ProjectFAQ";

export const projectsData: ProjectItem[] = [
  {
    id: "1",
    title: "আশুলিয়া বাইপাইন ফ্লাইওভার ও ড্রেনেজ ব্যবস্থা নির্মাণ",
    category: "অবকাঠামো",
    status: "ongoing",
    location: "আশুলিয়া বাইপাইন, সাভার",
    date: "২০২৫ - ২০২৬",
    progress: 65,
    description:
      "নিয়মিত যানজট নিরসন এবং বর্ষাকালে পানি নিষ্কাশনের পথ সুগম করতে ৪ লেনের ফ্লাইওভার ও আন্ডারগ্রাউন্ড ড্রেনেজ প্রকল্পের কাজ দ্রুতগতিতে চলছে।",
    image: P1,
  },
  {
    id: "2",
    title: "স্মার্ট ইউথ ফ্রিল্যান্সিং ও আইটি ট্রেনিং ইনস্টিটিউট",
    category: "শিক্ষা ও প্রযুক্তি",
    status: "ongoing",
    location: "সাভার পৌরসভা",
    date: "২০২৫ - ২০২৬",
    progress: 80,
    description:
      "স্থানীয় শিক্ষিত বেকার তরুণ-তরুণীদের স্বাবলম্বী করতে বিনামূল্যে ফ্রিল্যান্সিং, প্রোগ্রামিং ও আইটি দক্ষতা উন্নয়নের জন্য আধুনিক কম্পিউটার ল্যাব নির্মাণ।",
    image: P2,
  },
  {
    id: "3",
    title: "পোশাক শ্রমিক ডিজিটাল হেলথ ও ডে-কেয়ার সেন্টার",
    category: "স্বাস্থ্য ও কল্যাণ",
    status: "completed",
    location: "ধামসোনা ইউনিয়ন, আশুলিয়া",
    date: "২০২৪",
    description:
      "গার্মেন্টস কর্মী ও তাদের সন্তানদের নিখরচায় স্বাস্থ্য পরীক্ষা, প্রয়োজনীয় ওষুধ বিতরণ এবং কাজের সময় শিশুদের জন্য ডে-কেয়ার সুবিধা চালু করা হয়েছে।",
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
        title="সাভার ও আশুলিয়ার টেকসই উন্নয়নে আমাদের কর্মপরিকল্পনা"
        description="অবকাঠামো তৈরি, স্বাস্থ্যসেবার মানোন্নয়ন, মানসম্মত শিক্ষা ও শিল্পাঞ্চলের নাগরিকদের জন্য পর্যায়ক্রমে বাস্তবায়িত প্রকল্পসমূহ।"
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

      <section id="projects-grid" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
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