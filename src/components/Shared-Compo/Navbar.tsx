import Link from "next/link";
import Image from "next/image";
import NavbarClient from "./navbar-client";
import Image5 from "@/assets/img-1.jpg";

const NAV_LINKS = [
  { label: "হোম", href: "/" },
  { label: "পরিচিতি", href: "/about" },
  { label: "নির্বাচনী এলাকা", href: "/constituency" },
  { label: "প্রকল্পসমূহ", href: "/projects" },
  { label: "সংবাদ/আপডেট", href: "/newsupdates" },
  { label: "গ্যালারি", href: "/gallery" },
  { label: "সেবা ডেস্ক", href: "/servicedesk" },
  { label: "ইভেন্ট/সূচি", href: "/eventsschedule" },
  { label: "যোগাযোগ", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--surface)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Logo & Info */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0"
          >
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[var(--primary)] shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Image 
                src={Image5} 
                alt="দেওয়ান মঈনুদ্দিন বিপ্লব"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 40px, 56px"
                priority
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-extrabold text-xs sm:text-base md:text-lg leading-tight tracking-tight text-[var(--text)] group-hover:text-[var(--primary)] transition-colors whitespace-nowrap">
                দেওয়ান মঈনুদ্দিন বিপ্লব
              </span>
              <span className="text-[9px] sm:text-xs font-medium text-[var(--text-2)] leading-tight whitespace-nowrap">
                সংসদীয় আসন ১৯২ (ঢাকা-১৯)
              </span>
            </div>
          </Link>

          {/* Client Navigation */}
          <NavbarClient navLinks={NAV_LINKS} />
        </div>
      </div>
    </header>
  ); 
}