"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiMenu, FiX, FiHelpCircle } from "react-icons/fi";
import ThemeToggle from "../Theme-Provider/theme-toggle";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarClientProps {
  navLinks: NavLink[];
}

export default function NavbarClient({ navLinks }: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="hidden 2xl:flex items-center gap-0.5 xl:gap-1">
        {navLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2.5 py-1.5 xl:px-3 xl:py-2 font-semibold rounded-lg text-xs xl:text-sm font-medium transition-all relative whitespace-nowrap ${
                active
                  ? "text-[var(--primary)] font-bold bg-[var(--primary-light)]"
                  : "text-[var(--text-2)] hover:text-[var(--primary)] hover:bg-[var(--surface-2)]"
              }`}
            >
              {link.label}
              {active && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[var(--primary)] rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="hidden 2xl:flex items-center gap-2 shrink-0">
        <ThemeToggle />

        <Link
          href="/complain"
          className={`btn-outline text-xs xl:text-sm font-medium px-3 py-2 flex items-center gap-1.5 transition-all whitespace-nowrap rounded-lg border border-[var(--border)] hover:border-[var(--primary)] ${
            isActive("/help/request")
              ? "bg-[var(--surface-2)] border-[var(--primary)] text-[var(--primary)] font-bold"
              : ""
          }`}
        >
          <FiMessageSquare className="text-sm xl:text-base" />
          <span>অভিযোগ জানান</span>
        </Link>

        <Link
          href="/help"
          className="btn-primary text-xs xl:text-sm font-semibold shadow-sm hover:shadow transition-all flex items-center gap-1.5 px-3.5 py-2 whitespace-nowrap rounded-lg bg-[var(--primary)] text-white hover:opacity-90"
        >
          <FiHelpCircle className="text-sm xl:text-base" />
          <span>সাহায্য নিন</span>
        </Link>
      </div>

      <div className="flex 2xl:hidden items-center gap-1.5 sm:gap-2 shrink-0">
        <ThemeToggle />

        <button
          onClick={toggleMenu}
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="p-2 sm:p-2.5 rounded-xl text-[var(--text)] bg-[var(--surface-2)] hover:bg-[var(--border)] focus:outline-none transition-colors border border-[var(--border)]"
        >
          {isOpen ? <FiX className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)]" /> : <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="2xl:hidden absolute top-full left-0 right-0 w-full bg-[var(--surface)] border-b border-[var(--border)] shadow-2xl z-50 backdrop-blur-xl"
          >
            <div className="px-4 py-5 space-y-1.5 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-semibold text-sm sm:text-base font-semibold transition-all ${
                      active
                        ? "bg-[var(--primary-light)] text-[var(--primary)] border-l-4 border-[var(--primary)]"
                        : "text-[var(--text)] hover:bg-[var(--surface-2)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-4 border-t border-[var(--border)] flex flex-col gap-2.5">
                <Link
                  href="/complain"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 px-4 rounded-xl border border-[var(--border)] text-center text-sm font-semibold flex items-center justify-center gap-2 text-[var(--text)] hover:border-[var(--primary)] bg-[var(--surface-2)]"
                >
                  <FiMessageSquare className="text-base text-[var(--primary)]" />
                  <span>অভিযোগ জানান</span>
                </Link>
                <Link
                  href="/help"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 px-4 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 bg-[var(--primary)] text-white shadow-md hover:opacity-90"
                >
                  <FiHelpCircle className="text-base" />
                  <span>সাহায্য নিন</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}