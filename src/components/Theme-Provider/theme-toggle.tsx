"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { FiSun, FiMoon, FiMonitor, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return <div className="w-28 h-10" />;
  }

  const getCurrentThemeDetails = () => {
    switch (theme) {
      case "dark":
        return { label: "Dark", icon: <FiMoon className="text-amber-400" /> };
      case "light":
        return { label: "Light", icon: <FiSun className="text-amber-500" /> };
      default:
        return { label: "System", icon: <FiMonitor className="text-blue-400" /> };
    }
  };

  const currentTheme = getCurrentThemeDetails();

  const themes = [
    { id: "light", label: "Light Mode", icon: <FiSun className="text-amber-500" /> },
    { id: "dark", label: "Dark Mode", icon: <FiMoon className="text-amber-400" /> },
    { id: "system", label: "System", icon: <FiMonitor className="text-blue-400" /> },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        aria-label="Select theme"
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] hover:border-[var(--primary)] text-sm font-medium transition-all"
      >
        <span className="text-base">{currentTheme.icon}</span>
        <span>{currentTheme.label}</span>
        <FiChevronDown
          className={`w-4 h-4 text-[var(--muted)] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 rounded-xl bg-[var(--surface)] border border-[var(--border)] shadow-xl z-50 overflow-hidden py-1"
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors text-left font-medium ${
                  theme === t.id
                    ? "bg-[var(--primary-light)] text-[var(--primary)] font-semibold"
                    : "text-[var(--text-2)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
                }`}
              >
                <span className="text-base">{t.icon}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}