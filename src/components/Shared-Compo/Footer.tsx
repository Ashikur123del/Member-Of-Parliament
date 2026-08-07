"use client";

import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiSend,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
  FiHeart,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface-2)] text-[var(--text)] border-t border-[var(--border)] pt-12 sm:pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[var(--border)]"> 
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-bold text-xl shadow-md">
                এম
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-tight">
                  এমপি পোর্টফোলিও
                </span>
                <span className="text-[11px] text-[var(--text-2)] font-medium">
                  সাভার ও আশুলিয়া (ঢাকা-১৯)
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
              সাভার ও আশুলিয়া এলাকার সার্বিক উন্নয়ন, নাগরিক সেবা ডিজিটালাইজেশন এবং সরাসরি জনগণের মতামত ও সমস্যা সমাধানের একটি ডিজিটাল প্ল্যাটফর্ম।
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all"
              >
                <FiFacebook className="text-base" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all"
              >
                <FiTwitter className="text-base" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-rose-500 hover:border-rose-500 transition-all"
              >
                <FiYoutube className="text-base" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all"
              >
                <FiLinkedin className="text-base" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text)]">
              দ্রুত নেভিগেশন
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-[var(--text-2)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
                >
                  জীবনবৃত্তান্ত
                </Link>
              </li>
              <li>
                <Link
                  href="/constituency/overview"
                  className="text-[var(--text-2)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
                >
                  সাভার ও আশুলিয়া
                </Link>
              </li>
              <li>
                <Link
                  href="/constituency/issues"
                  className="text-[var(--text-2)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
                >
                  নাগরিক সমস্যা
                </Link>
              </li>
              <li>
                <Link
                  href="/work/projects"
                  className="text-[var(--text-2)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
                >
                  উন্নয়ন প্রকল্পসমূহ
                </Link>
              </li>
              <li>
                <Link
                  href="/media/news"
                  className="text-[var(--text-2)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
                >
                  প্রেস ও মিডিয়া
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text)]">
              নাগরিক সেবা ও সহায়তা
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/help/request"
                  className="text-[var(--text-2)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
                >
                  সরাসরি অভিযোগ ও আবেদন
                </Link>
              </li>
              <li>
                <Link
                  href="/help/appointment"
                  className="text-[var(--text-2)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
                >
                  সাক্ষাতের জন্য অ্যাপয়েন্টমেন্ট
                </Link>
              </li>
              <li>
                <Link
                  href="/help/emergency"
                  className="text-[var(--text-2)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
                >
                  জরুরি হটলাইন সেবা
                </Link>
              </li>
              <li>
                <Link
                  href="/manifesto"
                  className="text-[var(--text-2)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
                >
                  নির্বাচনী ইশতেহার
                </Link>
              </li>
            </ul>
          </div>

      
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text)]">
              অফিস তথ্য
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[var(--text-2)]">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="text-[var(--primary)] shrink-0 mt-1" />
                <span>সাভার কার্যালয়: সিটি সেন্টার, সাভার বাসস্ট্যান্ড, সাভার, ঢাকা।</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="text-[var(--primary)] shrink-0" />
                <a href="tel:+8801700000000" className="hover:text-[var(--primary)]">
                  +৮৮০ ১৭০০-০০০০০০
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="text-[var(--primary)] shrink-0" />
                <a href="mailto:info@mpportal.gov.bd" className="hover:text-[var(--primary)]">
                  contact@mp-savarasulia.gov.bd
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-2)] text-center sm:text-left">
          <p>
            © {currentYear} এমপি অফিশিয়াল পোর্টাল। সর্বস্বত্ব সংরক্ষিত।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy" className="hover:text-[var(--primary)] transition-colors">
              গোপনীয়তা নীতি
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[var(--primary)] transition-colors">
              ব্যবহারের শর্তাবলী
            </Link>
            <span>•</span>
            <Link href="/sitemap" className="hover:text-[var(--primary)] transition-colors">
              সাইটম্যাপ
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}