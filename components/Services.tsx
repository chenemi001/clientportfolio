"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Container,
  Boxes,
  GitBranch,
  Activity,
  ShieldCheck,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    number: "01",
    title: "Cloud & Infrastructure",
    description:
      "Designing scalable cloud infrastructure across AWS, Azure and GCP with reusable Infrastructure as Code, networking, high availability and operational consistency.",
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Terraform",
      "IaC",
    ],
    Icon: Cloud,
  },
  {
    number: "02",
    title: "Kubernetes & Containers",
    description:
      "Building and operating production Kubernetes platforms with standardized workloads, deployment patterns, autoscaling, ingress, RBAC and multi-cluster operations.",
    technologies: [
      "Kubernetes",
      "EKS",
      "AKS",
      "Helm",
      "Kustomize",
    ],
    Icon: Container,
  },
  {
    number: "03",
    title: "Internal Developer Platforms",
    description:
      "Creating self-service developer platforms that provide software catalogs, service templates, golden paths and reusable platform capabilities.",
    technologies: [
      "Backstage",
      "IDP",
      "Golden Paths",
      "Scaffolder",
      "Platform APIs",
    ],
    Icon: Boxes,
  },
  {
    number: "04",
    title: "CI/CD & GitOps",
    description:
      "Engineering reliable delivery pipelines with automated validation, progressive delivery, declarative infrastructure, release governance and rollback controls.",
    technologies: [
      "GitHub Actions",
      "Argo CD",
      "GitOps",
      "Jenkins",
      "CI/CD",
    ],
    Icon: GitBranch,
  },
  {
    number: "05",
    title: "SRE & Observability",
    description:
      "Improving platform reliability through metrics, logging, tracing, alerting and SLI/SLO practices that help teams detect and recover from production issues.",
    technologies: [
      "Prometheus",
      "Grafana",
      "ELK",
      "SLOs",
      "OpenTelemetry",
    ],
    Icon: Activity,
  },
  {
    number: "06",
    title: "Security & DevSecOps",
    description:
      "Embedding security guardrails directly into infrastructure and delivery workflows through least-privilege access, secrets management and policy-driven controls.",
    technologies: [
      "IAM",
      "RBAC",
      "Vault",
      "OPA",
      "Kyverno",
    ],
    Icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FFFFFF] py-28 text-[#292929] transition-colors duration-700 dark:bg-[#080B09] dark:text-[#F2F4EF] sm:py-36 lg:py-44"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(70,70,70,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(70,70,70,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* =========================================================
          INTRO GLOW
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-[#625DE2]/[0.05] blur-[130px] dark:bg-[#B7FF3C]/[0.035]"
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
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
                What I Do
              </span>
            </div>

            <h2 className="mt-7 font-[var(--font-display)] text-[clamp(52px,8vw,105px)] font-normal leading-[0.82] tracking-[-0.055em]">
              Services
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
            className="flex items-end"
          >
            <p className="max-w-[700px] text-[17px] leading-[1.75] text-[#666666] dark:text-[#A4ADA4] sm:text-[19px]">
              I build the platforms, infrastructure and engineering systems
              that allow development teams to ship software with greater
              speed, consistency and reliability.
            </p>
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
            SERVICE GRID
        ======================================================== */}

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-[#DCDDD9] bg-[#DCDDD9] dark:border-[#252A26] dark:bg-[#252A26] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              technologies={service.technologies}
              Icon={service.Icon}
            />
          ))}
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 border-t border-[#D5D6D1] pt-10 dark:border-[#252A26] sm:mt-28 sm:pt-14"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-[800px] font-[var(--font-display)] text-[clamp(28px,4vw,52px)] leading-[1.02] tracking-[-0.04em]">
              From infrastructure to developer experience, I build the systems
              that{" "}
              <span className="text-[#625DE2] dark:text-[#B7FF3C]">
                power engineering teams.
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