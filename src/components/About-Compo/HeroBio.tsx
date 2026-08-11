import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

export interface StatItem {
  label: string;
  value: string;
}

export interface ActionButton {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  icon?: IconType;
}

export interface HeroBioProps {
  badgeText?: string;
  badgeIcon?: IconType;
  name: string;
  title: string;
  description: string;
  image?: string | StaticImageData;
  imageAlt?: string;
  stats?: StatItem[];
  actions?: ActionButton[];
}

export default function HeroBio({
  badgeText,
  badgeIcon: BadgeIcon,
  name,
  title,
  description,
  image,
  imageAlt,
  stats = [],
  actions = [],
}: HeroBioProps) {
  return (
    <div className="w-full bg-[var(--surface-2)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden p-5 sm:p-8 md:p-10 lg:py-14 transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-between">
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px]">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[var(--primary)] to-emerald-400 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[var(--border)] bg-[var(--surface)] p-2 shadow-xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[var(--surface-2)]">
                  {image ? (
                    <Image
                      src={image}
                      alt={imageAlt || name}
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                      priority
                      sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 500px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--muted)] text-xs sm:text-sm">
                      ছবি পাওয়া যায়নি
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            {badgeText && (
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs sm:text-sm font-bold border border-[var(--primary)]/25 shadow-sm">
                {BadgeIcon && <BadgeIcon className="text-sm sm:text-base" />}
                <span>{badgeText}</span>
              </div>
            )}

            <div className="space-y-1 sm:space-y-1.5">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text)] leading-tight">
                {name}
              </h1>
              <p className="text-base sm:text-xl md:text-2xl font-extrabold text-[var(--primary)]">
                {title}
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[var(--text-2)] leading-relaxed max-w-2xl font-normal mx-auto lg:mx-0">
              {description}
            </p>

            {stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 pt-2 text-center md:text-left">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-4 bg-[var(--surface)] rounded-2xl border border-[var(--border)] shadow-sm hover:border-[var(--primary)]/40 transition-colors"
                  >
                    <span className="block text-[11px] sm:text-xs font-medium text-[var(--muted)] mb-0.5 sm:mb-1 truncate">
                      {stat.label}
                    </span>
                    <span className="text-[13px] sm:text-lg md:text-xl font-black text-[var(--text)] block truncate">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {actions.length > 0 && (
              <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start items-center">
                {actions.map((btn, idx) => {
                  const BtnIcon = btn.icon;
                  const isPrimary = btn.variant === "primary" || !btn.variant;
                  return (
                    <Link
                      key={idx}
                      href={btn.href}
                      className={`w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 gap-2.5 ${
                        isPrimary
                          ? "bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90"
                          : "border-2 border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                      }`}
                    >
                      <span className={isPrimary ? "text-white" : ""}>
                        {btn.label}
                      </span>
                      {BtnIcon && (
                        <BtnIcon
                          className={`text-base sm:text-lg shrink-0 ${
                            isPrimary ? "text-white" : ""
                          }`}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
