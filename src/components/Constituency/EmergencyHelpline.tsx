"use client";

import {
  FiPhoneCall,
  FiShield,
  FiPlusCircle,
  FiAlertCircle,
} from "react-icons/fi";

export function EmergencyHelpline() {
  const contacts = [
    { title: "সাভার মডেল থানা", number: "01320-000000", icon: FiShield },
    { title: "আশুলিয়া থানা", number: "01320-111111", icon: FiShield },
    {
      title: "সাভার ফায়ার সার্ভিস",
      number: "01711-222222",
      icon: FiAlertCircle,
    },
    {
      title: "উপজেলা স্বাস্থ্য কমপ্লেক্স",
      number: "01811-333333",
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
            সাভার ও আশুলিয়া অঞ্চলের গুরুত্বপূর্ণ জরুরি যোগাযোগ নম্বর
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-xl shrink-0">
                  <Icon />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-base font-semibold text-[var(--muted)] truncate">
                    {contact.title}
                  </h3>
                  <a
                    href={`tel:${contact.number}`}
                    className="text-sm font-bold text-[var(--text)] hover:text-[var(--primary)] transition-colors flex items-center gap-1.5 mt-0.5"
                  >
                    <FiPhoneCall className="text-xs text-[var(--primary)]" />
                    <span>{contact.number}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
