"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  Icon: LucideIcon;
};

export default function ServiceCard({
  number,
  title,
  description,
  technologies,
  Icon,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative min-h-[420px] overflow-hidden border border-[#DCDDD9] bg-white p-7 transition-colors duration-500 hover:bg-[#F7F7F4] dark:border-[#252A26] dark:bg-[#0D110F] dark:hover:bg-[#111612] sm:p-9"
    >
      {/* Number */}
      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#777873] dark:text-[#899289]">
          {number}
        </span>

        <motion.div
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.25 }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6D7D2] transition-colors duration-300 group-hover:border-[#625DE2] dark:border-[#303630] dark:group-hover:border-[#B7FF3C]"
        >
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="text-[#666666] transition-colors duration-300 group-hover:text-[#625DE2] dark:text-[#A4ADA4] dark:group-hover:text-[#B7FF3C]"
          />
        </motion.div>
      </div>

      {/* Icon */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-14 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D6D7D2] bg-[#F5F5F1] dark:border-[#303630] dark:bg-[#151A17]"
      >
        <Icon
          size={24}
          strokeWidth={1.4}
          className="text-[#625DE2] dark:text-[#B7FF3C]"
        />
      </motion.div>

      {/* Title */}
      <h3 className="mt-7 max-w-[360px] font-[var(--font-display)] text-[clamp(30px,3vw,44px)] leading-[0.95] tracking-[-0.04em] text-[#292929] dark:text-[#F2F4EF]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-5 max-w-[440px] text-[13px] leading-[1.75] text-[#666666] dark:text-[#A4ADA4]">
        {description}
      </p>

      {/* Technologies */}
      <div className="absolute bottom-7 left-7 right-7 flex flex-wrap gap-2 sm:bottom-9 sm:left-9 sm:right-9">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-[#D7D8D4] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-[#777873] dark:border-[#303630] dark:text-[#899289]"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Hover line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#625DE2] dark:bg-[#B7FF3C]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.article>
  );
}