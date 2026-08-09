"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";

export function AreaProblemForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "সাভার পৌরসভা",
    problemType: "সড়ক ও যোগাযোগ",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("আপনার মতামত/অভিযোগ জমা নেওয়া হয়েছে। ধন্যবাদ!");
    setFormData({ name: "", phone: "", area: "সাভার পৌরসভা", problemType: "সড়ক ও যোগাযোগ", description: "" });
  };

  return (
    <section className="py-12 sm:py-16 bg-[var(--surface)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 space-y-2">
          <span className="inline-block text-xs font-bold text-[var(--primary)] uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--primary-light)]">
            নাগরিক প্রতিক্রিয়া
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-[var(--text)]">
            আপনার এলাকার সমস্যা সরাসরি জানান
          </h2>
          <p className="text-xs font-semibold sm:text-sm text-[var(--text-2)]">
            রাস্তাঘাট, ড্রেনেজ বা এলাকার নিরাপত্তা সংক্রান্ত তথ্য আমাদের টিমকে জানান
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] space-y-4 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[var(--text)] mb-1">আপনার নাম</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="আপনার নাম লিখুন"
                className="w-full px-4 py-2.5 text-sm rounded-xl bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--primary)] outline-none text-[var(--text)]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[var(--text)] mb-1">মোবাইল নম্বর</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="017XXXXXXXX"
                className="w-full px-4 py-2.5 text-sm rounded-xl bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--primary)] outline-none text-[var(--text)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[var(--text)] mb-1">এলাকা/ইউনিয়ন</label>
              <select
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                className="w-full px-4 py-2.5 text-sm rounded-xl bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--primary)] outline-none text-[var(--text)]"
              >
                <option value="সাভার পৌরসভা">সাভার পৌরসভা</option>
                <option value="ধামসোনা">ধামসোনা ইউনিয়ন</option>
                <option value="ইয়ারপুর">ইয়ারপুর ইউনিয়ন</option>
                <option value="আশুলিয়া">আশুলিয়া ইউনিয়ন</option>
                <option value="অন্যান্য">অন্যান্য</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[var(--text)] mb-1">সমস্যার ধরণ</label>
              <select
                value={formData.problemType}
                onChange={(e) => setFormData({ ...formData, problemType: e.target.value })}
                className="w-full px-4 py-2.5 text-sm rounded-xl bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--primary)] outline-none text-[var(--text)]"
              >
                <option value="সড়ক ও যোগাযোগ">সড়ক ও যোগাযোগ</option>
                <option value="ড্রেনেজ ও জলাবদ্ধতা">ড্রেনেজ ও জলাবদ্ধতা</option>
                <option value="নিরাপত্তা ও আইনশৃঙ্খলা">নিরাপত্তা ও আইনশৃঙ্খলা</option>
                <option value="অন্যান্য">অন্যান্য</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[var(--text)] mb-1">সমস্যার বিবরণ</label>
            <textarea
              rows={4}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="সমস্যার সংক্ষিপ্ত বিবরণ লিখুন..."
              className="w-full px-4 py-2.5 text-sm rounded-xl bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--primary)] outline-none text-[var(--text)] resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-[var(--primary)] text-white font-bold text-sm sm:text-base hover:bg-[var(--primary)]/90 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <FiSend />
            <span>অভিযোগ / মতামত পাঠান</span>
          </button>
        </form>
      </div>
    </section>
  );
}