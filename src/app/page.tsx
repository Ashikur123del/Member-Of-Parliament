import ConstituencyIssuesSection from "@/components/Home-Compo/ConstituencyIssuesSection";
import ConstituencyOverviewSection from "@/components/Home-Compo/ConstituencyOverviewSection";
import HeroSection from "@/components/Home-Compo/HeroSection";
import LeaderMessageSection from "@/components/Home-Compo/LeaderMessageSection";
// import NewsSection from "@/components/Home-Compo/NewsSection";
// import ProjectsSection from "@/components/Home-Compo/ProjectsSection";
import AITechPriorities from "@/components/Home-Compo/QuickServiceDesk";
import TopPriorities from "@/components/Home-Compo/TopPriorities";


export default function Home() {
  return (
      <div className="">
        <HeroSection />
        <LeaderMessageSection />
        <AITechPriorities />
        <TopPriorities />
        <ConstituencyOverviewSection />
         <ConstituencyIssuesSection />
        {/*<ProjectsSection />
        <NewsSection /> */}
      </div>
  );
}
