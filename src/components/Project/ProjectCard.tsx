"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

export type ProjectStatus = "ongoing" | "completed" | "proposed";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  location: string;
  date: string;
  progress?: number;
  description: string;
  image: string | StaticImageData;
}

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusMap = {
    ongoing: {
      label: "চলমান উন্নয়ন",
      bg: "bg-amber-500/10 text-amber-600 border-amber-500/30 backdrop-blur-md",
    },
    completed: {
      label: "সম্পন্ন প্রকল্প",
      bg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 backdrop-blur-md",
    },
    proposed: {
      label: "পরিকল্পিত প্রস্তাবনা",
      bg: "bg-blue-500/10 text-blue-600 border-blue-500/30 backdrop-blur-md",
    },
  };

  const statusInfo = statusMap[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="w-full flex flex-col rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300 hover:shadow-xl overflow-hidden group"
    >
      {/* Banner Section - Auto Aspect Ratio so NO Text or Image gets cropped */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] bg-[var(--surface)] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain sm:object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
          sizes="(max-width: 1200px) 100vw, 1200px"
          priority
        />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

        {/* Badges on Top Left */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-2 z-10">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm ${statusInfo.bg}`}
          >
            {statusInfo.label}
          </span>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--surface)]/90 text-[var(--text)] border border-[var(--border)] backdrop-blur-md shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-7 w-full flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[var(--muted)] font-medium">
            <span className="flex items-center gap-1.5 text-[var(--primary)] font-semibold">
              <FiMapPin className="text-base shrink-0" />
              {project.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FiCalendar className="text-base shrink-0" /> {project.date}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed">
            {project.description}
          </p>
        </div>

        {project.status === "ongoing" && project.progress !== undefined && (
          <div className="space-y-2 pt-3 border-t border-[var(--border)]">
            <div className="flex justify-between text-xs sm:text-sm font-bold">
              <span className="text-[var(--text-2)]">উন্নয়ন অগ্রগতি</span>
              <span className="text-[var(--primary)]">{project.progress}%</span>
            </div>
            <div className="w-full h-2.5 bg-[var(--surface)] rounded-full overflow-hidden border border-[var(--border)]/40">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${project.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="h-full bg-[var(--primary)] rounded-full"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;