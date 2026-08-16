"use client";

import Link from "next/link";
import {
  FiPhoneCall,
  FiShield,
  FiPlusCircle,
  FiAlertCircle,
  FiRadio,
} from "react-icons/fi";

export function EmergencyHelpline(): React.ReactElement {
  const contacts = [
    {
      title: "জাতীয় জরুরি সেবা",
      number: "999",
      icon: FiRadio,
      tag: "২৪/৭ টোল ফ্রি",
    },
    {
      title: "সাভার মডেল থানা",
      number: "01320-026852",
      icon: FiShield,
    },
    {
      title: "আশুলিয়া থানা",
      number: "01320-026880",
      icon: FiShield,
    },
    {
      title: "সাভার ফায়ার সার্ভিস",
      number: "01730-002241",
      icon: FiAlertCircle,
    },
    {
      title: "উপজেলা স্বাস্থ্য কমপ্লেক্স",
      number: "01711-200788",
      icon: FiPlusCircle,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[var(--surface-2)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)]">
            জরুরি সেবা ও হেল্পলাইন
          </h2>
          <p className="text-xs font-semibold sm:text-sm text-[var(--text-2)]">
            সাভার ও আশুলিয়া এলাকার নাগরিকদের জন্য জরুরি যোগাযোগ নম্বরসমূহ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center gap-4 hover:border-[var(--primary)]/40 transition-all duration-300 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-xl shrink-0">
                  <Icon />
                </div>
                <div className="overflow-hidden flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-sm sm:text-base font-bold text-[var(--text)] truncate">
                      {contact.title}
                    </h3>
                    {contact.tag && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[var(--primary)] text-white">
                        {contact.tag}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`tel:${contact.number.replace(/-/g, "")}`}
                    className="text-sm font-black text-[var(--primary)] hover:underline flex items-center gap-1.5 mt-1"
                  >
                    <FiPhoneCall className="text-xs shrink-0" />
                    <span>{contact.number}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}