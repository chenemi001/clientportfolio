"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  GitBranch,
  Activity,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  metric: string;
  metricLabel: string;
  Icon: LucideIcon;
  featured?: boolean;
};

export default function ProjectCard({
  number,
  title,
  description,
  category,
  technologies,
  metric,
  metricLabel,
  Icon,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden border border-[#DCDDD9] bg-[#F7F7F4] transition-colors duration-500 dark:border-[#252A26] dark:bg-[#0D110F] ${
        featured ? "min-h-[650px]" : "min-h-[570px]"
      }`}
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(80,80,80,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(80,80,80,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Hover glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#625DE2]/10 blur-3xl dark:bg-[#B7FF3C]/10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      <div className="relative z-10 flex h-full min-h-[570px] flex-col p-6 sm:p-8 lg:p-10">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#666666] dark:text-[#A4ADA4]">
            {number}
          </span>

          <motion.div
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4D5D1] bg-white dark:border-[#303630] dark:bg-[#151A17]"
          >
            <Icon
              size={19}
              strokeWidth={1.5}
              className="text-[#625DE2] dark:text-[#B7FF3C]"
            />
          </motion.div>
        </div>

        {/* Category */}
        <div className="mt-14">
          <span className="inline-flex rounded-full border border-[#D7D8D4] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#666666] dark:border-[#303630] dark:text-[#A4ADA4]">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-5 max-w-[700px] font-[var(--font-display)] text-[clamp(38px,5vw,68px)] font-normal leading-[0.92] tracking-[-0.045em] text-[#292929] dark:text-[#F2F4EF]">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-7 max-w-[620px] text-[14px] leading-[1.8] text-[#666666] dark:text-[#A4ADA4] sm:text-[15px]">
          {description}
        </p>

        {/* Technical architecture visual */}
        <div className="relative mt-10 hidden h-28 overflow-hidden border-y border-[#DDDED9] sm:block dark:border-[#252A26]">
          <div className="absolute inset-0 flex items-center">
            <div className="flex w-full items-center">
              <div className="h-px flex-1 bg-[#D3D4D0] dark:bg-[#303630]" />

              <div className="relative mx-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D3D4D0] bg-white dark:border-[#303630] dark:bg-[#151A17]">
                <span className="h-2 w-2 rounded-full bg-[#625DE2] dark:bg-[#B7FF3C]" />

                <motion.span
                  className="absolute inset-[-5px] rounded-full border border-[#625DE2]/20 dark:border-[#B7FF3C]/20"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <div className="h-px flex-1 bg-[#D3D4D0] dark:bg-[#303630]" />
            </div>

            <div className="absolute left-[16%] top-1/2 -translate-y-1/2">
              <div className="h-2 w-2 rounded-full bg-[#625DE2] dark:bg-[#B7FF3C]" />
            </div>

            <div className="absolute right-[16%] top-1/2 -translate-y-1/2">
              <div className="h-2 w-2 rounded-full bg-[#625DE2] dark:bg-[#B7FF3C]" />
            </div>
          </div>

          <div className="absolute left-4 top-3 font-mono text-[8px] uppercase tracking-[0.15em] text-[#999B96]">
            PLATFORM
          </div>

          <div className="absolute bottom-3 right-4 font-mono text-[8px] uppercase tracking-[0.15em] text-[#999B96]">
            SYSTEM
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#D6D7D2] px-3 py-1.5 font-mono text-[9px] text-[#666666] dark:border-[#303630] dark:text-[#A4ADA4]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-auto pt-10">
          <div className="flex items-end justify-between gap-6 border-t border-[#DDDED9] pt-6 dark:border-[#252A26]">
            <div>
              <div className="font-[var(--font-display)] text-[42px] leading-none tracking-[-0.04em] text-[#292929] dark:text-[#F2F4EF]">
                {metric}
              </div>

              <div className="mt-2 max-w-[180px] text-[10px] uppercase tracking-[0.12em] text-[#777873] dark:text-[#899289]">
                {metricLabel}
              </div>
            </div>

            <motion.div
              whileHover={{ x: 4, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4D5D1] bg-white text-[#292929] dark:border-[#303630] dark:bg-[#151A17] dark:text-[#F2F4EF]"
            >
              <ArrowUpRight size={17} strokeWidth={1.5} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}