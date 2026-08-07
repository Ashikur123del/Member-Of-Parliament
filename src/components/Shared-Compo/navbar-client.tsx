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
  if (!isOpen) return;
  const id = setTimeout(() => setIsOpen(false), 0);
  return () => clearTimeout(id);
}, [pathname, isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
  
      <nav className="hidden xl:flex items-center gap-1">
        {navLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm xl:text-base font-medium transition-all relative whitespace-nowrap ${
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
      <div className="hidden xl:flex items-center gap-2.5 shrink-0">
        <ThemeToggle />

        <Link
          href="/help/request"
          className={`btn-outline text-sm xl:text-base font-medium px-3.5 py-2 flex items-center gap-2 transition-all whitespace-nowrap ${
            isActive("/help/request")
              ? "bg-[var(--surface-2)] border-[var(--primary)] text-[var(--primary)]"
              : ""
          }`}
        >
          <FiMessageSquare className="text-base xl:text-lg" />
          <span>অভিযোগ জানান</span>
        </Link>

        <Link
          href="/help"
          className="btn-primary text-sm xl:text-base font-semibold shadow-sm hover:shadow transition-all flex items-center gap-2 px-4 py-2 whitespace-nowrap"
        >
          <FiHelpCircle className="text-base xl:text-lg" />
          <span>সাহায্য নিন</span>
        </Link>
      </div>

      <div className="flex xl:hidden items-center gap-1.5 sm:gap-2 shrink-0">
        <ThemeToggle />

        <button
          onClick={toggleMenu}
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="p-2 rounded-lg text-[var(--text)] bg-[var(--surface-2)] hover:bg-[var(--border)] focus:outline-none transition-colors"
        >
          {isOpen ? <FiX className="w-5 h-5 sm:w-6 sm:h-6" /> : <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="xl:hidden absolute top-full left-0 right-0 w-full bg-[var(--surface)] border-b border-[var(--border)] shadow-2xl z-50 backdrop-blur-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      active
                        ? "bg-[var(--primary-light)] text-[var(--primary)] border-l-4 border-[var(--primary)]"
                        : "text-[var(--text)] hover:bg-[var(--surface-2)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-3 border-t border-[var(--border)] flex flex-col gap-2.5">
                <Link
                  href="/help/request"
                  onClick={() => setIsOpen(false)}
                  className="btn-outline text-center text-base w-full py-2.5 flex items-center justify-center gap-2 font-medium"
                >
                  <FiMessageSquare className="text-lg" />
                  <span>অভিযোগ জানান</span>
                </Link>
                <Link
                  href="/help"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center text-base w-full py-2.5 flex items-center justify-center gap-2 font-semibold shadow-md"
                >
                  <FiHelpCircle className="text-lg" />
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