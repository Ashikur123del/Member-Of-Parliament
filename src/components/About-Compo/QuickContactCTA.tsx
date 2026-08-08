"use client";

import { useState } from "react";
import { FiSend, FiCheck, FiMessageSquare } from "react-icons/fi";

export default function QuickContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6 md:my-12">
      <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] shadow-sm relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--primary)] uppercase tracking-widest px-4 py-1.5 rounded-full bg-[var(--primary-light)] border border-[var(--primary)]/20 shadow-sm">
            <FiMessageSquare className="text-sm" />
            <span>সরাসরি যোগাযোগ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text)] tracking-tight">
            আপনার কোনো মতামত বা সমস্যা আছে?
          </h2>
          <p className="text-xs sm:text-base text-[var(--text-2)] leading-relaxed max-w-xl mx-auto">
            সাভার ও আশুলিয়া এলাকার যে কোনো জনকল্যাণমূলক পরামর্শ বা সমস্যা সরাসরি আমাদের জানান।
          </p>

          {submitted ? (
            <div className="p-4 rounded-2xl bg-[var(--primary-light)] text-[var(--primary)] border border-[var(--primary)]/30 font-semibold text-sm flex items-center justify-center gap-2 animate-fade-in max-w-lg mx-auto">
              <FiCheck className="text-xl" /> আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। ধন্যবাদ!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="text"
                required
                placeholder="আপনার নাম ও মোবাইল নম্বর/ইমেইল"
                className="flex-1 px-5 py-3.5 rounded-2xl bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--primary)] text-xs sm:text-sm shadow-sm transition-all"
              />
              <button
                type="submit"
                className="btn-primary text-xs sm:text-sm py-3.5 px-6 gap-2 shrink-0 rounded-2xl"
              >
                <span>পাঠান</span>
                <FiSend />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}