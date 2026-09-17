"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t"
      style={{
        background: "var(--cta-bg)",
        color: "var(--cta-fg)",
        borderColor: "var(--cta-border)",
      }}
    >
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background: "var(--cta-accent)",
          opacity: 0.08,
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:px-12 lg:py-36">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p
            className="mb-6 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "var(--cta-accent)" }}
          >
            Let&apos;s Work Together
          </p>

          <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[100px]">
            Build better
            <br />
            <span style={{ color: "var(--cta-accent)" }}>
              platforms.
            </span>
          </h2>

          <p
            className="mt-8 max-w-2xl text-base leading-7 sm:text-lg"
            style={{ color: "var(--cta-muted)" }}
          >
            Have a platform engineering challenge, infrastructure problem,
            or developer experience initiative? Let&apos;s build a reliable
            solution together.
          </p>

          <motion.a
            href="mailto:ufedoaudu15@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group mt-10 inline-flex items-center gap-4 border px-7 py-4 text-sm font-medium transition-all duration-300"
            style={{
              borderColor: "var(--cta-accent)",
              background: "var(--cta-accent)",
              color: "#080B09",
            }}
          >
            Start a conversation

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-24 grid border-y sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: "var(--cta-border)" }}
        >
          {/* Email */}
          <a
            href="mailto:ufedoaudu15@gmail.com"
            className="group border-b p-6 transition-colors duration-300 hover:bg-black/[0.03] dark:border-b-0 dark:hover:bg-white/[0.03] sm:border-r"
            style={{ borderColor: "var(--cta-border)" }}
          >
            <Mail
              size={19}
              strokeWidth={1.7}
              style={{ color: "var(--cta-accent)" }}
            />

            <p
              className="mt-5 text-xs uppercase tracking-[0.18em]"
              style={{ color: "var(--cta-muted)" }}
            >
              Email
            </p>

            <p className="mt-2 text-sm font-medium break-all">
              ufedoaudu15@gmail.com
            </p>

            <ArrowUpRight
              size={15}
              className="mt-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: "var(--cta-accent)" }}
            />
          </a>

          {/* Location */}
          <div
            className="border-b p-6 dark:border-b-0 sm:border-r"
            style={{ borderColor: "var(--cta-border)" }}
          >
            <MapPin
              size={19}
              strokeWidth={1.7}
              style={{ color: "var(--cta-accent)" }}
            />

            <p
              className="mt-5 text-xs uppercase tracking-[0.18em]"
              style={{ color: "var(--cta-muted)" }}
            >
              Location
            </p>

            <p className="mt-2 text-sm font-medium">
              London, UK
            </p>
          </div>

          {/* Role */}
          <div
            className="border-b p-6 dark:border-b-0 lg:border-r"
            style={{ borderColor: "var(--cta-border)" }}
          >
            <p
              className="font-mono text-xl"
              style={{ color: "var(--cta-accent)" }}
            >
              01
            </p>

            <p
              className="mt-5 text-xs uppercase tracking-[0.18em]"
              style={{ color: "var(--cta-muted)" }}
            >
              Role
            </p>

            <p className="mt-2 text-sm font-medium">
              Senior Platform Engineer
            </p>
          </div>

          {/* Specialization */}
          <div className="p-6">
            <p
              className="font-mono text-xl"
              style={{ color: "var(--cta-accent)" }}
            >
              02
            </p>

            <p
              className="mt-5 text-xs uppercase tracking-[0.18em]"
              style={{ color: "var(--cta-muted)" }}
            >
              Specialization
            </p>

            <p className="mt-2 text-sm font-medium">
              AI Agent &amp; IDP Specialist
            </p>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--cta-border)" }}
        >
          <p
            className="max-w-2xl text-sm leading-6"
            style={{ color: "var(--cta-muted)" }}
          >
            Building infrastructure that developers can trust,
            understand, and use without unnecessary operational friction.
          </p>

          <div
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]"
            style={{ color: "var(--cta-accent)" }}
          >
            Platform Engineering

            <span
              className="h-px w-10"
              style={{ background: "currentColor" }}
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        section {
          --cta-bg: #f0f1ed;
          --cta-fg: #292929;
          --cta-muted: #666666;
          --cta-accent: #625de2;
          --cta-border: rgba(0, 0, 0, 0.1);
        }

        :global(html.dark) section {
          --cta-bg: #080b09;
          --cta-fg: #f2f4ef;
          --cta-muted: #a4ada4;
          --cta-accent: #b7ff3c;
          --cta-border: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}