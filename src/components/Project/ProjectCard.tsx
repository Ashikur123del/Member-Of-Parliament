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
      label: "চলমান",
      bg: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    },
    completed: {
      label: "সম্পন্ন",
      bg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    },
    proposed: {
      label: "পরিকল্পিত",
      bg: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
  };

  const statusInfo = statusMap[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="w-full flex flex-col md:flex-row rounded-xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--primary)]/40 transition-all duration-300 hover:shadow-xl overflow-hidden group"
    >
      <div className="relative w-full md:w-1/2 shrink-0 min-h-[280px] sm:min-h-[340px] md:min-h-[380px] bg-[var(--surface)] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-60" />
        <span
          className={`absolute top-4 left-4 text-xs font-bold px-3.5 py-1 rounded-full border shadow-md backdrop-blur-md ${statusInfo.bg}`}
        >
          {statusInfo.label}
        </span>
      </div>

      <div className="p-6 sm:p-8 md:p-10 w-full md:w-1/2 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[var(--muted)] font-medium">
            <span className="flex items-center gap-1.5">
              <FiMapPin className="text-[var(--primary)] text-sm sm:text-base" />{" "}
              {project.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FiCalendar className="text-sm sm:text-base" /> {project.date}
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
          <div className="space-y-2 pt-4 border-t border-[var(--border)]">
            <div className="flex justify-between text-xs sm:text-sm font-bold">
              <span className="text-[var(--text-2)]">অগ্রগতি</span>
              <span className="text-[var(--primary)]">{project.progress}%</span>
            </div>
            <div className="w-full h-2.5 bg-[var(--surface)] rounded-full overflow-hidden">
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
