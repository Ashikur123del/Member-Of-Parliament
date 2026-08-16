"use client";

import { motion, Variants } from "framer-motion";

interface UnionItem {
  name: string;
  area: string;
  code: string;
}

export function UnionList(): React.ReactElement {
  const unions: UnionItem[] = [
    { name: "ধামসোনা ইউনিয়ন", area: "আশুলিয়া", code: "ওয়ার্ড ১-৯" },
    { name: "ইয়ারপুর ইউনিয়ন", area: "আশুলিয়া", code: "ওয়ার্ড ১-৯" },
    { name: "আশুলিয়া ইউনিয়ন", area: "আশুলিয়া", code: "ওয়ার্ড ১-৯" },
    { name: "শিমুলিয়া ইউনিয়ন", area: "আশুলিয়া", code: "ওয়ার্ড ১-৯" },
    { name: "পাথালিয়া ইউনিয়ন", area: "সাভার", code: "ওয়ার্ড ১-৯" },
    { name: "বিরুলিয়া ইউনিয়ন", area: "সাভার", code: "ওয়ার্ড ১-৯" },
    { name: "তেঁতুলঝোড়া ইউনিয়ন", area: "সাভার", code: "ওয়ার্ড ১-৯" },
    { name: "ভাকুর্তা ইউনিয়ন", area: "সাভার", code: "ওয়ার্ড ১-৯" },
    { name: "কাউন্দিয়া ইউনিয়ন", area: "সাভার", code: "ওয়ার্ড ১-৯" },
    { name: "আমিনবাজার ইউনিয়ন", area: "সাভার", code: "ওয়ার্ড ১-৯" },
    { name: "বনগাঁও ইউনিয়ন", area: "সাভার", code: "ওয়ার্ড ১-৯" },
    { name: "সাভার পৌরসভা", area: "সাভার", code: "৯টি ওয়ার্ড" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 sm:py-16 bg-[var(--surface-2)] border-b border-[var(--border)] my-10 md:my-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text)] tracking-tight">
            আওতাধীন ইউনিয়ন ও পৌরসভা
          </h2>

          <p className="text-sm font-bold sm:text-base text-[var(--muted)]">
            সাভার উপজেলা পরিষদের সাবেক ভাইস চেয়ারম্যানের প্রিয় কর্মক্ষেত্র—সাভার ও আশুলিয়ার প্রশাসনিক অঞ্চলসমূহ
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {unions.map((item: UnionItem, idx: number) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.04,
                y: -4,
                borderColor: "var(--primary)",
              }}
              whileTap={{ scale: 0.98 }}
              className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center transition-shadow hover:shadow-lg hover:shadow-[var(--primary)]/5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[var(--text)] truncate">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[var(--primary)] mt-1">
                  {item.area}
                </p>
              </div>
              <span className="inline-block text-[13px] font-semibold text-[var(--muted)] mt-2 pt-2 border-t border-[var(--border)]/50">
                {item.code}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}