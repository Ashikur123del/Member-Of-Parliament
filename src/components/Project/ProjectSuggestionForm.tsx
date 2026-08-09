"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";

export function ProjectSuggestionForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", area: "", idea: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("আপনার নতুন প্রকল্পের প্রস্তাবনা সফলভাবে জমা নেওয়া হয়েছে!");
    setFormData({ name: "", phone: "", area: "", idea: "" });
  };

  return (
    <section id="suggest-project" className="py-12 sm:py-20 bg-[var(--surface-2)] border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Top Header */}
        <div className="text-center mb-8 sm:mb-10 space-y-3">
          <span className="inline-block text-xs sm:text-sm font-bold text-[var(--primary)] uppercase tracking-widest px-4 py-1.5 rounded-full bg-[var(--primary-light)]">
            নাগরিক অংশীদারিত্ব
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text)] leading-tight">
            নতুন কোনো প্রকল্পের প্রস্তাবনা আছে?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-2)] max-w-2xl mx-auto">
            আপনার এলাকায় প্রয়োজনীয় কোনো উন্নয়নমূলক উদ্যোগের আইডিয়া আমাদের টিমের কাছে জমা দিন।
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--border)] space-y-5 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm sm:text-base font-bold text-[var(--text)] mb-2">
                আপনার নাম
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="নাম লিখুন"
                className="w-full px-4 py-3 sm:py-3.5 text-base sm:text-lg rounded-xl bg-[var(--surface-2)] border border-[var(--border)] focus:border-[var(--primary)] outline-none text-[var(--text)] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-bold text-[var(--text)] mb-2">
                মোবাইল নম্বর
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="017XXXXXXXX"
                className="w-full px-4 py-3 sm:py-3.5 text-base sm:text-lg rounded-xl bg-[var(--surface-2)] border border-[var(--border)] focus:border-[var(--primary)] outline-none text-[var(--text)] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-bold text-[var(--text)] mb-2">
              এলাকা/ইউনিয়ন
            </label>
            <input
              type="text"
              required
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              placeholder="যেমন: ইয়ারপুর ইউনিয়ন, আশুলিয়া"
              className="w-full px-4 py-3 sm:py-3.5 text-base sm:text-lg rounded-xl bg-[var(--surface-2)] border border-[var(--border)] focus:border-[var(--primary)] outline-none text-[var(--text)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm sm:text-base font-bold text-[var(--text)] mb-2">
              প্রকল্প প্রস্তাবনার বিবরণ
            </label>
            <textarea
              rows={4}
              required
              value={formData.idea}
              onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
              placeholder="আপনার প্রস্তাবিত প্রকল্পের বিষয়বস্তু সংক্ষেপে ব্যাখ্যা করুন..."
              className="w-full px-4 py-3 sm:py-3.5 text-base sm:text-lg rounded-xl bg-[var(--surface-2)] border border-[var(--border)] focus:border-[var(--primary)] outline-none text-[var(--text)] resize-none transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-[var(--primary)] text-white font-bold text-base sm:text-lg hover:bg-[var(--primary)]/90 transition-all flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.99]"
          >
            <FiSend className="text-xl sm:text-2xl" />
            <span>প্রস্তাবনা জমা দিন</span>
          </button>
        </form>
      </div>
    </section>
  );
}