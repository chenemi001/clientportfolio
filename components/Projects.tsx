"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  GitBranch,
  Activity,
  ArrowDown,
} from "lucide-react";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    number: "01",
    title: "Internal Developer Platform",
    category: "Developer Experience / IDP",
    description:
      "A Backstage-based Internal Developer Platform designed to give engineering teams a self-service environment for discovering services, provisioning infrastructure and following standardized delivery workflows.",
    technologies: [
      "Backstage",
      "AWS",
      "Azure",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Argo CD",
    ],
    metric: "45%",
    metricLabel: "faster self-service infrastructure provisioning",
    Icon: Boxes,
  },
  {
    number: "02",
    title: "Golden Path Kubernetes Platform",
    category: "Kubernetes / GitOps",
    description:
      "A standardized Kubernetes platform built around reusable infrastructure patterns, deployment templates and GitOps workflows, giving engineering teams predictable paths from application creation to production.",
    technologies: [
      "Kubernetes",
      "EKS",
      "AKS",
      "Helm",
      "Kustomize",
      "Terraform",
      "GitOps",
    ],
    metric: "150+",
    metricLabel: "production services supported across cloud platforms",
    Icon: GitBranch,
  },
  {
    number: "03",
    title: "Reliability & Automated Remediation Platform",
    category: "SRE / Observability",
    description:
      "A reliability platform combining observability, service-level objectives and automated operational workflows to detect production issues earlier, reduce noise and accelerate recovery.",
    technologies: [
      "Prometheus",
      "Grafana",
      "ELK",
      "SLIs / SLOs",
      "Python",
      "Automation",
      "Incident Response",
    ],
    metric: "40%",
    metricLabel: "reduction in non-actionable alert noise",
    Icon: Activity,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#F0F1ED] py-28 text-[#292929] transition-colors duration-700 dark:bg-[#080B09] dark:text-[#F2F4EF] sm:py-36 lg:py-44"
    >
      {/* =========================================================
          BACKGROUND GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(70,70,70,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(70,70,70,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* =========================================================
          TOP GLOW
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#625DE2]/[0.06] blur-[120px] dark:bg-[#B7FF3C]/[0.035]"
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        {/* =======================================================
            SECTION INTRO
        ======================================================== */}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#625DE2] dark:bg-[#B7FF3C]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#666666] dark:text-[#A4ADA4]">
                Selected Work
              </span>
            </div>

            <h2 className="mt-7 font-[var(--font-display)] text-[clamp(54px,8vw,110px)] font-normal leading-[0.82] tracking-[-0.055em]">
              Projects
              <span className="text-[#625DE2] dark:text-[#B7FF3C]">.</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-end lg:pb-2"
          >
            <p className="max-w-[650px] text-[17px] leading-[1.7] text-[#666666] dark:text-[#A4ADA4] sm:text-[19px]">
              I design and operate the systems behind modern engineering
              organizations — from internal developer platforms and Kubernetes
              infrastructure to observability, reliability and automated
              operations.
            </p>

            <div className="mt-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[#777873] dark:text-[#899289]">
              <ArrowDown size={13} strokeWidth={1.5} />
              Scroll to explore
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            DIVIDER
        ======================================================== */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 h-px origin-left bg-[#D5D6D1] dark:bg-[#252A26] sm:mt-28"
        />

        {/* =======================================================
            PROJECTS
        ======================================================== */}

        <div className="mt-12 space-y-6 sm:mt-16 lg:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              {...project}
              featured={index === 0}
            />
          ))}
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 border-t border-[#D5D6D1] pt-10 dark:border-[#252A26] sm:mt-32 sm:pt-14"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-[720px] font-[var(--font-display)] text-[clamp(28px,4vw,52px)] leading-[1.02] tracking-[-0.04em]">
              Building infrastructure that makes engineers{" "}
              <span className="text-[#625DE2] dark:text-[#B7FF3C]">
                faster, safer and more reliable.
              </span>
            </p>

            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#777873] dark:text-[#899289]">
              Platform Engineering
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}