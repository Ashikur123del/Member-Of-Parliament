"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (formData.email && formData.password) {
        toast.success("সফলভাবে লগইন হয়েছে!", { theme: "colored" });
        console.log("Login Data:", formData);
      } else {
        toast.error("সবগুলো তথ্য সঠিক উপায়ে প্রদান করুন!", { theme: "colored" });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[var(--surface-2)]">
      {/* Toast Alert Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-md w-full space-y-8 bg-[var(--surface)] p-8 sm:p-10 rounded-2xl border border-[var(--border)] shadow-xl">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--primary-light)]">
            অ্যাকাউন্ট অ্যাক্সেস
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)]">
            আপনার অ্যাকাউন্টে লগইন করুন
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-2)]">
            সাভার উপজেলা পরিষদের সেবাসমূহ পেতে লগইন করুন
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="space-y-1">
            <label className="text-xs sm:text-sm font-semibold text-[var(--text)]">
              ইমেইল অ্যাড্রেস
            </label>
            <div className="relative flex items-center">
              <FiMail className="absolute left-3.5 text-[var(--muted)] text-base" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="আপনার ইমেইল লিখুন"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] focus:border-[var(--primary)] text-sm outline-none text-[var(--text)] transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-xs sm:text-sm font-semibold text-[var(--text)]">
                পাসওয়ার্ড
              </label>
              <Link
                href="/forgot-password"
                className="text-xs text-[var(--primary)] hover:underline font-medium"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>
            <div className="relative flex items-center">
              <FiLock className="absolute left-3.5 text-[var(--muted)] text-base" />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] focus:border-[var(--primary)] text-sm outline-none text-[var(--text)] transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            <span>{loading ? "প্রসেসিং..." : "লগইন করুন"}</span>
            {!loading && <FiArrowRight className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>

        <div className="text-center pt-4 border-t border-[var(--border)]">
          <p className="text-xs sm:text-sm text-[var(--text-2)]">
            নতুন অ্যাকাউন্ট তৈরি করতে চান?{" "}
            <Link
              href="/register"
              className="text-[var(--primary)] font-bold hover:underline"
            >
              রেজিস্ট্রেশন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;