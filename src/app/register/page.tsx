"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiUser,
  FiMail,
  FiLock,
  FiPhone,
  FiCheckCircle,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (
        formData.name &&
        formData.phone &&
        formData.email &&
        formData.password
      ) {
        toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!", { theme: "colored" });
        console.log("Register Data:", formData);
      } else {
        toast.error("অনুগ্রহ করে সব তথ্য সঠিক উপায়ে পূরণ করুন", {
          theme: "colored",
        });
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
            নতুন অ্যাকাউন্ট
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)]">
            অ্যাকাউন্ট তৈরি করুন
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-2)]">
            পোর্টালে যুক্ত হয়ে আপনার মতামত ও প্রস্তাবনা জানান
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="space-y-1">
            <label className="text-xs sm:text-sm font-semibold text-[var(--text)]">
              আপনার পুরো নাম
            </label>
            <div className="relative flex items-center">
              <FiUser className="absolute left-3.5 text-[var(--muted)] text-base" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="আপনার নাম লিখুন"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] focus:border-[var(--primary)] text-sm outline-none text-[var(--text)] transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs sm:text-sm font-semibold text-[var(--text)]">
              মোবাইল নম্বর
            </label>
            <div className="relative flex items-center">
              <FiPhone className="absolute left-3.5 text-[var(--muted)] text-base" />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="১১ ডিজিটের মোবাইল নম্বর"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] focus:border-[var(--primary)] text-sm outline-none text-[var(--text)] transition-all"
              />
            </div>
          </div>

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
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="আপনার ইমেইল লিখুন"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] focus:border-[var(--primary)] text-sm outline-none text-[var(--text)] transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs sm:text-sm font-semibold text-[var(--text)]">
              পাসওয়ার্ড
            </label>
            <div className="relative flex items-center">
              <FiLock className="absolute left-3.5 text-[var(--muted)] text-base" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="নতুন পাসওয়ার্ড দিন"
                className="w-full pl-10 pr-12 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] focus:border-[var(--primary)] text-sm outline-none text-[var(--text)] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-[var(--muted)] hover:text-[var(--primary)] text-base transition-colors focus:outline-none"
                aria-label={
                  showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"
                }
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group mt-2 disabled:opacity-50"
          >
            <FiCheckCircle />
            <span>{loading ? "অপেক্ষা করুন..." : "অ্যাকাউন্ট তৈরি করুন"}</span>
          </button>
        </form>

        <div className="text-center pt-4 border-t border-[var(--border)]">
          <p className="text-xs sm:text-sm text-[var(--text-2)]">
            আগে থেকেই অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/login"
              className="text-[var(--primary)] font-bold hover:underline"
            >
              লগইন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;